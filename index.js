class Numbers {
  constructor(data) {
    // Data can either be a string or an array of numbers
    if (typeof data === "string") {
      this.data = data.split(",").map(number => parseInt(number));
    } else {
      this.data = data;
    }
  }

  count() {
    // Return the count of numbers in data
    return this.data.length;
  }

  printNumbers() {
    // Print the numbers in data
    this.data.forEach((number, index) => console.log(`Index ${index}: ${number}`));
  }

  odds() {
    // Return the odd numbers in data
    return this.data.filter(number => number % 2 !== 0);
  }

  evens() {
    // Return the even numbers in data
    return this.data.filter(number => number % 2 === 0);
  }

  sum() {
    // Return the sum of the numbers
    return this.data.reduce((total, number) => total + number, 0);
  }

  product() {
    // Return the product of the numbers
    return this.data.reduce((product, number) => product * number, 1);
  }

  greaterThan(target) {
    // Return the numbers greater than the target
    return this.data.filter(number => number > target);
  }

  howMany(target) {
    // Return the count of a given number
    return this.data.filter(number => number === target).length;
  }
}

// Prompt the user for a list of integers separated by commas
const str = prompt("enter some numbers, like this", "1,2,3,3,5,9");

// Create an instance of numbers
const n1 = new Numbers(str);
console.log(n1.count()); // Returns count of numbers
n1.printNumbers(); // Prints the number along with their indexes
console.log(n1.odds()); // Returns odd numbers
console.log(n1.evens()); // Returns even numbers
console.log(n1.sum()); // Returns sum of numbers
console.log(n1.product()); // Returns product of numbers
console.log(n1.greaterThan(3)); // Returns numbers greater than another number
console.log(n1.howMany(3)); // Return the count of a specific number
