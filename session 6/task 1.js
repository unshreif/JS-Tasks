function hoistExample() {
  console.log(a);
  var a = 10;

  function inner() {
    console.log(a);
    var a = 20;
  }

  inner();
  console.log(a);
}

hoistExample();



//undefined
//undefined
//10