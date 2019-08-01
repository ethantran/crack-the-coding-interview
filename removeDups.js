function isDup(a, target) {
  let curr = a;
  while (curr !== target) {
    if (curr.value === target.value) {
      return true;
    }
    curr = curr.next;
  }
  return false;
}

function removeDups(a) {
  let curr = a;
  while (curr) {
    if (curr.next && isDup(a, curr.next)) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
}

let Node = {
  init: function(value) {
    this.value = value;
    this.next = null;
    return this;
  },
  toString: function() {
    let str = "";
    let curr = this;
    while (curr) {
      str += curr.value + " -> ";
      curr = curr.next;
    }
    str += "null";
    return str;
  }
};

let n1 = Object.create(Node).init("1");
let n1_2 = Object.create(Node).init("1");
let n2 = Object.create(Node).init("2");
let n2_2 = Object.create(Node).init("2");
let n3 = Object.create(Node).init("3");
let n3_2 = Object.create(Node).init("3");
let n3_3 = Object.create(Node).init("3");

n1.next = n2;
n2.next = n1_2;
n1_2.next = n3_2;
n3_2.next = n2_2;
n2_2.next = n3;
n3.next = n3_3;

console.log(n1.toString());
removeDups(n1);
console.log(n1.toString());
