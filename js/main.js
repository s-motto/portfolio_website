document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburger');
    const menu = document.querySelector('.menu');

    hamburgerBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        menu.classList.toggle('active');
    });

    // Chiudo il menu quando viene cliccato un link
    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', function() {
            hamburgerBtn.classList.remove('active');
            menu.classList.remove('active');
        });
    });

    // Chiudo il menu quando si clicca fuori
    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && !hamburgerBtn.contains(event.target)) {
            hamburgerBtn.classList.remove('active');
            menu.classList.remove('active');
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
        title: 'Portfolio Site',
        image: 'img/code.png',
        description: 'This portfolio site! Built with HTML, CSS and vanilla JavaScript, using Bootstrap for the project cards.',
        github: 'https://github.com/s-motto/portfolio_website'
    },
    {
        title: 'Hiking App',
        image: 'img/hikingapp.png',
        description: 'React web app that helps users find hiking trails around them. Includes GPS navigation, badges for achievements and GPX export. Are there thousands of similar apps? Yes. It feels good to have my own when I go hiking? Also yes.',
        github: 'https://github.com/s-motto/project-1',
        website: 'https://github.com/user-attachments/assets/25f54abb-e63a-47e7-a376-31660a736e5e'
    },
    {
        title: 'La Mia Pizzeria',
        image: 'img/code.png',
        description: 'A Spring Boot web app to manage a pizzeria — full CRUD for pizzas and ingredients, many-to-many relationships between them, promotional offers, and role-based authentication with Spring Security. Built during my back-end course in 2024. Unfinished, but the important parts work.',
        github: 'https://github.com/s-motto/spring-la-mia-pizzeria-relazioni'
    },
    {
        title: 'Gestionale Cooperativa',
        image: 'img/code.png',
        description: 'A full-stack web app built with Laravel 13 to manage the internal operations of a community cooperative. Features include a cash/bank ledger with Excel export, member registry with annual dues tracking, meeting minutes archive with PDF upload, and role-based access control.',
        github: 'https://github.com/s-motto/cooperativa'
    },
    {
        title: 'Zum Zeri',
        image: 'img/code.png',
        description: 'A website for Zum Zeri, a local business in the Zeri area.',
        github: '' // aggiungi il link se ce l'hai
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

if (project.website) {
    modalWebsite.href = project.website;
    modalWebsite.style.display = 'inline-block';
} else {
    modalWebsite.style.display = 'none';
}

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