$(document).ready(function(){
  //Define the variables we'll use
  let crystal1 = 0;
  let crystal2 = 0;
  let crystal3 = 0;
  let crystal4 = 0;
  let answer = 1;
  let currentTotal = 0;
  let wins = 0;
  let losses = 0;
  let winSong = $("#winSong");
  let lossSong = $("#lossSong");

  //initializing function, gets us random variables for the value of each crystal and the answer.
  //Makes sure the answer is obtainable with the crystal values
  //doubles as our reset function
  function getValues(){
    crystal1 = Math.floor(Math.random()*11+1);
    crystal2 = Math.floor(Math.random()*11+1);
    crystal3 = Math.floor(Math.random()*11+1);
    crystal4 = Math.floor(Math.random()*11+1);
    answer = crystal1*Math.floor(Math.random()*4+1) + crystal2*Math.floor(Math.random()*4+1) + crystal3*Math.floor(Math.random()*4+1) + crystal4*Math.floor(Math.random()*4+1);
    currentTotal = 0;
    $("#currentTotal").text(currentTotal);
    $("#answer").text(answer);
    console.log(crystal1);
    console.log(crystal2);
    console.log(crystal3);
    console.log(crystal4);
    console.log(answer);
  }
  //win contingency
  function victory(){
    alert("Lucky Guessing!");
    wins++;
    $("#win").text(wins);
    getValues();
    winSong.trigger("play");
  }
  //loss contingency
  function defeat(){
    alert("Learn how to add, sucker!");
    losses++;
    $("#loss").text(losses);
    getValues();
    lossSong.trigger("play");
  }

  //function to add points
   function pointAdd1(){
    currentTotal += crystal1;
    $('#currentTotal').text(currentTotal);
          //win condition
        if (currentTotal == answer){
          victory();
        }
        //loss condition
        else if ( currentTotal > answer){
          defeat();
        }
  }
  function pointAdd2(){
   currentTotal += crystal2;
   $('#currentTotal').text(currentTotal);
         //win condition
       if (currentTotal == answer){
         victory();
       }
       //loss condition
       else if ( currentTotal > answer){
         defeat();
       }
 }
 function pointAdd3(){
  currentTotal += crystal3;
  $('#currentTotal').text(currentTotal);
        //win condition
      if (currentTotal == answer){
        victory();
      }
      //loss condition
      else if ( currentTotal > answer){
        defeat();
      }
  }
  function pointAdd4(){
    currentTotal += crystal4;
    $('#currentTotal').text(currentTotal);
      //win condition
      if (currentTotal == answer){
        victory();
      }
      //loss condition
      else if ( currentTotal > answer){
        defeat();
      }
  }

  $("#one").click(pointAdd1);
  $("#two").click(pointAdd2);
  $("#three").click(pointAdd3);
  $("#four").click(pointAdd4);


  //call our initializer function
  getValues();

})
