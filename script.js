// 导航栏切换
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // 动画效果
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : '';
    spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translate(7px, -6px)' : '';
});

// 点击菜单项后关闭移动端菜单
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
    });
});

// 滚动时导航栏效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
});

// 表单提交处理
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // 获取表单数据
    const formData = new FormData(contactForm);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    
    // 模拟表单提交
    console.log('表單數據:', data);
    
    // 显示成功消息
    alert('感謝您的諮詢！我們將在24小時內與您聯繫。');
    
    // 重置表单
    contactForm.reset();
    
    // 在实际应用中，这里应该发送数据到服务器
    // fetch('/api/contact', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data)
    // })
    // .then(response => response.json())
    // .then(data => {
    //     alert('感謝您的諮詢！我們將在24小時內與您聯繫。');
    //     contactForm.reset();
    // })
    // .catch(error => {
    //     console.error('Error:', error);
    //     alert('提交失敗，請稍後再試。');
    // });
});

// 观察者API - 滚动动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 观察所有需要动画的元素
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .service-item, .wholesale-card, .process-step, .food-step, .value-card, .timeline-item');
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
});

// 平滑滚动增强
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // 减去导航栏高度
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// 数字动画效果
function animateNumber(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// 当统计数据进入视口时触发数字动画
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                if (!isNaN(target)) {
                    stat.textContent = '0';
                    animateNumber(stat, target);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// 鼠标悬停效果增强
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// 页面加载完成后添加类
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 优化滚动性能
const handleScroll = debounce(() => {
    // 滚动相关的处理
}, 100);

window.addEventListener('scroll', handleScroll);

// 返回顶部按钮（可选）
const createBackToTop = () => {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'back-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    `;
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-5px) scale(1.1)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0) scale(1)';
    });
    
    document.body.appendChild(button);
};

// 初始化返回顶部按钮
createBackToTop();

// 控制台欢迎消息
console.log('%c歡迎來到聲鵬國際！', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%c讓好產品走向世界，也讓世界走進你的生意', 'color: #764ba2; font-size: 14px;');

