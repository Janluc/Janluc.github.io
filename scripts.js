
let articles = document.getElementsByTagName("article")
fadeAllElements()
window.onscroll = () => {
  fadeAllElements()
}

function checkVisible(elm) {  
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

function FadeElement(el){
  if(checkVisible(el)){
    el.classList.add("animate__animated");
    el.classList.add("animate__fadeInLeft");
  }
}

function fadeAllElements(){
    for (const el of articles) {
    FadeElement(el)
  }
}
 
