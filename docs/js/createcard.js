const BASE_URL = 'https://anthony-zhou.github.io/scannable-contact-card/download';
const ContactForm = document.getElementById('contact-form');

function displayQRCode(vcfContent) {
  const contactUrl = `${BASE_URL}?vcfContent=${encodeURIComponent(vcfContent)}`;
  new QRCode(document.getElementById('qrcode'), contactUrl);
}

function getFormValue(id) {
  return document.getElementById(id).value;
}

function getFormFields() {
  return {
    firstName: getFormValue('fname'),
    lastName: getFormValue('lname'),
    phoneNumber: getFormValue('phone'),
    emailAddress: getFormValue('email')
  };
}

function generateVcfContent({ firstName, lastName, phoneNumber, emailAddress }) {
  const timestamp = new Date().toISOString();

  return `BEGIN:VCARD
VERSION:3.0
N:${lastName};${firstName}
TEL;TYPE=MOBILE,VOICE:${phoneNumber}
EMAIL:${emailAddress}
REV:${timestamp}
END:VCARD`;
}

function loadQRCode(contactInfo) {
  const vcfContent = generateVcfContent(contactInfo);
  document.location.href = `?vcfContent=${encodeURIComponent(vcfContent)}`;
}

function showForm() {
  ContactForm.style.display = 'block';
}

function hideForm() {
  ContactForm.style.display = 'none';
}

ContactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  hideForm();
  loadQRCode(getFormFields());
})