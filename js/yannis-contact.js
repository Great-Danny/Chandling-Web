document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('yannisContactForm');
    if (!form) return;

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const subject = String(formData.get('subject'));
        const body = [
            `Name: ${formData.get('name')}`,
            `Email: ${formData.get('email')}`,
            '',
            String(formData.get('message'))
        ].join('\n');

        const message = `${subject}\n\n${body}`;
        const whatsappUrl = `https://wa.me/2349090604732?text=${encodeURIComponent(message)}`;
        const mailtoUrl = `mailto:yannismarineservice@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        const whatsappWindow = window.open(whatsappUrl, '_blank');
        if (!whatsappWindow) {
            const note = document.querySelector('.contact-form-note');
            if (note) {
                note.textContent = 'Your email app is opening. If WhatsApp did not open, allow pop-ups or open WhatsApp directly.';
            }
        }

        window.location.href = mailtoUrl;
    });
});