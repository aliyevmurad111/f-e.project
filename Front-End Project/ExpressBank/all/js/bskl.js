function getems() {
    let items = JSON.parse(localStorage.getItem('karts'))
    let  n = ''
    for(let item of items){
        n+=`
        <div class="tab-card-all col-lg-4 col-12">
                    <div class="tab-card">
                         <div class="card-photo">
                            <img src="${item.sekil}" alt="">
                         </div>
                         <div class="card-content ">
                            <h4>${item.yazi}</h4>
                            <p>${item.yazi1}</p>
                            <a href="">Sifariş etmək</a>
                            <i class="fa-solid fa-minus"></i>
                        </div>
                    </div>
                </div>
        `
    } 
    document.querySelector('.miris').innerHTML = n
}
getems()


let dlt = document.querySelectorAll('.card-content i')

for(let del of dlt){
   del.onclick = () => {
    del.parentElement.parentElement.parentElement.remove()
   }
}