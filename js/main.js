const body = document.querySelector("body");
const buttonsQuestion = document.querySelectorAll(".button-question");
const questionsBlock = document.querySelectorAll(".question__item")
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav__links");
const navContacts = document.querySelector(".nav__contacts");

hamburger.onclick = function() {
    hamburger.classList.toggle("hamburger_active");
    navLinks.classList.toggle("nav__links_active");
    navContacts.classList.toggle("nav__contacts_active");
    body.classList.toggle("scroll_none");
}

for (let i = 0; i < questionsBlock.length; i++) {
    buttonsQuestion[i].onclick = function () {
        buttonsQuestion[i].classList.toggle("_active");
        if (buttonsQuestion[i].classList.contains("_active")) {
            const blockHeight = questionsBlock[i].scrollHeight;
            questionsBlock[i].style.height = blockHeight + "px";
        } else {
            questionsBlock[i].style.height = 120 + "px";
        }
    }
}
