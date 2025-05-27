const header = document.querySelector('.header');
const closeBtn = document.querySelector('.header .close_btn');
const dimmed = document.querySelector('.dimmed');

document.querySelector('.header .menu_btn').addEventListener('click', () => {
  document.body.style.overflow = 'hidden';
  document.querySelector('.main').style.margin = '60px 0 0 0';
  dimmed.classList.add('is_show');
  header.classList.add('is_show');
});

function closeMenu() {
  const headerMenu = document.querySelector('.header.is_show');
  Object.assign(headerMenu.style, {
    transform: 'translateX(-100%)',
    transition: 'transform 0.3s ease',
  });
  setTimeout(() => {
    header.classList.remove('is_show');
    document.querySelector('.main').style.margin = '';
    Object.assign(header.style, {
      transform: 'translateX(0)',
      transition: '',
    });
  }, 300);
  dimmed.classList.remove('is_show');
}

closeBtn.addEventListener('click', closeMenu);
dimmed.addEventListener('click', closeMenu);

// // Ẩn hiện footer list
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

// // Reset trạng thái khi chuyển sang desktop
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
