// Fungsi untuk membuka dan menutup panel kontak
function toggleContact() {
    const panel = document.getElementById('contact-panel');
    
    if (panel.classList.contains('hidden')) {
        panel.classList.remove('hidden');
        // Memberikan efek muncul yang halus
        panel.style.animation = 'fadeIn 0.5s ease forwards';
    } else {
        panel.classList.add('hidden');
    }
}

// Menutup panel kontak secara otomatis jika user klik di luar area kartu (di background)
window.onclick = function(event) {
    const panel = document.getElementById('contact-panel');
    const bgGlow = document.querySelector('.bg-glow');
    
    // Jika yang diklik adalah background (bg-glow), maka panel tertutup
    if (event.target === bgGlow) {
        panel.classList.add('hidden');
    }
}

// Log sederhana untuk memastikan script sudah jalan (bisa dicek di Inspect Element > Console)
console.log("Cinta Nayla's Portfolio Script Loaded! Ready to roll.");