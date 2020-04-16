
$(document).ready(function() {
    $("a.scrollto").click(function() {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        return false;
    });
});

let map_toogle = document.getElementById("map_width");
let arrow_rotate = document.getElementById("arrow");

function map() {
    map_toogle.classList.toggle("map-scroll1");
    map_toogle.classList.toggle("map-scroll2");
    arrow_rotate.classList.toggle("arrow2");
    arrow_rotate.classList.toggle("arrow1");
};

//Константы



//Объекты

let member1 = new Array();
member1 = [
    "adam smith",
    "head-designer",
    "img/tm1.jpg",
    "95%",
    "90%",
    "90%",
    "80%",
    "95%",
    "90%",
    "90%",
    "80%"
];

let member2 = new Array();
member2 = [
    "david cosbi",
    "designer",
    "img/tm2.jpg",
    "85%",
    "89%",
    "73%",
    "70%",
    "85%",
    "89%",
    "73%",
    "70%"
];

let member3 = new Array();
member3 = [
    "jhon sheppard",
    "motion-designer",
    "img/tm3.jpg",
    "79%",
    "75%",
    "85%",
    "95%",
    "79%",
    "75%",
    "85%",
    "95%"
];

let memberInfo = new Array();
memberInfo = [
    document.getElementById("name").innerText,
    document.getElementById("profecy").innerText,    
    document.getElementById("memberphoto").src,
    document.getElementById("percent1").innerText,
    document.getElementById("percent2").innerText,
    document.getElementById("percent3").innerText,
    document.getElementById("percent4").innerText,
    document.getElementById("hr1").style.width,
    document.getElementById("hr2").style.width,
    document.getElementById("hr3").style.width,
    document.getElementById("hr4").style.width
];

let switchMember = memberInfo.forEach(function(arr) {
        memberInfo[i] = arr[i];
    }
);


let members = new Object();
members = {
    teamMate1: member1,
    teamMate2: member2,
    teamMate3: member3
};




