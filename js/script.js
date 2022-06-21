// prendiamo il wrapper contentente le immagini
// console.log(carouselWrapper);

// // salviamo in una variabile i figli, creando tipo un array
// const imgList = carouselWrapper.children;
// // console.log(imgList);

// // funzionando come un array, diciamo ad una variabile di avere un attributo numerico che sappiamo 
// // si collegerà il numero index dell'array
// let activeImg = 0;
// console.log(imgList[activeImg]);

// imgList[activeImg].classList.add('active');

// const prevBtn = document.getElementById('prev_btn');
// const nextBtn = document.getElementById('next_btn');

// // next button
// nextBtn.addEventListener('click', function(){

//     //ora al click, aggiungiamo e togliiamo le classi per visualizzare in base al 
//     // numero al quale abbiamo assegnato ad activeImg
//     // praticamente stiamo prendendo l'elemento0 nella ''lista dell'array''
//     imgList[activeImg].classList.remove('active');
    
//     // aggiungiamo un +1 all'elemento che ci permette di selezionare l'index nella lista dell'array
//     // semplicemente con ++ per dirgli di aumentare di uno e passare al prossimo
//     activeImg++;

//     // cosa stiamo facendo qua? Stiam dicendo che, se il numero di activeImg, 
//     // arriva alla lunghezza del numero di elementi presenti nella lista 'array', 
//     // allora riparti dal numero 0, dall'elemento 0, perchè altrimenti, premendo si andrà avanti
//     // superando così' il numero di elementi presenti e semplicemente non vedremo nulla!!
//     if (activeImg === imgList.length){
//         activeImg = 1;
//     }

//     // aggiungiamo la classe attivo per vedere la successiva
//     imgList[activeImg].classList.add('active');
    

// })

// prevBtn.addEventListener('click', function(){
//     imgList[activeImg].classList.remove('active');
    
//     activeImg--;
    
//     if (activeImg <= imgList.length){
//         activeImg = imgList.length;
//     }
    
//     imgList[activeImg].classList.add('active');
    
    
// })

const carouselWrapper = document.getElementById('carousel_wrapper');

let givenImages = [
    'https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg',
    'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg',
    'https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
    'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
    'https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg',
    'https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg'
];

let imgContainer;
let imgArray = [];

 for (let index = 0; index < givenImages.length; index++) {
    
    imgContainer = document.createElement('img');
    imgContainer.classList.add('img-fluid');
    imgContainer.setAttribute('src', givenImages[index]);
    carouselWrapper.append(imgContainer);

    imgArray.push(imgContainer);
    
}


// essendo un array, diciamo ad una variabile di avere un attributo numerico che
// collegheremo al numero index dell'array
let activeImg = 0;

imgArray[activeImg].classList.add('active');

const prevBtn = document.getElementById('prev_btn');
const nextBtn = document.getElementById('next_btn');

// next button
nextBtn.addEventListener('click', function(){

    //ora al click, aggiungiamo e togliiamo le classi per visualizzare in base al 
    // numero al quale abbiamo assegnato ad activeImg
    // praticamente stiamo prendendo l'elemento0 nella ''lista dell'array''
    imgArray[activeImg].classList.remove('active');
    
    // aggiungiamo un +1 all'elemento che ci permette di selezionare l'index nella lista dell'array
    // semplicemente con ++ per dirgli di aumentare di uno e passare al prossimo
    activeImg++;

    // cosa stiamo facendo qua? Stiam dicendo che, se il numero di activeImg, 
    // arriva alla lunghezza del numero di elementi presenti nella lista 'array', 
    // allora riparti dal numero 0, dall'elemento 0, perchè altrimenti, premendo si andrà avanti
    // superando così' il numero di elementi presenti e semplicemente non vedremo nulla!!
    if (activeImg === imgArray.length){
        activeImg = 0;
    }

    // aggiungiamo la classe attivo per vedere la successiva
    imgArray[activeImg].classList.add('active');
    

})


prevBtn.addEventListener('click', function(){

    imgArray[activeImg].classList.remove('active');

    activeImg--;

    if (activeImg === -1){
        activeImg = 5;
    }

    imgArray[activeImg].classList.add('active');

    
})

console.log(imgArray);