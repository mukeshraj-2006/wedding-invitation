document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. COVER PAGE LOGIC ---
    const coverPage = document.getElementById('cover-page');
    const openBtn = document.getElementById('open-btn');
    const invitation = document.getElementById('invitation');
    const bgMusic = document.getElementById('bg-music');

    openBtn.addEventListener('click', () => {
        // Play music
        bgMusic.play().catch(e => console.log("Audio play failed:", e));
        
        // Slide up cover
        coverPage.classList.add('open');
        
        // Show invitation content
        invitation.classList.add('active');
        
        // Wait for cover animation, then initialize GSAP
        setTimeout(() => {
            initScrollAnimations();
            coverPage.style.display = 'none'; // Remove from DOM flow
        }, 1200);
    });

    // --- 2. GSAP SCROLL ANIMATIONS ---
    function initScrollAnimations() {
        gsap.registerPlugin(ScrollTrigger);

        // A. Scene 1 (Landing) to Scene 2 (Marriage)
        // SUPER TRANSITION 1: Fly through the Gopuram!
        let tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: "#scene-landing",
                start: "top top",
                end: "+=120%", 
                scrub: true, // removed the 1-second lag so it instantly fades
                pin: true,
            }
        });

        // The Gopuram scales massively toward the camera like we are flying through it
        tl1.to("#hero-gopuram", { scale: 6, yPercent: 150, opacity: 0, duration: 1.5, ease: "power2.in" }, 0);
        // The names fly UP and past the camera
        tl1.to("#hero-names", { scale: 1.5, yPercent: -150, opacity: 0, duration: 1 }, 0);
        // The fireworks parallax up and away
        tl1.to(".fireworks-gif", { yPercent: -80, opacity: 0, duration: 0.8 }, 0);
        
        // FADE OUT SKY AND MORPH COLOR EARLY IN THE SCROLL
        // (Finishes at duration 1.0, while the pin lasts until duration 1.5)
        tl1.to(".sky-bg", { autoAlpha: 0, duration: 1.0 }, 0); // autoAlpha forces visibility: hidden
        tl1.to("#scene-landing", { backgroundColor: "#509e8d", duration: 1.0 }, 0);


        // B. Scene 2 (Marriage) to Scene 3 (Reception)
        gsap.from("#scene-reception .scene-content", {
            scrollTrigger: {
                trigger: "#scene-reception",
                start: "top 70%",
                toggleActions: "play none none reverse"
            },
            y: 50, opacity: 0, duration: 1, ease: "power2.out"
        });

        // C. Scene 3 (Reception) to Scene 4 (Meet Couple)
        gsap.from("#scene-meet-couple .scene-content", {
            scrollTrigger: {
                trigger: "#scene-meet-couple",
                start: "top 70%",
                toggleActions: "play none none reverse"
            },
            y: 50, opacity: 0, duration: 1, ease: "power2.out"
        });

        // Smooth sky-to-teal transition: fade out the sky as you scroll down the landing page
        gsap.to("#landing-sky", {
            scrollTrigger: {
                trigger: "#scene-landing",
                start: "60% top",   // Start fading when 60% of landing has scrolled past
                end: "bottom top",  // Fully faded by the time landing leaves the viewport
                scrub: true
            },
            opacity: 0,
            ease: "none"
        });

        // Generate the falling flowers for Meet Couple
        createFallingFlowers();

        // The Garland Couple fades in on the seam between Landing and Wedding
        gsap.from("#garland-transition", {
            scrollTrigger: {
                trigger: "#scene-marriage",
                start: "top 100%", // Start animating slightly as it enters the viewport
                end: "top 50%",   // Finish when the seam is at the middle of the screen
                scrub: 1
            },
            scale: 0.8, // Subtle scale up
            opacity: 0,
            ease: "power1.out"
        });

        // The Vintage Car drives across the seam between Wedding and Reception!
        gsap.from("#vintage-car-transition", {
            scrollTrigger: {
                trigger: "#scene-reception",
                start: "top 100%", // Start animating slightly as it enters the viewport
                end: "top 50%",   // Finish when the seam is at the middle of the screen
                scrub: 1
            },
            scale: 0.8, // Subtle scale up
            opacity: 0,
            ease: "power1.out"
        });

        // The Couple Swing sits on the seam between Reception and Meet Couple!
        gsap.from("#swing-transition", {
            scrollTrigger: {
                trigger: "#scene-meet-couple",
                start: "top 100%", 
                end: "top 50%",
                scrub: 1
            },
            scale: 0.8, // Subtle scale up
            opacity: 0,
            ease: "power1.out"
        });

        // D. Scene 4 (Meet Couple) to Scene 5 (Closing)
        // The watch scales up and fades in on the seam!
        gsap.from("#watch-transition", {
            scrollTrigger: {
                trigger: "#scene-closing",
                start: "top 100%", // Start animating slightly as it enters the viewport
                end: "top 50%",   // Finish when the seam is at the middle of the screen
                scrub: 1
            },
            scale: 0.8,
            opacity: 0,
            ease: "power1.out"
        });
    }

    // --- 3. FALLING FLOWERS LOGIC ---
    function createFallingFlowers() {
        const container = document.getElementById('flower-container');
        if (!container) return;
        
        // Array of flower emojis to use (Only Cherry Blossoms)
        const flowers = ['🌸'];
        const numFlowers = 40;

        for (let i = 0; i < numFlowers; i++) {
            let petal = document.createElement('div');
            petal.classList.add('flower-petal');
            petal.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
            
            // Randomize position, duration, and delay
            let leftPos = Math.random() * 100; // 0 to 100%
            let duration = Math.random() * 5 + 4; // 4s to 9s
            let delay = Math.random() * 10; // 0s to 10s start delay
            let size = Math.random() * 1 + 1; // 1rem to 2rem
            
            petal.style.left = `${leftPos}%`;
            petal.style.animationDuration = `${duration}s`;
            petal.style.animationDelay = `-${delay}s`; // Negative delay means they start already falling!
            petal.style.fontSize = `${size}rem`;
            
            container.appendChild(petal);
        }
    }

    // --- 4. COUNTDOWN TIMER LOGIC ---
    // Reception Date: Nov 22, 2026
    const weddingDate = new Date("Nov 22, 2026 18:30:00").getTime();
    
    const daysEl = document.getElementById('cd-days');
    const hoursEl = document.getElementById('cd-hours');
    const minsEl = document.getElementById('cd-mins');
    const secsEl = document.getElementById('cd-secs');

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        if (distance < 0) {
            // Wedding has passed
            daysEl.innerText = "00";
            hoursEl.innerText = "00";
            minsEl.innerText = "00";
            secsEl.innerText = "00";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysEl.innerText = days.toString().padStart(2, '0');
        hoursEl.innerText = hours.toString().padStart(2, '0');
        minsEl.innerText = minutes.toString().padStart(2, '0');
        secsEl.innerText = seconds.toString().padStart(2, '0');
    }

    // Update every second
    setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call
});
