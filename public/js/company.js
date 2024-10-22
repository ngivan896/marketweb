document.addEventListener('DOMContentLoaded', function () {
    console.log('Company page loaded');
  });
  
  window.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.info-card');
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        card.classList.add('visible');
      }
    });
  });
  
// Select all the info cards
const cards = document.querySelectorAll('.info-card1, .info-card2, .info-card3');

// Function to add 'show' class when element is in view with delay
function showCardsOnScroll() {
  const triggerBottom = window.innerHeight / 5 * 4; // Trigger when 80% of the viewport is reached

  cards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;
    
    if (cardTop < triggerBottom) {
      // Add delay for each card, increasing with each index
      setTimeout(() => {
        card.classList.add('show');
      }, index * 850); // 500ms delay for each subsequent card
    } else {
      card.classList.remove('show');
    }
  });
}

// Event listener for scrolling
window.addEventListener('scroll', showCardsOnScroll);

// Initially check if the cards are already in view
showCardsOnScroll();

// Event listener for scrolling
window.addEventListener('scroll', showCardsOnScroll);

// Initially check if the cards are already in view
showCardsOnScroll();
window.addEventListener('scroll', function() {
  const aboutSection = document.querySelector('#about .fade-in-text');
  const triggerHeight = window.innerHeight * 0.8; // 控制触发效果的高度
  const aboutTop = aboutSection.getBoundingClientRect().top;

  if (aboutTop < triggerHeight) {
    aboutSection.classList.add('visible');
  }
});


window.addEventListener('scroll', function() {
  const awards = document.querySelectorAll('.fade-in-award');
  const triggerHeight = window.innerHeight * 0.8; // 触发动画的高度

  awards.forEach((award) => {
    const awardTop = award.getBoundingClientRect().top;
    const awardBottom = award.getBoundingClientRect().bottom;

    // 当元素进入视口时添加 'visible' 类
    if (awardTop < triggerHeight && awardBottom > 0) {
      award.classList.add('visible');
    } 
    // 当元素离开视口时移除 'visible' 类，以便动画可以重复触发
    else {
      award.classList.remove('visible');
    }
  });
});
;
