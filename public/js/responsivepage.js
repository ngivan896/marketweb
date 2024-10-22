document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('active'); // Toggle the active class to show/hide nav links
    });
  }

  // 为所有锚点链接添加平滑滚动效果
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // 图片滑动的无缝循环
  const sliderContainer = document.querySelector('#image-slider-container');
  const images = document.querySelectorAll('.image-slider img');

  images.forEach(image => {
    let clone = image.cloneNode(true);
    sliderContainer.appendChild(clone);
  });

  // 鼠标悬停图片时放大并暂停滑动
  let hoverTimer;
  const slider = document.querySelector('#slider'); // 获取滑动容器

  if (slider) {
    // 给每张图片添加悬停2秒后放大效果并暂停滑动
    document.querySelectorAll('.slide img').forEach(img => {
      img.addEventListener('mouseenter', () => {
        hoverTimer = setTimeout(() => {
          img.style.transform = 'scale(1.5)'; // 鼠标悬停2秒后放大图片
          slider.style.animationPlayState = 'paused'; // 同时暂停滑动
        }, 1000); // 鼠标悬停2秒后放大和暂停
      });

      img.addEventListener('mouseleave', () => {
        clearTimeout(hoverTimer); // 鼠标移开前取消放大和暂停
        img.style.transform = 'scale(1)'; // 鼠标移开后恢复原大小
        slider.style.animationPlayState = 'running'; // 鼠标移开后恢复滑动
      });
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const fadeInElements = document.querySelectorAll('.fade-in-text');
  const titleSection = document.querySelector('#title-section');

  // 创建一个 IntersectionObserver
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && window.scrollY > titleSection.offsetTop) {
        // 只有当用户从上往下滚动超过 title-section 时才触发
        entry.target.classList.add('visible');
      } 
    });
  }, { threshold: 0.1 }); // 当元素进入 10% 时触发

  // 监听每个 fade-in 元素
  fadeInElements.forEach((el) => {
    observer.observe(el);
  });
  function checkVisibility() {
    fadeInElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const windowHeight = (window.innerHeight || document.documentElement.clientHeight);

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        el.classList.add('visible');
        el.classList.remove('hidden');
      } else {
        el.classList.remove('visible');
        el.classList.add('hidden');
      }
    });
  }

  // 监听滚动事件
  window.addEventListener('scroll', checkVisibility);

  // 页面加载时立即检查一次可见性
  checkVisibility();
});

document.addEventListener('DOMContentLoaded', () => {
  const aboutLink = document.querySelector('a[href="#company-section"]');
  const companySection = document.querySelector('#company-section');

  if (aboutLink && companySection) {
    aboutLink.addEventListener('click', function (event) {
      event.preventDefault(); // 阻止默认的跳转行为
      companySection.scrollIntoView({ behavior: 'smooth' }); // 平滑滚动到目标位置
    });
  }
});



