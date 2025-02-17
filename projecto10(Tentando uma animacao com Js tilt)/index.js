//movement animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');

//Items
const title = document.querySelector('.title')
const object = document.querySelector('.object img')
const description = document.querySelector('.info h3')
const sizes = document.querySelector('.slideshow')

// moving animation event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})


//animate in
container.addEventListener('mouseenter', e => {
    card.style.transition = "none";
})
//popout
title.style.transform = 'translateZ(100px)';
object.style.transform = 'translateZ(105px)';
sizes.style.transform = 'translateZ(55px)';
description.style.transform = 'translateZ(90px)';

//animate out
container.addEventListener('mouseleave', e => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //popback
})