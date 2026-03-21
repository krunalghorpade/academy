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
                <div data-aos="fade-up" data-aos-delay="<?= $index * 150 ?>" class="bg-[#0a0a0a] rounded-xl border border-white/10 p-8 hover:border-primary/30 transition-colors relative overflow-hidden">
                    <i class="fa-solid fa-quote-left text-4xl text-primary/20 absolute top-6 right-6"></i>
                    <p class="text-gray-300 text-lg font-medium italic leading-relaxed mb-8 relative z-10">
                        "The structure and industry insights completely changed my approach. Pure performance focus, exactly what I needed."
                    </p>
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold text-gray-500">K</div>
                        <div>
                            <h4 class="text-white font-black tracking-widest uppercase text-sm">Student Name</h4>
                            <p class="text-primary text-xs font-bold uppercase tracking-widest">DJing Pro</p>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
