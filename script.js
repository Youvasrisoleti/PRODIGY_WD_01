document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('header ul li a');
    const contentSection = document.getElementById('content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const content = e.target.getAttribute('data-content');
            updateContent(content);
        });
    });

    function updateContent(content) {
        let htmlContent = '';
        switch (content) {
            case 'menu':
                htmlContent = `
                    <div class="container">
                        <div class="text-box">
                            <h2>Our <span>Menu</span></h2>
                            <p>Explore our wide range of coffee and snacks.</p>
                        </div>
                        <div class="menu-cards">
                            <div class="menu-card">
                                <img src="espresso.jpg" alt="Espresso">
                                <h3>Espresso</h3>
                                <p>Rich and bold espresso shot.</p>
                                <p class="price">$2.50</p>
                            </div>
                            <div class="menu-card">
                                <img src="latte.jpg" alt="Latte">
                                <h3>Latte</h3>
                                <p>Silky smooth milk with a shot of espresso.</p>
                                <p class="price">$3.50</p>
                            </div>
                            <div class="menu-card">
                                <img src="cappucino.webp" alt="Cappuccino">
                                <h3>Cappuccino</h3>
                                <p>Perfect blend of milk foam and espresso.</p>
                                <p class="price">$3.00</p>
                            </div>
                            <div class="menu-card">
                                <img src="coffe4.webp
                                " alt="Mocha">
                                <h3>Mocha</h3>
                                <p>Chocolatey espresso with steamed milk.</p>
                                <p class="price">$3.75</p>
                            </div>
                        </div>
                    </div>
                `;
                break;
            case 'contact':
                htmlContent = `
                    <div class="contact-container">
                        <h2>Contact <span>Us</span></h2>
                        <p>We'd love to hear from you! Reach out to us through any of the methods below:</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: info@coffeeshop.com</p>
                        <form class="contact-form">
                            <input type="text" name="name" placeholder="Your Name" required>
                            <input type="email" name="email" placeholder="Your Email" required>
                            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                `;
                break;
            case 'home':
            default:
                htmlContent = `
                    <div class="container">
                        <div class="text-box">
                            <h2>Welcome to <span>Our Coffee Shop</span></h2>
                            <p>Experience the best coffee in town.</p>
                            </div>
                            <div class="starbucks-img">
                <img src="starbucks.jpeg" alt="Starbucks Coffee">
            </div>
                    </div>
                `;
        }
        contentSection.innerHTML = htmlContent;
    }
});
