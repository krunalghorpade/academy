<header id="main-header" class="fixed top-0 w-full z-50 transition-all duration-300 border-b bg-transparent border-transparent py-6">
    <div class="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="/" class="text-2xl font-black tracking-tighter text-white uppercase flex items-center gap-2">
            <span class="text-primary">Kratex</span> 
            <span>Academy</span>
        </a>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center gap-8">
            <a href="#programs" class="text-sm font-bold text-gray-300 hover:text-white transition-colors uppercase tracking-wider">Programs</a>
            <a href="#why-kratex" class="text-sm font-bold text-gray-300 hover:text-white transition-colors uppercase tracking-wider">Why Kratex</a>
            <a href="#social-proof" class="text-sm font-bold text-gray-300 hover:text-white transition-colors uppercase tracking-wider">Testimonials</a>
            <a href="#visit" class="text-sm font-bold text-white hover:text-primary transition-colors uppercase tracking-wider">Visit Us</a>
            
            <a href="#apply" class="bg-primary hover:bg-white hover:text-black text-white px-7 py-2.5 rounded-sm font-black text-sm uppercase tracking-widest transition-transform hover:-translate-y-1">
                Apply Now
            </a>
        </nav>

        <!-- Mobile Menu Toggle -->
        <button id="mobile-menu-btn" class="md:hidden text-white hover:text-primary transition-colors">
            <i class="fa-solid fa-bars text-3xl" id="menu-icon"></i>
        </button>
    </div>

    <!-- Mobile Nav Overlay -->
    <div id="mobile-menu" class="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 overflow-hidden transition-all duration-300 h-0 opacity-0 py-0 border-b border-white/10">
        <a href="#programs" class="mobile-link text-2xl font-bold text-gray-300 hover:text-white uppercase tracking-widest hidden">Programs</a>
        <a href="#why-kratex" class="mobile-link text-2xl font-bold text-gray-300 hover:text-white uppercase tracking-widest hidden">Why Kratex</a>
        <a href="#social-proof" class="mobile-link text-2xl font-bold text-gray-300 hover:text-white uppercase tracking-widest hidden">Testimonials</a>
        <a href="#visit" class="mobile-link text-2xl font-bold text-gray-300 hover:text-white uppercase tracking-widest hidden">Visit Us</a>
        <a href="#apply" class="mobile-link bg-primary hover:bg-white hover:text-black text-white px-10 py-4 rounded-sm font-black uppercase tracking-widest mt-4 transition-colors hidden">Apply Now</a>
    </div>
</header>
