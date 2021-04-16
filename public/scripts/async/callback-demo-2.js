
 var btn = document.getElementById("saveBtn");

 btn.addEventListener('click', function onClick() {
     setTimeout(function timer() {
         a = 10;
         console.log('You clicked the button!');   
         return a;
     }, 2000);
 });

 console.log("Hi!");

setTimeout(function timeout() {
     console.log("Click the button!");
 }, 5000);

 console.log("Welcome to loupe.");