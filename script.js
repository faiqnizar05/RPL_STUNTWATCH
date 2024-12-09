// Tambahkan logika atau interaktivitas di sini jika diperlukan
console.log("Stunt Watch website loaded!");

function toggleMenu() {
    const profileBtn = document.querySelector('.profile-btn');
    const profileMenu = document.getElementById('profileMenu');
    const icon = profileBtn.querySelector('i');

    // Toggle visibility of the menu
    profileBtn.classList.toggle('active');
}
