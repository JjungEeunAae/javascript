document.addEventListener("DOMContentLoaded",function(){
  document.addEventListener("mousemove", function(event){
    // console.log(event);
    let img = document.querySelector('img');
    img.style.left = event.clientX + 'px';
    img.style.top = event.clientY + 'px';
  })
})