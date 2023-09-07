import Currency from './3-currency';

export default class Pricing {
    constructor(amount, Currency) {
        this._amount = amount;
        this._currency = currency;
    }
 //ge(tters and setters
 get amount() {
    return this._amount;
 }

 set amount(amount) {
    this._amount = amount;
 }

 get currency() {
    return this._currency;
 }

 set currency(currency) {
    this._currency = currency;
 }
 //Construct method to display the full price format
 displayFullPrice() {
    return '${this._amount} ${this._currency.name} (${this._currency.code})';
 }

 //Methode to convert a price 
 static convertPrice(amount, conversionRate) {
  if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new Error('Both amount and conversionRate must be numbers');
  }
    return amount * conversionRate;
 }