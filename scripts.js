const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
var millisec = 0;
var seconds = 0;
var timer;
var box_arr=[];
var smallestNumber;
var indexOfSmallest;
var timer_limit=0;

//Generate unique random numbers
function generateRandom()
{
  //Generate random number with no duplicates
  while(box_arr.length < 16)
  {
    var r = Math.floor(Math.random() * 100) + 1;
    if(box_arr.indexOf(r) === -1) 
    {
      box_arr.push(r);
    }
  }
  //----------------------------------------------

  //Assign Array values to div Box
  var box="rnd";
  for(var z=0; z<box_arr.length; z++)
  {
    document.getElementById(box+z).innerHTML = box_arr[z];
    //console.log("box name ---->"+box+z+" array "+box_arr[z])
  }
  //-----------------------------------------------------

  //find the smallest in array logic
  find_smallest();

  //start timer
  changestate();
}

//Find smallest in array
function find_smallest()
{
  indexOfSmallest = 0;
  smallestNumber = box_arr[0];
  for (var i = 0; i < box_arr.length; i++) 
  {
    if (box_arr[i] < smallestNumber) 
    {
      smallestNumber = box_arr[i];
      indexOfSmallest = i;
    }
    //console.log("Array in Box -------> "+box_arr[i]);
  }
  console.log("final smallest ---> "+smallestNumber);
}
//---------------------------------------------------------------

var active = false;
 function start_timer() {
   if (active) {
     var timer = document.getElementById("mi").innerHTML;
     var arr = timer.split(".");
     var sec = arr[0];
    
     var mils = arr[1];
    //console.log("arr1 "+arr[1]);
     if (mils==99){
       sec++;
       mils = 0;
       if (sec < 10) sec="0"+sec;
     }
     else
     {
       mils++;
       if( mils < 10) mils ="0" + mils;
     }
     document.getElementById("mi").innerHTML= sec + "." + mils;
    setTimeout(start_timer,10);
 }
 }

function changestate()
 {
   if (active==false) {
     active= true;
     start_timer();
    // console.log("timer has been started");
    // document.getElementById("control").innerHTML= "pause";
   }
   else {
     active= false;
     stop_timer();
     //console.log("timer on pause");
     document.getElementById("box_arr.length==0").innerHTML = "box_arr";
   }
 }
 

function assign_random_to_box(i)
{
   console.log("div textcontent ---> "+document.getElementById(i).textContent);
   console.log("div smallest ---> "+smallestNumber);
   console.log("onclick is "+i);
   if(document.getElementById(i).textContent == smallestNumber && timer_limit <10)
   {  
      timer_limit++;
      var random =  Math.floor((Math.random() * 100) + 1);
      document.getElementById(i).innerHTML = random;
      console.log("trueee"+random);
      box_arr[indexOfSmallest]=random;
      console.log("trueee box_arr"+indexOfSmallest);
      find_smallest(); 
   }
    if(timer_limit >=10)
    {
      if(document.getElementById(i).textContent == smallestNumber)
     {
      document.getElementById(i).remove(i);
      box_arr.splice(indexOfSmallest,1);
      find_smallest();
     }
    }
    if(box_arr.length == 0)
    {
      active= false;
     stop_timer();
     //console.log("timer on pause");
     document.getElementById("box_arr.length==0").innerHTML = "box_arr";

      window.open("gameover.html","_self");
     // console.log("Game Over");
    }
}
    //

function get_smallest_after_hidden(param)
{
  console.log("function called");
  var box_name = "rnd";
  for(var i=0; i<16; i++)
  {  
      box_arr[i] = document.getElementById(box_name+i).textContent;
      console.log("new array --> " + box_arr[i]);
      find_smallest();
      console.log("box names ---> "+box_name+i +" Box value ---> "+document.getElementById(box_name+i).textContent);
      
  }
}






