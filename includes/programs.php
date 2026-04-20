<?php
$programs = [
    [
        "title" => "DJing Basic",
        "duration" => "3 Months",
        "description" => "Perfect for beginners. Learn the absolute fundamentals of beatmatching, phrasing, and modern DJ software.",
        "features" => ["Equipment Introduction", "Beatmatching & Sync", "Basic Transitions", "Library Management"],
        "popular" => false
    ],
    [
        "title" => "DJing Pro",
        "duration" => "4 Months",
        "description" => "Take it to the stage. Advanced mixing, live performance techniques, and reading the crowd.",
        "features" => ["Advanced Transitions", "FX & Looping", "Harmonic Mixing", "Performance Recording"],
        "popular" => true
    ],
    [
        "title" => "Music Production",
        "duration" => "6 Months",
        "description" => "From concept to final master. Build a professional track from scratch using industry-standard DAWs.",
        "features" => ["Sound Design", "Arrangement", "Mixing & Mastering", "Track Breakdown"],
        "popular" => false
    ]
];
?>
<section id="programs" class="py-24 md:py-32 bg-black relative">
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

    <div class="max-w-7xl mx-auto px-6 md:px-12">
        <div data-aos="fade-up" class="text-center mb-20 md:mb-24">
            <span class="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Curriculum</span>
            <h2 class="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
                Choose Your <span
                    class="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">Path</span>
            </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <?php foreach ($programs as $index => $program): ?>
                <div data-aos="fade-up" data-aos-delay="<?= $index * 150 ?>"
                    class="relative flex flex-col bg-[#050505] rounded-xl border <?= $program['popular'] ? 'border-primary shadow-[0_0_40px_rgba(230,0,0,0.15)] bg-gradient-to-b from-[#1a0000] to-[#050505]' : 'border-white/10' ?> p-8 md:p-10 transition-transform hover:-translate-y-2">

                    <?php if ($program['popular']): ?>
                        <div
                            class="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-black uppercase tracking-widest py-1.5 px-6 rounded-sm">
                            Most Popular
                        </div>
                    <?php endif; ?>

                    <div class="mb-10">
                        <h3 class="text-3xl font-black text-white uppercase tracking-tighter mb-3"><?= $program['title'] ?>
                        </h3>
                        <div class="text-primary font-bold tracking-widest text-sm uppercase mb-5">
                            <?= $program['duration'] ?>
                        </div>
                        <p class="text-gray-400 font-medium leading-relaxed"><?= $program['description'] ?></p>
                    </div>

                    <div class="flex-1">
                        <ul class="flex flex-col gap-5 mb-12">
                            <?php foreach ($program['features'] as $feat): ?>
                                <li class="flex items-center gap-4">
                                    <div
                                        class="w-1.5 h-1.5 rounded-full <?= $program['popular'] ? 'bg-primary' : 'bg-gray-500' ?>">
                                    </div>
                                    <span class="text-sm font-bold text-gray-200 uppercase tracking-wider"><?= $feat ?></span>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    </div>

                    <a href="https://tr.ee/uY4VZg" target="_blank" rel="noopener noreferrer"
                        class="w-full flex items-center justify-center gap-3 py-4 rounded-sm font-black uppercase tracking-widest transition-all <?= $program['popular'] ? 'bg-primary hover:bg-white hover:text-black text-white' : 'bg-white/5 hover:bg-white hover:text-black text-white border border-white/10' ?>">
                        Enroll Now
                        <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>