const form = document.querySelector('form');

const validateForm = (e) => {
  const { email, phone, name, address, city, country, postalCode } = form;

  if (email.value.trim() === '') {
    alert('Please fill in the email field!');
    e.preventDefault();
  }
  else if (phone.value.trim() === '') {
    alert('Please fill in the phone field!');
    e.preventDefault();
  }
  else if (name.value.trim() === '') {
    alert('Please fill in the name field!');
    e.preventDefault();
  }
  else if (address.value.trim() === '') {
    alert('Please fill in the address field!');
    e.preventDefault();
  }
  else if (city.value.trim() === '') {
    alert('Please fill in the city field!');
    e.preventDefault();
  }
  else if (country.value === '') {
    alert('Please fill in the country field!');
    e.preventDefault();
  }
  else if (postalCode.value.trim() === '') {
    alert('Please fill in the portal code field!');
    e.preventDefault();
  }

  else {
    alert('Sent with success!')
    form.submit();
  }
}

form.addEventListener('submit', validateForm);
document.querySelector('html').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    validateForm();
  }
})