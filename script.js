// Tombol kirim pesan
document.getElementById("clickMe").addEventListener("click", function() {
    document.getElementById("message").textContent = "Pesan terkirim! 🎉 Kami akan menghubungi Anda segera.";
});

// Menu mobile
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});
