class CreateBitGetter {
  array: Uint8Array

  constructor(array: Uint8Array) {
    this.array = array
  }

  getArray() {
    return this.array[0]
  }
}

const bitGetter = new CreateBitGetter(new Uint8Array([0b1110, 0b1101]))
console.log(bitGetter.getArray())