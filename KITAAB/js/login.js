function validateEmail(email) {
    // Regular expression for a basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Example usage:
const userEmail = "test@example.com";
if (validateEmail(userEmail)) {
    console.log("Email is valid!");
} else {
    console.log("Email is not valid!");
}
function validatePhoneNumber(phoneNumber) {
    // Regular expression for a basic phone number validation
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
}

// Example usage:
const userPhoneNumber = "1234567890";
if (validatePhoneNumber(userPhoneNumber)) {
    console.log("Phone number is valid!");
} else {
    console.log("Phone number is not valid!");
}
function validatePassword(password) {
    // Password should be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one digit
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
}

// Example usage:
const userPassword = "Passw0rd";
if (validatePassword(userPassword)) {
    console.log("Password is valid!");
} else {
    console.log("Password is not valid!");
}
