var fs = require("fs");

var action = process.argv[2];
var amount = parseInt(process.argv[3]);
var transactions;
// console.log('$'+total);

if (action) {
	if (action === 'deposit') {
		deposit(amount);
		var balance = balance();
	}
	if (action === 'withdraw') {
		withdraw(amount);
		var balance = balance();
	}
	if (action === 'lotto') {
		lotto();
		var balance = balance();
	}
}

function lotto () {
	random = Math.random();
	if (random < 0.1) {
		console.log('Congrats!');
		deposit('1000');
	} else {
		console.log('OMG you lost bro.');
		withdraw('200');
	}
}

function balance () {
	// balance = Number(fs.readFileSync('BankStatement.txt'))
	fs.readFile("BankStatement.txt", "utf8", function(error, data) {
		if (error) {
			return console.log(error);
		}
		// console.log(data);
		var transactions = data.split(', ');
		// console.log(transactions);
		balance = 0;
		for (i in transactions) {
			if (parseFloat(transactions[i])) {
				balance += parseFloat(transactions[i]);
			};
		}
		console.log('Your new balance is $' + balance + '.');
	});
}

function deposit (value) {
	fs.appendFile("BankStatement.txt", value + ', ', function(error) {
		if (error) {
			return console.log(error);
		}
		console.log('Thanks for depositing $' + value +'!');
	});
}

function withdraw (value) {
	fs.appendFile("BankStatement.txt", '-' + value + ', ', function(error) {
		if (error) {
			return console.log(error);
		}
		console.log('You withdrew $' + value + '.');
	});
}