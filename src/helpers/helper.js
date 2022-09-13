///////////convert persian or arabic digits to english digits numbers
export const toEnglishDigits = (str) => {
  // convert persian digits [۰۱۲۳۴۵۶۷۸۹]
  var e = '۰'.charCodeAt(0);
  str = str.replace(/[۰-۹]/g, function (t) {
    return t.charCodeAt(0) - e;
  });

  // convert arabic indic digits [٠١٢٣٤٥٦٧٨٩]
  e = '٠'.charCodeAt(0);
  str = str.replace(/[٠-٩]/g, function (t) {
    return t.charCodeAt(0) - e;
  });
  return str;
};

///////////check if an object is empty
export const isEmptyObject = (obj) => {
  return JSON.stringify(obj) === '{}';
};

///search in array of objects for specific key
export const search = (id, array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].ID === id) {
      return [i, true]; //if key exists
    }
  }
  return [-1, false]; ////if key doesnt exists
};

//////////this function adds a new {ID:id} object to array or remove
///////// if array doesnt contain this object (with this input id) => Add it to array
///////// if object is duplicated => remove from array
export const addOrRemoveObject = (id,array) => {
  const newArray = [...array];
  const [index, hasID] = search(id, array);
  if (!hasID) {
    newArray.push({ ID: id });
  } else if (hasID) {
    newArray.splice(index, 1);
  }
  return newArray;
};
