document.addEventListener('DOMContentLoaded', () => {
    //get the select element
    let regionSelect = document.getElementById('region-select');
    let regionSelectform = document.getElementById('region-select-form');
    let serviceselect = document.getElementById('service-select');
    let bookingform = document.getElementById('booking-form');

    //regions List
    const regions = ("Africa", "Asia", "Europe", "North America", "Australia");


    //services List
    const services = ("plumbing", "carpentry", "electrical repairs", "painting", "barber");

    //populate regions dropdown
    regions.forEach(region => {
        let option = document.createElement('option');
        option.value = region;
        option.textContent = region;
        regionSelect.appendChild(option);
        regionSelectform.appendChild(option);
    }
});
//populate services dropdown
services.forEach(service => {
    let option = document.createElement('option');
    option.value = service;
    option.textContent = service;
    serviceselect.appendChild(option);
    bookingform.appendChild(option);
}

// Event listener for region select
regionSelect.addEventListener('change', () => {
    let selectedRegion = regionSelect.value;
    alert(selectedRegion);
    console.log(selectedRegion);
});

// Event listener for service select
serviceselect.addEventListener('change', () => {
    let selectedService = serviceselect.value;
    alert(selectedService);
    console.log(selectedService);
});

// Event listener for booking form
bookingform.addEventListener('submit', (e) => {
    e.preventDefault();
    let selectedRegion = regionSelect.value;
    let selectedService = serviceselect.value;
    alert(`Region: ${selectedRegion}, Service: ${selectedService}`);
    console.log(`Region: ${selectedRegion}, Service: ${selectedService}`);
});

//form validation
function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let zipcode = document.getElementById('zipcode').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let region = document.getElementById('region-select').value;
    let service = document.getElementById('service-select').value;

    if (name === "" || email === "" || phone === "" || address === "" || region === "" || service === "") {
        alert("All fields are required");
        return false;
    }
    return true;
    alert("Form submitted successfully");
    console.log("Form submitted successfully");

});



