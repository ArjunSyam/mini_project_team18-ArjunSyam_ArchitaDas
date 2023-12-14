const bg = document.getElementById('head_pic');
window.addEventListener('scroll',function(){
    bg.style.backgroundSize = 160 - + window.pageYOffset/12 + '%';
})