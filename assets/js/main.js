//Animate smooth scroll - Little help by Miguel Cosme => https://github.com/MiguelCosme 
function scrollDown(elementId) { 
    
	var obj = document.getElementById(elementId);
	
	const ot = obj.offsetTop;
	const p  = parseInt(window.getComputedStyle(obj).padding);
	
	// offsetTop - padding
	const y = ot - p;
	
    window.scroll({ top: y, behavior: 'smooth' });
}
