document.addEventListener("DOMContentLoaded", () => {
    // ---- Sticky Header Logic ----
    const header = document.getElementById("main-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("bg-black/90", "backdrop-blur-md", "border-white/10", "py-4");
            header.classList.remove("bg-transparent", "border-transparent", "py-6");
        } else {
            header.classList.remove("bg-black/90", "backdrop-blur-md", "border-white/10", "py-4");
            header.classList.add("bg-transparent", "border-transparent", "py-6");
        }
    });

    // ---- Mobile Menu Logic ----
    const menuBtn = document.getElementById("mobile-menu-btn");
    const menuIcon = document.getElementById("menu-icon");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileLinks = document.querySelectorAll(".mobile-link");

    let menuOpen = false;

    menuBtn.addEventListener("click", () => {
        menuOpen = !menuOpen;
        if (menuOpen) {
            menuIcon.classList.remove("fa-bars");
            menuIcon.classList.add("fa-xmark");
            
            mobileMenu.classList.remove("h-0", "opacity-0", "py-0");
            mobileMenu.classList.add("h-screen", "opacity-100", "py-10");
            
            mobileLinks.forEach(link => {
                link.classList.remove("hidden");
                // slight fade in delay
                setTimeout(() => {
                    link.style.opacity = 1;
                }, 100);
            });
        } else {
            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars");
            
            mobileMenu.classList.add("h-0", "opacity-0", "py-0");
            mobileMenu.classList.remove("h-screen", "opacity-100", "py-10");
            
            mobileLinks.forEach(link => {
                link.classList.add("hidden");
            });
        }
    });

    // Close menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (menuOpen) {
                menuBtn.click();
            }
        });
    });

    // ---- Mobile Bottom Bar Logic ----
    const bottomBar = document.getElementById("mobile-bottom-bar");
    if(bottomBar) {
        let lastScrollY = window.scrollY;
        window.addEventListener("scroll", () => {
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                // Scrolling down
                bottomBar.classList.add("translate-y-full");
            } else {
                // Scrolling up
                bottomBar.classList.remove("translate-y-full");
            }
            lastScrollY = window.scrollY;
        }, { passive: true });
    }
});
