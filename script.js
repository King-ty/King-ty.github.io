document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. Mobile Navigation (移动端菜单逻辑)
       ========================================= */
    // 保持旧版逻辑：动态创建遮罩层，点击切换 active 类
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.querySelector('.sidebar');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    // 动态创建遮罩层
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    function toggleMenu() {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // 切换图标 (汉堡包 <-> 叉号)
        const icon = menuToggle.querySelector('i');
        if (sidebar.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }

    menuToggle.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // 点击菜单链接后自动收起侧边栏 
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (sidebar.classList.contains('active')) {
                toggleMenu();
            }
        });
    });


    /* =========================================
       2. Dark Mode Logic
       ========================================= */
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    const htmlEl = document.documentElement;

    // 这里只需要根据当前的 data-theme 设置正确的图标即可。
    const currentTheme = htmlEl.getAttribute('data-theme') || 'light';
    if (currentTheme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    // 绑定点击事件
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = htmlEl.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            htmlEl.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // 更新按钮图标
            if (newTheme === 'dark') {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        });
    }


    /* =========================================
       3. Bilingual Support (中英文切换)
       ========================================= */
    let currentLang = localStorage.getItem('site-lang') || 'en';
    
    const sidebarLangBtn = document.getElementById('langToggle');       // 侧边栏按钮
    const mobileLangBtn = document.getElementById('mobileLangToggle');  // 悬浮按钮

    function updateContent(lang) {
        // 1. 更新所有文本 (逻辑不变)
        // 注意：需配合 translations.js 使用
        if (typeof translations !== 'undefined') {
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (translations[lang][key]) {
                    element.innerHTML = translations[lang][key];
                }
            });
        }

        // 2. 更新按钮文字
        const nextLangTextShort = lang === 'en' ? '中' : 'En';
        const nextLangTextLong  = lang === 'en' ? '中 / En' : 'En / 中';

        if (sidebarLangBtn) sidebarLangBtn.textContent = nextLangTextLong;
        if (mobileLangBtn)  mobileLangBtn.textContent = nextLangTextShort;
        
        // 3. 关键优化：使用 CSS 类名切换字体，而非直接操作 style
        // 这配合了新版 style.css 中的 body.lang-zh 定义
        document.body.classList.remove('lang-en', 'lang-zh');
        document.body.classList.add(lang === 'en' ? 'lang-en' : 'lang-zh');

        // 4. 保存状态
        localStorage.setItem('site-lang', lang);
        currentLang = lang;
    }

    function switchLang() {
        const newLang = currentLang === 'en' ? 'zh' : 'en';
        updateContent(newLang);
    }

    // 绑定事件
    if (sidebarLangBtn) sidebarLangBtn.addEventListener('click', switchLang);
    if (mobileLangBtn)  mobileLangBtn.addEventListener('click', switchLang);

    // 初始化语言
    updateContent(currentLang);


    /* =========================================
       4. Scroll Spy (滚动监听)
       ========================================= */
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px', // 当 section 进入视口中间时触发
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 移除所有 active
                navLinks.forEach(link => link.classList.remove('active'));
                
                // 给当前对应的 link 添加 active
                const id = entry.target.getAttribute('id');
                const activeLink = document.querySelector(`.nav-menu a[href="#${id}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));


    /* =========================================
       5. Auto-hide Buttons (自动隐藏按钮)
       ========================================= */
    let lastScrollY = window.scrollY;
    const floatingControls = document.querySelector('.floating-controls');
    let ticking = false; // 用于节流锁

    if (floatingControls) {
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;
                    // 向下滚动 > 100px 时隐藏，向上滚动时显示
                    if (currentScrollY > lastScrollY && currentScrollY > 100) {
                        floatingControls.classList.add('buttons-hidden');
                    } else {
                        floatingControls.classList.remove('buttons-hidden');
                    }
                    
                    lastScrollY = currentScrollY;
                    ticking = false; // 释放锁
                });
                ticking = true; // 加锁
            }
        }, { passive: true });
    }
});