let searchbar = document.querySelector('.searchbar');

document.querySelector('#search').onclick = () =>{
    searchbar.classList.toggle('active')
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu').onclick = () =>{
    navbar.classList.toggle('active')
}

let data = document.querySelector(".data");

document.querySelector('#data-button').onclick = () =>{
    data.classList.toggle('active');
}

let data2 = document.querySelector(".data2");

document.querySelector('#data-button2').onclick = () =>{
    data2.classList.toggle('active');
}

let data3 = document.querySelector(".data3");

document.querySelector('#data-button3').onclick = () =>{
    data3.classList.toggle('active');
}

let form = document.querySelector('.data-form');
  document.querySelector('#user').onclick = () =>{
    form.classList.toggle('active');
}

var swiper = new Swiper(".slider", {
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  var swiper = new Swiper(".tes", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });