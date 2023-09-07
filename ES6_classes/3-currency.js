export default class Currency {
  constructor(code, name) {
    this._name = name;
    this._code = code;
  }
  
	displayFullCurrency() {
    return '${this._name} (${this._code})';
  }

	get code () {
		return this._code
	}	

	set code (mycode) {
		if (typeof mycode !== 'string') {
			throw new TypeError ('Code must be a string.')
	}
else {
	this._code = mycode;
	}

	get name() {
		return this._name
	}

	set name(myName) {
		if (typeof myName !== 'string') {
			throw new TypeError('Name must be a string.'); 
	} else {
		this._name = myName;
	}
	}
	}