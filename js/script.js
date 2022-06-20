const carouselWrapper = document.getElementById('carousel_wrapper');
// console.log(carouselWrapper);

const imgList = carouselWrapper.children;
// console.log(imgList);

let activeImg = 0;
console.log(imgList[activeImg]);

const prevBtn = document.getElementById('prev_btn');
const nextBtn = document.getElementById('next_btn');

// next button
nextBtn.addEventListener('click', function(){

    imgList[activeImg].classList.remove('d-none');
    imgList[activeImg].classList.add('d-block');

})


for (let index = 0; index < imgList.length; index++) {
    // console.log(imgList[index]);
    
}