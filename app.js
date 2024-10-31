// var carImg  = document.getElementById("carImg")
// function imageHandler() {
//   console.log("carImg" , carImg.src)
//     // carImg.src = "./images/car2.webp"
//     // carImg.src = "./images/car22.gif"
//     carImg.src = "./images/game2.gif"
// }

// function imageOutHandler() {
//     console.log("carImg" , carImg.src)
//       carImg.src = "./images/game1.png"
//   }

var stnd =document.getElementById("stnd")

function inn( ){
    
  
    stnd.src="./images/spider2.gif"
}

function out( ){
    console.log (stnd.src)
    stnd.src="./images/spider1.webp"
}

var car =document.getElementById("car")

function carUp(){
    car.src = "./images/liveCar.gif"
 console.log(car.src)
 
 
}
function carOut (){
    console.log (car.src)
    car.src = "./images/carImage.jfif"
}


 function hInn(){
    var hwoarang = document.getElementById("hwoarang")
    console.log(hwoarang)
    hwoarang.src = "./images/Hwoarang2.gif"
 }

 function hOut(){
    hwoarang.src = "././images/Hwoarang 1.jfif"
    console.log(hwoarang.src)
 }

 function bulbOn(){
    var bulb = document.getElementById("bulb")
    console.log(bulb)
    bulb.src = "./images/bulb 2.gif"
 }
  function bulbOf(){
    bulb.src = "./images/bulb 1.jpg"
    console.log(bulb.src)
  }

function sunSet (){
    var sun = document.getElementById("sun")
    console.log(sun)
    sun.src = "./images/sun2.gif"
}

function sunStop(){
    sun.src = "././images/sun1.avif"
}