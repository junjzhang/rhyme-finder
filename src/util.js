function groupBy(objects, property) {
  // If property is not a function, convert it to a function that accepts one argument (an object) and returns that object's
  // value for property (obj[property])
  if (typeof property !== "function") {
    const propName = property;
    property = (obj) => obj[propName];
  }

  const groupedObjects = new Map(); // Keys: group names, value: list of items in that group
  for (const object of objects) {
    const groupName = property(object);
    //Make sure that the group exists
    if (!groupedObjects.has(groupName)) {
      groupedObjects.set(groupName, []);
    }
    groupedObjects.get(groupName).push(object);
  }

  // Create an object with the results. Sort the keys so that they are in a sensible "order"
  const result = {};
  for (const key of Array.from(groupedObjects.keys()).sort()) {
    result[key] = groupedObjects.get(key);
  }
  return result;
}

function getDatamuseRhymeUrl(inputWord) {
  return `https://api.datamuse.com/words?${new URLSearchParams({
    rel_rhy: inputWord,
  }).toString()}`;
}

function getDatamuseSimilarToUrl(inputWord) {
  return `https://api.datamuse.com/words?${new URLSearchParams({
    ml: inputWord,
  }).toString()}`;
}

function datamuseRequest(url, callback) {
  fetch(url)
    .then((response) => response.json())
    .then(
      (data) => {
        // This invokes the callback that updates the page.
        callback(data);
      },
      (err) => {
        console.error(err);
      }
    );
}

export {
  groupBy,
  datamuseRequest,
  getDatamuseRhymeUrl,
  getDatamuseSimilarToUrl,
};
