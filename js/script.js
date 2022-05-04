const navBtn = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('.header');
const yearEl = document.querySelector('.year');
const bodyEl = document.body;


//Mobile navigation

navBtn.addEventListener('click', function() {
    header.classList.toggle('nav-open');
})


//Year for copyright
const year = new Date().getFullYear();

yearEl.textContent = year;

//Smooth scrolling 

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        
        const href = link.getAttribute('href');
        
        if(href === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
             });
        };

        if(href !== '#' && href.startsWith('#')){
            
            const sectionEl = document.querySelector(href);

            sectionEl.scrollIntoView({behavior: 'smooth'});
        }

        //close mobile navigarion 
        if(link.className === 'main-nav-link') header.classList.remove('nav-open');
    });
});


//Sticky Navigation

const sectionHeroEl = document.querySelector('.section-hero');

const observer = new IntersectionObserver(function(entries){
    const ent = entries[0];
    console.log(ent)
    if(!ent.isIntersecting) bodyEl.classList.add('sticky');
    if(ent.isIntersecting) bodyEl.classList.remove('sticky')
}, {
    root: null,
    threshold: 0,
    rootMargin: '-80px',
});

observer.observe(sectionHeroEl);


function checkFlexGap() {
    // create flex container with row-gap set
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";
  
    // create two, elements inside it
    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));
  
    // append to the DOM (needed to obtain scrollHeight)
    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1; // flex container should be 1px high from the row-gap
    flex.parentNode.removeChild(flex);
  
    return isSupported;
  }

  checkFlexGap();
