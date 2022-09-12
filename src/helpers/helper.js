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

export const isEmptyObject = (obj) => {
  return JSON.stringify(obj) === '{}';
};
