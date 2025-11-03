
const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

const maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;

let percentScrolled = 0;


if (maxScroll > 0) {
    percentScrolled = (scrollPosition / maxScroll) * 100;
}


if (percentScrolled >= 100) {
    document.getElementById('footer').style.backgroundColor = "red";
} else {

    document.getElementById('footer').style.backgroundColor = "";
}