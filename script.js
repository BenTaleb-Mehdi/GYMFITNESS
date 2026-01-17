// --- 1. JSON Data Object ---
const content = {
    meta: {
        whatsappNumber: "212630829654" // Admin Number
    },
    nav: {
        brand: "Gold<span class='text-brand-orange group-hover:text-white transition-colors'>Fitness</span>",
        links: [
            { href: "#about", text: "À Propos" },
            { href: "#programs", text: "Programmes" },
            { href: "#pricing", text: "Tarifs" }
        ],
        cta: "Rejoindre"
    },
    hero: {
        badge: "Professional Fitness Center",
        title: "Forge <br> <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-red-600 text-glow'>Your Legacy</span>",
        subtitle: "L'excellence n'est pas un acte, c'est une habitude. Rejoignez la communauté la plus dévouée de Tanger.",
        buttons: {
            primary: "Commencer Maintenant",
            secondary: "Découvrir"
        },
        stats: { number: "500+", text: "Membres Actifs" }
    },
    about: {
        header: "Nous <span class='text-brand-orange'>Connaître</span>",
        title: "Plus qu'une salle, <span class='text-brand-orange'>un temple</span>.",
        text: "Situé au cœur de Tanger, nous avons redéfini le fitness. Oubliez les salles bondées et impersonnelles. Ici, chaque détail est pensé pour votre performance. Lumières tamisées, matériel olympique, et une atmosphère qui pousse au dépassement de soi.",
        stats: [
            { val: "15+", label: "Experts Coachs" },
            { val: "24/7", label: "Accès Membres" }
        ]
    },
    programs: { 
        header: "Nos <span class='text-brand-orange'>Programmes</span>",
        items: [
            {
                icon: "fa-solid fa-dumbbell",
                title: "Musculation",
                desc: "Plateau libre de 500m2 avec équipement Hammer Strength et Eleiko."
            },
            {
                icon: "fa-solid fa-bolt",
                title: "CrossTraining",
                desc: "Zone fonctionnelle dédiée pour WODs intenses et préparation physique."
            },
            {
                icon: "fa-solid fa-heart-pulse",
                title: "Cardio Hi-Tech",
                desc: "Tapis et vélos dernière génération avec écrans connectés et Netflix."
            }
        ]
    },
    pricing: {
        header: "Abonnements <span class='text-brand-orange'>Premium</span>",
        plans: [
            {
                name: "Basic",
                price: "250",
                period: "MAD/mois",
                features: ["Accès Smart (8h-16h)", "Casiers Digital", "Application Mobile"],
                highlight: false
            },
            {
                name: "Infinity",
                price: "450",
                period: "MAD/mois",
                features: ["Accès Illimité 24/7", "Cours Collectifs", "Bilan InBody Offert", "Accès Multi-Clubs"],
                highlight: true
            },
            {
                name: "Elite",
                price: "800",
                period: "MAD/mois",
                features: ["Tout Infinity +", "Coaching 2x/mois", "Serviettes Fournies", "Accès Spa/Sauna", "Priorité Réservation"],
                highlight: false
            }
        ]
    },
    gallery: {
        images: [
            "IMG1.jpg", // Featured Large
            "IMG2.jpg",
            "IMG3.jpg",
            "IMG4.jpg", // Reusing for demo
            "IMG5.jpg",
            "IMG6.jpg"
        ]
    },
    contact: {
        header: "Nous <span class='text-brand-orange'>Trouver</span>",
        info: [
            { icon: "fa-solid fa-location-dot", text: "Gold Fitness, Av. Mohammed VI, Tanger" },
            { icon: "fa-solid fa-phone", text: "+212 6 30 82 96 54" },
            { icon: "fa-solid fa-envelope", text: "info@gymtanger.com" }
        ]
    }
};

// --- 2. Render Functions ---
function renderPage() {
    // -- Hero --
    const heroTitle = document.querySelector('#hero h1');
    if(heroTitle) heroTitle.innerHTML = content.hero.title;
    
    const heroSubtitle = document.querySelector('#hero p');
    if(heroSubtitle) heroSubtitle.textContent = content.hero.subtitle;
    
    const heroBadge = document.querySelector('#hero .badge');
    if(heroBadge) heroBadge.textContent = content.hero.badge;
    
    // -- About --
    const aboutTitle = document.getElementById('about-title');
    if(aboutTitle) aboutTitle.innerHTML = content.about.title;
    
    const aboutText = document.getElementById('about-text');
    if(aboutText) aboutText.textContent = content.about.text;
    
    // -- Programs (Services) --
    const servicesHeader = document.querySelector('#services h2');
    if(servicesHeader) servicesHeader.innerHTML = content.programs.header;
    
    const servicesContainer = document.getElementById('services-grid');
    if(servicesContainer) {
        servicesContainer.innerHTML = content.programs.items.map((item, index) => `
            <div class="group relative bg-black/50 backdrop-blur-md border border-white/5 p-8 hover:border-brand-orange/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,69,0,0.1)] h-full" data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="w-16 h-16 bg-black rounded-sm flex items-center justify-center mb-6 group-hover:bg-brand-orange transition-colors duration-300">
                    <i class="${item.icon} text-2xl text-white"></i>
                </div>
                <h3 class="font-display text-2xl font-bold uppercase text-white mb-3 group-hover:text-brand-orange transition-colors">${item.title}</h3>
                <p class="text-zinc-500 text-sm leading-relaxed">${item.desc}</p>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
        `).join('');
    }

    // -- Pricing --
    const pricingHeader = document.querySelector('#pricing h2');
    if(pricingHeader) pricingHeader.innerHTML = content.pricing.header;
    
    const pricingContainer = document.getElementById('pricing-wrapper');
    if(pricingContainer) {
        pricingContainer.innerHTML = content.pricing.plans.map((plan, index) => `
            <div class="swiper-slide h-auto">
                <div class="relative bg-black/50 backdrop-blur-md border ${plan.highlight ? 'border-brand-orange shadow-[0_0_20px_rgba(255,69,0,0.15)] z-10' : 'border-white/10 hover:border-white/30'} p-8 transition-all duration-300 flex flex-col h-full rounded-xl" data-aos="${window.innerWidth > 768 ? 'flip-left' : ''}" data-aos-delay="${index * 150}">
                    ${plan.highlight ? '<div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><span class="bg-brand-orange text-black text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-sm">Recommandé</span></div>' : ''}
                    
                    <h3 class="text-xl font-display font-bold text-white uppercase mb-4 tracking-wider">${plan.name}</h3>
                    <div class="flex items-baseline mb-8">
                        <span class="text-5xl font-display font-bold text-white">${plan.price}</span>
                        <span class="ml-2 text-zinc-500 text-sm">${plan.period}</span>
                    </div>
                    
                    <ul class="space-y-4 mb-8 flex-grow">
                        ${plan.features.map(f => `
                            <li class="flex items-center text-sm text-zinc-400">
                                <i class="fa-solid fa-check text-brand-orange mr-3"></i> ${f}
                            </li>
                        `).join('')}
                    </ul>
                    
                    <button onclick="openModal('${plan.name}')" class="w-full py-4 border ${plan.highlight ? 'bg-brand-orange border-brand-orange text-white hover:bg-orange-600' : 'border-white/20 text-white hover:bg-white hover:text-black'} font-display font-bold uppercase tracking-widest transition-all duration-300 mt-auto">
                        Choisir
                    </button>
                </div>
            </div>
        `).join('');
    }

    // -- Gallery --
    const galleryContainer = document.getElementById('gallery-grid');
    if(galleryContainer) {
        galleryContainer.innerHTML = content.gallery.images.map((img, index) => {
            // First image is large (2x2)
            const isLarge = index === 0;
            const classes = isLarge ? 'col-span-2 row-span-2 h-96' : 'col-span-1 h-48';
            
            return `
                <div class="relative overflow-hidden group rounded-lg ${classes} cursor-pointer" data-aos="fade-in" data-aos-delay="${index * 100}" onclick="openLightbox('${img}')">
                    <img src="${img}" alt="Gym Gallery ${index + 1}" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span class="text-brand-orange font-bold uppercase tracking-widest text-sm">Agrandir <i class="fa-solid fa-expand ml-2"></i></span>
                    </div>
                </div>
            `;
        }).join('');
    }

    // -- Fixed WhatsApp Button --
    const fixedWaBtn = document.getElementById('fixed-whatsapp-btn');
    if(fixedWaBtn) {
        fixedWaBtn.href = `https://wa.me/${content.meta.whatsappNumber}`;
    }

    // -- Footer Contact --
    const footerAddress = document.getElementById('footer-address');
    if(footerAddress) footerAddress.innerHTML = `<i class="${content.contact.info[0].icon} text-brand-orange mr-3 w-5"></i> ${content.contact.info[0].text}`;

    const footerPhone = document.getElementById('footer-phone');
    if(footerPhone) footerPhone.innerHTML = `<i class="${content.contact.info[1].icon} text-brand-orange mr-3 w-5"></i> ${content.contact.info[1].text}`;

    const footerEmail = document.getElementById('footer-email');
    if(footerEmail) footerEmail.innerHTML = `<i class="${content.contact.info[2].icon} text-brand-orange mr-3 w-5"></i> ${content.contact.info[2].text}`;
}

// --- 3. Interactive Logic ---

// Mobile Menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    const isOpen = !menu.classList.contains('translate-x-full');
    
    if(isOpen) {
        // Close Menu
        menu.classList.add('translate-x-full');
        // Switch to Hamburger
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars-staggered');
    } else {
        // Open Menu
        menu.classList.remove('translate-x-full');
        // Switch to X
        icon.classList.remove('fa-bars-staggered');
        icon.classList.add('fa-xmark');
    }
}

// Make globally available for onclick html attributes
window.toggleMobileMenu = toggleMobileMenu;

// Modal Logic
const modalOverlay = document.getElementById('modal-overlay');
const modalContent = document.getElementById('modal-content');
const packSelect = document.querySelector('#inscription-form select');

function openModal(preselectedPack = null) {
    if(preselectedPack && packSelect) {
        // Try to match the select option
        Array.from(packSelect.options).forEach(option => {
            if(option.value.includes(preselectedPack) || option.text.includes(preselectedPack)) {
                option.selected = true;
            }
        });
    }
    
    if(modalOverlay && modalContent) {
        modalOverlay.classList.remove('hidden');
        setTimeout(() => {
            modalOverlay.classList.remove('opacity-0');
            modalContent.classList.remove('scale-95');
            modalContent.classList.add('scale-100');
        }, 10);
    }
}
window.openModal = openModal;

function closeModal() {
    if(modalOverlay && modalContent) {
        modalOverlay.classList.add('opacity-0');
        modalContent.classList.remove('scale-100');
        modalContent.classList.add('scale-95');
        setTimeout(() => {
            modalOverlay.classList.add('hidden');
        }, 300);
    }
}
window.closeModal = closeModal;

// --- Lightbox Logic ---
const lightboxModal = document.getElementById('lightbox-modal');
const lightboxImage = document.getElementById('lightbox-image');

function openLightbox(src) {
    if(lightboxModal && lightboxImage) {
        lightboxImage.src = src;
        lightboxModal.classList.remove('hidden');
        // Small delay to allow display:block to apply before opacity transition
        setTimeout(() => {
            lightboxModal.classList.remove('opacity-0');
            lightboxImage.classList.remove('scale-95');
            lightboxImage.classList.add('scale-100');
        }, 10);
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }
}
window.openLightbox = openLightbox;

function closeLightbox() {
    if(lightboxModal && lightboxImage) {
        lightboxModal.classList.add('opacity-0');
        lightboxImage.classList.remove('scale-100');
        lightboxImage.classList.add('scale-95');
        
        setTimeout(() => {
            lightboxModal.classList.add('hidden');
            lightboxImage.src = '';
            // Restore body scroll
            document.body.style.overflow = '';
        }, 300);
    }
}
window.closeLightbox = closeLightbox;

// --- WhatsApp Form Redirection ---
const form = document.getElementById('inscription-form');
if(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Collect Data
        const userName = e.target.querySelector('input[type="text"]').value;
        const userPhone = e.target.querySelector('input[type="tel"]').value;
        const pack = packSelect ? packSelect.value : "Default";
        
        // Construct Message
    const message = `*NOUVELLE DEMANDE D'INSCRIPTION*

Bonjour l'équipe GYM TANGER,
Je souhaite rejoindre le club. Voici mes détails :

    - *Nom Complet :* ${userName}
    - *Téléphone :* ${userPhone}
    - *Pack Choisi :* ${pack}

Merci de confirmer ma demande. À bientôt !`;
        
        // WhatsApp API URL
        const finalUrl = `https://wa.me/${content.meta.whatsappNumber}?text=${encodeURIComponent(message)}`;
        
        // Redirect
        window.open(finalUrl, '_blank');
        closeModal();
        e.target.reset();
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Lenis Smooth Scroll
    const lenis = new Lenis()

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Render Content
    renderPage();
    
    // Initialize Pricing Swiper
    const pricingSwiper = new Swiper(".pricing-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });

    // Initialize AOS
    AOS.init({
        once: true,
        offset: 100,
        duration: 800,
        easing: 'ease-out-cubic'
    });
});
