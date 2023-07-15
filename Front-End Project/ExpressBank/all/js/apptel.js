let languageall_tel = document.querySelector('.containers-tel .language-alls')
let language_tel = document.querySelector('.containers-tel .languages')
let index_tel = document.querySelector('.indexmain-tel')
let sidebar = document.querySelector('.sidebar')
let third_head = document.querySelector('.third-head')
let second_head = document.querySelector('.second-head')



language_tel.onclick = function(){
 if(languageall_tel.style.display === 'block'){
    languageall_tel.style.display = 'none'
 }
 else{
    languageall_tel.style.display = 'block'
 }
}

let img1 = document.querySelector('.containers-tel .img1')
let img2 = document.querySelector('.containers-tel .img2')

img1.onclick = () =>{
    img2.style.display = 'inline-block'
    img1.style.display = 'none'
    index_tel.style.display= 'none'
    third_head.style.display = 'none'
    second_head.style.display = 'none'
    sidebar.style.display= 'block'
}
img2.onclick = () =>{
    img2.style.display = 'none'
    img1.style.display = 'inline-block'
    sidebar.style.display= 'none'
    index_tel.style.display= 'block'
    second_head.style.display = 'block'
    third_head.style.display = 'flex'
}



const slider_alls = document.querySelector('.slider-all');
const slidertexts = document.querySelectorAll('.slider-texts, .slider-text2s');
const sliderphotoss = document.querySelectorAll('.slider-photos, .slider-photo2s');
const slidernexts = document.querySelector('.slider-next');
const sliderbacks = document.querySelector('.slider-back');

let y = 0;

function showSlides(index) {
  slidertexts.forEach(text => text.style.display = 'none');
  sliderphotoss.forEach(photo => photo.style.display = 'none');

  slidertexts[index].style.display = 'block';
  sliderphotoss[index].style.display = 'block';
}

function NextSlides() {
  y++;
  if (y >= slidertexts.length) {
    y = 0;
  }
  showSlides(y);
  
  document.querySelector('.slider-text2s').classList.remove('d-none')
  document.querySelector('.slider-photo2s').classList.remove('d-none')
}

function BackSlides() {
  y--;
  if (y < 0) {
    y = slidertexts.length - 1;
  }
  showSlides(y);
}
slidernexts.onclick = () =>{
  NextSlides();
}
sliderbacks.onclick = () => {
  BackSlides();
}
function startSliders() {
  sliderInterval = setInterval(NextSlides, 2000);
}
startSliders(); 
function stopSliders() {
  clearInterval(sliderInterval);
}
slider_alls.onmouseover = () => {
  stopSliders();
}

slider_alls.onmouseout = () => {
  startSliders(); 
}



function calculate() {
    let a = parseFloat(document.getElementById('range7').value)
    let b = parseFloat(document.getElementById('range8').value)
    let c = parseFloat(document.getElementById('range9').value)
  
    num=(a*c)/100
    num1=a+num;
    num3=(num1/b).toFixed(2)
  
    document.querySelector('.bank-show .bankkk').innerHTML = num3;
    document.querySelector('.bank-show .bankkkk').innerHTML = num1;
  }
  function update1() {
    document.querySelector('.inp8 .value8').innerHTML = document.getElementById('range7').value;
    calculate();
  }
  
  function update2() {
    document.querySelector('.inp9 .value9').innerHTML = document.getElementById("range8").value;
    calculate();
  }
  
  document.querySelector('.inp8').addEventListener("input", update1);
  document.querySelector('.inp9').addEventListener("input", update2);





  if(localStorage.getItem('karts') === null){
    localStorage.setItem('karts',JSON.stringify([]))
}

    let btns = document.querySelector('.kart-info1 .card-asd a')

    btns.onclick = () => {
        let img = document.querySelector('.bsk .a2').src
        let text = document.querySelector('.bsk h4').innerHTML
        let text1 = document.querySelector('.bsk p').innerHTML
        let baskets = JSON.parse(localStorage.getItem('karts'))
        let exist = baskets.find(x=> x.sekil === img)
      
        if(exist === undefined){
          baskets.push({
              sekil: img,
              yazi: text,
              yazi1: text1
          })
        }
        
        localStorage.setItem('karts',JSON.stringify(baskets))
        show()   
    }

    function show() {
      let basketa  = JSON.parse(localStorage.getItem('karts'))
      document.getElementById('count').innerHTML = basketa.length
  }
  show()
