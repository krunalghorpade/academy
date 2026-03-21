<?php
$mapIframe = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15126.28620995241!2d73.7868!3d18.5823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b80000000001%3A0x7d00000000000000!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin";
?>
<section id="visit" class="py-24 md:py-32 bg-[#050505] border-t border-white/5 relative">
    <div class="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
    
    <div class="max-w-7xl mx-auto px-6 md:px-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            <!-- Info & Map -->
            <div data-aos="fade-right">
                <span class="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Visit Us</span>
                <h2 class="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.9]">
                    Step <br class="hidden md:block"/> Into The <span class="text-primary">Studio.</span>
                </h2>
                <p class="text-gray-400 text-lg md:text-xl mb-10 font-medium max-w-lg">
                    Experience the gear, meet the mentors, and see where artists are made.
                </p>

                <div class="flex flex-col gap-8 mb-12">
                    <div class="flex items-start gap-5">
                        <div class="w-14 h-14 bg-black border border-white/10 rounded-full flex items-center justify-center shrink-0">
                            <i class="fa-solid fa-location-dot text-primary text-xl"></i>
                        </div>
                        <div>
                            <h4 class="text-white font-black uppercase tracking-widest text-sm mb-2">Location</h4>
                            <p class="text-gray-400 font-medium leading-relaxed">Dnyaneshwar Paduka Chauk, Gokul Building<br/>B Wing, Fergusson College Rd, Shivajinagar<br/>Pune, Maharashtra 411005</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start gap-5">
                        <div class="w-14 h-14 bg-black border border-white/10 rounded-full flex items-center justify-center shrink-0">
                            <i class="fa-solid fa-phone text-primary text-xl"></i>
                        </div>
                        <div>
                            <h4 class="text-white font-black uppercase tracking-widest text-sm mb-2">Call / WhatsApp</h4>
                            <p class="text-gray-400 font-medium">+91 88550 03728</p>
                        </div>
                    </div>
                </div>

                <div class="w-full aspect-video bg-[#111] border border-white/10 rounded-xl overflow-hidden relative shadow-2xl mb-5">
                    <iframe 
                        src="<?= $mapIframe ?>" 
                        class="w-full h-full border-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                
                <a href="https://share.google/A4NrHMK4gXI0mrssI" target="_blank" class="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-white uppercase tracking-widest transition-colors group">
                    View on Google Maps <i class="fa-solid fa-arrow-up-right-from-square transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"></i>
                </a>
            </div>

            <!-- Inquiry Form -->
            <div data-aos="fade-left" id="apply" class="bg-[#0a0a0a] border border-white/10 rounded-xl p-8 md:p-14 relative overflow-hidden flex flex-col justify-center shadow-2xl">
                <div class="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>
                
                <div class="relative z-10">
                    <h3 class="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">Apply Now</h3>
                    <p class="text-gray-400 mb-10 font-medium text-lg">Take the first step towards the stage.</p>
                    
                    <!-- Form redirects to process script and opens new tab -->
                    <form action="process_inquiry.php" method="POST" target="_blank" class="flex flex-col gap-6" id="inquiry-form">
                        <div class="flex flex-col gap-3">
                            <label for="name" class="text-xs font-bold text-gray-500 uppercase tracking-widest">Full Name</label>
                            <input 
                                type="text" 
                                id="name"
                                name="name"
                                required
                                class="bg-[#050505] border border-white/10 rounded-sm px-5 py-4 text-white focus:outline-none focus:border-primary transition-colors font-medium"
                                placeholder="Your Name"
                            />
                        </div>
                        
                        <div class="flex flex-col gap-3">
                            <label for="phone" class="text-xs font-bold text-gray-500 uppercase tracking-widest">Phone Number</label>
                            <input 
                                type="tel" 
                                id="phone"
                                name="phone"
                                required
                                class="bg-[#050505] border border-white/10 rounded-sm px-5 py-4 text-white focus:outline-none focus:border-primary transition-colors font-medium"
                                placeholder="WhatsApp / Mobile"
                            />
                        </div>
                        
                        <div class="flex flex-col gap-3">
                            <label for="city" class="text-xs font-bold text-gray-500 uppercase tracking-widest">City</label>
                            <input 
                                type="text" 
                                id="city"
                                name="city"
                                required
                                class="bg-[#050505] border border-white/10 rounded-sm px-5 py-4 text-white focus:outline-none focus:border-primary transition-colors font-medium"
                                placeholder="Your City"
                            />
                        </div>
                        
                        <div class="flex flex-col gap-3">
                            <label for="interest" class="text-xs font-bold text-gray-500 uppercase tracking-widest">Area of Interest</label>
                            <select
                                id="interest"
                                name="interest"
                                class="bg-[#050505] border border-white/10 rounded-sm px-5 py-4 text-white focus:outline-none focus:border-primary transition-colors font-medium appearance-none"
                            >
                                <option value="DJing Basic">DJing Basic</option>
                                <option value="DJing Pro">DJing Pro</option>
                                <option value="Music Production">Music Production</option>
                                <option value="Both DJing & Production">Both DJing & Production</option>
                            </select>
                        </div>
                        
                        <button 
                            type="submit" 
                            id="submit-btn"
                            class="mt-6 bg-white text-black hover:bg-primary hover:text-white px-8 py-5 rounded-sm font-black uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(230,0,0,0.4)] block w-full text-lg"
                        >
                            Submit Application
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

<script>
    document.getElementById('inquiry-form').addEventListener('submit', function() {
        const btn = document.getElementById('submit-btn');
        const originalText = btn.innerHTML;
        btn.innerHTML = 'Redirecting to Basic Form...';
        
        // Reset button after the redirect occurs in a new tab
        setTimeout(() => {
            btn.innerHTML = originalText;
            document.getElementById('inquiry-form').reset();
        }, 3000);
    });
</script>
