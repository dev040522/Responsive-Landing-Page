gsap.from(".hero-text h2", {y: 50, opacity: 0, duration: 1});
gsap.from(".hero-text p", {y: 50, opacity: 0, duration: 1, delay: 0.3});
gsap.from(".hero img", {x: 100, opacity: 0, duration: 1, delay: 0.5});

gsap.utils.toArray(".menu-item").forEach((item, i) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 80%"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.2
    });
});