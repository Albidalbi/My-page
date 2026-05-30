// ============================================
// Game Development Portfolio - JavaScript
// ============================================

// Project Data Structure
const projects = [
    {
        id: 1,
        title: "Lovrboi - Mobile Touch Movement Study",
        category: ["highlighted", "unity", "playable"],
        thumbnail: "Portfolio/Unity Loverboy/27052026/Lovrboi 2026 gameplay.gif",
        images: [
            "Portfolio/Unity Loverboy/27052026/Cover Image.png",
            "Portfolio/Unity Loverboy/27052026/Lovrboi 2026 gameplay.gif",
            "Portfolio/Unity Loverboy/27052026/Gameplay screenshot combat.png",
            "Portfolio/Unity Loverboy/27052026/Gameplay screenshot Gravestone Jump Puzzle.png",
            "Portfolio/Unity Loverboy/27052026/Movement variants.png",
            "Portfolio/Unity Loverboy/27052026/Lovrboi NGJ showcase QR code sign print.png"
        ],
        legacyImages: [
            "Portfolio/Unity Loverboy/Pre 2026/Unity loverboy gameplay.gif",
            "Portfolio/Unity Loverboy/Pre 2026/Unity loverboy animation looping.gif",
            "Portfolio/Unity Loverboy/Pre 2026/Unity loverboy animationController looping.gif"
        ],
        description: "An exam project for Games User Research during the second semester of my MSc in Games - Design. Lovrboi uses a data-driven mixed-methods workflow to improve mobile touch movement controls, triangulating telemetry and survey responses collected in the same evaluation window. The updated build reflects playtesting across showcases and snowball recruitment, with findings that players understood the left-right movement system but still reported friction around jump feel and responsiveness. The earlier pre-2026 prototype assets are kept as archived historical material.",
        technologies: ["Unity", "Games User Research", "Telemetry Analysis", "Mixed Methods", "Mobile Touch Controls", "UX Research", "Playtesting"],
        itchWidget: '<iframe frameborder="0" src="https://itch.io/embed/4115708" width="552" height="167"><a href="https://albidalbi.itch.io/lovrboi">Lovrboi by Albidalbi</a></iframe>',
        itchUrl: "https://albidalbi.itch.io/lovrboi",
        myRole: "Lead Developer; Games User Research lead, systems design, telemetry analysis, UX",
        timeline: {
            start: "Aug 2025",
            end: "TBD",
            status: "wip",
            milestones: [
                { letter: "A", label: "Games user research coursework update May 2026" },
                { letter: "B", label: "Expecting to launch Alpha during the summer vacation July" },
                { letter: "C", label: "Expecting to launch Beta in August" }
            ]
        },
        featured: true
    },
    {
        id: 8,
        title: "JitterLinks - Fit4Cure Serious Game",
        category: ["highlighted", "godot", "playable"],
        thumbnail: "Portfolio/Jitterlinks/Jitterlinks mobile demo.gif",
        images: [
            "Portfolio/Jitterlinks/JitterLinks Cover.png",
            "Portfolio/Jitterlinks/Jitterlinks mobile demo.gif",
            "Portfolio/Jitterlinks/6 nodes gameplay screenshot.png",
            "Portfolio/Jitterlinks/Build menu gameplay screenshot.png",
            "Portfolio/Jitterlinks/Mobile screen frutiger aero UI sketch made in Figma.png"
        ],
        description: "An exam project for Playable Media during the second semester of an MSc in Games - Design. JitterLinks is a serious game for the Fit4Cure association that turns Parkinson's disease data into an interactive network of nodes and connections, making clinical complexity playable, legible, and less intimidating. The project explores critical play, datafication, and algorithmic literacy while deliberately balancing the ethical risk of reducing patients to statistics by beginning with an individual participant profile before expanding to the wider network.",
        technologies: ["Playable Media", "Serious Game", "Data Visualization", "Network Graph Gameplay", "UX Design", "Critical Play", "Frutiger Aero UI"],
        playableUrl: "https://albidalbi.itch.io/jitterlinks",
        links: [
            { text: "Kaggle dataset used for the project", url: "https://www.kaggle.com/datasets/vikasukani/parkinsons-disease-data-set" },
            { text: "PC gameplay video", url: "https://youtu.be/J8woOMGWe2I" },
            { text: "Mobile gameplay video", url: "https://youtube.com/shorts/UDjYuZ-Putg?feature=share" }
        ],
        myRole: "Solo developer; game design, systems design, UX direction, and presentation",
        timeline: {
            start: "Jan 2026",
            end: "Apr 2026",
            status: "suspended",
            milestones: []
        },
        featured: true
    },
    {
        id: 6,
        title: "Asteroid Escort",
        category: ["highlighted", "godot", "playable"],
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
        timeline: {
            start: "Sep 2025",
            end: "Dec 2026",
            status: "completed",
            milestones: []
        },
        featured: true
    },
    {
        id: 4,
        title: "Vania - Metroidvania Project",
        category: ["godot"],
        thumbnail: "Portfolio/Godot Vania/Vania gameplay.gif",
        images: [
            "Portfolio/Godot Vania/Vania gameplay.gif",
            "Portfolio/Godot Vania/Vania exploration.png",
            "Portfolio/Godot Vania/Vania level construction in godot editor.png",
            "Portfolio/Godot Vania/Vania skill tree.png",
            "Portfolio/Godot Vania/Vania level design sketch 1.jpg",
            "Portfolio/Godot Vania/Vania level design sketch 2.jpg"
        ],
        description: "A metroidvania-style game developed in Godot featuring interconnected vertical level design and designing a horizontal skill progression via a skill tree system. This game features hand-drawn level design sketches translated into playable pixel-art environments. The current pixel art on display does NOT represent the final vision of the project. The story of this game is still being written, and I'm hoping to expand on this project in my free time after handing it in for exam.",
        technologies: ["Godot", "Metroidvania", "Level Design", "Skill Trees", "2D Platformer"],
        timeline: {
            start: "Jan 2024",
            end: "TBD",
            status: "suspended",
            milestones: []
        },
        featured: true
    },
    {
        id: 5,
        title: "The 10th Doctor (GBStudio Prototype)",
        category: ["gbstudio", "prototype", "playable"],
        thumbnail: "Portfolio/GBStudio 10th doctor/10th doctor gameplay.gif",
        images: [
            "Portfolio/GBStudio 10th doctor/10th doctor gameplay.gif",
            "Portfolio/GBStudio 10th doctor/10th doctor gameplay.png",
            "Portfolio/GBStudio 10th doctor/10th doctor title screen.png"
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
        timeline: {
            start: "Sep 2025",
            end: "Dec 2026",
            status: "completed",
            milestones: []
        },
        featured: true
    },
    {
        id: 3,
        title: "Point-and-Click Platformer (Unity → Godot)",
        category: ["unity", "godot"],
        thumbnail: "Portfolio/Ronin/Ronin like project.gif",
        images: [
            "Portfolio/Ronin/Ronin like project.gif",
            "Portfolio/Ronin/Unity point and click platformer.gif",
            "Portfolio/Ronin/Unity point and click platformer.png"
        ],
        description: "A tactical point-and-click platformer inspired by Tomasz Wacławek's 'RONIN'. Originally prototyped in Unity, this project evolved into a Godot implementation. Players plan their moves strategically, combining precision platforming with turn-based combat mechanics. The project showcases the transition between engines while maintaining core gameplay concepts. The story of this game is still being written, and I'm hoping to expand on this project in my free time after handing it in for exam.",
        technologies: ["Unity", "Godot", "2D Platformer", "Turn-Based Mechanics", "Point-and-Click Controls"],
        links: [
            { text: "Project inspired by Tomasz Wacławeks' RONIN", url: "https://store.steampowered.com/app/274230/RONIN/" }
        ],
        timeline: {
            start: "2022",
            end: "TBD",
            status: "suspended",
            milestones: []
        },
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
        timeline: {
            start: "Jan 2024",
            end: "Jan 2025",
            status: "completed",
            milestones: []
        },
        featured: true
    },
    {
        id: 7,
        title: "Bachelor's Project: Games for Learning in Museums",
        category: ["figma", "playable"],
        thumbnail: "Portfolio/Bachelor project/Enkelt.gif",
        images: [
            "Portfolio/Bachelor project/Enkelt.gif",
            "Portfolio/Bachelor project/Report front page.png",
            "Portfolio/Bachelor project/Appendix H Final prototype versions and test deployment.png",
            "Portfolio/Bachelor project/Appendix B Early versions of interactive prototype.png",
            "Portfolio/Bachelor project/Appendix D excerpt of design proposal for Enigma.png"
        ],
        description: "A theoretical research project exploring how digital interactive systems can encourage play and learning in museum exhibitions. This bachelor's project designed and tested an interactive digital leaderboard system accessible via QR codes, aimed at engaging museum guests with game-based learning experiences. Features two complete Figma prototype flows demonstrating different approaches to gamification in cultural heritage contexts.",
        technologies: ["Figma", "Interactive Prototyping", "UX Design", "Game Design Research", "Museum Technology", "QR Code Integration", "Digital Leaderboards"],
        links: [
            { text: "Figma Prototype - Game List Version (Interactive)", url: "https://www.figma.com/proto/qgNNvpAX6iwfVCWGASicdt/Prototype-Bachelorprojekt?node-id=0-1&p=f&viewport=81%2C428%2C0.26&t=rUdwdVHSZVfPNAJH-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1202%3A368&show-proto-sidebar=1" },
            { text: "Figma Prototype - Singular Game Version (Interactive)", url: "https://www.figma.com/proto/qgNNvpAX6iwfVCWGASicdt/Prototype-Bachelorprojekt?node-id=0-1&p=f&viewport=81%2C428%2C0.26&t=rUdwdVHSZVfPNAJH-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1202%3A354&show-proto-sidebar=1" }
        ],
        timeline: {
            start: "Dec 2024",
            end: "May 2025",
            status: "completed",
            milestones: []
        },
        featured: true
    }
];

// State Management
let currentFilter = 'highlighted';
let currentProject = null;

// Initialize Portfolio
document.addEventListener('DOMContentLoaded', () => {
    initializePortfolio();
    setupEventListeners();
    setupTocMenu();
    filterProjects(currentFilter);
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

function setupTocMenu() {
    const tocContainer = document.querySelector('.toc-menu-container');
    const tocButton = document.getElementById('toc-button');
    const tocDropdown = document.getElementById('toc-dropdown');

    if (!tocContainer || !tocButton || !tocDropdown) {
        return;
    }

    const closeTocMenu = () => {
        tocContainer.classList.remove('open');
        tocButton.setAttribute('aria-expanded', 'false');
        tocDropdown.hidden = true;
    };

    tocButton.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = tocContainer.classList.toggle('open');
        tocButton.setAttribute('aria-expanded', String(isOpen));
        tocDropdown.hidden = !isOpen;
    });

    tocDropdown.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            closeTocMenu();
        }
    });

    document.addEventListener('click', (e) => {
        if (!tocContainer.contains(e.target)) {
            closeTocMenu();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeTocMenu();
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
    description.className = 'project-description project-preview';

    // Generate a 2-3 line preview focused on contribution/role.
    function generatePreview(proj) {
        // Prefer explicit preview field if provided
        if (proj.preview) return proj.preview;

        // Use myRole when available to emphasize contribution
        const role = proj.myRole ? proj.myRole : '';

        // Fallback keywords from technologies
        const keywords = (proj.technologies && proj.technologies.length > 0)
            ? proj.technologies.slice(0, 2).join(', ')
            : '';

        // Short excerpt from the project description (first sentence), truncated to ~100 chars
        const rawExcerpt = proj.description ? proj.description.split('.').slice(0,1)[0].trim() : '';
        const maxExcerpt = 100;
        let excerpt = rawExcerpt;
        if (rawExcerpt.length > maxExcerpt) {
            excerpt = rawExcerpt.substring(0, maxExcerpt - 1).trim();
            // remove trailing partial word
            excerpt = excerpt.replace(/\s+[^\s]*$/, '');
            excerpt = excerpt + '…';
        }

        // Build preview HTML with emphasized role/keywords and a short excerpt
        let parts = [];
        if (role) parts.push(`<strong class="preview-kw">${escapeHtml(role)}</strong>`);
        else if (keywords) parts.push(`<strong class="preview-kw">${escapeHtml(keywords)}</strong>`);

        if (excerpt) parts.push(escapeHtml(excerpt));

        // Ensure something is shown
        const previewText = parts.join(' — ');
        return previewText.length > 0 ? previewText : (escapeHtml(proj.title) + ' — portfolio project');
    }

    // Simple HTML escaper for safety
    function escapeHtml(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/\"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    description.innerHTML = generatePreview(project);

    const timeline = document.createElement('div');
    timeline.className = `project-timeline timeline-${project.timeline?.status || 'completed'}`;

    const timelineHeader = document.createElement('div');
    timelineHeader.className = 'timeline-header';

    const timelineStart = document.createElement('span');
    timelineStart.className = 'timeline-date timeline-start';
    timelineStart.textContent = project.timeline?.start || '';

    const timelineEnd = document.createElement('span');
    timelineEnd.className = 'timeline-date timeline-end';
    timelineEnd.textContent = project.timeline?.end || '';

    timelineHeader.appendChild(timelineStart);
    timelineHeader.appendChild(timelineEnd);

    const timelineTrack = document.createElement('div');
    timelineTrack.className = 'timeline-track';

    const timelineFill = document.createElement('div');
    timelineFill.className = 'timeline-fill';
    timelineTrack.appendChild(timelineFill);

    const milestones = document.createElement('div');
    milestones.className = 'timeline-milestones';

    const milestoneList = project.timeline?.milestones || [];
    if (milestoneList.length > 0) {
        milestoneList.forEach((milestone, index) => {
            const marker = document.createElement('span');
            marker.className = 'timeline-marker';
            marker.textContent = milestone.letter;
            marker.title = `${milestone.letter}: ${milestone.label}`;
            const edgeInset = '0.85rem';
            if (milestoneList.length === 1) {
                marker.style.left = '50%';
            } else if (index === 0) {
                marker.style.left = edgeInset;
            } else if (index === milestoneList.length - 1) {
                marker.style.left = `calc(100% - ${edgeInset})`;
            } else {
                marker.style.left = `${(index / (milestoneList.length - 1)) * 100}%`;
            }
            timelineTrack.appendChild(marker);

            const legendItem = document.createElement('div');
            legendItem.className = 'timeline-legend-item';
            legendItem.innerHTML = `<span class="timeline-legend-letter">${milestone.letter}</span><span class="timeline-legend-text">${milestone.label}</span>`;
            milestones.appendChild(legendItem);
        });
    }

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
    if (project.timeline) {
        timeline.appendChild(timelineHeader);
        timeline.appendChild(timelineTrack);
        if (milestoneList.length > 0) {
            timeline.appendChild(milestones);
        }
        info.appendChild(timeline);
    }
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

    if (project.legacyImages && project.legacyImages.length > 0) {
        modalContent += '<div class="modal-assets">';
        modalContent += '<h3>Archived Historical Assets</h3>';
        modalContent += '<p class="assets-description">Pre-2026 prototype material kept for historical reference.</p>';
        modalContent += '<div class="modal-images">';
        project.legacyImages.forEach(image => {
            modalContent += `
                <img src="${image}" 
                     alt="${project.title} archived asset" 
                     loading="lazy"
                     class="zoomable-image"
                     onerror="this.style.display='none'">
            `;
        });
        modalContent += '</div></div>';
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
