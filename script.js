  // Theme toggle
        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = document.getElementById('theme-icon');
        const themePath = document.getElementById('theme-path');
        const html = document.documentElement;
        const downloadCv = document.getElementById('download-cv');
        const savedTheme = localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        html.classList.add(savedTheme);
        updateThemeIcon(savedTheme);
        themeToggle.addEventListener('click', () => {
            html.classList.toggle('dark');
            const currentTheme = html.classList.contains('dark') ? 'dark' : 'light';
            localStorage.setItem('theme', currentTheme);
            updateThemeIcon(currentTheme);
        });
        function updateThemeIcon(theme) {
            if (theme === 'dark') {
                themePath.setAttribute('d', 'M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z');
            } else {
                themePath.setAttribute('d', 'M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z');
            }
        }
        downloadCv.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Gahimo pakog resume, Huwat lang salamat');
        });
        document.addEventListener('DOMContentLoaded', function() {
            const navLinks = document.querySelectorAll('nav a[href$=".html"]');
            const pageTransition = document.getElementById('page-transition');
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    if (this.href.includes('app.js') || this.target === '_blank') return;
                    e.preventDefault();
                    const href = this.href;
                    pageTransition.classList.add('active');
                    
                    setTimeout(() => {
                        window.location.href = href;
                    }, 600);
                });
            });
            window.addEventListener('pageshow', function() {
                pageTransition.classList.remove('active');

            });
        });