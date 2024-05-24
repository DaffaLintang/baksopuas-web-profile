
document.addEventListener('DOMContentLoaded', () => {
    const activePage = window.location.href;
    const navLinks = document.querySelectorAll('nav a');

    function updateActiveLink() {
        navLinks.forEach(link => {
            link.classList.remove('click');
        });

        navLinks.forEach(link => {
            if (link.href === window.location.href) {
                link.classList.add('click');
            }
        });
    }

    updateActiveLink();

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
       
            event.preventDefault();
            window.history.pushState({}, '', link.href);

            updateActiveLink();

    
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    
    window.addEventListener('popstate', updateActiveLink);
});