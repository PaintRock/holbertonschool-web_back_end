export default class Currency {
  constructor(code, name) {
    this._name = name;
    this._code = code;
    }
  displayFullCurrency() {
		return '${this._name} (${this._code})';
	}
}
