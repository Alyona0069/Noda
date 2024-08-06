
// ES Module Export
export default class MyArray {
    constructor(arr = []) {
      this._arr = arr;
    }
  
    get array() {
      return this._arr;
    }
  
    set array(newArr) {
      this._arr = newArr;
    }
  
    print() {
      console.log(this._arr);
    }
  
    findMin() {
      return Math.min(...this._arr);
    }
  
    findMax() {
      return Math.max(...this._arr);
    }
  
    findSum() {
      return this._arr.reduce((acc, val) => acc + val, 0);
    }
  
    bubbleSort() {
      let arr = [...this._arr];
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          }
        }
      }
      this._arr = arr;
    }
}
  

  
