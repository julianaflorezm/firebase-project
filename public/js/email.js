const btn = document.getElementById('btncorreo');
document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_ouyel0g';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviado';
      alert("Notificación enviada");
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});