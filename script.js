document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll('.scroll-anim');
    
    animatedElements.forEach(el => el.classList.add('js-hidden'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('js-hidden');
                entry.target.classList.add('js-visible');
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    animatedElements.forEach(el => observer.observe(el));

    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            question.classList.toggle('active');
            const answer = question.nextElementSibling;
            const icon = question.querySelector('span');
            
            if (question.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + "px";
                icon.textContent = "-";
            } else {
                answer.style.maxHeight = null;
                icon.textContent = "+";
            }
        });
    });
});
