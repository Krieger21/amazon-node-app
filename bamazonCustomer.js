var inquire = require("inquirer")
var mysql = require("mysql")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "bamazon"
})

connection.connect(function (err) {
    if (err) throw err

    asker()
})

function asker() {
    inquire.prompt([
        {
            name: "prompt",
            message: "Welcome to my marketplace! (Press Enter)"
        },
    ]).then(function (answers) {
        readItems()

        inquire.prompt([
            {
                name: "items",
                message: "What is the id of the product you would like to purchase?"
            },

            {
                name: "quantity",
                message: "How much of this product would you like to purchase?"
            },
        ]).then(function (answers) {

            var quantity = Math.abs(answers.quantity);

            updateQuantity(answers.items, quantity)
        })
    })
}


function updateQuantity(y, x) {

    if (y === 0 || y > 10) {
        console.log("That is not a valid id number!")
        asker()
    } else {
        var queryStr = 'SELECT * FROM products WHERE item_id';

        connection.query(queryStr, { y }, function (err, data) {
            if (err) throw err;

            var y2 = y - 1
            var productData = data[y2]

            if (x <= data[y2].product_quantity) {

                var updateQuantity = 'UPDATE products SET product_quantity = ' + (productData.product_quantity - x) + ' WHERE item_id = ' + y;

                connection.query(updateQuantity, function (err, res) {
                    if (err) throw err

                    console.log("Purchase has been placed!")
                    console.log("Total Cost: $" + x * data[y2].price)
                    asker()
                })
            } else {
                console.log("We do not have that much product in stock; please modify your order dumbass.")
                asker()
            }
        }
        )
    }

}

function readItems() {
    console.log("Selecting all products...\n")
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err

        console.log("--------------------")
        res.forEach(displayItem)
        console.log("--------------------")

    })
}

function displayItem({ item_id, product_name, department_name, price, product_quantity }) {
    console.log(` ITEM ID ${item_id} | ${product_name} | ${department_name} | Price ${price} | Quantity ${product_quantity}`)
}