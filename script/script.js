let language = 0;
$(document).ready(function(){
	$("#za_podesavanje").click(function() {
		if(language == 0){
			language = 1;
			$("#za_podesavanje").attr("src", "images/zastava_srbije_small.png");
			$(".dugme_cv").attr("href", "assets/cv/serbian_cv.pdf");
		} else {
			language = 0;
			$("#za_podesavanje").attr("src", "images/zastava_britanije_small.png");
			$(".dugme_cv").attr("href", "assets/cv/english_cv.pdf");
		}
	});
});

$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(800,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(200,0);}
      }
    });
	$(".fade_fast").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(400,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(200,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});

window.onload = function hideShowFlakes() {
	var d = new Date();
	if(d.getMonth() >= 10 || d.getMonth() <= 1){ //Ide od 0 do 11.
		toggleFlakes();
	}
}

function toggleFlakes(){
	var snowflake = document.getElementById("snowflakes");
	var display = getComputedStyle(snowflake).display;
    if (display == "none") {
        snowflake.style.display = "inline";
    } else {
        nowflake.style.display = "none";
    }
}

$(window).bind('scroll', function() {
    let home;
	let about;
	let skills;
	let projects;
	let contact;
	home = $('#home').outerHeight() - 102.0;
	about = home + $('#about').outerHeight();
	skills = about + $('#skills').outerHeight();
	projects = skills + $('#projects').outerHeight();
	contact = projects + $('#contact').outerHeight();
	if($(window).scrollTop() < home){
		const collection = document.getElementsByClassName("home_btn");
		for (let i = 0; i < collection.length; i++) {
		  collection[i].style.backgroundColor = "black";
		  collection[i].style.color = "white";
		}
	} else {
		const collection = document.getElementsByClassName("home_btn");
		for (let i = 0; i < collection.length; i++) {
		  collection[i].style.backgroundColor = "inherit";
		  collection[i].style.color = "inherit";
		}
	}
	if($(window).scrollTop() < about && $(window).scrollTop() >= home){
		const collection = document.getElementsByClassName("about_btn");
		for (let i = 0; i < collection.length; i++) {
		  collection[i].style.backgroundColor = "black";
		  collection[i].style.color = "white";
		}
	} else {
		const collection = document.getElementsByClassName("about_btn");
		for (let i = 0; i < collection.length; i++) {
		  collection[i].style.backgroundColor = "inherit";
		  collection[i].style.color = "inherit";
		}
	}
	if($(window).scrollTop() < skills && $(window).scrollTop() >= about){
		const collection = document.getElementsByClassName("skills_btn");
		for (let i = 0; i < collection.length; i++) {
		  collection[i].style.backgroundColor = "black";
		  collection[i].style.color = "white";
		}
	} else {
		const collection = document.getElementsByClassName("skills_btn");
		for (let i = 0; i < collection.length; i++) {
		  collection[i].style.backgroundColor = "inherit";
		  collection[i].style.color = "inherit";
		}
	}
	if($(window).scrollTop() < projects && $(window).scrollTop() >= skills){
		const collection = document.getElementsByClassName("projects_btn");
		for (let i = 0; i < collection.length; i++) {
		  collection[i].style.backgroundColor = "black";
		  collection[i].style.color = "white";
		}
	} else {
		const collection = document.getElementsByClassName("projects_btn");
		for (let i = 0; i < collection.length; i++) {
		  collection[i].style.backgroundColor = "inherit";
		  collection[i].style.color = "inherit";
		}
	}
	if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight-25) {
        const collection = document.getElementsByClassName("contact_btn");
		for (let i = 0; i < collection.length; i++) {
		  collection[i].style.backgroundColor = "black";
		  collection[i].style.color = "white";
		}
		const collection_dva = document.getElementsByClassName("projects_btn");
		for (let i = 0; i < collection_dva.length; i++) {
		  collection_dva[i].style.backgroundColor = "inherit";
		  collection_dva[i].style.color = "inherit";
		}
    } else {
		const collection = document.getElementsByClassName("contact_btn");
		for (let i = 0; i < collection.length; i++) {
		  collection[i].style.backgroundColor = "inherit";
		  collection[i].style.color = "inherit";
		}
	}
});