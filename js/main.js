const closedAction = document.querySelectorAll('.top__action-closed');
const actionBlock = document.querySelector('.top__action');
const actionBlockTablet = document.querySelector('.top__action-tablet');
for (let i = 0; i < closedAction.length; i++){
    closedAction[i].addEventListener('click', () => {
        actionBlock.classList.add('active');
        actionBlockTablet.classList.add('active');
    });
};


/*diagnostics*/

const nextBtn = document.querySelectorAll('.diagnostics__btn');
const backBtn = document.querySelector('.diagnostics__different');
const diagCont = document.querySelector('.diagnostics__container');
const diagnosticQuestion = document.querySelector('.diagnostics__question');
const diagnosticProblem = document.querySelector('.diagnostics__problem');
nextBtn.forEach(b => b.addEventListener('click', leftQuestion));
nextBtn.forEach(b => b.addEventListener('click', leftProblemn));
backBtn.addEventListener('click', rightQuestion);
backBtn.addEventListener('click', rightProblem);

function leftQuestion() {
    diagnosticQuestion.style.transform = 'translateX(-150%)';
};
function leftProblemn() {
    diagnosticProblem.style.left = '0';
    diagCont.style.maxHeight = '600px';
};
function rightQuestion() {
    diagnosticQuestion.style.transform = 'translateX(0)';
};
function rightProblem() {
    diagnosticProblem.style.left = '100%';
    diagCont.style.maxHeight = '1200px';
};

const teamSwiper = new Swiper('.team__swiper-container', {
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        651: {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        1025: {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        1441: {
            slidesPerView: 4,
            slidesPerGroup: 1,
        },
    },
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletClass: "pagination__bullet",
      bulletActiveClass: "pagination__bullet_active",
    },
    navigation: {
        nextEl: '.team__swiper-button-next',
        prevEl: '.team__swiper-button-prev',
    },
  
});
const reviewsSwiper = new Swiper('.reviews__swiper-container', {
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        1025: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        1680: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
    },
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletClass: "pagination__bullet",
      bulletActiveClass: "pagination__bullet_active",
    },
    navigation: {
        nextEl: '.team__swiper-button-next',
        prevEl: '.team__swiper-button-prev',
    },
  
});

/*accordion*/ 

const quest = document.getElementsByClassName('question__string-quest');

for (i = 0; i < quest.length; i++) {
    quest[i].addEventListener('click', function() {
        this.classList.toggle('active');
        let answer = this.nextElementSibling;
        if (answer.style.maxHeight && answer.style.paddingTop) {
            answer.style.maxHeight = null;
            answer.style.paddingTop = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            answer.style.paddingTop = answer.style.paddingTop = '20px';
        }
    })
};