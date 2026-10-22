<!-- =========================================================
     JAVASCRIPT
========================================================== -->

<script>

    /* Mobile menu */

    const menuToggle =
        document.getElementById("menuToggle");

    const navLinks =
        document.getElementById("navLinks");

    menuToggle.addEventListener(
        "click",
        () => {
            navLinks.classList.toggle("active");
        }
    );

    document.querySelectorAll(
        ".nav-links a"
    ).forEach(link => {

        link.addEventListener(
            "click",
            () => {
                navLinks.classList.remove("active");
            }
        );

    });


    /* Header effect */

    const header =
        document.getElementById("header");

    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 30) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        }
    );


    /* Reveal animation */

    const revealElements =
        document.querySelectorAll(".reveal");

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target
                            .classList
                            .add("visible");

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

    revealElements.forEach(element => {
        observer.observe(element);
    });


    /* Dynamic year */

    document.getElementById(
        "currentYear"
    ).textContent =
        new Date().getFullYear();

</script>
