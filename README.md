# amazon-node-app
This is a node application that runs in terminal. It is built as an Amazon like storefront where people can select items from a databse and decide the quantity they would like to buy. All user inputs update the Sequel Pro Database that I have created beforehand.

This is how the user runs the program.

<img width="548" alt="screen shot 2018-05-13 at 8 38 31 pm" src="https://user-images.githubusercontent.com/33705748/39977290-d16affea-56ed-11e8-99cd-e7e10d155679.png">

Once the user presses enter the item list prints to the node console and the user gets to choose which item they would like to purchase based on the item_id number. Then they are asked in what quantity they would like to buy the product.

<img width="613" alt="screen shot 2018-05-13 at 8 39 12 pm" src="https://user-images.githubusercontent.com/33705748/39977400-99a5fdfc-56ee-11e8-8448-9fd987ccd4f0.png">

<img width="498" alt="screen shot 2018-05-13 at 8 39 39 pm" src="https://user-images.githubusercontent.com/33705748/39977406-a1928cc4-56ee-11e8-8fe6-2c302282113d.png">

After selecting the product and quantity the databse is updated and the total cost of their purchase is displayed. The program then returns to the storefront prompt.

<img width="582" alt="screen shot 2018-05-13 at 8 50 19 pm" src="https://user-images.githubusercontent.com/33705748/39977515-51910858-56ef-11e8-9d9f-7f1cf848070c.png">

As you can see, the product stock that the user selected with the item_id of 1 has been reduced by the quantity that they requested.

If the user tries to select a product that has no id number the program will inform them of the error and return to the opening storefront. Also, if the user tries to purchase an item in a higher quntity than is in stock the program will inform then and return to the opening storefront. (No database information will be affected).

