//change nav-bar when scroll

window.addEventListener('scroll', () => {
    document.querySelector('.nav').classList.toggle
        ('window-scroll', window.scrollY > 0)
});

//show the answers of questions

const faqs = document.querySelectorAll('.FAQs_card');

faqs.forEach(myFunction);

function myFunction(element) {
    element.addEventListener('click', () => {
        element.classList.toggle('open');
    });
}