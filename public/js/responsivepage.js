document.addEventListener('DOMContentLoaded', function () {
  // 菜单显示/隐藏功能
  var menuIcon = document.getElementById('menu-icon');
  var menu = document.getElementById('menulist');

  if (menuIcon && menu) {
    menuIcon.addEventListener('click', function () {
      if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
      } else {
        menu.style.display = 'none';
      }
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
        }, 1500); // 鼠标悬停2秒后放大和暂停
      });

      img.addEventListener('mouseleave', () => {
        clearTimeout(hoverTimer); // 鼠标移开前取消放大和暂停
        img.style.transform = 'scale(1)'; // 鼠标移开后恢复原大小
        slider.style.animationPlayState = 'running'; // 鼠标移开后恢复滑动
      });
    });
  }
});
