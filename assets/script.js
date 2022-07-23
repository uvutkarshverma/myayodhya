/* setTimeout(() => {
   let vide = document.getElementById("sliderimages");
   vide.innerHTML = '<video src="http://127.0.0.1:5501/assets/video.mp4" autoplay loop></video>'
}, 5000); */




/* Script to make image color grayscale effect */ 

let image1 = document.querySelectorAll(".image1");
image1.forEach(element => {
var observer = new IntersectionObserver(function(entries) {
    /* console.log(entries); */
	if(entries[0]['isIntersecting'] === true) {
		if(entries[0]['intersectionRatio'] === 1)
      console.log("done");
      element.style.filter = "none";
      element.style.transition = "all 1s ease-in-out";
	}else{
      element.style.filter = "grayscale(1)";
   }
}, { threshold: [0.7] });

observer.observe(element);
});



const open = document.querySelector('.container1');
    const close = document.querySelector('.close');
    var tl = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } });
    open.addEventListener('click', () => {
        if (tl.reversed()) {
            tl.play();
        } else {
            tl.to('.navmob1', { right: 0 })
                .to('.navmob1', { height: '100vh' }, '-=.1')
                .to('.navmob1 ul li a', { opacity: 1, pointerEvents: 'all', stagger: .2 }, '-=.8')
                .to('.close', { opacity: 1, pointerEvents: 'all' }, "-=.8")
                .to('.navmob1 h2', { opacity: 1 }, '-=1');
        }
    });

    close.addEventListener('click', () => {
        tl.reverse();
    });
