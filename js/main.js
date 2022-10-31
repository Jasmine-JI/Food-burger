// 卡片光影
// $(function() {
//     $('.thumbnail').each(function(i, obj){
//        var $thumbnail = $(this);
//        console.log('div' + i + ':' + $(this)); 
 
//        $thumbnail.mousemove(function(e) {
//           var offset = $thumbnail.offset();
//           var divOffsetLeft = e.pageX - offset.left;
//           var divOffsetTop = e.pageY - offset.top;
 
//           $('span:first').text('( e.pageX, e.pageY ) : ( ' + e.pageX + ', ' + e.pageY + ' )');
//           $('span:last').text('( x, y ) : ( ' + divOffsetLeft + ', ' + divOffsetTop + ' )');
 
//           console.log(divOffsetLeft + ' ' + divOffsetTop);
 
//           var maxRotateX = 8;
//           var maxRotateY = 8;
 
 
//           var fcHalfHeight = $thumbnail.height() / 2;
//           var fcHalfWidth = $thumbnail.width() / 2;
 
//           var diffX = -1 * (fcHalfWidth - divOffsetLeft);
//           var diffY = fcHalfHeight - divOffsetTop;
 
//           var rotateX = diffY / fcHalfHeight * maxRotateX;
//           var rotateY = diffX / fcHalfWidth * maxRotateY;
 
//           $thumbnail.css({
//              "-webkit-transform": "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)",
//              "-moz-transform": "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)",
//              "-ms-transform": "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)",
//              "transform": "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)"
//           });
 
//           var defaultLightWidth = 40;
//           var defaultLightAngle = 45;
//           var maxLightWidth = 25;
//           var maxLightAngle = 20;
          
//           var lightValue = {
//             width: defaultLightWidth,
//             angle: defaultLightAngle
//           };
 
//           lightValue.width = defaultLightWidth - (diffY / fcHalfHeight * maxLightWidth);
//           lightValue.angle = defaultLightAngle + (diffX / fcHalfWidth * maxLightAngle);
 
//           $(this).parent().find(".light").css({
//              "background-image": "linear-gradient(" + lightValue.angle + "deg, black, transparent " + lightValue.width + "%)"
//           });
//        });

//        $thumbnail.mouseleave(function() {
//           $thumbnail.css({
//              "-webkit-transform": "rotateX(0deg) rotateY(0deg)",
//              "-moz-transform": "rotateX(0deg) rotateY(0deg)",
//              "-ms-transform": "rotateX(0deg) rotateY(0deg)",
//              "transform": "rotateX(0deg) rotateY(0deg)"
//           });
 
//           $(this).parent().find(".light").css({
//              "background-image": "linear-gradient(45deg, black, transparent 40%)"
//           });
//        });
//     });
//  });


// restaurant_info 各平台評分與評論

window.addEventListener("scroll",function(){
   
   if(document.documentElement.scrollTop > 300 && document.documentElement.scrollTop<350){
      // Food Burger 

let circularProgress1 = document.querySelector(".circular-progress1"),
progressValue1 = document.querySelector(".progress-value1");

let progressStartValue1 = 0,    
progressEndValue1 = 4,    
speed1 = 200;

let progress1 = setInterval(() => {
   progressStartValue1++;
   progressValue1.textContent = `${progressStartValue1}`
   circularProgress1.style.background = `conic-gradient(#ffd558 ${progressStartValue1 * 72}deg, #ededed 0deg)`
   if(progressStartValue1 == progressEndValue1){
      clearInterval(progress1);
   }    
}, speed1);

// Food Panda
let circularProgress2 = document.querySelector(".circular-progress2"),
progressValue2 = document.querySelector(".progress-value2");

let progressStartValue2 = 0,    
progressEndValue2 = 5,    
speed2 = 200;

let progress2 = setInterval(() => {
   progressStartValue2++;
   progressValue2.textContent = `${progressStartValue2}`
   circularProgress2.style.background = `conic-gradient(#ffd558 ${progressStartValue2 * 72}deg, #ededed 0deg)`
   if(progressStartValue2 == progressEndValue2){
      clearInterval(progress2);
   }    
}, speed2);

// Uber Eats
let circularProgress3 = document.querySelector(".circular-progress3"),
progressValue3 = document.querySelector(".progress-value3");

let progressStartValue3 = 0,    
progressEndValue3 = 3,    
speed3 = 200;

let progress3 = setInterval(() => {
   progressStartValue3++;
   progressValue3.textContent = `${progressStartValue3}`
   circularProgress3.style.background = `conic-gradient(#ffd558 ${progressStartValue3 * 72}deg, #ededed 0deg)`
   if(progressStartValue3 == progressEndValue3){
      clearInterval(progress3);
   }    
}, speed3);

// Google
let circularProgress4 = document.querySelector(".circular-progress4"),
progressValue4 = document.querySelector(".progress-value4");

let progressStartValue4 = 0,    
progressEndValue4 = 4,    
speed4 = 200;

let progress4 = setInterval(() => {
   progressStartValue4++;
   progressValue4.textContent = `${progressStartValue4}`
   circularProgress4.style.background = `conic-gradient(#ffd558 ${progressStartValue4 * 72}deg, #ededed 0deg)`
   if(progressStartValue4 == progressEndValue4){
      clearInterval(progress4);
   }    
}, speed4);
   }
});


// swiper
var swiper = new Swiper(".pictures", {
   slidesPerView: 3,
   spaceBetween: 20,
   slidesPerGroup: 1,
   loop: true,
   centerSlide: 'true',
   fade: 'true',
   grabCursor: 'true',
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
     dynamicBullets: true,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },

   // breakpoints:{
   //     0: {
   //         slidesPerView: 1,
   //     },
   //     520: {
   //         slidesPerView: 2,
   //     },
   //     950: {
   //         slidesPerView: 3,
   //     },
   // },
 });
