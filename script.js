let music = new Audio('audio/Vande Mataram.mp3');
//music.play();

const songs = [
    {
        id: '1',
        songName: `Closer<br><div class="subtitle">The Chainsmokers ft. Halsey</div>`,
        poster: "img/1.jpg",
    },
    {
        id: '2',
        songName: `Wishlist<br><div class="subtitle">Dino James</div>`,
        poster: "img/2.jpg",
    },
    {
        id: "3",
        songName: `Desh Mere<br><div class="subtitle">Arijit singh</div>`,
        poster: "img/3.jpg",
    },
    {
        id: "4",
        songName: `Blue Eyes<br><div class="subtitle">Yo Yo Honey Singh</div>`,
        poster: "img/4.jpg",
    },
    {
        id: "5",
        songName: `Breadthless<br><div class="subtitle">Shankar Mahadevan</div>`,
        poster: "img/5.jpg",
    },
    {
        id: "6",
        songName: `City Slum<br><div class="subtitle">Raja Kumari,Divine</div>`,
        poster: "img/6.jpg",
    },
    {
        id: "7",
        songName: `Har Kisi Ko<br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/7.jpg",
    },
    {
        id: "8",
        songName: `Sukh Kalel<br><div class="subtitle">Shreya Ghoshal</div>`,
        poster: "img/8.jpg",
    },
    {
        id: "9",
        songName: `Wavin Flag<br><div class="subtitle">K'naan</div>`,
        poster: "img/9.jpg",
    },
    {
        id: "10",
        songName: `Shauq<br><div class="subtitle">Amit Triwadi</div>`,
        poster: "img/10.jpg",
    },
    {
        id: "11",
        songName: `Tere Hawaler<br><div class="subtitle">Arijit Singh,Shilpa Rao</div>`,
        poster: "img/11.jpg",
    },
    {
        id: "12",
        songName: `Jab Tak-M.S.DHONI<br><div class="subtitle">Armaan Malik</div>`,
        poster: "img/12.jpg",
    },
    {
        id: "13",
        songName: `Maine Royaan<br><div class="subtitle">Tanveer Evan</div>`,
        poster: "img/13.jpg",
    },
    {
        id: "14",
        songName: `Mann Shuddh Tuj<br><div class="subtitle">Ajay Gogavale</div>`,
        poster: "img/14.jpg",
    },
    {
        id: "15",
        songName: `Sindhur Laal Chadayo<br><div class="subtitle">Ganpati Aarati</div>`,
        poster: "img/15.jpg",
    },
    {
        id: "16",
        songName: `Style Marty<br><div class="subtitle">Sanju Gosavi</div>`,
        poster: "img/16.jpg",
    },
    {
        id: "17",
        songName: `295<br><div class="subtitle">Siddu Moose wala</div>`,
        poster: "img/17.jpg",
    },
    {
        id: "18",
        songName: `Chandra <br><div class="subtitle">Shreya Ghoshal</div>`,
        poster: "img/18.jpg",
    },
    {
        id: "19",
        songName: `Meet-Arijit Singh<br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/19.jpg",
    },
    {
        id: "20",
        songName: `Cradle<br><div class="subtitle">Sub Urban</div>`,
        poster: "img/20.jpg",
    },
    {
        id: "21",
        songName: `Ektarfa<br><div class="subtitle">King</div>`,
        poster: "img/21.jpg",
    },
    {
        id: "22",
        songName: `Mere Yarra<br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/22.jpg",
    },
    {
        id: "23",
        songName: `Meri Jaan<br><div class="subtitle">Neeti Mohan</div>`,
        poster: "img/23.jpg",
    },
    {
        id: "24",
        songName: `Premachi Lagan<br><div class="subtitle">Rhit Raut</div>`,
        poster: "img/24.jpg",
    },
    {
        id: "25",
        songName: `Sia- UNSTOPPABLE<br><div class="subtitle">Sia</div>`,
        poster: "img/25.jpg" ,
    },
    {
        id: "26",
        songName: `YKWIM<br><div class="subtitle">Karan Aujila</div>`,
        poster: "img/26.jpg",
    },
    {
        id: "27",
        songName: `Dholida<br><div class="subtitle">Janhvi Shrimankar</div>`,
        poster: "img/27.jpg",
    },
    {
        id: "28",
        songName: `Baaton Ko Teri<br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/28.jpg",
    },
    {
        id: "29",
        songName: `Chaand Baaliyan<br><div class="subtitle">Aditya A</div>`,
        poster: "img/29.jpg",
    },
    {
        id: "30",
        songName: `Dynamite<br><div class="subtitle">Dhvani Bhanushali</div>`,
        poster: "img/30.jpg",
    },
    {
        id: "31",
        songName: `heeriya<br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/31.jpg",
    },
    {
        id: "32",
        songName: `Mann Meri Jaan<br><div class="subtitle">King</div>`,
        poster: "img/32.jpg",
    },
    {
        id: "33",
        songName: `Tu Hi Aana<br><div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/33.jpg",
    },
    {
        id: "34",
        songName: `Yaar Mere Tu Bata De Mujhe<br><div class="subtitle">B Praak</div>`,
        poster: "img/34.jpg",
    },
    {
        id: "35",
        songName: `Lehanga<br><div class="subtitle">B Praak</div>`,
        poster: "img/35.jpg",
    }
]

/*
    forEach= Because it is not single its more than 1
*/

Array.from(document.getElementsByClassName("songItem")).forEach((e, i) =>{
    e.getElementsByTagName("img")[0].src = songs[i].poster;
    e.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
});

//  Search data Start
let search_results = document.getElementsByClassName('search_results')[0];

songs.forEach(element => {
    const {id, songName, poster} = element;
    //console.log(id);

    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id;
    card.innerHTML = `
    <img src="${poster}" alt="" >
                            <div class="content">
                                ${songName}
                            </div>
    `;
    search_results.appendChild(card);

});

let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', ()=>{
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
            let as = items[index].getElementsByClassName('content')[0];
            let text_value = as.textContent || as.innerHTML;

            if (text_value.toUpperCase().indexOf(input_value)> -1) {
                items[index].style.display = "flex";
            } else {
                items[index].style.display = "none";
            }
        
            if (input_value == 0) {
                search_results.style.display = "none";
            } else {
                search_results.style.display = "";
            }
    }
})
//  Search data end
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
        music.src = `audio/${index}.mp3`;

        download_music.href = `audio/${index}.mp3`;

        poster_master_play.src = `img/${index}.jpg`;
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
    music.src = `audio/${index}.mp3`;

    download_music.href = `audio/${index}.mp3`;

    poster_master_play.src = `img/${index}.jpg`;
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
    music.src = `audio/${index}.mp3`;

    download_music.href = `audio/${index}.mp3`;

    poster_master_play.src = `img/${index}.jpg`;
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
    music.src = `audio/${index}.mp3`;

    download_music.href = `audio/${index}.mp3`;

    poster_master_play.src = `img/${index}.jpg`;
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
    music.src = `audio/${index}.mp3`;

    download_music.href = `audio/${index}.mp3`;

    poster_master_play.src = `img/${index}.jpg`;
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
    music.src = `audio/${index}.mp3`;

    download_music.href = `audio/${index}.mp3`;

    poster_master_play.src = `img/${index}.jpg`;
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