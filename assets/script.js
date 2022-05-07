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
