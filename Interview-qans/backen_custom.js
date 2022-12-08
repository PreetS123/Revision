//! map

MyArray.prototype.map = function (callback) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
      newArray.push(callback(this[i]));
    }
    return newArray;
  };
  
  /*
  1. We create a new array to store the new values.
  2. We loop through the array and call the callback function on each element.
  3. We push the result of the callback function to the new array.
  4. We return the new array.
  */
  
  //! filter
  
  MyArray.prototype.filter = function (callback) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i])) {
        newArray.push(this[i]);
      }
    }
    return newArray;
  };
  
  /*
  1. We create a new variable called newArray and set it to an empty array.
  2. We create a for loop that runs through the length of the array.
  3. We create a variable called i and set it to 0.
  4. We create a variable called callback and set it to the callback function.
  5. We create a variable called currentElement and set it to the current element in the array.
  6. We create a if statement that checks if the callback function returns true for the current element.
  7. If the callback function returns true, we push the current element to the newArray.
  8. We return the newArray
  */
  
  //! Reduce
  
  MyArray.prototype.reduce = function (callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
      accumulator = callback(accumulator, this[i]);
    }
    return accumulator;
  };
  
  /*
  1. We create a variable called accumulator and set it to the initialValue.
  2. We create a for loop that runs through the length of the array.
  3. Inside the loop, we set accumulator to the callback function with the accumulator and the current value of the array.
  4. We return the accumulator.
  */
  
  //! forEach
  
  MyArray.prototype.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i]);
    }
  };
  
  /*
  1. We create a for loop that runs through the length of the array.
  2. Inside the loop, we call the callback function with the current value of the array.
  3. We return undefined.
  */
  
  //! find
  
  MyArray.prototype.find = function (callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i])) {
        return this[i];
      }
    }
  };
  
  /*
  1. We create a for loop that runs through the length of the array.
  2. Inside the loop, we create a variable called currentElement and set it to the current value of the array.
  3. We create a if statement that checks if the callback function returns true for the current element.
  4. If the callback function returns true, we return the current element.
  5. If the callback function returns false, we return undefined.
  */
  
  //! every
  
  MyArray.prototype.every = function (callback) {
    for (let i = 0; i < this.length; i++) {
      if (!callback(this[i])) {
        return false;
      }
    }
    return true;
  };
  
  /*
  1. We create a for loop that runs through the length of the array.
  2. Inside the loop, we create a variable called currentElement and set it to the current value of the array.
  3. We create a if statement that checks if the callback function returns false for the current element.
  4. If the callback function returns false, we return false.
  5. If the callback function returns true, we return true.
  */
  
  //! some
  
  MyArray.prototype.some = function (callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i])) {
        return true;
      }
    }
    return false;
  };
  
  /*
  1. We create a for loop that runs through the length of the array.
  2. Inside the loop, we create a variable called currentElement and set it to the current value of the array.
  3. We create a if statement that checks if the callback function returns true for the current element.
  5. If the callback function returns true, we return true.
  6. If the callback function returns false, we return false.
  */
  
  //! includes
  
  MyArray.prototype.includes = function (value) {
    for (let i = 0; i < this.length; i++) {
      if (this[i] === value) {
        return true;
      }
    }
    return false;
  };
  
  /*
  1. We create a for loop that runs through the length of the array.
  2. Inside the loop, we create a variable called currentElement and set it to the current value of the array.
  3. We create a if statement that checks if the current element is equal to the value.
  4. If the current element is equal to the value, we return true.
  5. If the current element is not equal to the value, we return false.
  */
  
  //! push
  
  MyArray.prototype.push = function (value) {
    this[this.length] = value;
    return this.length;
  };
  
  /*
  1. We set the value of the array at the index of the length of the array to the value.
  2. We return the length of the array.
  */
  
  //! pop
  
  MyArray.prototype.pop = function () {
    let value = this[this.length - 1];
    delete this[this.length - 1];
    return value;
  };
  
  /*
  1. We create a variable called value and set it to the value of the array at the index of the length of the array minus 1.
  2. We delete the value of the array at the index of the length of the array minus 1.
  3. We return the value.
  */
  
  //! unshift
  
  MyArray.prototype.unshift = function (value) {
    for (let i = this.length; i > 0; i--) {
      this[i] = this[i - 1];
    }
    this[0] = value;
    return this.length;
  };
  
  /*
  1. We create a for loop that runs through the length of the array.
  2. Inside the loop, we set the value of the array at the index of i to the value of the array at the index of i minus 1.
  3. We set the value of the array at the index of 0 to the value.
  4. We return the length of the array.
  */
  
  //! shift
  
  MyArray.prototype.shift = function () {
    let value = this[0];
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }
    delete this[this.length - 1];
    return value;
  };
  
  /*
  1. We create a variable called value and set it to the value of the array at the index of 0.
  2. We create a for loop that runs through the length of the array.
  3. Inside the loop, we set the value of the array at the index of i to the value of the array at the index of i plus 1.
  4. We delete the value of the array at the index of the length of the array minus 1.
  5. We return the value.
  */
  
  //! slice
  
  MyArray.prototype.slice = function (start, end) {
    let newArray = new MyArray();
    for (let i = start; i < end; i++) {
      newArray.push(this[i]);
    }
    return newArray;
  };
  
  /*
  1. We create a variable called newArray and set it to a new instance of MyArray.
  2. We create a for loop that runs through the length of the array.
  3. Inside the loop, we call the push method on the newArray and pass in the value of the array at the index of i.
  4. We return the newArray.
  */
  
  //! splice
  
  MyArray.prototype.splice = function (start, deleteCount, ...items) {
    let newArray = new MyArray();
    for (let i = 0; i < start; i++) {
      newArray.push(this[i]);
    }
    for (let i = 0; i < items.length; i++) {
      newArray.push(items[i]);
    }
    for (let i = start + deleteCount; i < this.length; i++) {
      newArray.push(this[i]);
    }
    for (let i = 0; i < newArray.length; i++) {
      this[i] = newArray[i];
    }
    this.length = newArray.length;
    return newArray;
  };
  
  /*
  1. We create a variable called newArray and set it to a new instance of MyArray.
  2. We create a for loop that runs through the start.
  3. Inside the loop, we call the push method on the newArray and pass in the value of the array at the index of i.
  4. We create a for loop that runs through the length of the items array.
  5. Inside the loop, we call the push method on the newArray and pass in the value of the items array at the index of i.
  6. We create a for loop that runs through the length of the array.
  7. Inside the loop, we call the push method on the newArray and pass in the value of the array at the index of i.
  8. We create a for loop that runs through the length of the newArray.
  9. Inside the loop, we set the value of the array at the index of i to the value of the newArray at the index of i.
  10. We set the length of the array to the length of the newArray.
  11. We return the newArray.
  */
  
  //! reverse
  
  MyArray.prototype.reverse = function () {
    let newArray = new MyArray();
    for (let i = this.length - 1; i >= 0; i--) {
      newArray.push(this[i]);
    }
    for (let i = 0; i < newArray.length; i++) {
      this[i] = newArray[i];
    }
    this.length = newArray.length;
    return this;
  };
  
  /*
  1. We create a variable called newArray and set it to a new instance of MyArray.
  2. We create a for loop that runs through the length of the array.
  3. Inside the loop, we call the push method on the newArray and pass in the value of the array at the index of i.
  4. We create a for loop that runs through the length of the newArray.
  5. Inside the loop, we set the value of the array at the index of i to the value of the newArray at the index of i.
  6. We set the length of the array to the length of the newArray.
  7. We return the array.
  */
  
  //! join
  
  MyArray.prototype.join = function (separator) {
    let string = "";
    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        string += this[i];
      } else {
        string += this[i] + separator;
      }
    }
    return string;
  };
  
  /*
  1. We create a variable called string and set it to an empty string.
  2. We create a for loop that runs through the length of the array.
  3. Inside the loop, we create an if statement that checks if i is equal to the length of the array minus 1.
  4. Inside the if statement, we add the value of the array at the index of i to the string.
  5. Inside the if statement, we add the separator to the string.
  6. We return the string.
  */
  
  //! toString
  
  MyArray.prototype.toString = function () {
    let string = "";
    for (let i = 0; i < this.length; i++) {
      string += this[i];
    }
    return string;
  };
  
  /*
  1. We create a variable called string and set it to an empty string.
  2. We create a for loop that runs through the length of the array.
  3. Inside the loop, we add the value of the array at the index of i to the string.
  4. We return the string.
  */
  
  //! indexOf
  
  MyArray.prototype.indexOf = function (value) {
    for (let i = 0; i < this.length; i++) {
      if (this[i] === value) {
        return i;
      }
    }
    return -1;
  };
  
  /*
  1. We create a for loop that runs through the length of the array.
  2. Inside the loop, we create an if statement that checks if the value of the array at the index of i is equal to the value.
  3. Inside the if statement, we return i.
  4. We return -1.
  */
  
  //! lastIndexOf
  
  MyArray.prototype.lastIndexOf = function (value) {
    for (let i = this.length - 1; i >= 0; i--) {
      if (this[i] === value) {
        return i;
      }
    }
    return -1;
  };
  
  /*
  1. We create a for loop that runs through the length of the array.
  2. Inside the loop, we create an if statement that checks if the value of the array at the index of i is equal to the value.
  3. Inside the if statement, we return i.
  4. We return -1.
  */
  
  //! concat
  
  MyArray.prototype.concat = function (...arrays) {
    let newArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      newArray.push(this[i]);
    }
    for (let i = 0; i < arrays.length; i++) {
      for (let j = 0; j < arrays[i].length; j++) {
        newArray.push(arrays[i][j]);
      }
    }
    return newArray;
  };
  
  /*
  1. We create a variable called newArray and set it to a new instance of MyArray.
  2. We create a for loop that runs through the length of the array.
  3. Inside the loop, we call the push method on the newArray and pass in the value of the array at the index of i.
  4. We create a for loop that runs through the length of the arrays array.
  5. Inside the loop, we create a for loop that runs through the length of the arrays array at the index of i.
  6. Inside the nested loop, we call the push method on the newArray and pass in the value of the arrays array at the index of i at the index of j.
  7. We return the newArray.
  */
  
  //! call
  
  MyArray.prototype.call = function (context, ...args) {
    context = context || window;
    context.fn = this;
    let result = context.fn(...args);
    delete context.fn;
    return result;
  };
  
  /*
  1. We set the value of context to context or window.
  2. We set the value of context.fn to the value of this.
  3. We create a variable called result and set it to the value of context.fn called with the spread operator and the value of args.
  4. We delete the value of context.fn.
  5. We return the value of result.
  */
  
  //! apply
  
  MyArray.prototype.apply = function (context, args) {
    context = context || window;
    context.fn = this;
    let result = context.fn(...args);
    delete context.fn;
    return result;
  };
  
  /*
  1. We set the value of context to context or window.
  2. We set the value of context.fn to the value of this.
  3. We create a variable called result and set it to the value of context.fn called with the spread operator and the value of args.
  4. We delete the value of context.fn.
  5. We return the value of result.
  */
  
  //! bind
  
  MyArray.prototype.bind = function (context, ...args) {
    context = context || window;
    context.fn = this;
    return function (...args2) {
      let result = context.fn(...args, ...args2);
      delete context.fn;
      return result;
    };
  };
  
  /*
  1. We set the value of context to context or window.
  2. We set the value of context.fn to the value of this.
  3. We return a function that takes in the spread operator of args2.
  4. Inside the function, we create a variable called result and set it to the value of context.fn called with the spread operator of args and the spread operator of args2.
  5. We delete the value of context.fn.
  6. We return the value of result.
  */
  