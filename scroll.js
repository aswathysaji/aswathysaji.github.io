const btnScrollToTop = document.querySelector(".btnScrollToTop");

const scrollFunc = () => {
    // Get the current scroll value
    let y = window.scrollY;
    
    // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
    if (y > 0) {
        btnScrollToTop.className = "btnScrollToTop show";
    } else {
        btnScrollToTop.className = "btnScrollToTop hide";
    }
  };
  
  window.addEventListener("scroll", scrollFunc);
  

btnScrollToTop.addEventListener('click', function () {

    //window.scrollTo(0,0);

    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    });
});