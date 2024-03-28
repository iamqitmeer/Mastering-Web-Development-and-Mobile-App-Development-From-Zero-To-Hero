function abc(a) {
  a();
}

abc(function () {
  console.log("abc");
  console.log("abc");
});