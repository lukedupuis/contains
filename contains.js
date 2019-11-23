const contains = (searchIn, searchFor) => {
  const contains = (searchIn, searchFor) => searchIn && searchIn.indexOf(searchFor) != -1;
  if (typeof searchIn == 'string' && Array.isArray(searchFor)) {
    var found = false;
    for (var i = 0; i < searchFor.length; i++) {
      if (found) { break; }
      found = contains(searchIn, searchFor[i]);
    }
    return found;
  } else {
    return contains(searchIn, searchFor);
  }
};

module.exports = contains;