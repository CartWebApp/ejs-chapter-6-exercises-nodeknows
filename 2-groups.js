/*
Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. 
Its constructor creates an empty group, 
- add adds a value to the group (but only if it isn’t already a member), 
- delete removes its argument from the group (if it was a member), and
- has returns a Boolean value indicating whether its argument is a member of the group.

Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.

Give the class a static from method that takes an iterable object as argument and creates a group that contains all the values produced by iterating over it.
*/

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


let group = Group.from([10, 20]);

console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false