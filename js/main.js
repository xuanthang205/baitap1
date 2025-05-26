const closeBtn = document.querySelector('.header .times_btn');
const overlay = document.querySelector('.header .overlay');
const headerBox = document.querySelector('.header_box');

document.querySelector('.header .menu_btn').addEventListener('click', () => {
  overlay.classList.add('is_show');
  headerBox.classList.add('is_show');

  setTimeout(() => {
    headerBox.style.transition = 'transform 0.25s ease-in-out';
    headerBox.classList.add('is_move');
  }, 10);
});

function closeMenu() {
  headerBox.classList.remove('is_move');
  setTimeout(() => {
    headerBox.classList.remove('is_show');
    overlay.classList.remove('is_show');
    headerBox.style.removeProperty('transition');
  }, 250);
}

closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

// Ẩn hiện footer list
function isMobile() {
  return window.innerWidth <= 767.98;
}

document.querySelectorAll('.footer_area .col').forEach((col) => {
  const title = col.querySelector('.title');
  const list = col.querySelector('.footer_list');

  if (!title || !list) return;

  if (title.textContent.trim() === 'Page' || title.textContent.trim() === 'Info') {
    title.addEventListener('click', () => {
      if (isMobile()) {
        title.classList.toggle('is_show');
        list.classList.toggle('is_show');
      }
    });
  }
});

// Reset trạng thái khi chuyển sang desktop
window.addEventListener('resize', () => {
  if (!isMobile()) {
    document.querySelectorAll('.footer_list.is_show').forEach((list) => {
      list.classList.remove('is_show');
    });
  }
});


document.querySelectorAll('.more_btn').forEach((more) => {
  more.addEventListener('mouseenter', () => {
    const width = more.offsetWidth + 'px';
    more.style.setProperty('--after-width', width);
  });

  more.addEventListener('mouseleave', () => {
    more.style.setProperty('--after-width', '0px');
  });
});
