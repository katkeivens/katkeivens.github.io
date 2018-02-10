This node app is an Amazon-like storefront that utilizes MySQL.  This app takes orders from customers and depletes stock from the store's inventory.  If there is not enough inventory to fulfill the customer's request, it will return with an insufficient quantity.

At the beginning of the app, a full list of items will display
<img width="1431" alt="screen shot 2018-02-09 at 10 44 56 pm" src="https://user-images.githubusercontent.com/31232038/36059413-a0bc2fca-0ded-11e8-9e50-a23fad58d602.png">

Then the app will ask which item id you'd like to purchase.  If the user puts in an invalid id, the app will notify the user that the id is invalid and prompt again asking which item id they'd like to purchase.
<img width="1430" alt="screen shot 2018-02-09 at 10 45 26 pm" src="https://user-images.githubusercontent.com/31232038/36059417-a1152e7c-0ded-11e8-9254-e6cbd5dc8b58.png">

Once the user has entered a valid id, the app will ask how many they would like to purchase.  
<img width="1432" alt="screen shot 2018-02-09 at 10 45 41 pm" src="https://user-images.githubusercontent.com/31232038/36059416-a1018070-0ded-11e8-827e-96de8f6d82ca.png">

If there is enough inventory to fulfill the request, the app will notify the user that the purchase was successful and show the total cost of the item(s) they purchased.
<img width="1427" alt="screen shot 2018-02-09 at 10 45 54 pm" src="https://user-images.githubusercontent.com/31232038/36059415-a0e42bec-0ded-11e8-8937-99f78a3d622e.png">

SQL will update the inventory as items are purhased.
<img width="966" alt="screen shot 2018-02-09 at 10 46 49 pm" src="https://user-images.githubusercontent.com/31232038/36059414-a0d05004-0ded-11e8-827b-4973e06573af.png">
