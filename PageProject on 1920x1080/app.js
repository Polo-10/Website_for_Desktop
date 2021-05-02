// Side Menu
const sideMenu = document.querySelector(".side__active");
const containerSide = document.querySelector(".container__side");

sideMenu.addEventListener("click", function () {
  sideMenu.classList.toggle("on");
  containerSide.classList.toggle("on");
});

// Slider
const slideList = [{
  img: "img/header1.jpg",
},
{
  img: "img/header2.jpg",
},
{
  img: "img/header3.jpg"
},
{
  img: "img/header4.jpg"
}
];

const image = document.querySelector('.photo1__image');
const tiles = [...document.querySelectorAll('.tiles span')];

const time = 2000;
let active = 0;


const changeDot = () => {
const activeDot = tiles.findIndex(tile => tile.classList.contains('active'));
tiles[activeDot].classList.remove('active');
tiles[active].classList.add('active');
}

const changeSlide = () => {
active++;
if (active === slideList.length) {
  active = 0;
}
image.src = slideList[active].img;
changeDot()
}
setInterval(changeSlide, time)


// Search Engine
const search = document.querySelector(".search");
const input = document.querySelector(".input-search");

search.addEventListener("click", function () {
  input.classList.toggle("trigger");
});




// Scroll Top
$(document).ready(function(){

  $(window).scroll(function(){
    if($(this).scrollTop() > 200){
      $('.topPage').fadeIn();
    } else {
      $('.topPage').fadeOut();
    }
});

$('.topPage').click(function(){
  $('html,body').animate({scrollTop: 0}, 2000)

})
});


// carousel Img
$('.logo-slider-news').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
});



// carousel Logo
$('.logo-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
});

