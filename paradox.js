
let music = new Audio('audio/Vande Mataram.mp3');
//music.play();

const songs = [
    {
        id: '1',
        songName: `Agar Tum Sath Ho<br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/Paradox/1.jpg",
    },
    {
        id: '2',
        songName: `Apna Bana le<br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/Paradox/2.jpg",
    },
    {
        id: "3",
        songName: `Desh Mere<br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/Paradox/3.jpg",
    },
    {
        id: "4",
        songName: `Heer Ranjhana<br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/Paradox/4.jpg",
    },
    {
        id: "5",
        songName: `Heeriye<br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/Paradox/5.jpg",
    },
    {
        id: "6",
        songName: `Kala Jadu<br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/Paradox/6.jpg",
    },
    {
        id: "7",
        songName: `Kesariya<br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/Paradox/7.jpg",
    },
    {
        id: "8",
        songName: `Har Kisi Ko<br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/Paradox/8.jpg",
    },
    {
        id: "9",
        songName: `Jab Tak -M.S.Dhoni<br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/Paradox/9.jpg",
    },
    {
        id: "10",
        songName: `Khairiyat<br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/Paradox/10.jpg",
    },
    {
        id: "11",
        songName: `Bt Ho Gayi<br><div class="subtitle">Paradox</div>`,
        poster: "img/Paradox/11.jpg",
    },
    {
        id: "12",
        songName: `Rihaayi<br><div class="subtitle">Paradox</div>`,
        poster: "img/Paradox/12.jpg",
    },
    {
        id: "13",
        songName: `Choore NCR Aale<br><div class="subtitle">Paradox</div>`,
        poster: "img/Paradox/13.jpg",
    }   
]

/*
    forEach= Because it is not single its more than 1
*/

Array.from(document.getElementsByClassName("songItem")).forEach((e, i) =>{
    e.getElementsByTagName("img")[0].src = songs[i].poster;
    e.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
});


/*
    play/pause button
*/
let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementById("wave");

masterPlay.addEventListener("click", ()=> {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add("active1");
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");
    } else {
        music.pause();
        wave.classList.remove("active1");
        masterPlay.classList.remove("bi-pause-fill");
        masterPlay.classList.add("bi-play-fill");
    }
});
/*
    List play/pause buttons
*/
const makeAllplays = () =>{
    Array.from(document.getElementsByClassName("playlistPlay")).forEach((el) =>{
        el.classList.add("bi-play-circle-fill");
        el.classList.remove("bi-pause-circle-fill");
    })
}

const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName("songItem")).forEach((el) =>{
        el.style.background = "rgb(105, 105, 105, .0)";
    })
}



/*
        Checks the id and play the songs
        convert index value
*/
let index = 0;
let poster_master_play = document.getElementById("poster_master_play");
let download_music = document.getElementById("download_music");
let title = document.getElementById("title");
Array.from(document.getElementsByClassName("playlistPlay")).forEach((e)=>{
    e.addEventListener("click", (el)=>{
        index = el.target.id;
        makeAllplays();
        el.target.classList.remove("bi-play-circle-fill");
        el.target.classList.add("bi-pause-circle-fill");
        music.src = `audio/Paradox/${index}.mp3`;

        download_music.href = `audio/Paradox/${index}.mp3`;

        poster_master_play.src = `img/Paradox/${index}.jpg`;
        music.play();
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");


        /*
            filter by using name
        */

        let songTitles = songs.filter((els)=>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName; 
            download_music.setAttribute('download', songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName("songItem"))[index-1].style.background = "rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove("bi-play-circle-fill");
        el.target.classList.add("bi-pause-circle-fill");
        wave.classList.add("active1");
        
       // music.addEventListener("ended", ()=>{
        //       masterPlay.classList.add("bi-play-fill");
        //       masterPlay.classList.remove("bi-pause-fill");
        //       wave.classList.remove("active2");

       // })

        makeAllBackground();
        Array.from(document.getElementsByClassName("songItem"))[`${index-1}`].style.background = "rgb(105, 105, 105, .1)";
    });
})

/*
        seak Bar
*/

let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];


/*
        Time set
*/
music.addEventListener("timeupdate", ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    
    let min1 = Math.floor(music_dur/60);
    let sec1 = Math.floor(music_dur % 60);
    
    //console.log("min1");

/*
    music time
*/
    if(sec1 < 10){
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;


    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if(sec2 < 10){
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    //console.log(seek.value);

    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;

});

seek.addEventListener("change", ()=>{
    music.currentTime = seek.value * music.duration / 100;
})


const next_music = () => {
    masterPlay.classList.add("bi-pause-fill");
    wave.classList.add("active2");
    if (index == songs.length) {
        index == 0;
    }
    index ++;
    music.src = `audio/Paradox/${index}.mp3`;

    download_music.href = `audio/Paradox/${index}.mp3`;

    poster_master_play.src = `img/Paradox/${index}.jpg`;
    music.play();
    let songTitles = songs.filter((els)=>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName; 
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[`${index-1}`].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    document.getElementsByClassName("playlistPlay")[index-1].classList.remove("bi-play-circle-fill");
    document.getElementsByClassName("playlistPlay")[index-1].classList.add("bi-pause-circle-fill");
}

const repeat_music = () => {
    masterPlay.classList.add("bi-pause-fill");
    wave.classList.add("active2");
    index;
    music.src = `audio/Paradox/${index}.mp3`;

    download_music.href = `audio/Paradox/${index}.mp3`;

    poster_master_play.src = `img/Paradox/${index}.jpg`;
    music.play();
    let songTitles = songs.filter((els)=>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName; 
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[`${index-1}`].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    document.getElementsByClassName("playlistPlay")[index-1].classList.remove("bi-play-circle-fill");
    document.getElementsByClassName("playlistPlay")[index-1].classList.add("bi-pause-circle-fill");
}

const random_music = () => {
    masterPlay.classList.add("bi-pause-fill");
    wave.classList.add("active2");
    
    if (index == songs.length) {
        index == 0;
    }
    index = math.floor((Math.random()* songs.length)+1);
    music.src = `audio/Paradox/${index}.mp3`;

    download_music.href = `audio/Paradox/${index}.mp3`;

    poster_master_play.src = `img/Paradox/${index}.jpg`;
    music.play();
    let songTitles = songs.filter((els)=>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName; 
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[`${index-1}`].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    document.getElementsByClassName("playlistPlay")[index-1].classList.remove("bi-play-circle-fill");
    document.getElementsByClassName("playlistPlay")[index-1].classList.add("bi-pause-circle-fill");
}
/*
            replay, shuffle

*/
let shuffle =  document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', ()=>{
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = "repeat";
            break;
     
        case "repeat":
            shuffle.classList.remove('bi-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = "random";
            break;
           
        case "random":
            shuffle.classList.remove('bi-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = "next";
            break; 
            
    }
});

music.addEventListener('ended', ()=>{
    let b = shuffle.innerHTML;

    switch (b) {
        case "repeat":
            repeat_music();
            break;

        case "next":
            next_music();
            break;

        case "random":
            random_music();
            break;
    
    }
})


/*
    volume 
*/
let vol_icon = document.getElementById("vol_icon");
let vol = document.getElementById("vol");
let vol_bar = document.getElementsByClassName("vol_bar")[0];
let vol_dot = document.getElementById("vol_dot");

vol.addEventListener("change", ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove("bi-volume-up-fill");
        vol_icon.classList.remove("bi-volume-down-fill");
        vol_icon.classList.add("bi-volume-mute-fill");
    }
    if (vol.value > 0) {
        vol_icon.classList.remove("bi-volume-up-fill");
        vol_icon.classList.add("bi-volume-down-fill");
        vol_icon.classList.remove("bi-volume-mute-fill");
    }
    if (vol.value > 50) {
        vol_icon.classList.add("bi-volume-up-fill");
        vol_icon.classList.remove("bi-volume-down-fill");
        vol_icon.classList.remove("bi-volume-mute-fill");
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

/*
        next previous
*/
let back = document.getElementById("back");
let next = document.getElementById("next");

back.addEventListener("click", ()=>{
    index -=1;
    /*
        add previos songs if not then also
    */
    if (index < 1) {
        index = Array.from(document.getElementsByClassName("songItem")).length;

    }
    music.src = `audio/Paradox/${index}.mp3`;

    download_music.href = `audio/Paradox/${index}.mp3`;

    poster_master_play.src = `img/Paradox/${index}.jpg`;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");


    /*
        filter by using name
    */

    let songTitles = songs.filter((els)=>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName; 
        download_music.setAttribute('download', songName);
    });
    document.getElementById(`${index}`).classList.remove("bi-play-fill");
    document.getElementById(`${index}`).classList.add("bi-pause-fill");
    wave.classList.add("active2");

    makeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[index-1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove("bi-play-circle-fill");
    el.target.classList.add("bi-pause-circle-fill");
    wave.classList.add("active1");

});

next.addEventListener("click", ()=>{
    index ++;
    if (index > Array.from(document.getElementsByClassName("songItem")).length) {
        index = 1;

    }
    music.src = `audio/Paradox/${index}.mp3`;

    download_music.href = `audio/Paradox/${index}.mp3`;

    poster_master_play.src = `img/Paradox/${index}.jpg`;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");


    /*
        filter by using name
    */

    let songTitles = songs.filter((els)=>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName; 
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[index-1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove("bi-play-circle-fill");
    el.target.classList.add("bi-pause-circle-fill");
    wave.classList.add("active1");
});





/*
     scroll by mouse wheel

*/
let scrollcontainer = document.querySelector(".pop_song");
let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");


scrollcontainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollcontainer .scrollLeft += evt.deltaY;
});

pop_song_right.addEventListener("click", ()=>{
    scrollcontainer.scrollLeft += 100;
});

pop_song_left.addEventListener("click", ()=>{
    scrollcontainer.scrollLeft -= 100;
});



/*
     scroll by mouse wheel

*/
let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];

let scrollcontainer1 = document.querySelector(".Artists_bx");
scrollcontainer1.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollcontainer1 .scrollLeft += evt.deltaY;
});

pop_art_right.addEventListener('click', () => {
    Artists_bx.scrollLeft += 100;
});

pop_art_left.addEventListener('click', () => {
    Artists_bx.scrollLeft -= 100;
});