document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Message sent successfully!');
});

document.getElementById('bg-upload').addEventListener('change', function (e) {
    const reader = new FileReader();
    reader.onload = function (event) {
        document.querySelector('.header').style.backgroundImage = `url('${event.target.result}')`;
    };
    reader.readAsDataURL(e.target.files[0]);
});
