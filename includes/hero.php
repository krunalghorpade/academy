<section class="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
    <!-- Background with Dark Overlay -->
    <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" style="background-image: url('placeholder-studio.jpg');">
        <div class="absolute inset-0 bg-black/70 bg-gradient-to-t from-black via-black/50 to-black/80"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-16">
        <div data-aos="fade-up" class="flex flex-col items-center">
            <span class="text-primary font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-6 block">
                Welcome to Kratex<sup class="text-[0.55em]">&trade;</sup> Music Academy
            </span>
            <h1 class="text-6xl md:text-8xl lg:text-[7rem] font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
                Build For<br />
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-600">
                    The Stage
                </span>
            </h1>
            <p class="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 font-medium mb-12">
                This is not just another course. It's a structured path from listener to performer. Transform your ambition into an absolute artist identity.
            </p>

            <div class="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
                <a href="#apply" class="w-full sm:w-auto bg-primary hover:bg-white hover:text-black text-white px-10 py-4 rounded-sm font-black uppercase tracking-widest transition-transform hover:-translate-y-1 shadow-[0_0_20px_rgba(230,0,0,0.3)]">
                    Apply Now
                </a>
                <a href="#visit" class="w-full sm:w-auto bg-black/50 backdrop-blur-sm border border-white/30 hover:bg-white hover:text-black text-white px-10 py-4 rounded-sm font-black uppercase tracking-widest transition-colors hover:bg-white/10">
                    Visit Academy
                </a>
            </div>
        </div>
    </div>

    <!-- Scroll indicator -->
    <style>
        @keyframes shimmerLine {
            0% { transform: translateY(0); }
            100% { transform: translateY(64px); }
        }
        .animate-shimmer {
            animation: shimmerLine 1.5s infinite linear;
        }
    </style>
    <div data-aos="fade-in" data-aos-delay="1000" class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3">
        <span class="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">Scroll</span>
        <div class="w-[1px] h-16 bg-white/20 relative overflow-hidden">
            <div class="w-full h-1/2 bg-white absolute top-0 -translate-y-full animate-shimmer"></div>
        </div>
    </div>
</section>
