const anchors = document.querySelectorAll('a[href^="#"]');

anchors.forEach(anchor => {
   const scrollElementId = anchor.getAttribute('href').split('#')[1],
         scrollElement = document.getElementById(scrollElementId);

   anchor.addEventListener('click', e => {
       e.preventDefault();
       scrollElement.scrollIntoView({behavior: 'smooth'});
   });
});
