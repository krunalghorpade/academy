<section id="social-proof" class="py-24 md:py-32 bg-[#050505] overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
        <div data-aos="fade-up" class="text-center mb-16">
            <span class="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Proof of Work</span>
            <h2 class="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                Don't Just <span class="text-gray-500">Take Our Word</span>.
            </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <?php foreach([1, 2, 3] as $index => $item): ?>
                <div data-aos="fade-up" data-aos-delay="<?= $index * 150 ?>" class="group aspect-[4/5] bg-[#0a0a0a] rounded-xl border border-white/10 relative overflow-hidden cursor-pointer">
                    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80 z-10 opacity-80 group-hover:opacity-60 transition-opacity"></div>
                    <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style="background-image: url('placeholder-proof-<?= $item ?>.jpg'); background-color: #111;"></div>
                    
                    <div class="absolute bottom-6 left-6 right-6 z-20">
                        <div class="flex items-center gap-4 mb-4">
                            <div class="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30"></div>
                            <div>
                                <h4 class="text-white font-black tracking-widest uppercase text-sm">Student Name</h4>
                                <p class="text-primary text-xs font-bold uppercase tracking-widest">DJing Pro</p>
                            </div>
                        </div>
                        <p class="text-gray-300 text-sm font-medium italic leading-relaxed">
                            "The structure and industry insights completely changed my approach. Pure performance focus."
                        </p>
                    </div>

                    <!-- Play Button Overlay -->
                    <div class="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div class="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(230,0,0,0.5)] transition-transform group-hover:scale-110">
                            <div class="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
