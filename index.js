// Function to check if input is an array or an object
function getValues(collection) {
    return Array.isArray(collection) ? collection : Object.values(collection);
  }
  
  // myEach
  function myEach(collection, callback) {
    const values = getValues(collection);
    for (let i = 0; i < values.length; i++) {
      callback(values[i]);
    }
    return collection;
  }
  
  // myMap
  function myMap(collection, callback) {
    const values = getValues(collection);
    const result = [];
    for (let i = 0; i < values.length; i++) {
      result.push(callback(values[i], i, collection));
    }
    return result;
  }
  
  // myReduce
  function myReduce(collection, callback, acc) {
    const values = getValues(collection);
    let startIndex = 0;
    if (acc === undefined) {
      acc = values[0];
      startIndex = 1;
    }
    for (let i = startIndex; i < values.length; i++) {
      acc = callback(acc, values[i], collection);
    }
    return acc;
  }
  
  // myFind
  function myFind(collection, predicate) {
    const values = getValues(collection);
    for (let i = 0; i < values.length; i++) {
      if (predicate(values[i])) return values[i];
    }
    return undefined;
  }
  
  // myFilter
  function myFilter(collection, predicate) {
    const values = getValues(collection);
    const result = [];
    for (let i = 0; i < values.length; i++) {
      if (predicate(values[i])) result.push(values[i]);
    }
    return result;
  }
  
  // mySize
  function mySize(collection) {
    const values = getValues(collection);
    return values.length;
  }
  
  // myFirst
function myFirst(array, n) {
    if (n === undefined) return array[0];
    return array.slice(0, n);
  }
  
  // myLast
  function myLast(array, n) {
    if (n === undefined) return array[array.length - 1];
    return array.slice(-n);
  }
  
  // BONUS: mySortBy
  function mySortBy(array, callback) {
    return [...array].sort((a, b) => {
      const aValue = callback(a);
      const bValue = callback(b);
      return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
    });
  }
  
  // BONUS: myFlatten
  function myFlatten(array, shallow = false, newArr = []) {
    for (const item of array) {
      if (Array.isArray(item)) {
        if (shallow) {
          newArr.push(...item);
        } else {
          myFlatten(item, shallow, newArr);
        }
      } else {
        newArr.push(item);
      }
    }
    return newArr;
  }
  
  // myKeys
function myKeys(object) {
    return Object.keys(object);
  }
  
  // myValues
  function myValues(object) {
    return Object.values(object);
  }
  