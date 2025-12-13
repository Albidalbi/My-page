// ============================================
// Game Development Portfolio - JavaScript
// ============================================

// Project Data Structure
const projects = [
    {
        id: 1,
        title: "Unity Lovrboi Animation System",
        category: ["unity", "playable"],
        thumbnail: "Portfolio/Unity loverboy gameplay.gif",
        images: [
            "Portfolio/Unity loverboy gameplay.gif",
            "Portfolio/Unity loverboy animation looping.gif",
            "Portfolio/Unity loverboy animationController looping.gif"
        ],
        description: "A comprehensive platformer project showcasing Unity's animation system, enemy AI, and platforming mechanics. Recent updates include enemy implementation, refined platforming controls, and deep exploration of Unity's Animator Controller for creating responsive character states. This project demonstrates smooth character animations, state machine setup, complex transitions, and parameter-driven animations that respond dynamically to gameplay scenarios like jumping, attacking, and enemy interactions.",
        technologies: ["Unity", "Animation Controller", "Character Animation", "State Machines", "C# Scripting", "Enemy AI", "Platforming Mechanics"],
        itchWidget: '<iframe frameborder="0" src="https://itch.io/embed/4115708" width="552" height="167"><a href="https://albidalbi.itch.io/lovrboi">Lovrboi by Albidalbi</a></iframe>',
        itchUrl: "https://albidalbi.itch.io/lovrboi",
        featured: true
    },
    {
        id: 6,
        title: "Asteroid Escort",
        category: ["godot", "playable"],
        thumbnail: "Portfolio/Asteroid Escort/Asteroid escort gameplay.gif",
        images: [
            "Portfolio/Asteroid Escort/Asteroid escort gameplay.gif",
            "Portfolio/Asteroid Escort/Gameplay.png",
            "Portfolio/Asteroid Escort/Gameplay 2.png",
            "Portfolio/Asteroid Escort/Gameplay 3.png",
            "Portfolio/Asteroid Escort/Gameplay 4.png",
            "Portfolio/Asteroid Escort/Gameplay sketch.jpg",
            "Portfolio/Asteroid Escort/Constructions sketches.jpg",
            "Portfolio/Asteroid Escort/Enemy sketches.jpg"
        ],
        description: "A space escort game developed in Godot where the player protects their core from enemies while managing resources and building defenses. Features custom pixel art created in Aseprite, progressing from prototype to final Apollo palette. The project showcases comprehensive game design including level design, tutorial systems, GUI/UX, and technical programming across a full development team.",
        technologies: ["Godot", "Pixel Art", "Aseprite", "Level Design", "GUI/UX", "Team Collaboration", "Game Design"],
        itchWidget: '<iframe frameborder="0" src="https://itch.io/embed/4088157?linkback=true&amp;bg_color=1c273e&amp;fg_color=d5d6dd&amp;link_color=3b29e2&amp;border_color=8999ac" width="552" height="167"><a href="https://albidalbi.itch.io/asteroid-escort">Asteroid Escort by Albidalbi, Juules32, Danhalf, cott3r, Flengel, PTAndersen</a></iframe>',
        itchUrl: "https://albidalbi.itch.io/asteroid-escort",
        downloadableAssets: {
            prototypeSprites: "Portfolio/Asteroid Escort/prototype palette",
            apolloSprites: "Portfolio/Asteroid Escort/apollo palette",
            description: "All original pixel art created in Aseprite. These include both prototype and final Apollo palette versions."
        },
        collaborators: [
            { name: "Henrik Hammershøj Flengel", role: "Design Lead, Level Design, Tutorial", url: "https://flengel.itch.io/" },
            { name: "Thomas Astegger", role: "UX Lead, Level Design, GUI, Tutorial", url: "https://cott3r.itch.io/" },
            { name: "Halfdan Eg Minegar Brage", role: "Tech Lead, Design, Sound, VFX", url: "https://danhalf.itch.io/" },
            { name: "Benjamin Juul Jensen", role: "Programmer, GUI, Shaders", url: "https://juules32.itch.io/" },
            { name: "Peter Tipsmark Andersen", role: "Programmer, Pixel Artist, AI, GUI, Co-Producer", url: "https://ptandersen.itch.io/" }
        ],
        myRole: "Producer, Art Director, Lead Pixel Artist",
        featured: true
    },
    {
        id: 4,
        title: "Vania - Metroidvania Project",
        category: ["godot"],
        thumbnail: "Portfolio/Vania gameplay.gif",
        images: [
            "Portfolio/Vania gameplay.gif",
            "Portfolio/Vania exploration.png",
            "Portfolio/Vania level construction in godot editor.png",
            "Portfolio/Vania skill tree.png",
            "Portfolio/Vania level design sketch 1.jpg",
            "Portfolio/Vania level design sketch 2.jpg"
        ],
        description: "A metroidvania-style game developed in Godot featuring interconnected level design, ability-gated progression, and a skill tree system. This project demonstrates level construction in Godot's editor, hand-drawn level design sketches translated into playable environments, and the implementation of classic metroidvania gameplay mechanics with modern design sensibilities.",
        technologies: ["Godot", "Metroidvania", "Level Design", "Skill Trees", "2D Platformer"],
        featured: true
    },
    {
        id: 5,
        title: "The 10th Doctor (GBStudio Prototype)",
        category: ["gbstudio", "prototype", "playable"],
        thumbnail: "Portfolio/10th doctor gameplay.gif",
        images: [
            "Portfolio/10th doctor gameplay.gif",
            "Portfolio/10th doctor gameplay.png",
            "Portfolio/10th doctor title screen.png"
        ],
        description: "A rapid 3-day GBStudio prototype called 'The 10th Doctor' created for a course. Heavily inspired by UFO 50's 'Valbrace' and Nintendo's 'Punch-Out!!', focusing on tight, readable patterns and arcade-style combat tuned for the Game Boy aesthetic.",
        technologies: ["GBStudio", "Game Boy Prototype", "Pixel Art", "Rapid Prototyping"],
        playableUrl: "Portfolio/10th doctor web build/index.html",
        collaborators: [
            { name: "Hugo Reinicke", role: "Co-Developer (Cutscenes & Gameplay Programming)", url: "https://kidnoham.itch.io/" }
        ],
        links: [
            { text: "UFO 50 - Valbrace (inspiration)", url: "https://ufo50.miraheze.org/wiki/Valbrace" },
            { text: "Punch-Out!! (reference)", url: "https://en.wikipedia.org/wiki/Punch-Out!!" }
        ],
        myRole: "Gameplay Programming, Game Design, Pixel Art (Gameplay & Title Screen)",
        featured: true
    },
    {
        id: 3,
        title: "Point-and-Click Platformer (Unity → Godot)",
        category: ["unity", "godot"],
        thumbnail: "Portfolio/Ronin like project.gif",
        images: [
            "Portfolio/Ronin like project.gif",
            "Portfolio/Unity point and click platformer.gif",
            "Portfolio/Unity point and click platformer.png"
        ],
        description: "A tactical point-and-click platformer inspired by Tomasz Wacławek's 'RONIN'. Originally prototyped in Unity, this project evolved into a Godot implementation. Players plan their moves strategically, combining precision platforming with turn-based combat mechanics. The project showcases the transition between engines while maintaining core gameplay concepts.",
        technologies: ["Unity", "Godot", "2D Platformer", "Turn-Based Mechanics", "Point-and-Click Controls"],
        links: [
            { text: "Project inspired by Tomasz Wacławeks' RONIN", url: "https://store.steampowered.com/app/274230/RONIN/" }
        ],
        featured: true
    },
    {
        id: 2,
        title: "Ninja Cat - Community Project",
        category: ["godot"],
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
        technologies: ["Godot", "2D Game Development", "Sprite Animation", "Game Mechanics", "Community Collaboration"],
        collaborators: [
            { name: "Halfdan Eg Minegar Brage", role: "Gameplay Programmer & Art Integration", url: "https://danhalf.itch.io/" }
        ],
        myRole: "Pixel Artist (Ninja Cat Boss Sprites, Animations, Shuriken, HP, Background Tiles)",
        featured: true
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

    // Email link - copy to clipboard
    const emailLink = document.getElementById('email-link');
    if (emailLink) {
        emailLink.addEventListener('click', (e) => {
            e.preventDefault();
            copyEmailToClipboard('oldalbidalbi@gmail.com', emailLink);
        });
    }

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

    // Close modal and lightbox on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const lightbox = document.getElementById('image-lightbox');
            if (lightbox && lightbox.classList.contains('active')) {
                closeLightbox();
            } else {
                closeModal();
            }
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
    
    // Add collaborative badge if project has collaborators
    if (project.collaborators && project.collaborators.length > 0) {
        const collabBadge = document.createElement('span');
        collabBadge.className = 'tag collab-badge';
        collabBadge.textContent = '🤝 Collaboration';
        tags.appendChild(collabBadge);
    }
    
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

    // Add playable game button if available
    if (project.playableUrl) {
        modalContent += '<div class="modal-play-section">';
        modalContent += `<a href="${project.playableUrl}" target="_blank" rel="noopener noreferrer" class="play-game-btn">🎮 Play Game</a>`;
        modalContent += '<p class="play-hint">Opens in a new tab • Use Arrow Keys + Z/X or on-screen controls</p>';
        modalContent += '</div>';
    }

    // Add itch.io widget if available
    if (project.itchWidget) {
        modalContent += '<div class="modal-itch-section">';
        modalContent += '<h3>🎮 Play on itch.io:</h3>';
        modalContent += project.itchWidget;
        modalContent += '</div>';
    } else if (project.itchUrl) {
        modalContent += '<div class="modal-itch-section">';
        modalContent += `<a href="${project.itchUrl}" target="_blank" rel="noopener noreferrer" class="itch-link-btn">View on itch.io →</a>`;
        modalContent += '</div>';
    }

    // Add images gallery
    if (project.images && project.images.length > 0) {
        modalContent += '<div class="modal-images">';
        project.images.forEach(image => {
            modalContent += `
                <img src="${image}" 
                     alt="${project.title}" 
                     loading="lazy"
                     class="zoomable-image"
                     onerror="this.style.display='none'">
            `;
        });
        modalContent += '</div>';
    }

    // Add technologies
    if (project.technologies && project.technologies.length > 0) {
        modalContent += '<div class="modal-tech">';
        modalContent += '<h3>Features:</h3>';
        modalContent += '<div class="project-tags">';
        project.technologies.forEach(tech => {
            modalContent += `<span class="tag">${tech}</span>`;
        });
        modalContent += '</div></div>';
    }

    // Add pixel art sprite showcase section if available
    if (project.downloadableAssets) {
        modalContent += '<div class="modal-assets">';
        modalContent += '<h3>🎨 Pixel Art Showcase:</h3>';
        modalContent += `<p class="assets-description">${project.downloadableAssets.description}</p>`;
        
        // Apollo Palette sprites
        if (project.downloadableAssets.apolloSprites) {
            modalContent += '<div class="sprite-showcase">';
            modalContent += '<h4>Apollo Palette (Final)</h4>';
            modalContent += '<div class="sprite-grid">';
            
            const apolloSprites = [
                'Player.png', 'Swarmer.gif', 'Monster.png', 'Ark.png',
                'Large Asteroid.png', 'Medium Asteroid.png', 'Small Asteroid.png',
                'Turret Barrel.png', 'Turret Base.png', 'Medium turret barrel.png',
                'Boost.png', 'Thruster.png', 'Beacon.png',
                '16x16 Drill.png', '16x16 Mineable.png', 'Ores.png',
                'Large Core.png', 'Medium Core.png', 'Small Core.png',
                'GUI Icons 2.png', 'Big square block.png', 'Medium square block.png'
            ];
            
            apolloSprites.forEach(sprite => {
                modalContent += `
                    <img src="${project.downloadableAssets.apolloSprites}/${sprite}" 
                         alt="${sprite}" 
                         class="sprite-item zoomable-image"
                         loading="lazy"
                         onerror="this.style.display='none'"
                         title="${sprite}">
                `;
            });
            
            modalContent += '</div></div>';
        }
        
        // Prototype Palette sprites
        if (project.downloadableAssets.prototypeSprites) {
            modalContent += '<div class="sprite-showcase">';
            modalContent += '<h4>Prototype Palette (Early Development)</h4>';
            modalContent += '<div class="sprite-grid">';
            
            const prototypeSprites = [
                'Ship v7.png', 'Ship v7 drill.gif', 'Monster.png',
                'Big asteroid.png', 'Medium asteroid.png', 'Small asteroid.png',
                'construct turret base.png', 'construct turret barrel.png',
                'construct thruster.png', 'construct cube.png',
                'Big core.png', 'Medium core.png', 'Small core.png',
                '16x16 Resource.png', 'Resource.gif',
                'Player ship thruster.png', 'little flame burst.png'
            ];
            
            prototypeSprites.forEach(sprite => {
                modalContent += `
                    <img src="${project.downloadableAssets.prototypeSprites}/${sprite}" 
                         alt="${sprite}" 
                         class="sprite-item zoomable-image"
                         loading="lazy"
                         onerror="this.style.display='none'"
                         title="${sprite}">
                `;
            });
            
            modalContent += '</div></div>';
        }
        modalContent += '</div>';
    }

    // Add my role if this is a collaborative project
    if (project.myRole && project.collaborators && project.collaborators.length > 0) {
        modalContent += '<div class="modal-my-role">';
        modalContent += '<h3>🎯 My Role:</h3>';
        modalContent += `<p class="my-role-text">${project.myRole}</p>`;
        modalContent += '</div>';
    }

    // Add collaborators section if available
    if (project.collaborators && project.collaborators.length > 0) {
        modalContent += '<div class="modal-collaborators">';
        modalContent += '<h3>🤝 Development Team:</h3>';
        modalContent += '<div class="collaborator-list">';
        project.collaborators.forEach(collab => {
            modalContent += `
                <div class="collaborator-card">
                    <a href="${collab.url}" target="_blank" rel="noopener noreferrer" class="collaborator-link">
                        <div class="collaborator-name">${collab.name}</div>
                        <div class="collaborator-role">${collab.role}</div>
                        <div class="collaborator-itch">View on itch.io →</div>
                    </a>
                </div>
            `;
        });
        modalContent += '</div></div>';
    }

    // Add links if available
    if (project.links && project.links.length > 0) {
        modalContent += '<div class="modal-links">';
        modalContent += '<h3>Related Links:</h3>';
        project.links.forEach(link => {
            modalContent += `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="modal-link">${link.text}</a>`;
        });
        modalContent += '</div>';
    }

    modalBody.innerHTML = modalContent;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Add click handlers to all zoomable images
    setupImageZoom();
}

// Setup image zoom functionality
function setupImageZoom() {
    const zoomableImages = document.querySelectorAll('.zoomable-image');
    const lightbox = document.getElementById('image-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');
    
    zoomableImages.forEach(img => {
        img.addEventListener('click', (e) => {
            e.stopPropagation();
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightboxCaption.textContent = img.title || img.alt;
            lightbox.classList.add('active');
        });
    });
    
    // Close lightbox on click outside image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target === lightboxClose) {
            closeLightbox();
        }
    });
}

// Close lightbox
function closeLightbox() {
    const lightbox = document.getElementById('image-lightbox');
    lightbox.classList.remove('active');
}

// Close modal
function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
    currentProject = null;
    closeLightbox(); // Also close lightbox if open
}

// Utility function to add new projects dynamically
function addProject(project) {
    projects.push(project);
    displayProjects(projects);
}

// Copy email to clipboard with visual feedback
function copyEmailToClipboard(email, buttonElement) {
    navigator.clipboard.writeText(email).then(() => {
        // Store original text
        const originalText = buttonElement.textContent;
        
        // Update button text
        buttonElement.textContent = '✓ Saved to clipboard!';
        buttonElement.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        
        // Reset after 2 seconds
        setTimeout(() => {
            buttonElement.textContent = originalText;
            buttonElement.style.background = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy email:', err);
        // Fallback: still show the email in an alert
        alert('Email: ' + email);
    });
}

// Export functions for potential external use
window.portfolioApp = {
    projects,
    addProject,
    filterProjects,
    openModal,
    closeModal,
    copyEmailToClipboard
};

console.log('Portfolio app loaded successfully!');
