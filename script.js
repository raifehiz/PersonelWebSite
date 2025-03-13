function showTimeline(type) {
    document.querySelectorAll('.timeline').forEach(t => t.classList.remove('active'));
    document.querySelector(`#${type}`).classList.add('active');

    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector(`#${type}Btn`).classList.add('active');
}

// Sayfa yüklendiğinde "Academic" timeline'ın aktif olması
document.addEventListener("DOMContentLoaded", function() {
    showTimeline('academic');
});