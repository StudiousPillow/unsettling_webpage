
// Image slider
const initSlider = () => {
    const slideButtons = document.querySelectorAll(".img-container .arrow");
    const imageList = document.querySelector(".img-container .images") 

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id ==="prev" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({left: scrollAmount, behavior: "smooth"})
        })  
    })
}
window.addEventListener("load", initSlider);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  

  
// Formulaire
function add_qs(){
    if(document.getElementById("job").value==="chercheur"){
        document.getElementById("BI").style.display = "flex"
    };
    if(document.getElementById("bioui").checked){
        document.getElementById("protein").style.display = "flex";
    };
    if(document.getElementById("prot").checked){
        document.getElementById("docking").style.display = "flex"
    };
    if(document.getElementById("prot").value==="pLGIC"){
        document.getElementById("docking").style.display = "flex"
    };
    if(document.getElementById("dockoui").checked){
        document.getElementById("description").style.display = "flex";
        document.getElementById("pasteur").style.display = "flex"
    };
    if(document.getElementById("pastoui").checked){
        document.getElementById("UP").style.display = "flex"
    };
    if(document.getElementById("upoui").checked){
        document.getElementById("murail").style.display = "flex"
    };
}
function arrive(){
    if (document.getElementById("muroui").checked) {
        document.getElementById("animation").style.display = "flex";
        sleep(2000).then(() => { document.getElementById("animation2").style.display = "flex"; });
        epitaphe = document.getElementById("descr").value
        document.getElementById("citation").innerHTML = "-" + epitaphe
    }
}
function reset(){
    console.log("test");
    const hiddenquestions = document.querySelectorAll(".hidden");
    hiddenquestions.forEach(hide => {
        hide.style.display = 'none'; 
    })
}

// information leaks
function Get(yourUrl){
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}



var jsonWeb = JSON.parse(Get("https://api.db-ip.com/v2/free/self")) 
textfonts = "" ;
const listfonts = ["16px Times new roman", "16px molot", "16px Courier", "16px Roboto"];
listfonts.forEach(font => {
    if (document.fonts.check(font)) {
        textfonts = textfonts + " : " + font
    }
});

if(document.fonts)
function leak(){
    document.getElementById("leakedinfo").innerHTML = "Votre adresse ip est " + 
    jsonWeb.ipAddress
    + " et vous êtes à " + jsonWeb.city + ".<br><br>" 
    + "Navigateur : " + navigator.userAgent + "<br><br>"
    + "OS : " + navigator.platform + "<br><br>"
    + "Ces polices sont présentes sur votre système " + textfonts + "<br>"
    
}

//head
function headin(){
    console.log("head");
    document.getElementById("head").style.display = "flex";
    sleep(1000).then(() => { document.getElementById("head").style.display = "none"; });
}

// useless button
var count = 0;
function button_function(){
    count = count + 1;
    console.log(count)
    if(count===15){;
        document.getElementById("achievement_container").style.display = "flex"
        document.getElementById("achievement").innerHTML = "You have clicked " + count + " times on a useless button! Congratulations!"
        sleep(4000).then(() => { document.getElementById("achievement_container").style.display = "none"; });
    };
    if(count===40){
        document.getElementById("useless").style.display = "none"
        document.getElementById("achievement_container").style.display = "flex"
        document.getElementById("achievement").innerHTML = "You have destroyed a useless button! <br> How fun!"
        sleep(4000).then(() => { document.getElementById("achievement_container").style.display = "none"; });
    }
}
