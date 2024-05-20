function start(){
let splash= document.getElementById('splash');

splash.addEventListener('transitionend',() => {
document.getElementById('bgm').play();
splash.remove();
});
splash.classList.add('hide');
}
var interval = setInterval(function(){
          var countForVideo = document.getElementById('vid').readyState;
          if(countForVideo == 4){
            document.getElementById('vid').play();
            clearInterval(interval);
          }
        },2000);
