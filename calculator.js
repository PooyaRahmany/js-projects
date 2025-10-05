
const alertP = document.querySelector(".alert")
let display = document.getElementById('js__calculator__input');
function appendTo(input) {
    
    display.value += input ;
}
function clearDisplay (){
    display.value = ""
}
function caculate () {
    try {
        display.value = eval(display.value).toFixed(2) ; 
    }
    catch (error) {
        console.error('error');
        display.value = "Error"
        alertP.textContent = "درست بنویس, زشته!"
        alertP.style.display = 'block'
        alertP.classList.replace("alertGreen" , "alert")
        setTimeout(() => {
            alertP.style.opacity  = 0 ;} , 3000)
            result = "Error" ;
    }
}

//Timer =>  project 2
const header = document.getElementById("js__timer__h2");

function getTimer () {
    let time = new Date() ;
    let hour = time.getHours();
    let second = time.getSeconds().toString().padStart(2,0) ;
    let minets = time.getMinutes().toString().padStart(2,0) ;
    let meridiem = hour >= 12 ? "PM" : "AM" ;
    hour = hour % 12 || 12 ;
    hour = hour.toString().padStart(2,0) 
    header.textContent = `${hour}:${minets}:${second} ${meridiem}`
    
}


document.addEventListener("DOMContentLoaded" , getTimer()) 
setInterval(getTimer , 1000)


//converter => project 3 

const selectionOne = document.getElementById("converter__select__one")
const selectionTwo = document.getElementById("converter__select__two")
const inputOne = document.getElementById("convert__input__one")
const inputTwo = document.getElementById("convert__input__two")
const spin = document.querySelector(".spin")
function convert () {
    let temp = Number(inputOne.value) ;
    let result ;
    switch(true) {
        case (selectionOne.value === "choose" && selectionTwo.value === "choose") :
            alertP.textContent = "انتخاب کن"
            alertP.style.display = 'block'
            alertP.classList.replace("alertGreen" , "alert")
            setTimeout(() => {
                alertP.style.opacity  = 0 ;} , 3000)
                result = "Error" ;break
        case (selectionOne.value === "F" && selectionTwo.value === "C") :
            result = convertToC(temp);break
        case (selectionOne.value === "C" && selectionTwo.value === "F") :
            result = convertToF(temp);break
        case (selectionOne.value === selectionTwo.value) :
            result = temp;break

    }
    inputTwo.value = result.toFixed(2) ;
    
}
    function convertToC (temp) {
        return (temp - 32) * 5/9
    }
    function convertToF (temp) {
        return (temp * 9/5)  + 32
    }
    spin.onclick =  () => {
        
        if (spin.style.transform = "rotate(180deg)") {

            spin.style.transform = "rotate(0deg)";
            [inputOne.value , inputTwo.value] = [inputTwo.value , inputOne.value];
        }
        else if (spin.style.transform = "rotate(0deg)") {

            spin.style.transform = "rotate(180deg)";
            [inputOne.value , inputTwo.value] = [inputTwo.value , " "];  
        }
    }

// تایمر معکوس
let timerText = document.getElementById("timer__container__text")
function clock () {
    let target = new Date("sep 17 , 2025 00:00:00").getTime();
    let newTime = new Date().getTime();
   

    const distance = target - newTime;

    let day = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hour = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    let minets = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60))
    let second = Math.floor(distance % (1000 * 60) /  1000)

    day = day.toString().padStart(2,0);
    hour = hour.toString().padStart(2,0)
    minets = minets.toString().padStart(2,0)
    second = second.toString().padStart(2,0)

    timerText.textContent  = `${day} : ${hour} : ${minets} : ${second}`
    if(distance === 0){
        alertP.textContent = "عیدت مبارک"
        alertP.style.display = "block"
        alertP.classList.replace("alert" , "alertGreen")
        setTimeout(() => {
            alertP.style.opacity = 0 ;
        },3000)
    }
}
clock()
setInterval(clock , 1000) ;

let count = 0 ;
let counter = document.querySelector('.number')
let add = document.querySelector('.add')
let reset = document.querySelector('.reset')
let mines = document.querySelector('.mines')
add.onclick = () => {
    count++
    counter.innerHTML = count
}
reset.onclick = () => {
    count = 0
    counter.innerHTML = count
}
mines.onclick = () => {
    count--
    counter.innerHTML = count
}




///////////////////scrol to top 
let toTop = document.querySelector('.toTop')

toTop.addEventListener('click' , () => {
    window.scrollTo({
        top: 0 ,
        behavior : "smooth"
    });
})
document.onscroll = function () {
    toTop.style.display = "block"
    setTimeout(function () {
        toTop.style.display = "none"
    },5000)

}
///////////////VIDEO & VIDEO RANGMENT

const video = document.getElementById('videoPlay')
const rangeInput = document.getElementById('rangTime')
video.addEventListener('loadedmetadata' , () => {
    rangeInput.max = video.duration
})
video.addEventListener("timeupdate" , () => {
    rangeInput.value = video.currentTime
})
let i = true;
video.addEventListener('click' , () => {
  if (i) {
    video.play()
    playPause.textContent = "⏸" 
    i = false ;
    centerPlayPuase.style.display = "block"
    setTimeout(() => {
        centerPlayPuase.style.display= "none"
    }, 1000)
    centerPlayPuase.textContent = "⏸"
  }
  else if (!i) {
    video.pause()
    playPause.textContent = "▶"
    i = true 
    centerPlayPuase.style.display = "block"
    setTimeout(() => {
        centerPlayPuase.style.display= "none"
    }, 1000)
    centerPlayPuase.textContent = "▶"
  }
})
rangeInput.addEventListener("input" , () => {
    video.currentTime = rangeInput.value
})

//////////////////// PLAY PAUSE

let playPause = document.getElementById("playPuase")

let centerPlayPuase = document.getElementById('centerPlayPuase')

playPause.addEventListener("click" ,  () => {
    if(playPause.textContent === "▶"){
        video.play()
        centerPlayPuase.style.display = "block"
        setTimeout(() => {
        centerPlayPuase.style.display= "none"
        }, 1000)
        centerPlayPuase.textContent = "⏸"
        playPause.textContent = "⏸"

    }
    else if (playPause.textContent === "⏸") {
        video.pause()
        centerPlayPuase.textContent = "▶"
        playPause.textContent = "▶"
        centerPlayPuase.style.display = "block"
        setTimeout(() => {
            centerPlayPuase.style.display= "none"
        }, 1000)
    }
})

////////////////////MUTE UNMUTE

let i2 = true ;
let volumeFather = document.querySelector(".volumeFather")
let mute = document.getElementById("mute")
mute.addEventListener("click" , () => {
    if (i2){
        video.muted = true 
        mute.innerHTML = `<i class="fas fa-volume-mute"></i>`
        i2 = false ;
        volume.value = 0
        centerPlayPuase.innerHTML = `<i class="fas fa-volume-mute"></i>`
        centerPlayPuase.style.display = "block"
        setTimeout(() => {
            centerPlayPuase.style.display = "none"
        },500)
    }
    else if (!i2){
        video.muted = false
        mute.innerHTML = `<i class="fas fa-volume-up"></i>`
        volume.value = 1
        i2 = true 
        centerPlayPuase.style.display = "block"
        centerPlayPuase.innerHTML = `<i class="fas fa-volume-up"></i>`
        setTimeout(() => {
            centerPlayPuase.style.display = "none"
        },500)
    }
})
volumeFather.addEventListener("mouseenter", () => {
    volume.style.width = "80px"
    volume.style.visibility = "visible"
})
volumeFather.addEventListener("mouseleave", () => {
    volume.style.width = "10px"
    volume.style.visibility = "hidden"
})

//////////////////FULLSCRREN

const full = document.getElementById("full")
let isFullscreen = false;

full.addEventListener("click", () => {
    if (!document.fullscreenElement) {
        video.requestFullscreen();
        video.removeAttribute("controls")
    } else {
        document.exitFullscreen();
        video.removeAttribute("controls")
    }
})

//////////////////VOLUME

let volume =document.getElementById("volume")
volume.addEventListener("input" , () => {
    video.volume = volume.value
    if (volume.value == 0 ){
        mute.innerHTML = `<i class="fas fa-volume-mute"></i>`
        video.muted = true ;
    }
    else if (volume.value > 0 ){
        mute.innerHTML = `<i class="fas fa-volume-up"></i>`
        video.muted = false 
    }
    console.log(video.currentTime)
    console.log(video.duration)
})

////////////////////PLUS MINES

let plus5 = document.getElementById("plus5")
let mines5 = document.getElementById("mines5")
plus5.addEventListener("click" , () => {
    video.currentTime = Math.min(video.currentTime + 5, video.duration)
    sidePlus5.style.background = "#00000093  "
    sidePlus5.style.color = "rgb(253, 240, 0)"
    setTimeout(() => {
        sidePlus5.style.background = "transparent "
        sidePlus5.style.color = "transparent"
    },500)
})
mines5.addEventListener("click" , () => {
    video.currentTime = Math.max(video.currentTime - 5, 0)
    sideMines5.style.background = "#00000093  "
    sideMines5.style.color = "rgb(253, 240, 0)"
    setTimeout(() => {
        sideMines5.style.background = "transparent "
        sideMines5.style.color = "transparent"
    },500)
})

////////////////////side plus & mines

let sidePlus5 = document.getElementById('sidePlus5')
let sideMines5 =document.getElementById("sideMines5")
sidePlus5.addEventListener("dblclick" , function () {
    video.currentTime = Math.min(video.currentTime + 5 ,video.duration)
    sidePlus5.style.background = "#00000093  "
    sidePlus5.style.color = "rgb(253, 240, 0)"
    setTimeout(() => {
        sidePlus5.style.background = "transparent "
        sidePlus5.style.color = "transparent"
    },500)
})
sideMines5.addEventListener("dblclick" , function () {
    video.currentTime = Math.min(video.currentTime + 5 ,video.duration)
    sideMines5.style.background = "#00000093  "
    sideMines5.style.color = "rgb(253, 240, 0)"
    setTimeout(() => {
        sideMines5.style.background = "transparent "
        sideMines5.style.color = "transparent"
    },500)
})


////////////////////ورودی لینک ویدیو

let link = [
    "../images/معین - کنسرت-360p.mp4",
    "../images/a331d250-3953-4c2b-8d5f-e3af304fbdc9.mp4",
    "../images/e65b0cbe-7f73-4f30-986f-310d53633ef5.mp4"
]
//////////////////// video sources
let current = 0 ;
function slider (num) {
    video.src = link[num]
    video.play()
    playPause.textContent = "⏸"
}
function prevSlide () {
    current = ( current - 1 + link.length ) % link.length
    slider(current)
}
function nextSlide () {
    current = ( current + 1 ) % link.length
    slider(current)
}

////////////////// Video Timer

let videoTimer = document.getElementById("videoTimer")
function videoDuration (time) {

    let minets = Math.floor(time / 60)
    let second = Math.floor(time % 60)

    minets = minets.toString().padStart(2,"0")
    second = second.toString().padStart(2,"0")

    return `${minets}:${second}`
}
video.addEventListener("loadedmetadata" , () => {
    videoTimer.textContent = `00:00 | ${videoDuration(video.duration)}`
})
video.addEventListener("timeupdate" , () => {
    videoTimer.textContent = `${videoDuration(video.currentTime)} | ${videoDuration(video.duration)}`
})

////////////////////// Movie Uploader

let nameUploader = document.querySelector(".nameUploader")
let uploaderImg = document.getElementById("uploaderImg")
let uplaodeBtn = document.getElementById("uplaodeBtn")

movieAdder.addEventListener("change", () => {
    let file = movieAdder.files[0]; // اولین فایلی که انتخاب شده
    if (file) {
        let fileURL = URL.createObjectURL(file); // ساختن آدرس موقت
        link.unshift(fileURL)
        uplaodeBtn.textContent = "در حال ارسال"
        uploaderImg.src = "../images/icons8-tick-cloud/icons8-tick-300.gif"
        setTimeout(() => {
            uplaodeBtn.textContent = "ارسال شد"
            uplaodeBtn.style.color = "#000"
        },1000)
        setTimeout(() => {
            nameUploader.style.visibility = "visible"
            nameUploader.textContent = file.name
        },2000)
        setTimeout(() => {
            uploaderImg.src = "../images/icons8-photo.gif"
            uploaderImg.style.width = "100px"
            uploaderImg.style.height = "100px"
            video.src = fileURL
        },3000)
    }
});

////////////////////// Play &  Pause
let music = document.getElementById("music")
let musicPlayPuase = document.getElementById("musicPlayPuase")
let i3 = true ;
musicPlayPuase.addEventListener("click" , () => {
    if (i3) {
        music.play()
        i3 = false ;
        musicPlayPuase.textContent = "⏸"
    }
    else {
        music.pause()
        i3 = true ;
        musicPlayPuase.textContent = "▶"
    }
})



/////////////////////////////////Music Rangement

let musicRnage = document.getElementById("musicRnage")
music.addEventListener("loadedmetadata" , () => {
    musicRnage.max = music.duration
})
music.addEventListener("timeupdate" , () => {
    musicRnage.value = music.currentTime ;
})
musicRnage.addEventListener("input" , () => {
    music.currentTime = musicRnage.value;
})
///////////////////// mute $ unmute

let musicMute = document.getElementById("musicMute");
let i4 = true ; 
musicMute.addEventListener("click" , () => {
    if (i4) {
        music.muted = true ;
        musicMute.innerHTML = `<i class="fas fa-volume-mute"></i>` ;

        i4 = false;
    }
    else {
        music.muted = false ; 
        musicMute.innerHTML = `<i class="fas fa-volume-up"></i>`
        i4 = true
    }
    console.log(music.currentTime);
    
})


//////////////////// Volume Rangement 


let musicvolume  = document.getElementById("musicvolume")
musicvolume.addEventListener("input" , () => {
    music.volume = musicvolume.value
    
    if (music.volume == 0 ) {
        musicMute.innerHTML = `<i class="fas fa-volume-mute"></i>` ;
    }
    else {
        musicMute.innerHTML = `<i class="fas fa-volume-up"></i>`
    }
})

///////////////// Music Timer 

let musicTime = document.getElementById("musicTime")

function musicDuration (time) {
    let min = Math.floor(time / 60)
    let sec = Math.floor(time % 60)

    min = min.toString().padStart(2 , "0")
    sec = sec.toString().padStart(2 , "0")

    return `${min}:${sec}`
}
music.addEventListener("loadedmetadata" , () => {
    musicTime.textContent = `00:00 | ${musicDuration(music.duration)}`
})

music.addEventListener("timeupdate" , () => {
    musicTime.textContent = `${musicDuration(music.currentTime)} | ${musicDuration(music.duration)}`
})

//////////////////////////////// link 

let musicLink = [
    {name : "Che Sali Beshe Emsal.mp3" ,
         src : "../images/music/Moein - Che Sali Beshe Emsal.mp3" ,
          img : "../images/music/معین1.webp"},

    {name : "Elaheh Naaz.mp3" ,
         src : "../images/music/Moein - Elaheh Naaz.mp3" ,
          img : "../images/music/معین 2.jpg"},

    {name : "Halghe Tala.mp3" ,
         src : "../images/music/Moein - Halghe Tala.mp3" ,
          img : "../images/music/tanaz.jfif"}

]
let musicImg = document.getElementById("musicImg")
musicImg.src = musicLink[0].img
let musicCurrent = 0 


function musicSlider (musicnum) {
    music.src = musicLink[musicnum].src
    musicImg.src = musicLink[musicnum].img
    music.play()
}
function nextmusic () {
    musicCurrent = (musicCurrent + 1) %musicLink.length
    musicSlider(musicCurrent)
    musicPlayPuase.textContent = "⏸"
}
function prevmusic () {
    musicCurrent = (musicCurrent - 1 + musicLink.length) %musicLink.length
    musicSlider(musicCurrent)
    musicPlayPuase.textContent = "⏸"
}


let musicVolum = document.querySelector(".musicVolum")
musicVolum.addEventListener("mouseenter" , () => {
    musicvolume.style.display = "block" ;
    musicVolum.style.padding = "0 15px 50px"
    musicVolum.style.width = "20px"
    musicVolum.style.heigth = "100px"
})
musicVolum.addEventListener("mouseleave" , () => {
    musicvolume.style.display = "none" ;
    musicVolum.style.padding = "5px"
    musicVolum.style.width = "auto"
    musicVolum.style.heigth = "auto"
})

musicImg.addEventListener("click" , () => {
    if (!document.fullscreenElement) {
        musicImg.requestFullscreen()
        musicImg.style.cursor = "zoom-out"
    }
    else {
        document.exitFullscreen()
        musicImg.style.cursor = "zoom-in"
    }
})
music.addEventListener("ended" , () => {
    nextmusic()
})



///////////////////// To Do List
let toDoListInput = document.getElementById("toDoListInput");
let toDOListButton = document.getElementById("toDOListButton");
let containerList = document.getElementById("containerList")


function toDoListSaver () {


    if (toDoListInput.value == "") {
        alertP.textContent = "خالیه"
        alertP.style.display = 'block'
        setTimeout(() => {
            alertP.style.display = 'none'
        },3000)
    }
    else {
        toDOListButton.innerHTML = `<i class="fa-solid fa-umbrella"></i>`
        setTimeout(() => {
            toDOListButton.innerHTML = `ذخیره`
        },1000) 
        ////////////create list 

        let li = document.createElement("li");
        li.textContent = toDoListInput.value ; 
        containerList.append(li)
        containerList.style.visibility = "visible"
        toDoListInput.value = ""
        // let i5 = true 
        // li.addEventListener("click" , () => {
            
        //     if (i5) {
        //         li.style.textDecoration = "line-through"
        //         i5 = false 
        //     }
        //     else if (!i5) {
        //         li.style.textDecoration = "none"
        //         i5 = true 
        //     }
        // })
        ///////////create span

        let span = document.createElement("span");
        span.innerHTML = `<i class="fa-solid fa-check"></i>`
        li.append(span)
        span.classList.add("tickToDoList")
        span.style.visibility = "hidden"
        
        //////////////// flag
        
        let flag = document.createElement('span')
        flag.title = "Not Done"
        flag.innerHTML = `<i class="fa-regular fa-flag"></i>`
        flag.classList.add("flagToDoList")
        li.append(flag) 
        
        let i6 = true ;
        flag.addEventListener("click" , () => {
            
            if(i6){
                flag.innerHTML = `<i class="fa-solid fa-flag"></i>`
                i6 = false
                span.style.visibility = "visible"
                span.title  = "Delete"
                flag.title = "Done"
            }
            else {
                flag.innerHTML = `<i class="fa-regular fa-flag"></i>`
                i6 = true
                span.style.visibility = "hidden"
                flag.title = "Note Done"
            }
        })

        //////////// remove list
        span.addEventListener("click" , function () {
            if (i6) {

            }
            else {
                let father = this.parentElement
                li.remove(father)
            }
        })
    }

}


let containerAnimation = document.querySelector(".containerAnimation") 
containerAnimation.addEventListener("dblclick" , (event) => {
    event.target.style.background = "red"

})
containerAnimation.addEventListener("click" , (event) => {
    event.target.style.background = "orange"

} , true)
containerAnimation.addEventListener("contexrmenu" , (event) => {
    containerAnimation.style.background = "blue"

} , true)


let source = [
    {src : "../images/new Background/alone-night-sky-scenery-4k-wallpaper-uhdpaper.com-536@5@f.jpg" ,
         alt : "alone night sky"},

    {src : "../images/new Background/alone-sunset-city-scenery-digital-art-4k-wallpaper-uhdpaper.com-435@5@c.jpg" ,
         alt : "alone sunset city"},

    {src : "../images/new Background/anime-visual-arts-room_3840x2160_xtrafondos.com (1).jpg" ,
         alt : "anime visual arts room" },

    {src : "../images/new Background/anime-yakuza-yokai-mask-katana-4k-wallpaper-uhdpaper.com-570@5@h.jpg" ,
         alt : "anime yakuza yokai mask katana"},

    {src : "../images/new Background/astronaut-pig_3840x2160_xtrafondos.com.jpg" ,
         alt : "astronaut pig" },

    {src : "../images/new Background/asus-rog-republic-of-gamers-logo_3840x2160_xtrafondos.com.jpg" ,
         alt : "asus rog republic of gamers logo" },

    {src : "../images/new Background/bmw-ac-schnitzer-acs8-5k-8k-7000x4669-179.jpg" ,
         alt : "../images/new Background/bmw-ac-schnitzer-acs8-5k-8k-7000x4669-179.jpg" },

    {src : "../images/new Background/cats-sunrise-anime-scenery-4k-wallpaper-uhdpaper.com-597@5@f.jpg"  ,
         alt :"../images/new Background/cats-sunrise-anime-scenery-4k-wallpaper-uhdpaper.com-597@5@f.jpg"  },

    {src : "../images/new Background/city-in-the-abstract-universe_5120x2880_xtrafondos.com.jpg" ,
         alt : "../images/new Background/city-in-the-abstract-universe_5120x2880_xtrafondos.com.jpg"  },

    {src : "../images/new Background/girl-cat-night-city-buildings-scenery-4k-wallpaper-uhdpaper.com-87@5@h.jpg"  ,
         alt : "../images/new Background/girl-cat-night-city-buildings-scenery-4k-wallpaper-uhdpaper.com-87@5@h.jpg"  },
         
    {src : "../images/new Background/honda-nsx-5k-8k-7241x4634-237.jpg"  ,
         alt : "../images/new Background/honda-nsx-5k-8k-7241x4634-237.jpg"  },

    {src : "../images/new Background/kane-house-dragon-ball_3840x2160_xtrafondos.com.jpg"  ,
         alt : "../images/new Background/kane-house-dragon-ball_3840x2160_xtrafondos.com.jpg"  },

    {src : "../images/new Background/moon-landscape-scenery-minimalist-digital-art-8k-wallpaper-uhdpaper.com-556@5@e.jpg"  ,
         alt : "../images/new Background/moon-landscape-scenery-minimalist-digital-art-8k-wallpaper-uhdpaper.com-556@5@e.jpg"  },

    {src : "../images/new Background/night-scenery-tree-digital-art-4k-wallpaper-uhdpaper.com-531@5@h.jpg"  ,
         alt : "../images/new Background/night-scenery-tree-digital-art-4k-wallpaper-uhdpaper.com-531@5@h.jpg"  },

    {src : "../images/new Background/night-sky-scenery-digital-art-4k-wallpaper-uhdpaper.com-12@5@g.jpg"  ,
         alt : "../images/new Background/night-sky-scenery-digital-art-4k-wallpaper-uhdpaper.com-12@5@g.jpg"  },

    // {src : "../images/new Background/ocean-car-floating-full-moon-scenery-digital-art-4k-wallpaper-uhdpaper.com-664@0@j.jpg"  ,
    //      alt : "../images/new Background/ocean-car-floating-full-moon-scenery-digital-art-4k-wallpaper-uhdpaper.com-664@0@j.jpg"  },
]

// let gallery = document.querySelector(".gallery")

// let favorite = []

// source.forEach( (el , ind) => {
//     gallery.innerHTML += `<div class="photo">
//             <img class="gallery-img" src="${el.src}" alt="${el.alt}">
//             <span id="heart"><i class="fa-regular fa-heart"></i></span>
//         </div>`;
        
//         let hearts = document.querySelectorAll("#heart")
//         hearts.forEach( (heart) => {
//             heart.addEventListener("click" , () => {
//                 load()
//                 let photo = source[ind]
//                 favorite.push(photo)
//                 heart.innerHTML = `<i class="fa-solid fa-heart"></i>`
//                 console.log(favorite)
//         })

//     })   
// })

// let favorites = document.querySelector(".favorites")  

// function load () {
//     favorite.forEach( el => {
//         favorites.innerHTML += `<img src="${el}" alt=""${el}>`
//         console.log(favorites);
// })
// }
let gallery = document.querySelector(".gallery");
let favorite = [];

source.forEach((el , ind) => {
  gallery.innerHTML += `
    <div class="photo">
        <img class="gallery-img" src="${el.src}" alt="${el.alt}">
        <span class="heart"><i class="fa-regular fa-heart"></i></span>
    </div>`;
});

// بعد از ساختن گالری، قلب‌ها رو انتخاب کن

let hearts = document.querySelectorAll(".heart");

hearts.forEach((heart, ind) => {
  heart.addEventListener("click", () => {
    let photo = source[ind];

    // چک کن که دوبار اضافه نشه
    if (!favorite.includes(photo)) {
        favorite.push(photo);
    }
    
    heart.innerHTML = `<i class="fa-solid fa-heart"></i>`;
    load();
  });
});

let favorites = document.querySelector(".favorites");

function load() {
    // پاک کن تا تکراری نشه
    favorites.innerHTML = "" ;
   

    favorite.forEach((el) => {
        favorites.innerHTML += `<img src="${el.src}" alt="${el.alt}">`;
  });
}






///////////////////////////Rock Paper Scissors

let computerChoies = document.querySelector('.computerChoies')
let YourChoise = document.querySelector('.YourChoise')
let win = document.querySelector('#win')
let tie = document.querySelector('#tie')
let lose = document.querySelector('#lose')
let final = document.querySelector('.final')
let choise = ["rock" , "paper" , "scissors"]

let winScore = 0 ;
let tieScore = 0 ;
let loseScore = 0 ;

function rockPaperScissors (you) {

    //////Computer Choise
    let random  = choise[Math.floor(Math.random() * 3)]
    
    YourChoise.textContent = `Your Choise : ${you}` ;
    computerChoies.textContent = `Computer Choise : ${random}`
    let result ;
    if (you === random) {
        final.textContent = "Tie"
        tieScore++
        tie.textContent = `Tie : ${tieScore}`
    }
    else {
        switch (you) {
            case 'rock' : random === "paper" ? final.textContent = "Lose" : final.textContent = "Win" ; break
            case 'paper' : random === "scissors" ? final.textContent = "Lose" : final.textContent = "Win" ; break
            case "scissors" : random === "rock" ? final.textContent = "Lose" : final.textContent = "Win" ; break
    }
        if (final.textContent === "Win") {
            winScore++
            win.textContent = `Win : ${winScore}`
    }
    
        if (final.textContent === "Lose") {
            loseScore++
            lose.textContent = `Lose : ${loseScore}`
    }
    }



}








