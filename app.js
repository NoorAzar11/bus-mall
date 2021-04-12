'use strict';

//bring images by their id:

let imgL = document.getElementById('left-image');
let imgM = document.getElementById('middle-image');
let imgR = document.getElementById('right-image');

//how many times user should press on the pic and to make sure that he will pick only 25
let highAttemps = 10;

//user attemps and we where should we store them:
let userAttemps = 0;

//we should create index so we can picked a random number and store them in the array(this how we choose object from array)

let imgLindex = 0;
let imgMindex = 0;
let imgRindex = 0;

//contactor function with pascal case first latter will be B

function Busmall(name, imgpath, timesshown) {
    //create attribute
    this.name = name;
    this.imgpath = imgpath;
    this.timesshown = timesshown;
    //each new attribute (imgaes)will have a vote
    this.vote = 0;

    //(this) will be refering to new attribute(obeject) that we created,array has every thing
    //allimg.push(this)

    Busmall.allimg.push(this)

}
//globel array
//let allimg=[];

//how to create new attribute its another way instead of globel array ,array has everything 
Busmall.allimg = [];

// create instaness with adding new to it

new Busmall('bag', 'img/bag.jpg');
new Busmall('banana', 'img/banana.jpg');
new Busmall('bathroom', 'img/bathroom.jpg');
new Busmall('boots', 'img/boots.jpg');
new Busmall('breakfast', 'img/breakfast.jpg');
new Busmall('bubblegum', 'img/bubblegum.jpg');
new Busmall('chair', 'img/chair.jpg');
new Busmall('cthulhu', 'img/cthulhu.jpg');
new Busmall('dog-duck', 'img/dog-duck.jpg');
new Busmall('dragon', 'img/dragon.jpg');
new Busmall('pet-sweep', 'img/pet-sweep.jpg');
new Busmall('scissors', 'img/scissors.jpg');
new Busmall('shark', 'img/shark.jpg');
new Busmall('sweep', 'img/sweep.jpg');
new Busmall('tauntaun', 'img/tauntaun.jpg');
new Busmall('unicorn', 'img/unicorn.jpg');
new Busmall('usb', 'img/usb.gif');
new Busmall('water-can', 'img/water-can.jpg');
new Busmall('wine-glass', 'img/wine-glass.jpg');

//console.log(Busmall.allimg);

//now we generate random number index 

function randomindex() {
    return Math.floor(Math.random() * Busmall.allimg.length)
}
//console.log(randomindex());

//rendering for images or display them 

function renderImages() {
    imgLindex = randomindex();
    imgMindex = randomindex();
    imgRindex = randomindex();

    while (imgLindex === imgMindex && imgMindex != imgRindex) {
        imgLindex = randomindex();

    }
    console.log(Busmall.allimg[imgLindex].imgpath);
    console.log(Busmall.allimg[imgMindex].imgpath);
    console.log(Busmall.allimg[imgRindex].imgpath);

    imgL.src = Busmall.allimg[imgLindex].imgpath;
    imgM.src = Busmall.allimg[imgMindex].imgpath;
    imgR.src = Busmall.allimg[imgRindex].imgpath;

}

renderImages();

//clicking part 

imgL.addEventListener('click', cliking);
imgM.addEventListener('click', cliking);
imgR.addEventListener('click', cliking);
//adding cliking and user attemps<highattemps
function cliking(event) {
    console.log(event.target.id);
    userAttemps++;
    //console.log(userAttemps);

    if (userAttemps < highAttemps) {
        if (event.target.id === 'left-image') {
            Busmall.allimg[imgLindex].vote++
        }
        else {
            Busmall.allimg[imgMindex].vote++
        }
       else {
            Busmall.allimg[imgRindex].vote++
        }else if{
            let list=document.getElementById('shownresults');
            let busmalllistresult;
            for(i = 0; i<= Busmall.allimg.length; i++) {
            busmalllistresult = document.createElement('li');
            list.appendChild(busmalllistresult);
            busmalllistresult.textContent = `${Busmall.allimg[i].name}` had`${Busmall.allimg[i].vote}Votes` and was seen times.

            }

        imgL.removeEventListener('click', cliking);
        imgM.removeEventListener('click', cliking);
        imgR.removeEventListener('click', cliking);
    }

}
}
console.log(Busmall.allimg);
renderImages();
