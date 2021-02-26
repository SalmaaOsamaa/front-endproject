const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;



function fixNav(){
   if(window.scrollY >= topOfNav){
       document.body.style.paddingTop = nav.offsetHeight + 'px';
       document.body.classList.add('fixed-nav');
   } else{
    document.body.style.paddingTop = 0;
       document.body.classList.remove('fixed-nav');
   }
}

window.addEventListener('scroll', fixNav);


    



$(document).ready(function(){

    

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(window).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},1000);
        return false;
    });

});
       
   
    
     



