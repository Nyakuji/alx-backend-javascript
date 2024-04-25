export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // getter
  get Code() {
    return this._code;
  }

  // setter
  set Code(value) {
    this._code = value;
  }

  // getter of name
  get Name() {
    return this._name;
  }

  // setter of name
  set Name(value) {
    this._name = value;
  }

  // method
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
