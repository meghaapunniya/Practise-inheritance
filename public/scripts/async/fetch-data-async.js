// async function getUsers() {
//     console.log("getting users");
//     var response = await fetch("https://jsonplaceholder.typicode.com/users");
//     var data = await response.json();
//     console.log(data);
//     console.log("got users");
//   }

//   getUsers();
  console.log("done");

  function disemvovel(inputWord){
      var output = null;
     output =inputWord.replace(/[aeiou]/ig,'');
      /* output1 =output.replace('e','');
      output2 =output1.replace('i','');
      output3 =output2.replace('o','');
      output4 =output3.replace('u',''); */ */
      return output;
  }

  var result = disemvovel("This website is for loser");
  console.log(result);