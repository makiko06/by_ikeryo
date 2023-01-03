'use strict';
// import { FitHeight } from './_utils/_fitHeight.js';
// import { Drawer } from './_utils/_drawer.js';
// import { OtherPageSmoothScroll } from './_utils/_smoothScroll.js';
// import { Accordion } from './_utils/_accordion.js';
// import { HeroSloder } from './_utils/_Heroslide.js';
// import { ScrollObserver } from './_utils/_scroll';

// window.addEventListener('DOMContentLoaded', () => {
//   new Main();
// });

// class Main {
//   constructor() {
//     this.heroSlider = new HeroSloder('#js-kvSwiper');
//     this._observers = [];

//     this._scrollInit();
//     this._init();
//   }

//   _init() {
//     new FitHeight();
//     new Drawer({
//       hamburger: 'js-hamburger',
//       menu: 'js-spNav',
//       CLASS: 'is-active',
//     });
//     new OtherPageSmoothScroll();
//     new Accordion({
//       details: '.js-details',
//       content: '.js-content',
//     });
//   }

//   _scrollInit() {
//     this._observers.push(
//       new ScrollObserver('#js-kvSwiper', this._toggleAnimation.bind(this), { once: false }),
//       new ScrollObserver('.js-fadeIn', this._fadeIn, { rootMargin: '-100px 0px -100px 0px' }),
//     );
//   }

//   _toggleAnimation(el, inview) {
//     inview ? this.heroSlider.start() : this.heroSlider.stop();
//   }

//   _fadeIn(el, inview) {
//     inview ? el.classList.add('u-fadeIn') : el.classList.remove('u-fadeIn');
//   }
// }




import { BgFix, bgFix } from './_utils/_bgFix';
import { Header } from './_utils/_header';

window.addEventListener('DOMContentLoaded', () => {
  new Header ({
    btn: '#js-hamburger',
    menu: '.js-spNav',
    ADD_CLASS: 'is-active'
  });




  //ハンバーガーがクリックされたら
  // const humBtn = document.querySelector('#js-hamburger');
  // const menu = document.querySelector('.js-spNav');
  // const ADD_CLASS = 'is-active';
  // const bgFix = new BgFix();

  // const menuOpen = () => {
  //   menu.classList.add(ADD_CLASS);
  //   humBtn.classList.add(ADD_CLASS);
  //   humBtn.setAttribute('aria-expanded', 'true');
  //   humBtn.setAttribute('aria-label', 'メニューを閉じる');
  //   menu.setAttribute('aria-hidden', 'false');
  //   bgFix.on();
  // };
  // const menuClose = () => {
  //   menu.classList.remove(ADD_CLASS);
  //   humBtn.classList.remove(ADD_CLASS);
  //   humBtn.setAttribute('aria-expanded', 'false');
  //   humBtn.setAttribute('aria-label', 'メニューを開く');
  //   menu.setAttribute('aria-hidden', 'true');
  //   bgFix.off();
  // }
  // const toggleMenu = () => {
  //   const hasIsActive = menu.classList.contains('is-active');

  //   if (!hasIsActive) {
  //     menuOpen();
  //     return;
  //   }

  //   menuClose();
  // };
  // const resizeMenu = () => {
  //   const isPC = window.innerWidth > 768;
  //   if(isPC) {
  //     menuClose();
  //   }
  // }
  // humBtn.addEventListener('click', toggleMenu);
  // window.addEventListener('resize', resizeMenu);
});