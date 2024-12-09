class StringBuilder {
  #value;
  
  constructor(initialValue = '') {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#value = this.#value.padEnd(this.#value.length + str.length, str);
  }

  padStart(str) {
    this.#value = this.#value.padStart(this.#value.length + str.length, str);
  }

  padBoth(str) {
    const totalPadding = str.length * 2;
    const padLeft = Math.floor(totalPadding / 2);
    const padRight = totalPadding - padLeft;

   this.#value = str.repeat(padLeft) + this.#value + str.repeat(padRight);
}
   
    
  
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="