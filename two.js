
let loader = document.querySelector(".loader")
setTimeout(
    () => {
        setTimeout(() => {
            loader.style.display = "none";
        }, 0)

    }, 1500)
//_____________________________________________________________________________________
let voice = false;
let id0, id1, id2, id3, id4, id5;
function fortym(time) {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    if (min < 10) {
        min = "0" + min
    }
    if (sec < 10) {
        sec = "0" + sec
    }
    return min + ":" + sec
}



function reset() {
    let close = true;
    let list = document.querySelectorAll(".fls")
    list.forEach(e => {
        e.addEventListener("click", bigx);
    })
    async function bigx() {
        if (close) {

            this.style.display = "none"
            this.parentElement.setAttribute("class", "list listx")
            this.parentElement.children[0].setAttribute("class", "outx outxx")
            this.parentElement.children[1].style.display = "none"
            this.parentElement.children[2].style.display = "flex"
            this.parentElement.children[3].style.display = "flex"
            this.parentElement.children[4].style.display = "flex"
            this.parentElement.children[5].style.display = "flex"
            this.parentElement.children[0].children[0].setAttribute("class", "icn icnx")
            this.parentElement.children[0].children[1].setAttribute("class", "tetx tetxx")
            this.parentElement.children[0].children[0].children[0].setAttribute("class", "mx svgx")

            await srcx.pause();
            song = false;
            if (voice) {
                srcx.src = this.parentElement.children[0].children[1].innerText
                voice = false;
            } else {
                srcx.src = "sng/" + this.parentElement.children[0].children[1].innerText
            }
            await srcx.load();
            await srcx.play();
            if (!voice) {
                this.parentElement.children[2].children[1].max = srcx.duration;
                this.parentElement.children[2].children[2].innerText = fortym(srcx.duration)
                id = setInterval(() => {
                    this.parentElement.children[2].children[1].value = srcx.currentTime;
                    this.parentElement.children[2].children[0].innerText = fortym(srcx.currentTime)

                    if (srcx.currentTime == srcx.duration) {
                        clearInterval(id);
                        this.parentElement.children[3].children[1].children[2].dispatchEvent(new Event("click"));
                    }
                }, 1000)
            }
            close = false;

            document.querySelectorAll(".list").forEach(e => {
                e.style.backgroundColor = ""
            })
            this.parentElement.style.backgroundColor = "rgb(180,180,180)"
        }
    }
    //_____________________________________________________play pause________________________________
    let song = false;
    document.querySelectorAll(".plpx").forEach(e => {
        e.addEventListener("click", plpx)
    })
    function plpx() {
        if (!song) {
            srcx.pause();
            this.children[0].style.transform = "rotateX(0deg)"
            this.children[1].style.transform = "rotateX(90deg)"
            song = true;
        } else {
            srcx.play();
            this.children[0].style.transform = ""
            this.children[1].style.transform = ""
            song = false;
        }
    }
    //__________________________________________________replay___________________________________________
    document.querySelectorAll(".replax").forEach(e => {
        e.addEventListener("click", function () {
            this.style.fill = "darkgrey"
            setTimeout(() => { this.style.fill = "" }, 100)
            srcx.currentTime = "0"
        })
    })
    //______________________________________________auto next play_____________________________________

    //__________________________________________________volume___________________________________________
    document.querySelectorAll(".rngv").forEach(e => {
        e.addEventListener("input", volx)
    })
    function volx() {
        srcx.volume = this.value;
        document.querySelectorAll(".rngv").forEach(e => {
            e.value = this.value;
            x = 255 - this.value * 255;
            e.previousElementSibling.style.fill = "rgb(" + x + "," + x + "," + x + ")"
        })
    }
    //_________________________________________________set current play time________________________________________
    rngx = document.querySelectorAll(".rngx").forEach(e => {
        e.addEventListener("input", move)
    })
    function move() {
        srcx.currentTime = this.value;

    }

    //___________________________________________________next previous song_______________________________
    document.querySelectorAll(".bacx").forEach(e => {
        e.addEventListener("click", function () {

            if (this.parentElement.parentElement.parentElement.nextElementSibling) {
                this.parentElement.parentElement.parentElement.children[5].dispatchEvent(new Event("click"));
                this.parentElement.parentElement.parentElement.nextElementSibling.children[6].dispatchEvent(new Event("click"));
            } else { clearInterval(id); }
        });
    });

    document.querySelectorAll(".forx").forEach(e => {
        e.addEventListener("click", function () {
            if (this.parentElement.parentElement.parentElement.previousElementSibling) {
                this.parentElement.parentElement.parentElement.children[5].dispatchEvent(new Event("click"));
                this.parentElement.parentElement.parentElement.previousElementSibling.children[6].dispatchEvent(new Event("click"));
            } else { clearInterval(id); }
        });
    });
    //_____________________________________________________play speed_______________________________________________
    let sp = .25;
    document.querySelectorAll(".spd").forEach(ex => {
        ex.addEventListener("click", function () {

            sp = sp + .25;
            srcx.playbackRate = sp;
            alert("Song speed: " + sp)
            if (sp == "2") {
                sp = .5;
            }
        });
    })
    //________________________________________________________cut _______________________________
    let cutmu = document.querySelectorAll(".cutmu")
    cutmu.forEach(ex => {
        ex.addEventListener("click", smallx);
    })
    function smallx(event) {
        if (!close) {
            this.nextElementSibling.style = ""
            this.parentElement.setAttribute("class", "list")
            this.parentElement.children[0].setAttribute("class", "outx")
            this.parentElement.children[1].style.display = ""
            this.parentElement.children[2].style.display = ""
            this.parentElement.children[3].style.display = ""
            this.parentElement.children[4].style.display = ""
            this.parentElement.children[5].style.display = ""
            this.parentElement.children[0].children[0].setAttribute("class", "icn")
            this.parentElement.children[0].children[1].setAttribute("class", "tetx")
            this.parentElement.children[0].children[0].children[0].setAttribute("class", "mx")
            close = true;

            sp = .25;
            srcx.playbackRate = 1;
            this.previousElementSibling.previousElementSibling.children[1].children[1].children[0].style.transform = ""
            this.previousElementSibling.previousElementSibling.children[1].children[1].children[1].style.transform = ""
            clearInterval(id);
        }
    }
}
//____________________________________________add song to play__________________________________
document.querySelector("#addx",).addEventListener("change", function (e) {
    const file = e.target.files[0].name;
    console.log(file)
    ads(file);
    reset();
})
//_______________________________________________audio record____________________________________

let stream;
let mediaRecorder;
let chunks = [];
let no = [];
let rec = false;

let byx = document.querySelector(".byx");
let x = document.querySelector(".x");
let sv = document.querySelector(".sv");
let trec = document.querySelector(".trec");
let outmik = document.querySelector(".outmik");
let recx = document.querySelector(".recx");
let recxx = document.querySelector(".recxx");
let ptym = document.querySelector(".ptym");
let box = document.querySelector(".box");
let bigb = document.querySelector(".xbig");
let bigc = document.querySelector(".bigcir");
let cir = document.querySelector(".cir");
let onmice = document.querySelector(".onmice")

onmice.addEventListener("click", onmik);
function onmik() {
    byx.style.display = "flex"
    sv.style.display = "flex"
    trec.style.display = "flex"
    outmik.setAttribute("class", "outmik mikx")
    ptym.style.display = "flex"
    recx.style.display = "flex"
    box.setAttribute("class", "box boxx")
    bigb.setAttribute("class", "xbig xbigx")
    bigc.setAttribute("class", "bigcir bigcirx")
    cir.setAttribute("class", "cir cirx")
    onmice.setAttribute("class", "onmice onmicex")
}

byx.addEventListener("click", function () {
    if (rec) {
        startrec();
    }

    byx.style.display = ""
    sv.style.display = ""
    sv.style.opacity = ""
    sv.style.backgroundColor = ""
    trec.style.display = ""
    trec.style.color = ""
    trec.innerText = "Record your Voice..."
    onmice.style.fill = ""
    outmik.setAttribute("class", "outmik")
    ptym.style.display = ""
    ptym.style.opacity = ""
    recx.style.display = ""
    box.setAttribute("class", "box")
    bigb.setAttribute("class", "xbig")
    bigc.setAttribute("class", "bigcir")
    cir.setAttribute("class", "cir")
    onmice.setAttribute("class", "onmice")
})

document.querySelector(".recx").addEventListener("click", startrec)
async function startrec() {
    if (!rec) {
        try {
            srcx.pause();
            song = false;

            stream = await navigator.mediaDevices.getUserMedia({ audio: true })
            mediaRecorder = new MediaRecorder(stream);


            mediaRecorder.ondataavailable = (e) => {
                chunks.push(e.data);
            };

            mediaRecorder.onstop = () => {
                const blob = new Blob(chunks, { type: 'audio/wav' });
                const audioURL = URL.createObjectURL(blob);


                sv.style.cursor = "pointer"
                sv.innerText = "Save Voice"
                sv.style.opacity = "1"
                sv.addEventListener("click", svx)

                function svx() {
                    sv.style.backgroundColor = "rgb(179, 179, 179)";
                    sv.innerText = "Voice Saved";
                    sv.style.cursor = "no-drop"
                    sv.removeEventListener("click", svx)
                    voice = true
                    ads(audioURL);
                    reset();
                }


            };
            mediaRecorder.start();

            let m = 1;
            let loop = false;
            sv.innerText = "Save Voice"
            sv.style.backgroundColor = ""
            sv.style.opacity = ""
            ptym.style.opacity = "1"
            trec.innerText = "Your Voice is Recording..."
            trec.style.color = "red"
            id0 = setInterval(() => { ptym.innerText = fortym(m++) }, 1000);
            id1 = setInterval(() => { recxx.style.width = "12px"; }, 500)
            id2 = setInterval(() => { recxx.style.width = "17px" }, 1000);
            id3 = setInterval(() => {
                if (!loop) {
                    bigb.style.width = "220px"
                    bigc.style.width = "190px"
                    cir.style.width = "170px"
                    onmice.style.fill = "red"
                    loop = true
                } else {
                    bigb.style.width = ""
                    bigc.style.width = ""
                    cir.style.width = ""
                    onmice.style.fill = ""
                    loop = false
                }
            }, 1500);
            rec = true
        } catch { trec.innerText = "Opps... you blocked audio"; trec.style.color = "red" }
    } else {
        srcx.play();
        song = true;
        mediaRecorder.stop();
        stream.getTracks().forEach(track => track.stop());


        onmice.style.fill = ""
        bigb.style.width = ""
        bigc.style.width = ""
        cir.style.width = ""
        recxx.style.width = ""
        trec.innerText = "Recording complete.";
        trec.style.color = "green"
        clearInterval(id0);
        clearInterval(id1);
        clearInterval(id2);
        clearInterval(id3);
        rec = false;

    }
}



//_______________________________________making false song____________________________________
let listx = document.querySelector(".list")
let srcx = document.querySelector(".srcx")
let photo = document.querySelector(".photo")
function ads(xy) {

    let newp = document.createElement("div")
    newp.setAttribute("class", "list")
    newp.innerHTML = listx.innerHTML;
    photo.appendChild(newp)
    newp.style.backgroundColor = "rgba(150,150,150)"
    setTimeout(() => { newp.style.backgroundColor = "" }, 1000)
    newp.children[0].children[1].innerText = xy;

}
ads("Uska_Hi_Banana__1920_Evil_Returns_Full_Video_Song_HD__Arijit_Singh.mp3")
ads("Apna_Bana_Le__Bhediya___Varun_Dhawan_C_Kriti_Sanon__Sachin_Jigar_C_Arijit_Singh_C_Amitabh_Bhattacharya(256k)(1).mp3")
ads("Armaan_Malik__Tootey_Khaab__Official_Video____Songster_C_Kunaal_Vermaa___Shabby___Bhushan_Kumar(256k).mp3")
ads("Bandeya__[slowed_and_reverb]_slowed_and_reverb_song_lofi.mp3");
ads("Chhor_Denge__Parampara_Tandon___Sachet-Parampara___Nora_Fatehi_C_Ehan_Bhat___Arvindr_K_C_Bhushan_Kumar(256k).mp3");
ads("DUA__Official_Video__Manan_Bhardwaj___Kaashish_Vohra_C_Rahul_Jaittly___Amanninder_Singh___Bhushan_K(256k).mp3");
ads("Full_Video__Malang__Title_Track___Aditya_Roy_Kapur_C_Disha_Patani_C_Anil_K_C_Kunal_K___Ved_S___Mohit_S(256k).mp3");
ads("Geet_Banuga__Official_Video__Kaka___Kaka_New_Song___Latest_Punjabi_Songs___New_Punjabi_Songs_2022(256k).mp3");
ads("Hamari_adhuri_Kahani_-_Lo-fi____Slowed_Reverb____Arjit_Singh___MUSIC_WORLD(256k).mp3");
ads("ek_chez_channa.mp3");
ads("Hum_Dum__Full_Video____Shiddat___Sunny_Kaushal_c_Radhika_Madan___Ankit_Tiwari___Gourov_Dasgupta(256k).mp3");
ads("Humdard_B_Slowed___Reverb_D_Ek_Villan___Arijit_Singh__(256k).mp3");
ads("Ijazzat_Hai_-_Shivin_Narang___Jasmin_Bhasin___Raj_Barman_C_Sachin_Gupta_C_Kumaar___Zee_Music_Originals(256k).mp3");
ads("Kalank_-_Arijit_Singh___Slowed_Reverb___Night_Chill_Club(256k).mp3");
reset();
