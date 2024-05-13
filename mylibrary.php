<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Music Application</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <link rel="stylesheet" href="style.css">
 
</head>
<body>

    <header>
        <div class="menu_side">
            <h1>Playlist</h1>
            <div class="playlist">
                <a><h4 class="active"><span></span><i class="bi bi-music-note-beamed"></i> Playlist </h4></a>
                <a href="trending.php"><h4><span></span><i class="bi bi-music-note-beamed"></i> Trending </h4></a>
                <a href="recommended.php"><h4><span></span><i class="bi bi-music-note-beamed"></i> Recommended </h4></a>
            </div>
            <div class="menu_song">
                
                <li class="songItem">
                    <span>01</span>
                    <img src="img/1.jpg" alt="">
                    <h5> Closer<br>
                        <div class="subtitle">halsey</div>
                    </h5>
                    <i class="bi playlistPlay bi-play-circle-fill" id="1"></i>
                </li>

                <li class="songItem">
                    <span>02</span>
                    <img src="img/1.jpg" alt="">
                    <h5>Closer<br>
                        <div class="subtitle">halsey</div>
                    </h5>
                    <i class="bi playlistPlay bi-play-circle-fill" id="2"></i>
                </li>

                <li class="songItem">
                    <span>03</span>
                    <img src="img/1.jpg" alt="">
                    <h5> Closer<br>
                        <div class="subtitle">halsey</div>
                    </h5>
                    <i class="bi playlistPlay bi-play-circle-fill" id="3"></i>
                </li>

                <li class="songItem">
                    <span>04</span>
                    <img src="img/1.jpg" alt="">
                    <h5>Closer<br>
                        <div class="subtitle">halsey</div>
                    </h5>
                    <i class="bi playlistPlay bi-play-circle-fill" id="4"></i>
                </li>

                <li class="songItem">
                    <span>05</span>
                    <img src="img/1.jpg" alt="">
                    <h5> Closer<br>
                        <div class="subtitle">halsey</div>
                    </h5>
                    <i class="bi playlistPlay bi-play-circle-fill" id="5"></i>
                </li>

                <li class="songItem">
                    <span>06</span>
                    <img src="img/1.jpg" alt="">
                    <h5>Closer<br>
                        <div class="subtitle">halsey</div>
                    </h5>
                    <i class="bi playlistPlay bi-play-circle-fill" id="6"></i>
                </li>

                <li class="songItem">
                    <span>07</span>
                    <img src="img/1.jpg" alt="">
                    <h5> Closer<br>
                        <div class="subtitle">halsey</div>
                    </h5>
                    <i class="bi playlistPlay bi-play-circle-fill" id="7"></i>
                </li>

                <li class="songItem">
                    <span>08</span>
                    <img src="img/1.jpg" alt="">
                    <h5>Closer<br>
                        <div class="subtitle">halsey</div>
                    </h5>
                    <i class="bi playlistPlay bi-play-circle-fill" id="8"></i>
                </li>

                <li class="songItem">
                    <span>09</span>
                    <img src="img/1.jpg" alt="">
                    <h5>Closer<br>
                        <div class="subtitle">halsey</div>
                    </h5>
                    <i class="bi playlistPlay bi-play-circle-fill" id="9"></i>
                </li>
                
                <li class="songItem">
                    <span>10</span>
                    <img src="img/1.jpg" alt="">
                    <h5>Closer<br>
                        <div class="subtitle">halsey</div>
                    </h5>
                    <i class="bi playlistPlay bi-play-circle-fill" id="10"></i>
                </li>
            </div>
        </div>

        

        <div class="song_side">
            <nav>
                <ul>
                    <a href="welcome.php">
                        <li>Discover</li>
                    </a>
                    
                    <li>MASHUP<span></span></li>

                    <li class="marathi">
                        <a href="marathi.php">MARATHI</a>
                    </li>

    
                    <li class="radio">
                        <a href="https://www.bbc.co.uk/sounds/play/live:bbc_radio_one">RADIO</a>
                    </li>
                </ul>
                
                       <!-- <a href="" class="card">
                            <img src="img/1.jpg" alt="" >
                            <div class="content">
                                Closer
                                <div class="subtitle">halsey</div>
                            </div>
                        </a>-->
                  
                <div class="user">
                <a href="#"><img src="bg1.jpg" alt="user"></a>
                </div>
            </nav>
            <div class="content">
                <h1>Mashup Non-Stop Music</h1>
              
                <div class="buttons">
                    <a href="https://www.youtube.com/results?search_query=mashups"><button>PLAY</button></a>
                  
                </div>    
            </div>



            <div class="popular_song">
                <div class="h4">
                    <h4>Popular Song</h4>
                    <div class="btn_s">
                        <i class="bi bi-arrow-left-short" id="pop_song_left"></i>
                        <i class="bi bi-arrow-right-short" id="pop_song_right"></i>
                    </div>
                </div>

                <div class="pop_song">                   
                    <li class="songItem">
                        <div class="img_play">
                            <img src="img/2.jpg" alt="">
                            <i class="bi playlistPlay bi-play-circle-fill" id="11"></i>
                        </div>
                        <h5>Closer<br>
                            <div class="subtitle">halsey</div>
                        </h5>
                    </li>


                    
                    <li class="songItem">
                        <div class="img_play">
                            <img src="img/2.jpg" alt="">
                            <i class="bi playlistPlay bi-play-circle-fill" id="12"></i>
                        </div>
                        <h5>Closer<br>
                            <div class="subtitle">halsey</div>
                        </h5>
                    </li>


                    
                    <li class="songItem">
                        <div class="img_play">
                            <img src="img/2.jpg" alt="">
                            <i class="bi playlistPlay bi-play-circle-fill" id="13"></i>
                        </div>
                        <h5>Closer<br>
                            <div class="subtitle">halsey</div>
                        </h5>
                    </li>


                    
                    <li class="songItem">
                        <div class="img_play">
                            <img src="img/2.jpg" alt="">
                            <i class="bi playlistPlay bi-play-circle-fill" id="14"></i>
                        </div>
                        <h5>Closer<br>
                            <div class="subtitle">halsey</div>
                        </h5>
                    </li>

                    <li class="songItem">
                        <div class="img_play">
                            <img src="img/2.jpg" alt="">
                            <i class="bi playlistPlay bi-play-circle-fill" id="15"></i>
                        </div>
                        <h5>Closer<br>
                            <div class="subtitle">halsey</div>
                        </h5>
                    </li>


                    
                    <li class="songItem">
                        <div class="img_play">
                            <img src="img/2.jpg" alt="">
                            <i class="bi playlistPlay bi-play-circle-fill" id="16"></i>
                        </div>
                        <h5>Closer<br>
                            <div class="subtitle">halsey</div>
                        </h5>
                    </li>

                    <li class="songItem">
                        <div class="img_play">
                            <img src="img/2.jpg" alt="">
                            <i class="bi playlistPlay bi-play-circle-fill" id="17"></i>
                        </div>
                        <h5>Closer<br>
                            <div class="subtitle">halsey</div>
                        </h5>
                    </li>


                    
                    <li class="songItem">
                        <div class="img_play">
                            <img src="img/2.jpg" alt="">
                            <i class="bi playlistPlay bi-play-circle-fill" id="18"></i>
                        </div>
                        <h5>Closer<br>
                            <div class="subtitle">halsey</div>
                        </h5>
                    </li>

                    <li class="songItem">
                        <div class="img_play">
                            <img src="img/2.jpg" alt="">
                            <i class="bi playlistPlay bi-play-circle-fill" id="19"></i>
                        </div>
                        <h5>Closer<br>
                            <div class="subtitle">halsey</div>
                        </h5>
                    </li>
                </div>
            </div>




            <div class="popular_artists">
                <div class="h4">
                    <h4>Popular Artists</h4>
                    <div class="btn_s">
                        <i class="bi bi-arrow-left-short" id="pop_art_left"></i>
                        <i class="bi bi-arrow-right-short" id="pop_art_right"></i>
                    </div>
                </div>

              <div class="item Artists_bx">
              <li>
                        <a href="arijit.php">  <img src="img/Arijit Singh/arijitSingh.jfif" alt="Arijit singh" title="Arijit Singh" > </a>
                    </li>

                    <li>
                       <a href="ARRahman.php"> <img src="img/A.R.Rahman/A.R.rahman.jfif" alt="A.R.Rahman" title="A.R.Rahman"></a>
                    </li>
                    <li>
                        <a href="abhijeetbhatacharya.php"><img src="img/Abhijeet Bhatacharya/abhijeet.jfif" alt="Abhijeet Bhatacharya" title="Abhijeet Bhatacharya"></a> 
                    </li>
                    <li>
                        <a href="siddhumoosewala.php"><img src="img/Siddhu Moosewala/Siddhu.jfif" alt="Siddhu Moosewala" title="Siddhu Moosewala"></a> 
                    </li>
                    <li>
                        <a href="atifaslam.php"> <img src="img/Atif Aslam/atifaslam.jpg" alt="Atif Aslam" title="Atif Aslam"></a>
                    </li>
                    <li>
                        <a href="yoyohoneysingh.php"><img src="img/Yo Yo Honey Singh/yoyohoneysingh.jpg" alt="Yo Yo Honey Singh" title="Yo Yo Honey Singh"></a>
                    </li>
                    <li>
                        <a href="Alkayadnik.php"><img src="img/Alka Yadnik/Alkayadnik.jpg" alt="Alka Yadnik" title="Alka Yadnik"></a>
                    </li>
                    <li>
                       <a href="badshah.php"><img src="img/Badshah/badshaha.jpg" alt="Badshah" title="Badshah"></a> 
                    </li>
                    <li>
                        <a href="divine.php"><img src="img/Divine/divine.jpg" alt="Divine" title="Divine"></a>
                    </li>
                    <li>
                        <a href="Shreyaghosal.php"><img src="img/Shreya Ghosal/Shreya.jfif" alt="Shreya Ghosal" title="Shreya Ghosal"></a> 
                    </li>
                    <li>
                        <a href="bpraak.php"><img src="img/B Praak/bpraak.jfif" alt="B Praak" title="B Praak"></a> 
                    </li>
                    <li>
                        <a href="emiway.php"><img src="img/Emiway/emiway.jpg" alt="Emiway" title="Emiway"></a>
                    </li>
                    <li>
                       <a href="gururandhawa.php"><img src="img/Guru Randhawa/gururandhava.jpg" alt="Guru Randawa" title="Guru Randhawa"></a> 
                    </li>
                    <li>
                        <a href="nikitagandhi.php"><img src="img/Nikita Gandhi/nikita gandhi.jpg" alt="Nikita Gandhi" title="Nikita Gandhi"></a>
                    </li>
                    <li>
                        <a href="king.php"><img src="img/King/king.jpg" alt="King" title="King"></a>
                    </li>
                    <li>
                        <a href="HardySindhu.php"><img src="img/Hardy Sindhu/HardySindhu.png" alt="Hardy Sindhu" title="Hardy Sindhu"></a>
                    </li>
                    <li>
                       <a href="kk.php"><img src="img/Kk/kk.jpg" alt="kk" title="Kk"></a> 
                    </li>
                    <li>
                        <a href="kumarsanu.php"><img src="img/Kumar Sanu/kumarsanu.jpg" alt="Kumar Sanu" title="Kumar Sanu"></a>
                    </li>
                    <li>
                        <a href="kailashkher.php"><img src="img/Kailash Kher/KailashKher.jpg" alt="Kailash Kher" title="Kailash Kher"></a>
                    </li>
                    <li>
                        <a href="latamangeshkar.php"><img src="img/Lata Mangeshkar/latamngeshkar.jfif" alt="Lata Mangeshkar"></a>
                    </li>
                    <li>
                        <a href="mcstan.php"><img src="img/MC Stan/mcstan.jpg" alt="MC Stan" title="MC Stan"></a>
                    </li>
                    <li>
                        <a href="nehakakkar.php"><img src="img/Neha Kakkar/nehakakkar.jpg" alt="Neha Kakkar" title="Neha Kakkar"></a>
                    </li>
                    <li>
                       <a href="paradox.php"> <img src="img/Paradox/paradox.jpg" alt="Paradox" title="Paradox"></a>
                    </li>
                    <li>
                     <a href="qk.php">  <img src="img/QK/qk.jpg" alt="QK" title="QK"></a> 
                    </li>
                    <li>
                      <a href="raftar.php"><img src="img/Raftar/raftar.jfif" alt="Raftar" title="Raftar"></a>  
                    </li>
                    <li>
                       <a href="shan.php"><img src="img/Shan/shan.jpg" alt="Shan" title="Shan"></a> 
                    </li>
                    <li>
                      <a href="shrustitawade.php"><img src="img/Shrusti Tawade/shrustitawade.jpg" alt="Shrusti Tawade" title="Shrusti Tawade"></a>  
                    </li>
                    <li>
                        <a href="sonunigam.php"><img src="img/Sonu Nigam/sonunigam.jpg" alt="Sonu Nigam" title="Sonu Nigam"></a>
                    </li>
                    <li>
                        <a href="permishvarma.php"><img src="img/Permish Varma/permishVarma.jpg" alt="Permish Varma" title="Permish Varma"></a>
                    </li>


                </div>
            </div>
        </div>
            
        
        
        
        <div class="master_play">
            <div class="wave" id="wave">
                <div class="wave1"></div>
                <div class="wave1"></div>
                <div class="wave1"></div>
            </div>
            <img src="songplay.jpg.jpg" alt="" id="poster_master_play">
            <h5 id="title">
                Vande Mataram
                <div class="subtitle">Bankim Chandra</div>
            </h5>
            <div class="icon">
                <i class="bi shuffle bi-music-note-beamed">next</i>
                <i class="bi bi-skip-start-fill" id="back"></i>
                <i class="bi bi-play-fill" id="masterPlay"></i>
                <i class="bi bi-skip-end-fill" id="next"></i>
                <a  href="" download id="download_music" ><i class="bi bi-cloud-arrow-down-fill"></i></a>
            </div>
            <span id="currentStart">0.00</span>
            <div class="bar">
                <input type="range" id="seek" min="0" max="100">
                <div class="bar2" id="bar2"></div>
                <div class="dot"></div>
            </div>
            <span id="currentEnd">0.30</span>
            <div class="vol">
                <i class="bi bi-volume-up-fill" id="vol_icon"></i>
                <input type="range" min="0" max="100" id="vol">
                <div class="vol_bar"></div>
                <div class="dot" id="vol_dot"></div>
            </div>
        </div>
    </header>

    <script src="mylibrary.js"></script>
</body>
</html>

