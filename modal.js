const modal = document.getElementById('mediaModal');
const modalWrapper = document.querySelector('.modal-content-wrapper');
const closeBtn = document.querySelector('.close-btn');
const portfolioMedia = document.querySelectorAll('.portfolio-item img, .portfolio-item video');

portfolioMedia.forEach(media => {
    media.addEventListener('click', (e) => {
        // Voorkom dat de modal opent als je op de 'Enable Sound' knop klikt
        if (e.target.classList.contains('sound-toggle-btn')) return;

        modalWrapper.innerHTML = ''; 

        if (media.tagName === 'IMG') {
            const img = document.createElement('img');
            img.src = media.src;
            img.classList.add('modal-content');
            modalWrapper.appendChild(img);
        } else if (media.tagName === 'VIDEO') {
            const vid = document.createElement('video');
            vid.src = media.currentSrc || media.src;
            vid.controls = true;
            vid.autoplay = true;
            vid.classList.add('modal-content');
            modalWrapper.appendChild(vid);
        }

        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Blokkeer scrollen op de achtergrond
    });
});

const closeModal = () => {
    modal.classList.remove('active');
    modalWrapper.innerHTML = ''; // Leegmaken stopt direct de video
    document.body.style.overflow = 'auto'; // Activeer scrollen weer
};

closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target === modalWrapper) {
        closeModal();
    }
});