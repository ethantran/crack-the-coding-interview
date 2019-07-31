function isUnique(a) {
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] === a[j]) return false;
    }
  }
  return true;
}

let a;
a = isUnique("");
a;
a = isUnique("a");
a;
a = isUnique("ab");
a;
a = isUnique("aa");
a;
