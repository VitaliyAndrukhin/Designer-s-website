function switch_member_1(){document.getElementById("name").innerText="jane smith",document.getElementById("profecy").innerText="head-designer",document.getElementById("percent1").innerText="95%",document.getElementById("percent2").innerText="90%",document.getElementById("percent3").innerText="90%",document.getElementById("percent4").innerText="80%",document.getElementById("hr1").style.width="95%",document.getElementById("hr2").style.width="90%",document.getElementById("hr3").style.width="90%",document.getElementById("hr4").style.width="80%",document.getElementById("memberphoto").src="img/tm1.jpg"}function switch_member_2(){document.getElementById("name").innerText="david cosbi",document.getElementById("profecy").innerText="designer",document.getElementById("percent1").innerText="85%",document.getElementById("percent2").innerText="89%",document.getElementById("percent3").innerText="73%",document.getElementById("percent4").innerText="70%",document.getElementById("hr1").style.width="85%",document.getElementById("hr2").style.width="89%",document.getElementById("hr3").style.width="73%",document.getElementById("hr4").style.width="70%",document.getElementById("memberphoto").src="img/tm2.jpg",document.getElementById("memberphoto").style.backgroundPositionX="40%"}function switch_member_3(){document.getElementById("name").innerText="jhon sheppard",document.getElementById("profecy").innerText="motion-designer",document.getElementById("percent1").innerText="79%",document.getElementById("percent2").innerText="75%",document.getElementById("percent3").innerText="85%",document.getElementById("percent4").innerText="95%",document.getElementById("hr1").style.width="79%",document.getElementById("hr2").style.width="75%",document.getElementById("hr3").style.width="85%",document.getElementById("hr4").style.width="95%",document.getElementById("memberphoto").src="img/tm3.jpg"}$(document).ready((function(){$("a.scrollto").click((function(){var e=$(this).attr("href"),t=$(e).offset().top;return jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop:t},800),!1}))}));let map_toogle=document.getElementById("map_width"),arrow_rotate=document.getElementById("arrow");function map(){map_toogle.classList.toggle("map-scroll1"),map_toogle.classList.toggle("map-scroll2"),arrow_rotate.classList.toggle("arrow2"),arrow_rotate.classList.toggle("arrow1")}