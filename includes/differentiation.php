<?php
$specs = [
    [
        "icon" => "fa-circle-exclamation",
        "title" => "Structured Learning",
        "desc" => "No scattered YouTube tutorials. Follow a rigid, proven timeline."
    ],
    [
        "icon" => "fa-bolt",
        "title" => "Extensive Studio Access",
        "desc" => "Practice on club-standard equipment, not just entry-level controllers."
    ],
    [
        "icon" => "fa-bullhorn",
        "title" => "Artist Branding",
        "desc" => "Learn to build your logo, EPK, and social media presence."
    ],
    [
        "icon" => "fa-users",
        "title" => "Industry Network",
        "desc" => "Get plugged into local gigs, promoters, and label networks."
    ]
];
?>
<section class="py-24 md:py-32 bg-[#020202] border-t border-white/5">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div data-aos="fade-right">
                <h2 class="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.9]">
                    Built <br class="hidden md:block"/> <span class="text-primary">Different.</span>
                </h2>
                <p class="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-lg">
                    We don't just teach you how to press play. We teach you how to command the room and build a sustainable career.
                </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                <?php foreach($specs as $i => $spec): ?>
                    <div data-aos="fade-up" data-aos-delay="<?= $i * 150 ?>" class="bg-[#0a0a0a] border border-white/5 p-8 rounded-xl hover:border-primary/40 transition-colors group">
                        <div class="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <i class="fa-solid <?= $spec['icon'] ?> text-primary text-xl"></i>
                        </div>
                        <h3 class="text-xl font-black text-white uppercase tracking-wider mb-3"><?= $spec['title'] ?></h3>
                        <p class="text-gray-400 font-medium leading-relaxed text-sm">
                            <?= $spec['desc'] ?>
                        </p>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>
