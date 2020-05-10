
var instagram = ["https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/e35/87610497_511528262899484_4602317794804468049_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=3AOIam2HrjwAX-KR_3D&oh=a33eaac9cf8fba5824e10c89dddf4a77&oe=5EE2D1A8",
                 "https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/e35/94761895_1344416519079573_3779078438859599296_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=PLxalXXXPgkAX-2WkY-&oh=38dc24392a81330153bac9b0595d255b&oe=5EE06E61",
                 "https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/e35/92876190_253778682483866_6929900148283056092_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=o6t4G56yMgQAX-2BJCv&oh=9109331ca937e9306bf53f5354b19656&oe=5EE3A4F1",
                 "https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/e35/92109613_209058473686545_2876477140526213968_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=xOQcLMZaQNsAX9v7o39&oh=a83d789670ad37f9356d9b963d08cbe4&oe=5EE2B653", 
                 "https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/e35/94932381_773213696416887_5311335733853158241_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=S8jnypWkwCgAX-X2217&oh=ee143ddf2ca97b1635876922b911e1fa&oe=5EE2D56E"
                ];

//Animate smooth scroll - Little help by Miguel Cosme => https://github.com/MiguelCosme 
function scrollDown(elementId) { 
    const y = document.getElementById(elementId).offsetTop;
    window.scroll({ top: y, behavior: 'smooth' });
}

// header backgroung toggle
window.onscroll = function () {
    if (window.pageYOffset > 130 || screen.width <= 480 ) {
        document.getElementById("header").style.background = "#444";
    } else {
        document.getElementById("header").style.background = "none";
    }
}

function submitGoogleForm(form) {
    try {
        var data = [].slice.call(form).map(function (control) {
            return 'value' in control && control.name ?
                control.name + '=' + (control.value === undefined ? '' : control.value) :
                '';
        }).join('&');
        var xhr = new XMLHttpRequest();

        xhr.open('POST', form.action + '/formResponse', true);
        xhr.setRequestHeader(
            'Accept',
            'application/xml, text/xml, */*; q=0.01'
        );
        xhr.setRequestHeader(
            'Content-type',
            'application/x-www-form-urlencoded; charset=UTF-8'
        );
        xhr.send(data);
        form.reset();

        displaySuccess();
    } catch (e) {
        console.error(e);
    }
    return false;
}

// slideshow
var slideIndex = Math.floor(Math.random() * 5);
window.onload = function () {
    changePicture(slideIndex);
    this.randomHeader();
}
function updateIndex(n) {
    changePicture(slideIndex += n);
}
function changePicture(currentIndex) {
    var i;
    var imgs = document.querySelectorAll(".picture");

    if (currentIndex > imgs.length) { slideIndex = 1 }
    if (currentIndex < 1) { slideIndex = imgs.length }
    for (i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none";
    }
    imgs[slideIndex - 1].style.display = "block";
}
function displaySuccess() {
    document.getElementById('cta-message-header').style.display = 'none';
    document.getElementById('contact-form').style.display = 'none';
    document.getElementById('contacts-succes').style.display = 'block';

    setTimeout(function () {
        document.getElementById('cta-message-header').style.display = 'block';
        document.getElementById('contact-form').style.display = 'block';
        document.getElementById('contacts-succes').style.display = 'none'; 
    }, 3000);
}

function randomHeader() {
	var random = Math.floor(Math.random() * instagram.length);
	document.getElementById("banner").style.backgroundImage = `url(${instagram[random]}`; 
}