// const carouselItems = document.querySelectorAll('[data-carousel-item]');

// const last_carousel_item = carouselItems.length;
// const btn_carousel_next = document.getElementById('btn_carousel_next')
// const btn_carousel_previous = document.getElementById('btn_carousel_previous')

//   carouselItems.forEach(item => {
//     item.addEventListener('transitionend', () => {
//       if (item.classList.contains('z-20')) {
//         carouselItems[2].classList.add('hidden');

//         const imageNumber = item.getAttribute('aria-label');
//         console.log(imageNumber)
        
//         if (imageNumber == last_carousel_item) {
//           btn_carousel_next.classList.add('hidden')
//           carouselItems[2].classList.remove('hidden')
//         }
//         else {
//           btn_carousel_next.classList.remove('hidden')
//         }

//         if (imageNumber == 1) {
//           btn_carousel_previous.classList.add('hidden')
//         } else {
//           btn_carousel_previous.classList.remove('hidden')
//         }
//         // console.log(`Item with image "${item.querySelector('img').alt}" is now on screen.`);
//         // Perform additional actions based on the active item
//       }
//     });
//   });