let index=0;
let audioElement= new Audio("./Linking_Park/Breaking the Habit.mp3");
let masterPlay= document.getElementById("masterPlay");
let myProgressBar= document.getElementById("myProgressBar");
let songInfo=document.getElementsByClassName("songInfo")[0];
let time=document.getElementsByClassName("time")[0];
// audioElement.play();
let songs=[
    { songName:"Breaking the Habit", duration:"5:21",path:"./Linking_Park/Breaking the Habit.mp3"},
    { songName:"In The End", duration:"5:21",path:"./Linking_Park/In The End.mp3"},
    { songName:"Lost", duration:"5:21",path:"./Linking_Park/Lost.mp3"},
    { songName:"Numb", duration:"5:21",path:"./Linking_Park/Numb.mp3"},
    { songName:"Papercut", duration:"5:21",path:"./Linking_Park/Papercut.mp3"},
    { songName:"Until It's Gone", duration:"5:21",path:"./Linking_Park/Until It's Gone.mp3"},
]

let songItems=Array.from(document.getElementsByClassName("artist"))
console.log(songItems)
songItems.forEach((element,i)=>{
    element.getElementsByClassName("song")[0].innerText=songs[i].songName;
})

masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
    }

})

audioElement.addEventListener("timeupdate",()=>{
    sec=(audioElement.currentTime.toFixed(0));
    min=0;
    if(sec>= 60 && sec<120)
    {
        min=1
        sec=sec-60;
    }
    else if(sec>= 120 && sec<180)
    {
        min=2
        sec=sec-120;
    }
    else if(sec>= 180 && sec<240)
    {
        min=3
        sec=sec-180;
    }
    else if(sec>= 240 && sec<300)
    {
        min=4
        sec=sec-240;
    }
    else if(sec>= 300 && sec<360)
    {
        min=5
        sec=sec-300;
    }
    else if(sec>= 360 && sec<420)
    {
        min=6
        sec=sec-360;
    }
    else if(sec>= 420 && sec<480)
    {
        min=7
        sec=sec-420;
    }
    else if(sec>= 480 && sec<540)
    {
        min=8
        sec=sec-480;
    }
    else if(sec>= 540 && sec<600)
    {
        min=9
        sec=sec-540;
    }
    else if(sec>= 600 && sec<660)
    {
        min=10
        sec=sec-600;
    }
    else if(sec>= 660 && sec<720)
    {
        min=11
        sec=sec-660;
    }
    else if(sec>= 720 && sec<800)
    {
        min=12
        sec=sec-720;
    }
    if(sec<10)
    {
        time.innerText= min+":"+"0"+sec;
        
    }
    else{
        time.innerText= min+":"+sec;
    }
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime=(myProgressBar.value * audioElement.duration)/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        console.log(e.target);
        makeAllPlays();
       e.target.classList.remove("fa-play-circle");
       e.target.classList.add("fa-pause-circle");
       index=parseInt(e.target.id);
       audioElement.src=`${songs[index].path}`;
       audioElement.currentTime=0;
       audioElement.play();
       masterPlay.classList.remove("fa-play-circle");
       masterPlay.classList.add("fa-pause-circle");
       songInfo.innerText=`${songs[index].songName}`;
    })
})
document.getElementById("previous").addEventListener("click",()=>{
    if(index>=0 && index<18){
        index-=1;
    }
    else{
        index+=1;
    }
    audioElement.src=`${songs[index].path}`;
       audioElement.currentTime=0;
       audioElement.play();
       masterPlay.classList.remove("fa-play-circle");
       masterPlay.classList.add("fa-pause-circle");
       songInfo.innerText=`${songs[index].songName}`;
})
document.getElementById("next").addEventListener("click",()=>{
    if(index>=0 && index<18){
        index+=1;
    }
    else{
        index-=1;
    }
    audioElement.src=`${songs[index].path}`;
       audioElement.currentTime=0;
       audioElement.play();
       masterPlay.classList.remove("fa-play-circle");
       masterPlay.classList.add("fa-pause-circle");
       songInfo.innerText=`${songs[index].songName}`;
})

function myFunction(x) {
    if (x.matches) { // If media query matches
        masterPlay.classList.remove("fa-3x");
        masterPlay.classList.add("fa-2x");
        previous.classList.remove("fa-3x");
        previous.classList.add("fa-2x");
        next.classList.remove("fa-3x");
        next.classList.add("fa-2x");

    } else {
        masterPlay.classList.add("fa-3x");
        masterPlay.classList.remove("fa-2x");
        previous.classList.add("fa-3x");
        previous.classList.remove("fa-2x");
        next.classList.add("fa-3x");
        next.classList.remove("fa-2x");
    }
  }
  
  var x = window.matchMedia("(max-width: 810px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes