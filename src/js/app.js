import * as flsFunctions from './modules/functions.js';
import * as validate from './modules/just-validate.min.js'; 
import * as choices from './modules/choices.min.js';

// import Swiper styles
document.addEventListener("DOMContentLoaded", function () {
  
  flsFunctions.isWebp();

  const choices = new Choices('.js-choices', {
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
  });

  const validate = new JustValidate('.form-validations', {


    colorWrong: '#D8A04D',

    rules: {
      name: {
        required: 0,
        minLength: 2,
        maxLength: 30,
      },

      phone: {
        required: true,

        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()

          return Number(phone) && phone.length === 10
        },


      },

      mail: {
        required: true,
        email: true
      }

    },

    messages: {
      name: {
        required: 'Вы не ввели имя',
        minLength: 'Введите не менее двух символов',
        maxLength: 'Введите не более тридцати символов'
    },

      phone: {

        required: 'Вы не ввели телефон',
        function: 'Введен некорректный номер'
      },

      mail: {
        required: 'Вы не ввели e-mail'
      },
  },


  });

  let burger = document.querySelector('.header__burger-btn');

  burger.addEventListener('click', () => {
    let navList = document.querySelector('.header__nav');
    burger.classList.toggle('burger-active');
    navList.classList.toggle('header__nav-active');
    document.body.classList.toggle('stop-scroll');
  })


});
