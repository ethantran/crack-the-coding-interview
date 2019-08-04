function sparseSimilarity(docs) {
  let docIds = Object.keys(docs);
  let numToDocIds = {};
  Object.keys(docs).forEach(docId => {
    let doc = docs[docId];
    doc.forEach(num => {
      if (!numToDocIds[num]) {
        numToDocIds[num] = [docId];
      } else {
        numToDocIds[num].push(docId);
      }
    });
  });
  let intersectCounters = {};
  Object.keys(numToDocIds).forEach((num, k) => {
    let docIdsForNum = numToDocIds[num];
    docIdsForNum.forEach((docId1, i) => {
      for (let j = i + 1; j < docIdsForNum.length; j++) {
        let docId2 = docIdsForNum[j];
        let pairId = docId1 + "-" + docId2;
        if (!intersectCounters[pairId]) {
          intersectCounters[pairId] = 1;
        } else {
          intersectCounters[pairId]++;
        }
      }
    });
  });
  Object.keys(intersectCounters).forEach(pairId => {
    let docId1 = pairId.substr(0, 2);
    let docId2 = pairId.substr(3, 5);
    let same = intersectCounters[pairId];
    let total = docs[docId1].length + docs[docId2].length;
    let sim = same / (total - same);
    console.log(`${docId1}, ${docId2} : ${sim}`);
  });
}

let docs = {
  13: [14, 15, 100, 9, 3],
  16: [32, 1, 9, 3, 5],
  19: [15, 29, 2, 6, 8, 7],
  24: [7, 10]
};

let a;
a = sparseSimilarity(docs);
a;

/**
 * ID1, ID2 : SIMILARITY
 * 13, 19 : 0.1
 * 13, 16 : 0.25
 * 19, 24 : 0.14285714285714285
 */
