let video = document.querySelector("#video")
let playPause = document.querySelector("#playPause")

playPause.addEventListener('click',function(){
    // console.log(playPause.classList);
    if(playPause.classList.contains("fa-play")){
        video.play();
        playPause.classList.remove("fa-play")
        playPause.classList.add("fa-pause")
    }else{
        video.pause()
        playPause.classList.remove('fa-pause')
        playPause.classList.add('fa-play')
    }
})