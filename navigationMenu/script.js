 document.addEventListener('DOMContentLoaded', function() {
            const menuToggle = document.getElementById('menuToggle');
            const navMenu = document.getElementById('navMenu');
            const navContainer = document.getElementById('navContainer');
            let isDesktopCollapsed = false;

            // Check screen size and set initial state
            function checkScreenSize() {
                if (window.innerWidth > 768) {
                    // Desktop - allow collapsing
                    isDesktopCollapsed = true;
                    navContainer.classList.add('collapsed');
                    navMenu.classList.remove('active');
                    menuToggle.innerHTML = '☰';
                } else {
                    // Mobile - always show toggle
                    isDesktopCollapsed = false;
                    navContainer.classList.remove('collapsed');
                }
            }

            // Initial check
            checkScreenSize();
            
            // Add resize listener
            window.addEventListener('resize', checkScreenSize);

            menuToggle.addEventListener('click', function() {
                if (window.innerWidth > 768 && isDesktopCollapsed) {
                    // Desktop collapsed mode
                    navMenu.classList.toggle('active');
                } else {
                    // Mobile or desktop expanded mode
                    navMenu.classList.toggle('active');
                }
                
                // Change icon based on menu state
                if (navMenu.classList.contains('active')) {
                    menuToggle.innerHTML = '✕';
                } else {
                    menuToggle.innerHTML = '☰';
                }
            });

            // Close menu when a link is clicked
            const navLinks = document.querySelectorAll('.nav-menu a');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    if (window.innerWidth <= 768 || (window.innerWidth > 768 && isDesktopCollapsed)) {
                        navMenu.classList.remove('active');
                        menuToggle.innerHTML = '☰';
                    }
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', function(event) {
                const isClickInside = event.target.closest('.nav-container');
                const isMenuActive = navMenu.classList.contains('active');
                
                if ((window.innerWidth <= 768 || (window.innerWidth > 768 && isDesktopCollapsed)) && 
                    !isClickInside && isMenuActive) {
                    navMenu.classList.remove('active');
                    menuToggle.innerHTML = '☰';
                }
            });
        });