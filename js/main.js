// 卡片光影
$(function() {
    $('.thumbnail').each(function(i, obj){
       var $thumbnail = $(this);
       console.log('div' + i + ':' + $(this)); 
 
       $thumbnail.mousemove(function(e) {
          var offset = $thumbnail.offset();
          var divOffsetLeft = e.pageX - offset.left;
          var divOffsetTop = e.pageY - offset.top;
 
          $('span:first').text('( e.pageX, e.pageY ) : ( ' + e.pageX + ', ' + e.pageY + ' )');
          $('span:last').text('( x, y ) : ( ' + divOffsetLeft + ', ' + divOffsetTop + ' )');
 
          console.log(divOffsetLeft + ' ' + divOffsetTop);
 
          var maxRotateX = 8;
          var maxRotateY = 8;
 
 
          var fcHalfHeight = $thumbnail.height() / 2;
          var fcHalfWidth = $thumbnail.width() / 2;
 
          var diffX = -1 * (fcHalfWidth - divOffsetLeft);
          var diffY = fcHalfHeight - divOffsetTop;
 
          var rotateX = diffY / fcHalfHeight * maxRotateX;
          var rotateY = diffX / fcHalfWidth * maxRotateY;
 
          $thumbnail.css({
             "-webkit-transform": "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)",
             "-moz-transform": "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)",
             "-ms-transform": "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)",
             "transform": "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)"
          });
 
          var defaultLightWidth = 40;
          var defaultLightAngle = 45;
          var maxLightWidth = 25;
          var maxLightAngle = 20;
          
          var lightValue = {
            width: defaultLightWidth,
            angle: defaultLightAngle
          };
 
          lightValue.width = defaultLightWidth - (diffY / fcHalfHeight * maxLightWidth);
          lightValue.angle = defaultLightAngle + (diffX / fcHalfWidth * maxLightAngle);
 
          $(this).parent().find(".light").css({
             "background-image": "linear-gradient(" + lightValue.angle + "deg, black, transparent " + lightValue.width + "%)"
          });
       });
       
       
 
       $thumbnail.mouseleave(function() {
          $thumbnail.css({
             "-webkit-transform": "rotateX(0deg) rotateY(0deg)",
             "-moz-transform": "rotateX(0deg) rotateY(0deg)",
             "-ms-transform": "rotateX(0deg) rotateY(0deg)",
             "transform": "rotateX(0deg) rotateY(0deg)"
          });
 
          $(this).parent().find(".light").css({
             "background-image": "linear-gradient(45deg, black, transparent 40%)"
          });
       });
    });
 });


// restaurant_info 個平台評分與評論
let circularProgress = document.querySelector(".circular-progress"),
progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,    
progressEndValue = 90,    
speed = 100;

let progress = setInterval(() => {
   progressStartValue++;
   progressValue.textContent = `${progressStartValue}%`
   circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`
   if(progressStartValue == progressEndValue){
      clearInterval(progress);
   }    
}, speed);
