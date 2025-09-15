// Case Studies Slider JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const caseNavBtns = document.querySelectorAll('.case-nav-btn');
    const caseSliders = document.querySelectorAll('.case-study-slider');

    let currentCase = null; // No case selected initially
    let currentSlide = 0;

    // Case navigation (company switching)
    caseNavBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const caseId = this.getAttribute('data-case');
            switchCase(caseId);
        });
    });

    function switchCase(caseId) {
        // Update navigation buttons
        caseNavBtns.forEach(btn => btn.classList.remove('active'));
        document.querySelector(`[data-case="${caseId}"]`).classList.add('active');

        // Update sliders
        caseSliders.forEach(slider => slider.classList.remove('active'));
        const newActiveSlider = document.querySelector(`.case-study-slider[data-case="${caseId}"]`);
        newActiveSlider.classList.add('active');

        // Ensure new slider starts collapsed
        if (!newActiveSlider.classList.contains('collapsed')) {
            newActiveSlider.classList.add('collapsed');
        }

        currentCase = caseId;
        currentSlide = 0;
        updateSlideIndicators();

        // Re-translate elements when case study changes
        if (typeof window.retranslate === 'function') {
            setTimeout(() => window.retranslate(), 50);
        }
    }

    // Initialize event listeners for slide navigation
    function initializeSlideListeners() {
        // Slide indicators
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach(indicator => {
            indicator.addEventListener('click', function() {
                const slideIndex = parseInt(this.getAttribute('data-slide'));
                goToSlide(slideIndex);
            });
        });

        // Slide controls
        const slideControls = document.querySelectorAll('.slide-btn');
        slideControls.forEach(control => {
            control.addEventListener('click', function() {
                const direction = this.getAttribute('data-direction');
                if (direction === 'next') {
                    nextSlide();
                } else {
                    prevSlide();
                }
            });
        });
    }

    function goToSlide(slideIndex) {
        const activeSlider = document.querySelector('.case-study-slider.active');
        if (!activeSlider) return;

        const slides = activeSlider.querySelectorAll('.slide');
        const indicators = activeSlider.querySelectorAll('.indicator');

        // Remove active classes
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));

        // Add active classes to current slide
        slides[slideIndex].classList.add('active');
        indicators[slideIndex].classList.add('active');

        currentSlide = slideIndex;

        // Re-translate elements when slide changes
        if (typeof window.retranslate === 'function') {
            setTimeout(() => window.retranslate(), 50);
        }
    }

    function nextSlide() {
        const activeSlider = document.querySelector('.case-study-slider.active');
        if (!activeSlider) return;

        const slides = activeSlider.querySelectorAll('.slide');
        const nextIndex = (currentSlide + 1) % slides.length;
        goToSlide(nextIndex);
    }

    function prevSlide() {
        const activeSlider = document.querySelector('.case-study-slider.active');
        if (!activeSlider) return;

        const slides = activeSlider.querySelectorAll('.slide');
        const prevIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
        goToSlide(prevIndex);
    }

    function updateSlideIndicators() {
        const activeSlider = document.querySelector('.case-study-slider.active');
        if (!activeSlider) return;

        const indicators = activeSlider.querySelectorAll('.indicator');
        const slides = activeSlider.querySelectorAll('.slide');

        indicators.forEach(indicator => indicator.classList.remove('active'));
        slides.forEach(slide => slide.classList.remove('active'));

        if (indicators[0]) indicators[0].classList.add('active');
        if (slides[0]) slides[0].classList.add('active');
    }


    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });

    // Initialize slide listeners
    initializeSlideListeners();
});

