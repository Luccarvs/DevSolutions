function showContent(tipo) {
    document.querySelectorAll('.mvv-item').forEach(item => {
        item.classList.remove('active');
    });
    
    document.querySelectorAll('.mvv-content').forEach(content => {
        content.classList.remove('active');
    });

    const item = event.currentTarget;
    item.classList.add('active');

    const contentId = `${tipo}-content`;
    document.getElementById(contentId).classList.add('active');
}
document.addEventListener('DOMContentLoaded', function() {
    showContent('missao');
});

