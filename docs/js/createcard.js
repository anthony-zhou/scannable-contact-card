const BASE_URL = 'https://anthony-zhou.github.io/scannable-contact-card/download';
const ContactBox = document.getElementById('form-box');
const QRCodeBox = document.getElementById('qrcode-box');

function utf8_to_b64( str ) {
  return window.btoa(unescape(encodeURIComponent( str )));
}

function b64_to_utf8( str ) {
  return decodeURIComponent(escape(window.atob( str )));
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

function displayQRCode(contactInfo) {
  const decodedContactInfo = JSON.parse(b64_to_utf8(contactInfo));
  const fullName = `${decodedContactInfo.firstName} ${decodedContactInfo.lastName}`;
  document.getElementById('full-name').innerText = fullName;
  const vcfContent = generateVcfContent(decodedContactInfo);
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


function loadQRCode(contactInfo) {
  const base64ContactInfo = utf8_to_b64(JSON.stringify(contactInfo));
  document.location.href = `?contact=${base64ContactInfo}`;
}

function showCode() {
  QRCodeBox.style.display = 'block';
}

function showForm() {
  ContactBox.style.display = 'block';
}

function hideForm() {
  ContactBox.style.display = 'none';
}

document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  hideForm();
  loadQRCode(getFormFields());
})