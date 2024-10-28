import initSlider from './Modules/slider.js';
import initTabNav from './Modules/tabnav.js';
import initAlbum from './Modules/album.js';
import initScrollSuave from './Modules/scroll-suave.js';
import ScrollAnima from './Modules/scroll-anima.js';
initSlider();
initTabNav();
initAlbum();
initScrollSuave();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();
