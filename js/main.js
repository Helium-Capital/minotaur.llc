document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.getElementById('html');
    
    const modal = document.getElementById('modal');
    const confirm = document.getElementById('confirm');
    const deny = document.getElementById('deny');

    document.addEventListener('click', function (event) {
        // modal check
		if (event.target.matches('#confirm')) {
			event.preventDefault();
			event.stopPropagation();
			wrapper.classList.add('enter');
            window.localStorage.setItem("investor", "yes");
		}
        if (event.target.matches('#deny')) {
			event.preventDefault();
			event.stopPropagation();
			window.location.href = 'https://robinhood.com';
		}
	}, false);

    function checkScroll() {
		// animate when in DOM functions
		const elements = document.querySelectorAll(`.wait`);

		const observerOptions = {
			root: null,
			rootMargin: '0px',
			threshold: 0.2
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('in-view');
				}
			});
		}, observerOptions);

		elements.forEach(element => observer.observe(element));
	}

    setTimeout(() => {
		window.addEventListener('scroll', checkScroll, { passive: true });
		checkScroll();
	}, 250);
});