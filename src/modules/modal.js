const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');
    const modalWindow = modal.querySelector('.popup-content');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            let opacity = 0;
            const animate = () => {
                opacity += 0.05;
                let idInterval = requestAnimationFrame(animate);
                modalWindow.style.opacity = '' + opacity;
                if (opacity > 1) {  
                    cancelAnimationFrame(idInterval);
                }    
            };
            
            if (screen.width > 767)
                animate();
            modal.style.display = 'block';
            
            
        });
    });

    closeBtn.addEventListener('click', () => {
        modalWindow.style.opacity = '';
        modal.style.display ='none';
    });
};

export default modal;