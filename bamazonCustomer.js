var mysql = require("mysql");
var AsciiTable = require("asciitable");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "bamazonDB"
});

startApp();


function startApp() {


	connection.query('SELECT * FROM products', (err,res) => {
		console.log(`Items available for purchase:`);
		var table = AsciiTable(res);

		console.log(table);

		setTimeout(pickItem, 700);	
	});
}

function pickItem() {
	inquirer.prompt([
	{
		name: `id`,
		message: `Type in the ID number of the item you'd like to buy:`,
		validate: (value) => !isNaN(value)
	},
	{
		name: `qty`,
		message: `How many units would you like to buy?`,
		validate: (value) => !isNaN(value)
	}
	]).then((ans) => {
		itemPicked(ans.id, ans.qty);
	})
}


function itemPicked(id, qty) {
	connection.query(`SELECT * FROM products WHERE id=${id}`, (err,res) => {
		if (err) {
			console.log(`You've encountered an error.`);
			restart();
		}

		if (qty > res[0].quantity) {
			console.log(`Insufficient Quantity, try again...`);
			setTimeout(pickItem, 500);	
		} else {
			if (qty == 1) {
				console.log(`You have selected ${qty} ${res[0].description} for $${res[0].price}.`);
				let total = qty*res[0].price;
				console.log(`Your total amount due is: $${total}.`);
				buyItem(id, res[0].quantity, qty, total);
			} else if (qty > 1) {
				console.log(`You have selected ${qty} ${res[0].description} for $${res[0].price} each.`);
				let total = qty*res[0].price;
				console.log(`Your total amount due is: $${total}.`);
				buyItem(id, res[0].quantity, qty, total);
			}
		}
	});
}


function buyItem(id, itemQty, customerQty, total) {
	let newQty = itemQty - customerQty;
	inquirer.prompt([
	{
		name: `payment`,
		message: `Please Enter your Credit Card #`,
		validate: (value) => !isNaN(value)
	},
	{
		name: `confirm`,
		message: `Are you sure you want to make this purchase?`,
		type: 'confirm'
	}
	]).then((ans) => {
		if (ans.confirm) {
			console.log(`Congratulations on your new item.`);
			updateDataQTY(id, newQty, total);
			setTimeout(restart, 1000);
		} else {
			console.log(`Oooops.`);
			restart();
		}
	})
}


function restart() {
	inquirer.prompt([
	{
		name: 'confirm',
		message: 'End program?',
		type: 'confirm'
	}
	]).then((ans) => {
		if(ans.confirm) {
			console.log('Goodbye!');
			connection.end();
		} else {
			startApp();
		}
	})
}


function updateDataQTY(id, qty, total) {
	connection.query(`UPDATE products SET quantity=${qty}, product_sales=product_sales+${total} WHERE id=${id}`, (err, res) => {
		if (err) throw err;
	})
}
