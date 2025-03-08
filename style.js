// document.addEventListener("DOMContentLoaded", () => {

// });


document.addEventListener("DOMContentLoaded", ()=>{

  // Initialize AOS in your JavaScript
  // AOS.init();
    


  // text in the main page***************
    // Typed.js
    new Typed(".head-text1", {
      strings: ["", "flavors...", "moments..."],
      typeSpeed: 100,
      backSpeed: 80,
      loop: true,
    });
    new Typed(".head-text2", {
      strings: ["", "Deliciousness...!"],
      typeSpeed: 100,
      backSpeed: 80,
      loop: true,
    });
  
    // GSAP + SplitType
    const h1Element = document.querySelector(".left-sec01 h1");
    const i_text = new SplitType(h1Element, { types: "chars" });
    gsap.to(i_text.chars, {
      y: 0,
      opacity: 1,
      stagger: 0.08, // Text splitting transition
      duration: 0.3, // Full text duration
      scrollTrigger: {
        trigger: h1Element,
        start: "top 80%", // Adjust start point as needed
      },
    });
// end of the text in main page*************

   
    let cursorItem = document.querySelector(".cursor")
    let cursorParagraph = cursorItem.querySelector("p")
    let targets = document.querySelectorAll("[data-cursor]")
    let xOffset = 6;
    let yOffset = 50;
    let cursorIsOnRight = false;
    let currentTarget = null;
    let lastText = '';
    
    // Position cursor relative to actual cursor position on page load
    gsap.set(cursorItem, {xPercent: xOffset, yPercent: yOffset});
  
    // Use GSAP quick.to for a more performative tween on the cursor
    let xTo = gsap.quickTo(cursorItem, "x", { ease: "power3"});
    let yTo = gsap.quickTo(cursorItem, "y", { ease: "power3"});
  
    // On mousemove, call the quickTo functions to the actual cursor position
    window.addEventListener("mousemove", e => {
      let windowWidth = window.innerWidth;
      let windowHeight = window.innerHeight;
      let scrollY = window.scrollY;
      let cursorX = e.clientX;
      let cursorY = e.clientY + scrollY; // Adjust cursorY to account for scroll
  
      // Default offsets
      let xPercent = xOffset;
      let yPercent = yOffset;
  
      // Adjust X offset if in the rightmost 19% of the window
      if (cursorX > windowWidth * 0.66) {
        cursorIsOnRight = true;
        xPercent = -100;
      } else{
        cursorIsOnRight = false;
      }
  
      // Adjust Y offset if in the bottom 10% of the current viewport
      if (cursorY > scrollY + windowHeight * 0.9) {
        yPercent = -120; 
      }
      
      if (currentTarget) {
        let newText = currentTarget.getAttribute("data-cursor");
        if (currentTarget.hasAttribute("data-easteregg") && cursorIsOnRight) {
          newText = currentTarget.getAttribute("data-easteregg");
        }
  
        if (newText !== lastText) { // Only update if the text is different
          cursorParagraph.innerHTML = newText;
          lastText = newText;
        }
      }
  
      gsap.to(cursorItem, { xPercent: xPercent, yPercent: yPercent, duration: 0.9, ease: "power3" });
      xTo(cursorX);
      yTo(cursorY - scrollY); // Subtract scroll for viewport positioning
    });
  
    
    // Add a mouse enter listener for each link that has a data-cursor attribute
    targets.forEach(target => {
      target.addEventListener("mouseenter", () => {
        currentTarget = target; // Set the current target
        
        // If element has data-easteregg attribute, load different text
        let newText = target.hasAttribute("data-easteregg")
          ? target.getAttribute("data-easteregg")
          : target.getAttribute("data-cursor");
  
        // Update only if the text changes
        if (newText !== lastText) {
          cursorParagraph.innerHTML = newText;
          lastText = newText;
        }
      });
    });

   // Initialize Swiper
var swiper = new Swiper('.review-slider', {
  spaceBetween: 20, // Space between slides
  loop: true,       // Infinite loop mode
  autoplay: {
    delay: 3000,    // Slide delay in ms
    disableOnInteraction: false, // Keep autoplay running on interaction
  },
  pagination: {
    el: '.swiper-pagination',   // Pagination element
    clickable: true,            // Allow clicking pagination bullets
  },
  navigation: {
    nextEl: '.swiper-button-next', // Next button
    prevEl: '.swiper-button-prev', // Previous button
  },
});

    
    
   })


