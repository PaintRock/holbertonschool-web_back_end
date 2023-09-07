// Import the Currency class from 3-currency.js
import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getter and setter for amount
  get amount() {
    return this._amount;
  }

  set amount(amount) {
    this._amount = amount;
  }

  // Getter and setter for currency
  get currency() {
    return this._currency;
  }

  set currency(currency) {
    this._currency = currency;
  }

  // Method to display the full price format
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert a price
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new Error('Both amount and conversionRate must be numbers');
    }

    return amount * conversionRate;
  }
}

export default Pricing;

// Example usage:
const dollar = new Currency('$', 'Dollars');
const price = new Pricing(50, dollar);

console.log(price.displayFullPrice()); // Output: 50 Dollars ($)

const convertedAmount = Pricing.convertPrice(50, 0.85); // Convert 50 Dollars to another currency at a conversion rate of 0.85
console.log(`Converted Amount: ${convertedAmount}`); // Output: Converted Amount: 42.5
