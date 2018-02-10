var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "*******",
  database: "bamazon"
});

connection.connect( err => {
	if (err) throw err;
	console.log('Connected as id: ' + connection.threadId + '\n');
	listItems();
	getItems();
});

function listItems () {
	connection.query('SELECT * FROM products', (err,res) => {
		res.forEach( item => {
			console.log('Product Id: ' + item.item_id +
			'\n\tProduct Name: ' + item.product_name + 
			'\n\tDepartment: ' + item.department_name +
			'\n\tPrice: ' + item.price +
			'\n\tQuantity: ' + item.stock_quantity + '\n')
		})
	});
}

function getItems() {
	connection.query('SELECT * FROM products', (err, res) => {
		if (err) throw err;	

		inquirer.prompt([
				{
					message: 'What is the ID of the product you would like to buy?',
					name: 'productId',
				}

		]).then( answer => {
			let items = [];
		
			res.forEach( item => {
				items.push(item);

			})
		
			let itemId = items.map( item => {
				return item.item_id;
			})

			for (var i = 0; i < itemId.length; i++) {
				if (answer.productId == itemId[i]) {
					getQuantity(items, answer.productId);
					return true;
				}
			}
			console.log('Please enter a valid id.')
			getItems();
		})
	});
}

function getQuantity (items, productId) {

		productId--;
		let item = items[productId];

		inquirer.prompt([
			{
				message: `How many ${item.product_name} would you like to buy?`,
				name: 'quantity',
			}

		]).then (answer =>{
			if (answer.quantity > items[productId].stock_quantity) {
				console.log('Insufficient quantity!');
				return;
			} else {
				updateQuantity(item, answer.quantity);
			}
			
		})
}

function updateQuantity (item, quantity) {
	const updatedQuantity = item.stock_quantity - quantity;
	connection.query(`UPDATE products SET stock_quantity = ${updatedQuantity} WHERE item_id = ${item.item_id}`, 
		[
			{
				stock_quantity: updatedQuantity
			},
			{
				item_id: item.item_id
			}
		],
		(err, res) => {
			if (err)throw err;

			const cost = item.price * quantity;
			console.log ('\nOrder fullfilled!  Your cost is $' + cost.toFixed(2) + '\n');
		}
	);

	connection.end();
}