let ham = document.getElementById("ham");
let nav = document.getElementById("nav");
ham.addEventListener('click', function () {
    if (ham.childNodes[3].src == "https://static-00.iconduck.com/assets.00/hamburger-menu-icon-512x385-ckt0hy0b.png") {
        ham.childNodes[3].src = "https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png";
        ham.childNodes[3].className = 'close';
        nav.classList.add('active');
    }
    else {
        ham.childNodes[3].src = "https://static-00.iconduck.com/assets.00/hamburger-menu-icon-512x385-ckt0hy0b.png";
        ham.childNodes[3].className = '';
        nav.classList.remove('active');
    }
});