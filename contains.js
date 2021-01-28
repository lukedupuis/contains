const contains = (searchIn, searchFor) => {
  try {
    const contains = (searchIn, searchFor) => {
      return searchIn && !!searchIn.indexOf ? searchIn.indexOf(searchFor) != -1 : false;
    };
    if (typeof searchIn == 'string' && Array.isArray(searchFor)) {
      let found = false;
      for (let i = 0; i < searchFor.length; i++) {
        if (found) { break; }
        found = contains(searchIn, searchFor[i]);
      }
      return found;
    } else if (Array.isArray(searchIn) && Array.isArray(searchFor)) {
      let found = false;
      for (let i = 0; i < searchFor.length; i++) {
        if (found) { break; }
        for (let j = 0; j < searchIn.length; j++) {
          if (found) { break; }
          found = contains(searchIn[j], searchFor[i]);
        }
      }
      return found;
    } else {
      return contains(searchIn, searchFor);
    }
  } catch(err) { console.error(349828, err); }
};

module.exports = contains;