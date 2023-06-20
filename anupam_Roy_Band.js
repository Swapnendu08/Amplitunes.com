let index=0;
let audioElement= new Audio("./anupam_Roy_Band/Aamake-Amar-Moto-Thakte-Dao.mp3");
let masterPlay= document.getElementById("masterPlay");
let myProgressBar= document.getElementById("myProgressBar");
let songInfo=document.getElementsByClassName("songInfo")[0];
// audioElement.play();
let time=document.getElementsByClassName("time")[0];
let songs=[
    { songName:"Aamake Amar moto thakteh dao", duration:"5:21",path:"./anupam_Roy_Band/Aamake-Amar-Moto-Thakte-Dao.mp3"},
    { songName:"Abar Phire Ele", duration:"5:21",path:"./anupam_Roy_Band/Abar Phire Ele.mp3"},
    { songName:"Amar Shawhore", duration:"5:21",path:"./anupam_Roy_Band/Amar Shawhore.mp3"},
    { songName:"Bandhu Chal", duration:"5:21",path:"./anupam_Roy_Band/Bandhu Chal.mp3"},
    { songName:"Bariye dao tomar haat", duration:"5:21",path:"./anupam_Roy_Band/Bariye dao tomar haat.mp3"},
    { songName:"Benche Thakar Gaan", duration:"5:21",path:"./anupam_Roy_Band/Benche Thakar Gaan.mp3"},
    { songName:"Boba-Tunnel", duration:"5:21",path:"./anupam_Roy_Band/Boba-Tunnel.mp3"},
    { songName:"Ekbar Bol Nei Tor Keu Nei", duration:"5:21",path:"./anupam_Roy_Band/Ekbar Bol Nei Tor Keu Nei.mp3"},
    { songName:"Ekhon Onek Raat", duration:"5:21",path:"./anupam_Roy_Band/Ekhon Onek Raat.mp3"},
    { songName:"Ish Debashish", duration:"5:21",path:"./anupam_Roy_Band/Ish Debashish.mp3"},
    { songName:"Jawl Phoring", duration:"5:21",path:"./anupam_Roy_Band/Jawl Phoring.mp3"},
    // { songName:"Ish Debashish", duration:"5:21",path:"./anupam_Roy_Band/Ish Debashish.mp3"},
    { songName:"Je Kawta Din", duration:"5:21",path:"./anupam_Roy_Band/Je Kawta Din.mp3"},
    { songName:"Lokkhiti", duration:"5:21",path:"./anupam_Roy_Band/Lokkhiti.mp3"},
    { songName:"Oestrogen", duration:"5:21",path:"./anupam_Roy_Band/Oestrogen.mp3"},
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