// prendiamo il wrapper contentente le immagini
const carouselWrapper = document.getElementById('carousel_wrapper');
// console.log(carouselWrapper);

// salviamo in una variabile i figli, creando tipo un array
const imgList = carouselWrapper.children;
// console.log(imgList);

// funzionando come un array, diciamo ad una variabile di avere un attributo numerico che sappiamo 
// si collegerà il numero index dell'array
let activeImg = 0;
console.log(imgList[activeImg]);

imgList[activeImg].classList.add('active');

const prevBtn = document.getElementById('prev_btn');
const nextBtn = document.getElementById('next_btn');

// next button
nextBtn.addEventListener('click', function(){

    //ora al click, aggiungiamo e togliiamo le classi per visualizzare in base al 
    // numero al quale abbiamo assegnato ad activeImg
    // praticamente stiamo prendendo l'elemento0 nella ''lista dell'array''
    imgList[activeImg].classList.remove('active');
    
    // aggiungiamo un +1 all'elemento che ci permette di selezionare l'index nella lista dell'array
    // semplicemente con ++ per dirgli di aumentare di uno e passare al prossimo
    activeImg++;

    // aggiungiamo la classe attivo per vedere la successiva
    imgList[activeImg].classList.add('active');
    

})


for (let index = 0; index < imgList.length; index++) {
    // console.log(imgList[index]);
    
}