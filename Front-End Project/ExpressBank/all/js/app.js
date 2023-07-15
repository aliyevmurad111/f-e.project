let language = document.querySelector('.containers-big .language')
let languageall =document.querySelector('.containers-big .language-all')
let third_ul = document.querySelector('.containers-big .third-ul')
let third_ul_l1 = document.querySelector('.containers-big .third-ul .l1')
let third_ul_ul1 = document.querySelector('.containers-big .third-ul .l1 ul')
let third_ul_l3 = document.querySelector('.containers-big .third-ul .l3')
let third_ul_ul3 = document.querySelector('.containers-big .third-ul .l3 ul')
let first_ul = document.querySelector('.containers-big .first-ul')
let qr = document.querySelector('.second-head-nav-right-l1')
let qr_ul = document.querySelector('.second-head-nav-right-l1 ul')


language.onclick = () => {
  if( languageall.style.display === 'flex'){
    languageall.style.display = 'none'
  }else{
    languageall.style.display = 'flex'
  }
}

let lis = document.querySelectorAll('.containers-big .first-ul li')

for(let li of lis){
  li.onclick = () =>{
    let f_bebore = document.querySelector('.first-ul-before')
    f_bebore.classList.remove('first-ul-before')
    li.classList.add('first-ul-before')
  }
}


let body = document.querySelector('body')
let second_ul = document.querySelector('.containers-big .second-ul')
let search = document.querySelector('.containers-big .Search')
let i = document.querySelector('.containers-big .Search i')
second_ul.onclick = () =>{
  search.style.display = 'flex'
  third_ul.style.display = 'none'
}
i.onclick = () =>{
  search.style.display = 'none'
  third_ul.style.display = 'flex'
}


third_ul_l1.onmouseover = () => {
  third_ul_ul1.style.opacity = 1
  third_ul_ul1.style.transform = 'scaleY(1)';
}
third_ul_l1.onmouseleave = () => {
  third_ul_ul1.style.opacity = 0
  third_ul_ul1.style.transform = 'scaleY(0)';
}


third_ul_l3.onmouseover = () => {
  third_ul_ul3.style.opacity = 1
  third_ul_ul3.style.transform = 'scaleY(1)';
}
third_ul_l3.onmouseleave = () => {
  third_ul_ul3.style.opacity = 0
  third_ul_ul3.style.transform = 'scaleY(0)';
}


qr.onmouseover = () => {
  qr_ul.style.opacity = 1
  qr_ul.style.transform = 'scaleY(1)';
}
qr.onmouseleave = () => {
  qr_ul.style.opacity = 0
  qr_ul.style.transform = 'scaleY(0)';
}

let tab_buttons = document.querySelectorAll('.tab-button button')
for(let tabs of tab_buttons){
  tabs.onclick = () =>{
    let tbs = document.querySelector('.tab-buttons')
    tbs.classList.remove('tab-buttons')
    tabs.classList.add('tab-buttons')
     

    let id = tabs.id
    let div = document.querySelectorAll('.tab-menu-alls div')
     
    for(let divs of div){
      if(divs.id === id){
        divs.classList.add('d-none')
      }else{
        divs.classList.remove('d-none')
      }
    }
   }
}


let calc_buttons = document.querySelectorAll('.calc-button button')
for(let calcs of calc_buttons){
  calcs.onclick = () =>{
    let clcs = document.querySelector('.calc-buttons')
    clcs.classList.remove('calc-buttons')
    calcs.classList.add('calc-buttons')


    let id = calcs.id
    let div = document.querySelectorAll('.bank-calc-all div')
     
    for(let divs of div){
      if(divs.id === id){
        divs.classList.add('d-none')
      }else{
        divs.classList.remove('d-none')
      }
    }
  }
}
  


function calculate() {
  let a = parseFloat(document.getElementById('range1').value)
  let b = parseFloat(document.getElementById('range2').value)
  let c = parseFloat(document.getElementById('range3').value)

  num=(a*c)/100
  num1=a+num;
  num3=(num1/b).toFixed(2)

  document.querySelector('.bank-show .bank-show-months').innerHTML = num3;
  document.querySelector('.bank-show .bank-show-alls').innerHTML = num1;
}
function update1() {
  document.querySelector('.inp1 .value1').innerHTML = document.getElementById('range1').value;
  calculate();
}

function update2() {
  document.querySelector('.inp2 .value2').innerHTML = document.getElementById("range2").value;
  calculate();
}

document.querySelector('.inp1').addEventListener("input", update1);
document.querySelector('.inp2').addEventListener("input", update2);

function calculategold() {
  let a = parseFloat(document.getElementById('rangeqizil').value)
  let b = parseFloat(document.getElementById('rangeqizil2').value)
  let c = parseFloat(document.getElementById('rangeqizil3').value)

  num=(a*c)/100
  num1=a+num;
  num3=(num1/b).toFixed(2)

  document.querySelector('.bank-show .bank-show-monthss').innerHTML = num3;
  document.querySelector('.bank-show .bank-show-allss').innerHTML = num1;
}
function update4() {
  document.querySelector('.inp4 .value6').innerHTML = document.getElementById('rangeqizil').value;
  calculategold();
}

function update5() {
  document.querySelector('.inp5 .value7').innerHTML = document.getElementById("rangeqizil2").value;
  calculategold();
}

document.querySelector('.inp4').addEventListener("input", update4);
document.querySelector('.inp5').addEventListener("input", update5);


window.onscroll = function(){
  if( document.body.scrollTop>150 || document.documentElement.scrollTop>150){
      document.querySelector('header').style.backgroundColor = 'white'
  }
}



const slider_all = document.querySelector('.slider-all');
const slidertext = document.querySelectorAll('.slider-text, .slider-text2');
const sliderphotos = document.querySelectorAll('.slider-photo, .slider-photo2');
const slidernext = document.querySelector('.slider-next');
const sliderback = document.querySelector('.slider-back');

let x = 0;

function showSlide(index) {
  slidertext.forEach(text => text.style.display = 'none');
  sliderphotos.forEach(photo => photo.style.display = 'none');

  slidertext[index].style.display = 'block';
  sliderphotos[index].style.display = 'block';
}

function NextSlide() {
  x++;
  if (x >= slidertext.length) {
    x = 0;
  }
  showSlide(x);
  
  document.querySelector('.slider-text2').classList.remove('d-none')
  document.querySelector('.slider-photo2').classList.remove('d-none')
}

function BackSlide() {
  x--;
  if (x < 0) {
    x = slidertext.length - 1;
  }
  showSlide(x);
}
slidernext.onclick = () =>{
  NextSlide();
}
sliderback.onclick = () => {
  BackSlide();
}
function startSlider() {
  sliderInterval = setInterval(NextSlide, 2000);
}
startSlider(); 
function stopSlider() {
  clearInterval(sliderInterval);
}
slider_all.onmouseover = () => {
  stopSlider();
}

slider_all.onmouseout = () => {
  startSlider(); 
}