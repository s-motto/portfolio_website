// Creo il pulsante hamburger
document.addEventListener('DOMContentLoaded', function() {
   
    const hamburgerBtn = document.createElement('button');
    hamburgerBtn.className = 'hamburger';
    
    // Creo le tre linee
    for (let i = 0; i < 3; i++) {
        const line = document.createElement('span');
        hamburgerBtn.appendChild(line);
    }
    
    // Inserisco il pulsante hamburger prima della nav
    const nav = document.querySelector('nav');
    nav.parentNode.insertBefore(hamburgerBtn, nav);
    
    // Aggiungo l'evento click al pulsante hamburger
    hamburgerBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        document.querySelector('.menu').classList.toggle('active');
    });
    
    // Chiudo il menu quando viene cliccato un link
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburgerBtn.classList.remove('active');
            document.querySelector('.menu').classList.remove('active');
        });
    });
    
    // Chiudo il menu quando si clicca fuori
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = nav.contains(event.target);
        const isClickOnHamburger = hamburgerBtn.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnHamburger && document.querySelector('.menu').classList.contains('active')) {
            hamburgerBtn.classList.remove('active');
            document.querySelector('.menu').classList.remove('active');
        }
    });
});



// gestione delle modal in projects
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('project-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalLink = document.getElementById('modal-link');
    const modalWebsite = document.getElementById('modal-website');
    const closeModal = document.querySelector('.close');

    // Dati dei progetti
    const projects = [
        {
            title: 'Hiking App',
            image: 'img/hikingapp.png',
            description: 'React web app that helps users find hiking trails around them. Includes GPS navigation, badges for achievements and GPX export. Are there thousands of similar apps? Yes. It feels good to have my own when I go hiking? Also yes.',
            github: 'https://github.com/s-motto/project-1',
            website: 'https://lets-walk-hiking-app.vercel.app/'
        },
        {
            title: 'Project 2',
            image: 'img/code.png',
            description: 'This is a description of Project 2.',
            github: 'https://github.com/yourusername/project2'
        },
        {
            title: 'Project 3',
            image: 'img/code.png',
            description: 'This is a description of Project 3.',
            github: 'https://github.com/yourusername/project3'
        }
    ];

    // Aggiungo l'evento click alle card
    const cards = document.querySelectorAll('.card');
    if (cards.length === 0) {
        console.error('No cards found. Ensure your HTML contains elements with the class "card".');
    }

    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            const project = projects[index];
            if (!project) {
                console.error(`No project data found for card index ${index}.`);
                return;
            }

            modalImage.src = project.image;
            modalTitle.textContent = project.title;
            modalDescription.textContent = project.description;
            modalLink.href = project.github;
            modalWebsite.href = project.website; 

            modal.style.display = 'flex'; 
        });
    });

    // Chiusura della modale con il pulsante x
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none'; 
    });

    // Chiusura della modale quando si clicca fuori
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none'; 
        }
    });
});