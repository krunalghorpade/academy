<?php
$points = [
    "Industry-Driven Curriculum",
    "Curated by Kratex<sup class=\"text-[0.55em]\">&trade;</sup>",
    "Hands-on Studio Experience",
    "Performance & Stage Training",
    "Artist Branding & Marketing",
    "Exclusive Workshops"
];
?>
<section id="why-kratex" class="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <div class="flex-1 w-full order-2 lg:order-1 relative">
            <div data-aos="zoom-in" class="w-full aspect-square max-w-[500px] mx-auto lg:max-w-none bg-[#111] rounded-xl overflow-hidden relative border border-white/10 shadow-2xl">
                <!-- Image Placeholder -->
                <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('placeholder-studio-2.jpg');">
                    <div class="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent"></div>
                </div>
                
                <!-- Floating Element -->
                <div class="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10 bg-black/70 backdrop-blur-md border border-white/10 p-6 lg:p-8 rounded-xl">
                    <p class="text-white font-black uppercase tracking-widest text-lg lg:text-xl">Learn from the best.</p>
                    <p class="text-primary font-bold text-sm lg:text-base tracking-widest uppercase mt-2">Master the stage.</p>
                </div>
            </div>
        </div>

        <div class="flex-1 w-full order-1 lg:order-2">
            <div data-aos="fade-left">
                <span class="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">The Advantage</span>
                <h2 class="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.9]">
                    Why Kratex<sup class="text-[0.55em]">&trade;</sup> <br class="hidden md:block"/> Academy?
                </h2>
                <p class="text-gray-400 text-lg lg:text-xl mb-12 max-w-lg leading-relaxed font-medium">
                    We go beyond turning knobs. Our ecosystem is designed to equip you with the exact tools, knowledge, and confidence needed to thrive in the modern music industry.
                </p>

                <ul class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                    <?php foreach($points as $index => $point): ?>
                        <li data-aos="fade-up" data-aos-delay="<?= $index * 100 ?>" class="flex items-center gap-4 group">
                            <i class="fa-solid fa-circle-check text-primary text-xl flex-shrink-0 group-hover:scale-125 transition-transform"></i>
                            <span class="text-white font-bold tracking-wide uppercase text-sm"><?= $point ?></span>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </div>
        </div>
    </div>
</section>
