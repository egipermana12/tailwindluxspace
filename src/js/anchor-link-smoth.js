const scroolSmoth = document.querySelectorAll("a[href^='#']");
for (let i = 0; i < scroolSmoth.length; i++) {
	const el = scroolSmoth[i];
	el.addEventListener('click', function(ev){
		ev.preventDefault();
		console.log(this.getAttribute("href"));
		if(document.getElementById(this.getAttribute("href").replace("#", "")));
		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior: "smooth"
		});
	});
}