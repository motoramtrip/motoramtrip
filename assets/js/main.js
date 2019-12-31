//Animate smooth scroll - Little help by Miguel Cosme => https://github.com/MiguelCosme 
function scrollDown(elementId) { 
    
	const t = document.getElementById(elementId).offsetTop;
	const h  = document.getElementById('header').offsetHeight;

	//remove the fixed header height
	const y = t - h;
	
    window.scroll({ top: y, behavior: 'smooth' });
}

