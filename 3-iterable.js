function isPresentInArr(i, t) {
  for (let ti of t) {
    if (i === ti) {
      return true
    }
  }
  return false
}

function compareArrays(a1, a2) {
  let res = true;
  for (let a1_i = 0; a1_i <= a1.length - 1; a1_i++) {
    let e1 = a1[a1_i];
    let isEqual = false;
    for (let a2_i = 0; a2_i <= a2.length - 1; a2_i++) {
      let e2 = a2[a2_i];
      if (e1 === e2) {
        isEqual = true;
        break;
      }
    }
    if (isEqual === false) return !res;
  }
  return res
}

class GroupIterator {
  constructor(groupobj) {
    this.groupobj = groupobj;
    this.index = -1;

  }

  next() {
    if (this.index == this.groupobj.members.length-1) return {done: true};
    this.index++
    return {value: this.groupobj.members[this.index], done: false}
  }
}

class Group {
  constructor(new_members) {
    this.members = new_members
  }

  static members = [];

  static from(x) {
    this.members = x;
    return new Group(this.members)
  }

  has(x) {
    return isPresentInArr(x, this.members)
  }

  add(x) {
    this.members.push(x)
  }

  delete(x) {
    for (let i = 0; i <= this.members.length - 1; i++) {
      let elem = this.members[i];
      if (x === elem) {
        delete this.members[i]
      }
    }
  }

}

Group.prototype[Symbol.iterator] = function () {
  return new GroupIterator(this);
};

/* 
Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified during iteration.
*/


// Your code here (and the code from the previous exercise)


// Tests:
for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c 