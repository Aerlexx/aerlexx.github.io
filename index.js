document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simulasi pengiriman (dalam dunia nyata, gunakan API seperti EmailJS atau backend)
    alert(`Terima kasih, ${name}! Pesan Anda telah dikirim ke ${email}. Pesan: ${message}`);
    
    // Reset form
    document.getElementById('contactForm').reset();
});