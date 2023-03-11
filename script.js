// ************************ Burger menu *********************************
const header = document.querySelector('.header');
const burgerMenu = document.querySelector('.burger__menu');

let menuElems = ['Главная', 'Услуги', 'Кейсы', 'О компании', 'Контакты'];
let setModal = false;

function openMenu() {
  if (!setModal) {
    const modalDiv = document.createElement('div');
    modalDiv.className = 'modal';

    for (let elem of menuElems) {
      const pELem = document.createElement('p');
      pELem.innerText = elem.toUpperCase();
      modalDiv.append(pELem);
    }
    const [spanELem1, spanELem2, spanELem3] =
      document.querySelectorAll('.line');
    spanELem1.style.position = 'absolute';
    spanELem1.style.transform = 'rotate(45deg)';
    spanELem2.style.position = 'absolute';
    spanELem2.style.transform = 'rotate(315deg)';
    spanELem3.style.position = 'absolute';
    spanELem3.style.transform = 'rotate(315deg)';
    burgerMenu.style.height = '16px';

    header.after(modalDiv);
    const [mainModal, servicesModal, casesModal, aboutModal, contacsModal] =
      document.querySelectorAll('.modal p');
    mainModal.addEventListener('click', () =>
      header.scrollIntoView({ behavior: 'smooth', block: 'start' })
    );
    servicesModal.addEventListener('click', () =>
      sections[0].scrollIntoView({ behavior: 'smooth', block: 'start' })
    );
    casesModal.addEventListener('click', () =>
      sections[1].scrollIntoView({ behavior: 'smooth', block: 'end' })
    );
    aboutModal.addEventListener('click', () =>
      sections[1].scrollIntoView({ behavior: 'smooth', block: 'start' })
    );
    contacsModal.addEventListener('click', () =>
      sections[4].scrollIntoView({ behavior: 'smooth', block: 'start' })
    );
  }
  setModal = !setModal;
}

function closeMenu() {
  const [spanELem1, spanELem2, spanELem3] = document.querySelectorAll('.line');
  spanELem1.style.position = 'static';
  spanELem1.style.transform = 'none';
  spanELem2.style.position = 'static';
  spanELem2.style.transform = 'none';
  spanELem3.style.position = 'static';
  spanELem3.style.transform = 'none';
  burgerMenu.style.height = '43px';
  const modal = document.querySelector('.modal');
  modal.classList.add('modal__closing');
  if (modal) {
    setTimeout(() => {
      modal.remove();
    }, 450);
  }
  setModal = false;
}

burgerMenu.addEventListener('click', () => {
  if (setModal) {
    closeMenu();
  } else {
    openMenu();
  }
});

// ********************** Auto scroll ***********************************

const sections = document.querySelectorAll('section');

const [mainNav, servicesNav, casesNav, aboutNav, contacsNav] =
  document.querySelectorAll('.nav__item');

mainNav.addEventListener('click', () =>
  header.scrollIntoView({ behavior: 'smooth', block: 'start' })
);
servicesNav.addEventListener('click', () =>
  sections[0].scrollIntoView({ behavior: 'smooth', block: 'start' })
);
casesNav.addEventListener('click', () =>
  sections[1].scrollIntoView({ behavior: 'smooth', block: 'end' })
);
aboutNav.addEventListener('click', () =>
  sections[1].scrollIntoView({ behavior: 'smooth', block: 'start' })
);
contacsNav.addEventListener('click', () =>
  sections[4].scrollIntoView({ behavior: 'smooth', block: 'start' })
);

// *********************** Header slider ********************************

let count = 0;
let count2 = 0;
let count3 = 0;
let width;
let width2;
let width3;

const headerSliderFrame = document.querySelector('.header__frame');
const headerSliderImages = document.querySelectorAll(
  '.header__slider .header__frame img'
);

const triggersContainer = document.querySelector('.triggers__container');

function createRounds(
  sliderFrameSelector,
  sliderImagesSelector,
  triggersContainerSelector
) {
  const sliderFrame = document.querySelector(sliderFrameSelector);
  const sliderImages = document.querySelectorAll(sliderImagesSelector);
  const triggersContainer = document.querySelector(triggersContainerSelector);

  const roundsContainer = document.createElement('div');
  if (sliderFrame.className == 'header__frame') {
    roundsContainer.className = 'rounds__container';
  } else if (sliderFrame.className == 'clients__frame') {
    roundsContainer.className = 'rounds__container2';
  } else if (sliderFrame.className == 'reviews__frame') {
    roundsContainer.className = 'rounds__container3';
  }

  for (let i = 0; i < sliderImages.length; i++) {
    const btn = document.createElement('button');
    if (sliderImages[i].classList.contains('active')) {
      btn.classList.add('active');
    }
    roundsContainer.append(btn);

    btn.addEventListener('click', () => {
      count = i;
      width = document.querySelector('.header__slider').offsetWidth;
      width2 = document.querySelector('.clients__slider').offsetWidth;
      width3 = document.querySelector('.reviews__slider').offsetWidth;
      if (sliderFrame.className == 'header__frame') {
        sliderFrame.style.transform = 'translate(-' + count * width + 'px)';
      } else if (sliderFrame.className == 'clients__frame') {
        sliderFrame.style.transform = 'translate(-' + count * width2 + 'px)';
      } else if (sliderFrame.className == 'reviews__frame') {
        sliderFrame.style.transform = 'translate(-' + count * width3 + 'px)';
      }
      sliderFrame.style.transition = '0.5s';

      const buttons = btn.parentElement.childNodes;
      buttons.forEach(elem => elem.classList.remove('active'));

      btn.classList.add('active');
    });
  }
  triggersContainer.prepend(roundsContainer);
}

createRounds(
  '.header__frame',
  '.header__slider .header__frame img',
  '.triggers__container'
);
createRounds(
  '.clients__frame',
  '.clients__slider .clients__frame img:nth-child(-n+4)',
  '.triggers__container2'
);
createRounds(
  '.reviews__frame',
  '.reviews__slider .reviews__frame img:nth-child(-n+4)',
  '.triggers__container3'
);

// ************************ Active Dots *********************************

function setActiveRounds(index) {
  const headerRounds = document.querySelectorAll('.rounds__container button');
  headerRounds.forEach(rounds => rounds.classList.remove('active'));
  headerRounds[index].classList.add('active');
}

function setActiveRounds2(index) {
  const clientsRounds = document.querySelectorAll('.rounds__container2 button');
  clientsRounds.forEach(rounds => rounds.classList.remove('active'));
  clientsRounds[index].classList.add('active');
}

function setActiveRounds3(index) {
  const reviewsRounds = document.querySelectorAll('.rounds__container3 button');
  reviewsRounds.forEach(rounds => rounds.classList.remove('active'));
  reviewsRounds[index].classList.add('active');
}

const leftBtn = document.querySelector('#left__btn');
const rightBtn = document.querySelector('#right__btn');

function goRight() {
  if (count < headerSliderImages.length - 1) {
    count++;
    headerSliderFrame.style.transition = '0.5s';
  } else {
    count = 0;
    headerSliderFrame.style.transition = '0.5s';
  }
  headerSliderFrame.style.transform = 'translate(-' + count * width + 'px)';
  setActiveRounds(count);
}
function goLeft() {
  if (count != 0) {
    count--;
    headerSliderFrame.style.transition = '0.5s';
  } else {
    count = headerSliderImages.length - 1;
    headerSliderFrame.style.transition = '0.5s';
  }
  headerSliderFrame.style.transform = 'translate(-' + count * width + 'px)';
  setActiveRounds(count);
}

leftBtn.addEventListener('click', goLeft);
rightBtn.addEventListener('click', goRight);

// ******************* Clients slider**************************************

const triggersContainer2 = document.querySelector('.triggers__container2');

const clientsSliderImages = document.querySelectorAll(
  '.clients__slider .clients__frame img:nth-child(-n+4)'
);
const clientsSliderImagesMob = document.querySelectorAll(
  '.clients__slider .clients__frame img:nth-child(n+5)'
);
const clientsSliderFrame = document.querySelector('.clients__frame');

const leftBtn2 = document.querySelector('#left__btn2');
const rightBtn2 = document.querySelector('#right__btn2');

function goRight2() {
  if (count2 < clientsSliderImages.length - 1) {
    count2++;
    clientsSliderFrame.style.transition = '0.5s';
  } else {
    count2 = 0;
    clientsSliderFrame.style.transition = '0.5s';
  }
  clientsSliderFrame.style.transform = 'translate(-' + count2 * width2 + 'px)';
  setActiveRounds2(count2);
}
function goLeft2() {
  if (count2 != 0) {
    count2--;
    clientsSliderFrame.style.transition = '0.5s';
  } else {
    count2 = clientsSliderImages.length - 1;
    clientsSliderFrame.style.transition = '0.5s';
  }
  clientsSliderFrame.style.transform = 'translate(-' + count2 * width2 + 'px)';
  setActiveRounds2(count2);
}

leftBtn2.addEventListener('click', goLeft2);
rightBtn2.addEventListener('click', goRight2);

// ************************* Reviews slider **************************

const triggersContainer3 = document.querySelector('.triggers__container3');

const reviewsSliderImages = document.querySelectorAll('.reviews__img');
const reviewsSliderImagesMobile = document.querySelectorAll(
  '.reviews__img__mobile'
);
const reviewsSliderFrame = document.querySelector('.reviews__frame');

const leftBtn3 = document.querySelector('#left__btn3');
const rightBtn3 = document.querySelector('#right__btn3');

function goRight3() {
  if (count3 < reviewsSliderImages.length - 1) {
    count3++;
    reviewsSliderFrame.style.transition = '0.5s';
  } else {
    count3 = 0;
    reviewsSliderFrame.style.transition = '0.5s';
  }
  reviewsSliderFrame.style.transform = 'translate(-' + count3 * width3 + 'px)';
  setActiveRounds3(count3);
}
function goLeft3() {
  if (count3 != 0) {
    count3--;
    reviewsSliderFrame.style.transition = '0.5s';
  } else {
    count3 = reviewsSliderImages.length - 1;
    reviewsSliderFrame.style.transition = '0.5s';
  }
  reviewsSliderFrame.style.transform = 'translate(-' + count3 * width3 + 'px)';
  setActiveRounds3(count3);
}

leftBtn3.addEventListener('click', goLeft3);
rightBtn3.addEventListener('click', goRight3);

// ********************* Adaptation function ****************************
function init() {
  width = document.querySelector('.header__slider').offsetWidth;
  headerSliderFrame.style.width = width * headerSliderImages.length + 'px';
  headerSliderImages.forEach(item => {
    item.style.width = width + 'px';
    item.style.height = 'inherit';
    item.style.objectFit = 'cover';
  });

  width2 = document.querySelector('.clients__slider').offsetWidth;
  clientsSliderFrame.style.width = width2 * clientsSliderImages.length + 'px';
  if (window.innerWidth <= 768) {
    clientsSliderImagesMob.forEach(item => {
      item.style.width = width2 + 'px';
      item.style.height = 'inherit';
      item.style.objectFit = 'cover';
    });
  } else {
    clientsSliderImages.forEach(item => {
      item.style.width = width2 + 'px';
      item.style.height = 'inherit';
      item.style.objectFit = 'cover';
    });
  }

  width3 = document.querySelector('.reviews__slider').offsetWidth;
  reviewsSliderFrame.style.width = width3 * reviewsSliderImages.length + 'px';
  if (window.innerWidth <= 768) {
    reviewsSliderImagesMobile.forEach(item => {
      item.style.width = width3 + 'px';
      item.style.height = 'inherit';
      item.style.objectFit = 'cover';
    });
  } else {
    reviewsSliderImages.forEach(item => {
      item.style.width = width3 + 'px';
      item.style.height = 'inherit';
      item.style.objectFit = 'cover';
    });
  }
  goRight();
  goLeft();
  goRight2();
  goLeft2();
  goRight3();
  goLeft3();
}

window.addEventListener('resize', init);

init();
