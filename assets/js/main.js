/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    });
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}
/*==================== REMOVE MENU MOBILE ====================*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav_link');


// Function to set the active link based on scroll position
function setActiveLink() {
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        const sectionHeight = section.offsetHeight;

        // Check if current scroll position is within the section boundaries
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active-link');
                // Add active-link class to the link that points to the visible section
                if (link.getAttribute('href').substring(1) === section.getAttribute('id')) {
                    link.classList.add('active-link');
                }
            });
        }
    });
}

// Function to hide the navigation menu when a link is clicked
function linkAction() {
    navMenu.classList.remove('show-menu');
}

// Add scroll event listener to update active link
window.addEventListener('scroll', setActiveLink);

// Add click event listeners to each nav link to hide menu on click
navLinks.forEach((link) => link.addEventListener('click', linkAction));

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const header = document.getElementById('header');

    //give the condition you want for the scroll
    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader)
/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');

    //Add the show-scroll
    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp)
/*==================== ABOUT TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.target);
            
            tabContents.forEach((tabContent) => {
                tabContent.classList.remove('tab_active');
            });

            target.classList.add('tab_active');

            tabs.forEach((tab) => {
                tab.classList.remove('tab_active');
            });

            tab.classList.add('tab_active')
        });
    });
/*=============== CONTACT FORM =============== */
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactSubject = document.getElementById('contact-subject'),
    contactMessage = document.getElementById('contact-message'),
    errorMessage = document.getElementById('error-message');

    const sendEmail = (e) => {
        e.preventDefault();

        //checking of field value
        if(
            contactName.value === '' || 
            contactEmail.value === '' ||
            contactSubject.value === '' ||
            contactMessage.value === ''
        ) {
            // show error message
            errorMessage.textContent = 'ERROR: missing input'
        }

        else {
            //serviceID - templateID - #form - publickey
            emailjs.sendForm(
                'service_izvb01c',
                'template_sid1oyz',
                '#contact-form',
                'AL3TQ_3u_HaMTSIGA'
            ).then(() => {
                //show message
                errorMessage.classList.add('color-first');
                errorMessage.textContent = 'Message Sent'

                //message timer
                setTimeout(() => {
                    errorMessage.textContent = '';
                }, 5000);
            }, 
            (error) => {
                alert ('SOMETING WENT WRONG!', error)
            }
        );

        //clear input fields
        contactName.value = '';
        contactEmail.value = '';
        contactSubject.value = '';
        contactMessage.value = '';
        }

    }

    contactForm.addEventListener('submit', sendEmail);