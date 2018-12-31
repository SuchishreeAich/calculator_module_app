const assert = require('chai').assert;
const calculator = require('../calculator/index');

// Expecting the signature of the calculator to be like below
/* function calculate(operation, {lhs, rhs}) */

describe('calculator testing', function() {
	describe('Addition functionality testing', function() {
		let operation = 'A';
		it('Add two positive numbers, returning get positive sum', function() {
			let result = calculator.calculate(operation,{lhs:3 , rhs:5 });
			assert.equal(result,8);
		});

		it('Add two negative numbers, returning get negative sum', function() {
			let result = calculator.calculate(operation,{lhs:-3 , rhs:-6 });
			assert.equal(result,-9);
		});

		it('Add two number, with either of them is negative, producing subtracted output', function() {
			let result = calculator.calculate(operation,{lhs:-5 , rhs:7 });
			assert.equal(result,2);
		});

		it('Add zeros, produces zero', function() {
			let result = calculator.calculate(operation,{lhs:0 , rhs:0 });
			assert.equal(result,0);
		});
	});

	describe('Subtraction functionality testing', function() {
		let operation = 'S';
		it('Subtract two positive numbers, returning get positive subtraction', function() {
			let result = calculator.calculate(operation,{lhs:5 , rhs:2 });
			assert.equal(result,3);
		});

		it('Subtract two negative numbers, returning get negative subtraction', function() {
			let result = calculator.calculate(operation,{lhs:-5 , rhs:-2 });
			assert.equal(result,-3);
		});

		it('Subtract two number, with either of them is negative, producing sum output', function() {
			let result = calculator.calculate(operation,{lhs:3 , rhs:-2 });
			assert.equal(result,5);
		});

		it('Subtract zeros, produces zero', function() {
			let result = calculator.calculate(operation,{lhs:0 , rhs:0 });
			assert.equal(result,0);
		});
	});
	describe('Multiplication functionality testing', function() {
		let operation = 'M';
		it('Multiply two positive numbers, returning get positive Multiplication', function() {
			let result = calculator.calculate(operation,{lhs:3 , rhs:5 });
			assert.equal(result,15);
		});

		it('Multiply two negative numbers, returning get positive Multiplication', function() {
			let result = calculator.calculate(operation,{lhs:-4 , rhs:-3 });
			assert.equal(result,12);
		});

		it('Multiply two number, with either of them is negative, producing negative multiplication output', function() {
			let result = calculator.calculate(operation,{lhs:3 , rhs:-5 });
			assert.equal(result,-15);
		});

		it('Multiply zeros, produces zero', function() {
			let result = calculator.calculate(operation,{lhs:0 , rhs:5 });
			assert.equal(result,0);
		});
	});

	describe('Division functionality testing', function() {
		let operation = 'D';
		it('Divide two positive numbers, returning get positive Multiplication', function() {
			let result = calculator.calculate(operation,{lhs:15 , rhs:3 });
			assert.equal(result,5);
		});

		it('Divide two negative numbers, returning get positive Multiplication', function() {
			let result = calculator.calculate(operation,{lhs:-6 , rhs:-3 });
			assert.equal(result,2);
		});

		it('Divide two number, with either of them is negative, producing negative Division output', function() {		
			let result = calculator.calculate(operation,{lhs:-6 , rhs:3 });
			assert.equal(result,-2);});

		it(`Should not divide by 0, producing 'Can't divide by zero' message`, function() {
			let result = calculator.calculate(operation,{lhs:5 , rhs:0 });
			assert.equal(result,`Can not divide by zero`);
		});
	});
});

