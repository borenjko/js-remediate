carslImgs = document.querySelectorAll('section[aria-label="Карусель партнерів"] ul li img');
for (const cImg of carslImgs) {
    cImg.removeAttribute('aria-hidden');
};
sections = document.querySelectorAll('section');
for (const sect of sections) {
    sect.tabindex = '-1';
};