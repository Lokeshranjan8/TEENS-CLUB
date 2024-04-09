document.getElementById('contact-link').addEventListener('click', function(event) {
    event.preventDefault();
    var contactInfo = document.querySelector('.contact-info');
    if (contactInfo.style.display === 'none') {
        contactInfo.style.display = 'block';
    } else {
        contactInfo.style.display = 'none';
    }
});
