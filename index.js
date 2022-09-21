//on button press
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//   var audio = new Audio("sounds/crash.mp3");
//   audio.play();
// console.log(this.style.color="red");
   var buttonclick = this.textContent;
   //console.log(buttonclick);
   makesound(buttonclick);
   addanimation(buttonclick);

}) }
//on key press
document.addEventListener("keypress",function(event){
    makesound(event.key);
    addanimation(event.key);
})
function makesound(key){
    switch(key){
        case "w":
           var b1  = new Audio("sounds/crash.mp3");
           b1.play()
           
           break;
       case "a":
               var b2  = new Audio("sounds/kick-bass.mp3");
               b2.play()
               
               break;
      case "s":
                   var b3  = new Audio("sounds/snare.mp3");
                   b3.play()
                   
                   break;
       case "d":
           var b4  = new Audio("sounds/tom-1.mp3");
           b4.play()
           
           break;
       case "j":
            var b5  = new Audio("sounds/tom-2.mp3");
            b5.play()
            
            break;
       case "k":
                var b6  = new Audio("sounds/tom-3.mp3");
                b6.play()
                
                break;
       case "l":
                    var b7  = new Audio("sounds/tom-4.mp3");
                    b7.play()
                    
                    break;
     default:
      }
}
function addanimation(key){
      var btn = document.querySelector("."+key);
      btn.classList.add("pressed");
      setTimeout(function(){
        btn.classList.remove("pressed");
      },100)
    }