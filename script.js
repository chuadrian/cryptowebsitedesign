// Simulated crypto price data
const cryptoPrices = [
    { name: 'Bitcoin', price: 50000, change: 2.5 },
    { name: 'Ethereum', price: 3000, change: -1.2 },
    { name: 'Ripple', price: 1.5, change: 0.8 },
    { name: 'Litecoin', price: 200, change: 1.7 },
    { name: 'Cardano', price: 2.5, change: 3.2 },
    { name: 'Polkadot', price: 35, change: -0.5 },
    { name: 'Binance Coin', price: 450, change: 1.8 },
    { name: 'Solana', price: 150, change: -2.1 },
    { name: 'Dogecoin', price: 0.3, change: 5.5 },
    { name: 'Avalanche', price: 80, change: 0.9 },
    { name: 'Chainlink', price: 25, change: -1.5 },
    { name: 'Uniswap', price: 30, change: 2.2 },
    { name: 'Stellar', price: 0.4, change: 0.5 },
    { name: 'VeChain', price: 0.15, change: -0.8 },
    { name: 'Tron', price: 0.1, change: 1.2 },
    { name: 'Polygon', price: 1.8, change: 3.7 },
    { name: 'Tether', price: 1, change: 0.01 },
    { name: 'Monero', price: 250, change: -1.9 }
];
function updatePrices() {
    const priceTicker = document.getElementById('priceTicker');
    priceTicker.innerHTML = '';

    cryptoPrices.forEach(crypto => {
        // Simulate price changes
        crypto.price += crypto.price * (Math.random() - 0.5) * 0.01;
        crypto.change = (Math.random() - 0.5) * 5;

        const priceItem = document.createElement('div');
        priceItem.className = 'price-item';
        priceItem.innerHTML = `
            <h3>${crypto.name}</h3>
            <p>$${crypto.price.toFixed(2)}</p>
            <p style="color: ${crypto.change >= 0 ? '#00ff00' : '#ff0000'}">
                ${crypto.change >= 0 ? '▲' : '▼'} ${Math.abs(crypto.change).toFixed(2)}%
            </p>
        `;

        priceTicker.appendChild(priceItem);
    });
}

// Update prices every 5 seconds
updatePrices();
setInterval(updatePrices, 5000);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.pageYOffset;
    hero.style.backgroundPositionY = scrollPosition * 0.7 + 'px';
});

// Modal functionality
const modal = document.getElementById('signupModal');
const btn = document.getElementById('getStartedBtn');
const span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
    modal.style.display = 'flex';
}

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Form submission (simulated)
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Sign up successful! Welcome to CryptoNex!');
    modal.style.display = 'none';
});

// Market Trends Chart
const ctx = document.getElementById('trendChart').getContext('2d');
const trendChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Bitcoin',
            data: [45000, 48000, 47000, 50000, 52000, 54000, 53000],
            borderColor: 'rgba(255, 215, 0, 1)',
            backgroundColor: 'rgba(255, 215, 0, 0.1)',
            fill: true,
            tension: 0.4
        }, {
            label: 'Ethereum',
            data: [1500, 1800, 1700, 2000, 2100, 2500, 2300],
            borderColor: 'rgba(255, 170, 0, 1)',
            backgroundColor: 'rgba(255, 170, 0, 0.1)',
            fill: true,
            tension: 0.4
        }, {
            label: 'Litecoin',
            data: [150, 160, 140, 170, 180, 190, 185],
            borderColor: 'rgba(0, 191, 255, 1)',
            backgroundColor: 'rgba(0, 191, 255, 0.1)',
            fill: true,
            tension: 0.4
        }, {
            label: 'Ripple',
            data: [0.6, 0.65, 0.55, 0.7, 0.75, 0.8, 0.78],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.1)',
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: 'var(--secondary-color)',
                    font: {
                        size: 16
                    }
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: 'var(--secondary-color)'
                },
                grid: {
                    color: 'rgba(255, 215, 0, 0.1)'
                }
            },
            y: {
                ticks: {
                    color: 'var(--secondary-color)'
                },
                grid: {
                    color: 'rgba(255, 215, 0, 0.1)'
                }
            }
        }
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    const closeMenu = document.querySelector('.close-menu');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.add('active');
    });

    closeMenu.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });

    // Close menu when clicking a nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!navLinks.contains(event.target) && !menuIcon.contains(event.target)) {
            navLinks.classList.remove('active');
        }
    });
});


// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Check for saved theme preference or default to dark theme
const currentTheme = localStorage.getItem('theme') || 'dark';
body.classList.toggle('light-mode', currentTheme === 'light');
updateThemeIcon();

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const theme = body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
    updateThemeIcon();
});

function updateThemeIcon() {
    if (body.classList.contains('light-mode')) {
        // Show moon icon in light mode
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        // Show sun icon in dark mode
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}
