// ============================================
// Game Development Portfolio - JavaScript
// ============================================

// Project Data Structure
const projects = [
    {
        id: 1,
        title: "Unity Loverboy Animation",
        category: ["unity", "animation"],
        thumbnail: "Portfolio/Unity loverboy animation looping.gif",
        images: [
            "Portfolio/Unity loverboy animation looping.gif",
            "Portfolio/Unity loverboy animationController looping.gif"
        ],
        description: "A character animation project showcasing Unity's animation system. This project demonstrates smooth character animations and animation controller implementation for creating engaging character movements.",
        technologies: ["Unity", "Animation Controller", "Character Animation", "State Machines"],
        featured: true
    },
    {
        id: 2,
        title: "Ninja Cat - Community Project",
        category: ["unity", "community", "animation"],
        thumbnail: "Portfolio/Community project ninja time/Community project ninja time.gif",
        images: [
            "Portfolio/Community project ninja time/Community project ninja time.gif",
            "Portfolio/Community project ninja time/Ninja Cat GDC/NinjaCat_Idle.png",
            "Portfolio/Community project ninja time/Ninja Cat GDC/NinjaCat_throw.png",
            "Portfolio/Community project ninja time/Ninja Cat GDC/NinjaCat_charge.png",
            "Portfolio/Community project ninja time/Ninja Cat GDC/NinjaCat_slam.png",
            "Portfolio/Community project ninja time/Ninja Cat GDC/NinjaCat_teleport.png",
            "Portfolio/Community project ninja time/Ninja Cat GDC/GDC_throwing_star.png",
            "Portfolio/Community project ninja time/Ninja Cat GDC/GDC_player_heart.png",
            "Portfolio/Community project ninja time/Ninja Cat GDC/GDC_NinjaCat_BG.png"
        ],
        description: "A community-driven game project featuring a ninja cat character with multiple abilities including throwing stars, charging attacks, slamming, and teleportation. This project showcases comprehensive sprite work, animation states, and game mechanics implementation. Developed as part of a collaborative effort for GDC (Game Developers Conference).",
        technologies: ["Unity", "2D Game Development", "Sprite Animation", "Game Mechanics", "Community Collaboration"],
        featured: true
    },
    {
        id: 3,
        title: "Animation Controller System",
        category: ["unity", "animation"],
        thumbnail: "Portfolio/Unity loverboy animationController looping.gif",
        images: [
            "Portfolio/Unity loverboy animationController looping.gif"
        ],
        description: "Deep dive into Unity's animation controller system, demonstrating state machine setup, transitions, and parameter-driven animations. This work showcases technical proficiency in creating responsive and smooth character animation systems.",
        technologies: ["Unity Animator", "State Machines", "Animation Blending", "C# Scripting"],
        featured: false
    }
];

// State Management
let currentFilter = 'all';
let currentProject = null;

// Initialize Portfolio
document.addEventListener('DOMContentLoaded', () => {
    initializePortfolio();
    setupEventListeners();
});

// Initialize the portfolio display
function initializePortfolio() {
    displayProjects(projects);
    console.log('Portfolio initialized with', projects.length, 'projects');
}

// Setup Event Listeners
function setupEventListeners() {
    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            setActiveFilter(button, filter);
            filterProjects(filter);
        });
    });

    // Modal close button
    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', closeModal);

    // Close modal on outside click
    const modal = document.getElementById('project-modal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Set active filter button
function setActiveFilter(activeButton, filter) {
    // Remove active class from all buttons
    document.querySelectorAll('.filter-buttons button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to clicked button
    activeButton.classList.add('active');
    currentFilter = filter;
}

// Filter projects based on category
function filterProjects(filter) {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const categories = card.getAttribute('data-categories').split(',');
        
        if (filter === 'all' || categories.includes(filter)) {
            card.classList.remove('hidden');
            // Trigger reflow for animation
            void card.offsetWidth;
            card.style.animation = 'fadeIn 0.5s ease-out';
        } else {
            card.classList.add('hidden');
        }
    });
}

// Display all projects
function displayProjects(projectsToDisplay) {
    const projectGrid = document.getElementById('projects');
    projectGrid.innerHTML = '';

    projectsToDisplay.forEach(project => {
        const projectCard = createProjectCard(project);
        projectGrid.appendChild(projectCard);
    });
}

// Create a project card element
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-categories', project.category.join(','));
    card.setAttribute('data-project-id', project.id);

    // Create thumbnail
    const thumbnail = document.createElement('img');
    thumbnail.className = 'project-thumbnail';
    thumbnail.src = project.thumbnail;
    thumbnail.alt = project.title;
    thumbnail.loading = 'lazy';

    // Handle image load errors
    thumbnail.onerror = function() {
        this.style.background = 'linear-gradient(135deg, #6366f1, #8b5cf6)';
        this.style.display = 'flex';
        this.style.alignItems = 'center';
        this.style.justifyContent = 'center';
        this.alt = '🎮 ' + project.title;
    };

    // Create info section
    const info = document.createElement('div');
    info.className = 'project-info';

    const title = document.createElement('h3');
    title.className = 'project-title';
    title.textContent = project.title;

    const description = document.createElement('p');
    description.className = 'project-description';
    description.textContent = project.description.substring(0, 120) + '...';

    // Create tags
    const tags = document.createElement('div');
    tags.className = 'project-tags';
    project.category.forEach(cat => {
        const tag = document.createElement('span');
        tag.className = 'tag';
        tag.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
        tags.appendChild(tag);
    });

    // Append elements
    info.appendChild(title);
    info.appendChild(description);
    info.appendChild(tags);

    card.appendChild(thumbnail);
    card.appendChild(info);

    // Add click event to open modal
    card.addEventListener('click', () => openModal(project));

    return card;
}

// Open modal with project details
function openModal(project) {
    currentProject = project;
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');

    // Build modal content
    let modalContent = `
        <h2 class="modal-title">${project.title}</h2>
        <p class="modal-description">${project.description}</p>
    `;

    // Add images gallery
    if (project.images && project.images.length > 0) {
        modalContent += '<div class="modal-images">';
        project.images.forEach(image => {
            modalContent += `
                <img src="${image}" 
                     alt="${project.title}" 
                     loading="lazy"
                     onerror="this.style.display='none'">
            `;
        });
        modalContent += '</div>';
    }

    // Add technologies
    if (project.technologies && project.technologies.length > 0) {
        modalContent += '<div class="modal-tech">';
        modalContent += '<h3>Technologies Used:</h3>';
        modalContent += '<div class="project-tags">';
        project.technologies.forEach(tech => {
            modalContent += `<span class="tag">${tech}</span>`;
        });
        modalContent += '</div></div>';
    }

    modalBody.innerHTML = modalContent;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Close modal
function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
    currentProject = null;
}

// Utility function to add new projects dynamically
function addProject(project) {
    projects.push(project);
    displayProjects(projects);
}

// Export functions for potential external use
window.portfolioApp = {
    projects,
    addProject,
    filterProjects,
    openModal,
    closeModal
};

console.log('Portfolio app loaded successfully!');
