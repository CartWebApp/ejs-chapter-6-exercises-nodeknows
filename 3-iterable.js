function isPresentInArr(i, t) {
  for (let ti of t) {
    if (i===ti) {
      return true
    }
  }
  return false
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
    for (let i = 0; i <= this.members.length-1; i++) {
      let elem = this.members[i];
      if (x === elem) {
        delete this.members[i]
      }
    }
  }

}

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