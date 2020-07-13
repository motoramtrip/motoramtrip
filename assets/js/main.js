
var instagram = ["https://drive.google.com/uc?id=1yQdMpAoli-zTHZIdhK0yGD_Ymg6K0Ev8",
                "https://drive.google.com/uc?id=1flHvKq0hTrzbHFMG9_vmjYxZUrZ7F_1M",
                "https://drive.google.com/uc?id=1AoY8ny0V6wE7a9ITVE8n1FoPs5pvd4Fw",
                "https://drive.google.com/uc?id=1g0ZgEyAFNN_qVSKEXs7OKnhj8OXGMQ1N",
                "https://drive.google.com/uc?id=1KDNt2fiA_K_EArKdr8OncBwXRljkmWQz",
                "https://drive.google.com/uc?id=193dzrIWP2d0781vUF1qpn_x-35B4jgH0",
                "https://drive.google.com/uc?id=1Cv1qmjJtfgpMAjFaOes3YghXJU5C19Mh",
                "https://drive.google.com/uc?id=11-kS8hz0oIDlNVGP9TCEwNcBg3qPJ9d_",
                "https://drive.google.com/uc?id=1McEFkEzqbvJqPl1xrpQ4kn2ER-17Xn42",
                "https://drive.google.com/uc?id=1Qrx8gIfbBCW9e_T_zHZNocefiohGwauh",
                "https://drive.google.com/uc?id=1yzm09sr3zIm5MHwEvJecK8eLXZv-gCQ1",
                "https://drive.google.com/uc?id=1Phqlo5GhdAskgJ05spbb-5guXKC4WkGk"
                ];

//Animate smooth scroll - Little help by Miguel Cosme => https://github.com/MiguelCosme 
function scrollDown(elementId) { 
    const y = document.getElementById(elementId).offsetTop;
    window.scroll({ top: y, behavior: 'smooth' });
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
    this.randomPicture();
}
function updateIndex(n) {
    changePicture(slideIndex += n);
}
function changePicture(currentIndex) {
    var i;
    var imgs = document.querySelectorAll('.picture');
    if (currentIndex > imgs.length) { slideIndex = 1 }
    if (currentIndex < 1) { slideIndex = imgs.length }
    for (i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    imgs[slideIndex - 1].style.display = 'block';
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

function randomPicture() {
    var random = Math.floor(Math.random() * instagram.length);
    var insta_slide = document.getElementById('instagram-slide');

    insta_slide.src = instagram[random]; 
    insta_slide.style.display = 'block';
    insta_slide.style.width = '100%';
}
