$('.search-button').click(function(){
  $(this).parent().toggleClass('open');
});





// Carousel 
$('.owl-carousel').owlCarousel({
loop:true,
margin:20,
nav:true,
responsive:{
    0:{
      items:1
    },
    600:{
     items:3
    },
    1000:{
      items:5
    }
  }
})
// Carousel END




$('.relay-items').click(function(){

    if ($('.relay-items').hasClass('off')){
        $.ajax({
  			url: "http://192.168.1.100:100",
  		})
		$('.relay-items').removeClass('off');
		$('.relay-items').addClass('on');
    }else {
        $.ajax({
			  url: "http://192.168.1.34",
		})
  
	  $('.relay-items').removeClass('on');
	  $('.relay-items').addClass('off');    
    }
});


$('.relay-items-1').click(function(){

    if ($('.relay-items-1').hasClass('off')){
        $.ajax({
  			url: "http://192.168.1.10:100",
  		})
		$('.relay-items-1').removeClass('off');
		$('.relay-items-1').addClass('on');
    }
    else {
        $.ajax({
			  url: "http://192.168.1.20:200",
		})
  
	  $('.relay-items-1').removeClass('on');
	  $('.relay-items-1').addClass('off');    
    }
});



// $('.slider-button-1').click(function(){
//     if ($(this).text() == "off"){
//         $(this).addClass('on').html('on');
//         $('#page').attr('src','http://localhost:84/inpage.html');
//     }else if($(this).text() == "on"){
//         $(this).removeClass('on').html('off');
//         $('#page').attr('src','http://localhost:84/index.html');
//     }
// });



  function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridiem = "AM";
    
    if (hours < 12){
    }

    if (hours > 12){
      hours = hours - 12;
      meridiem = "PM";
    }

    if (hours === 0 ){
      hours = 12;
    }
    if(hours < 10){
       hours = "0" + hours;
       }
    if(minutes < 10) {
      minutes = "0" + minutes;
    }
    if(seconds < 10){
       seconds = "0" + seconds;
    }
    
    var mor = "GOOD MORNING";
    var greet = document.getElementsByClassName("greetings");
    greet.innerHTML = mor;
    
    // This gets a "handle" to the clock div in our HTML
    var clockDiv = document.getElementById('clock');
     // Then we set the text inside the clock div
    // to the hours, minutes, and seconds of the current time
    clockDiv.innerHTML = hours + ":" + minutes + ":" + meridiem;

    // jane fshire sekondat ---- + seconds + " " 

  }
  // This runs the displayTime function the first time
  displayTime();
  setInterval(displayTime, 1000);

function showDate() {
  
  var weekday = new Array(7);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "E Merkure";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
 
  var month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sept";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";
  
  var todayDate = new Date();
  var days = weekday[todayDate.getDay()];
  var months = month[todayDate.getMonth()];
  var year = todayDate.getFullYear();
  
  var dateDiv = document.getElementById('date');
  dateDiv.innerHTML = days + ", "+ months + " " + year;
}

showDate();







$(document).ready(function(){
  $("button").click(function(){
    $(".test").addClass("important");
  });
});

