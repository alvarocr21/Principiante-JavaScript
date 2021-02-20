// Your code here:
let Qty = 99;

for (let i = Qty; i >= 1; i--) {
  if (i > 1) {
    let coro =
      i.toString() +
      " bottles of milk on the wall, " +
      i.toString() +
      " bottles of milk.Take one down and pass it around," +
      (i - 1).toString() +
      "bottles of milk on the wall.";
    console.log(coro);
  } else {
    let coro =
      "1 bottle of milk on the wall, 1 bottle of milk. " +
      "Take one down and pass it around, no more bottles of milk on the wall." +
      "No more bottles of milk on the wall, no more bottles of milk. " +
      "Go to the store and buy some more, " +
      Qty.toString() +
      " bottles of milk on the wall.";
    console.log(coro);
  }
}
