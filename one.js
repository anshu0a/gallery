//____________________________________________________loader________________________________________

// let loader=document.querySelector(".loader")
// let no=document.querySelector(".noload")
// setTimeout( 
//     ()=>{
//        setTimeout(()=>{loader.style.display="none";
//     },0)

// },1500)
//_________________________________________________camera__on____________________________________________
let stream;
let outcamera = document.querySelector(".outcamera");
let note = document.querySelector(".note");
let cam = document.querySelector(".cax");
let capt = document.querySelector(".capt");
document.querySelector(".clkcam").addEventListener("click", onho)
function onho() {
    outcamera.style.display = "flex"
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(str => {
            note.innerText = "Web camera is live"
            capt.style.display = "flex"
            cam.srcObject = str;
            stream = str;
        })
        .catch(e => {
            console.log("error" + e)
            note.innerText = "You blocked Web camera"
        })
    // setTimeout(() => { back(); }, 60000)
}
//_________________________________________________camera capture___and uplode itself______________________________
canvas = document.querySelector(".canvas")
let mainx = document.querySelector(".inmain")
let sec = document.querySelector(".sec")
let big = document.querySelector(".big")

capt.addEventListener('click', heex)
function heex() {
    note.innerText = "Picture captured";
    note.style.color = "red";
    note.style.backgroundColor = "white"
    canvas.getContext('2d').drawImage(cam, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL('image/png');

    let newp = document.createElement("div");

    if (mainx.children[mainx.childElementCount - 1].children[0].innerText !== (da + " " + m)) {

        newp.setAttribute("class", "sec")
        newp.innerHTML = sec.innerHTML;
        mainx.appendChild(newp)
        newp.children[0].innerText = da + " " + m;
        heex();
        // newp.children[1].children[0].children[0].children[1].src=imageData
    } else {
        newp.setAttribute("class", "big")
        newp.innerHTML = big.innerHTML;
        mainx.children[mainx.childElementCount - 1].children[1].appendChild(newp)
        newp.children[0].children[1].src = imageData
        reset();
    }
    setTimeout(()=>{back();},500)
}

//________________________________________________camera back____________________________________
document.querySelector(".bck").addEventListener("click", back)
function back() {
    if (stream) {
        let tr = stream.getTracks();
        tr.forEach(function (tr) {
            tr.stop();
        })
    }
    note.innerText = "Click allow for camera"
    outcamera.style.display = "";
    capt.style.display = "none"
    cam.setAttribute("class", "camera")
}

//___________________________________________________creating false pic______________________________
function creat() {
    let newp = document.createElement("div");
    newp.setAttribute("class", "sec")
    newp.innerHTML = sec.innerHTML;
    mainx.appendChild(newp)
};
function addphoto(x, y) {
    for (let i = x; i <= y; i++) {
        let newp = document.createElement("div");
        newp.setAttribute("class", "big")
        newp.innerHTML = big.innerHTML;
        mainx.children[mainx.childElementCount - 1].children[1].appendChild(newp)
        newp.children[0].children[1].src = "img/sa" + i + ".jpg"
    }
};
creat();
addphoto(0,2);
creat();
addphoto(3,8);
creat();
addphoto(9,11);
creat();
addphoto(12,20);
creat();
addphoto(21,33);
creat();
addphoto(34,38);
creat();
addphoto(39,40);
let datex = document.querySelectorAll(".date")
datex[7].innerText="9 April"
datex[6].innerText="7 April"
datex[5].innerText="1 April"
datex[4].innerText="31 March"
datex[3].innerText="29 March"
datex[2].innerText="25 March"
datex[1].innerText="22 March"
//___________________________add picture______________________________________________________

put = document.querySelector("#add")
put.addEventListener("change", nnx);
function nnx() {
    let newp = document.createElement("div");
    if (mainx.children[mainx.childElementCount - 1].children[0].innerText !== (da + " " + m)) {

        newp.setAttribute("class", "sec")
        newp.innerHTML = sec.innerHTML;
        mainx.appendChild(newp)
        newp.children[0].innerText = da + " " + m;
        nnx();
        // newp.children[1].children[0].children[0].children[1].src=imageData
    } else {
        newp.setAttribute("class", "big")
        newp.innerHTML = big.innerHTML;
        mainx.children[mainx.childElementCount - 1].children[1].appendChild(newp)
        newp.children[0].children[1].src = URL.createObjectURL(put.files[0])
        reset();
    }
}
// ____________________________________________________adding date________________________________

const mth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let d = new Date().getMonth();
m = mth[d]
da = new Date().getDate()
// document.querySelector(".date").innerText = (da + " " + m)

function reset() {
    //__________________________________________________delete pic_______________________________________________

    document.querySelectorAll(".delt").forEach(e => {
        e.addEventListener("click", xxcut)
    })

    function xxcut() {
        this.parentElement.parentElement.parentElement.remove()
    }

    //__________________________________________________fav______________________________________________________

    document.querySelectorAll(".fav").forEach(e => {
        e.addEventListener("click", redd)
    })
    function redd() {
        this.style.fill = "red"
    }
    //_______________________________________________click on pic_________________________________________________

    let small = document.querySelectorAll(".small");
    small.forEach(e => {
        e.addEventListener("click", zoom)
    });
    function zoom() {
        he = this;
        this.previousElementSibling.style.display = "flex"

        this.setAttribute("class", "small smallx")

        setTimeout(() => {
            let ingh = he.height
            if (ingh>="70vh") {
                console.log(ingh)
                he.style.height = "auto"
            } else {
                console.log("hello")
                he.style.width = "auto"

            }
        }, 1)
        this.parentElement.setAttribute("class", "midx")
    }
    function viewPoint(x) {
        return x < window.innerHeight;
    }
    //________________________________________cut pic______________________________

    let cut = document.querySelectorAll(".cut");
    cut.forEach(e => {
        e.addEventListener("click", cutx);
    })
    function cutx() {
        this.parentElement.style.display = ""
        this.parentElement.nextElementSibling.nextElementSibling.style.display = ""
        this.parentElement.nextElementSibling.setAttribute("class", "small")
        this.parentElement.nextElementSibling.style.width = ""
        this.parentElement.nextElementSibling.style.height = ""
        this.parentElement.parentElement.setAttribute("class", "mid")
    }

    //__________________________________________edit__________________________
    document.querySelectorAll(".pen").forEach(e => {
        e.addEventListener("click", onnx);
    })
    function onnx() {
        this.style.fill = "rgb(0, 162, 255)"
        this.parentElement.children[0].style.fill = ""
        this.parentElement.nextElementSibling.nextElementSibling.style.display = "flex"
    }
    //___________________________________________range_____________________________

    document.querySelectorAll(".cnt").forEach(e => {
        e.addEventListener("click", type)

    });
    function type(e) {
        if (e.target.className == "") {
            this.nextElementSibling.children[0].innerText = e.target.innerText;
        }

        this.nextElementSibling.children[1].children[1].value = "0";
        this.nextElementSibling.children[1].children[3].innerText = "Save"
        this.nextElementSibling.children[1].children[3].style.backgroundColor = "grey"

    }

    document.querySelectorAll(".rng").forEach(e => {
        e.addEventListener("input", filterx)
    });
    function filterx() {

        let fi = this.parentElement.previousElementSibling.innerText.toLowerCase() + "(";
        let se = ""
        let th = ""
        if (fi == "blur(") {
            se = this.value * 5
            th = "px)"
        } else if (fi == "brightness(") {
            se = this.value * 2
            th = ")"
        } else if (fi == "grayscale(") {
            se = this.value
            th = ")"
        } else if (fi == "opacity(") {
            se = this.value
            th = ")"
        } else if (fi == "contrast(") {
            se = this.value * 2
            th = ")"
        } else if (fi == "saturate(") {
            se = this.value * 2
            th = ")"
        } else if (fi == "hue-rotate(") {
            se = this.value * 200
            th = "deg)"
        } else if (fi == "sepi(") {
            se = this.value
            th = ")"
        } else if (fi == "invert(") {
            se = this.value
            th = ")"
        }

        this.parentElement.parentElement.parentElement.previousElementSibling.style.filter = fi + se + th

    }
    //_______________________________________click on save_____________________________________________________________
    document.querySelectorAll(".save").forEach(e => {
        e.addEventListener("click", okx)
    });
    function okx(e) {
        this.style.backgroundColor = "red";
        this.innerText = "Saved";

        // this.previousElementSibling.previousElementSibling.value
    }
}
reset();