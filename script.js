const countryCodes = [
  { code: "+1", name: "USA" },
  { code: "+1", name: "Canada" },
  { code: "+52", name: "Mexico" },
  { code: "+852", name: "Hong Kong" },
  { code: "+44", name: "UK" },
  { code: "+33", name: "France" },
  { code: "+49", name: "Germany" },
  { code: "+66", name: "Thailand" },
  { code: "+84", name: "Vietnam" },
  { code: "+91", name: "India" },
  { code: "+27", name: "South Africa" },
  { code: "+61", name: "Australia" },
  { code: "+64", name: "New Zealand" },
  { code: "+971", name: "UAE" },
  { code: "+81", name: "Japan" },
  { code: "+82", name: "South Korea" },
  { code: "+39", name: "Italy" },
  { code: "+30", name: "Greece" },
  { code: "+90", name: "Turkey" },
  { code: "+55", name: "Brazil" },
  { code: "+54", name: "Argentina" },
  { code: "+56", name: "Chile" },
  ];

  const countryCodeDropdown = document.getElementById("countryCode");
countryCodes.forEach(({ code, name }) => {
    const option = document.createElement("option");
    option.value = code;
    option.textContent = `${code} (${name})`;
    countryCodeDropdown.appendChild(option);
});

document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault(); 

    const phone = document.getElementById("phone").value.trim();
    const birthday = document.getElementById("birthday").value;

    // Validate phone number
    if (!/^\d{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    // Validate age
    const birthDate = new Date(birthday);
    if (isNaN(birthDate.getTime())) {
        alert("Please enter a valid date of birth.");
        return;
    }

    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if (age < 18) {
        alert("You must be at least 18 years old.");
        return;
    }

    // Success message
    alert("Thanks for your interest, our tour experts will get back to you shortly!");
    document.getElementById("form").reset(); 
});

// Scroll to the "About" section when the button is clicked
document.getElementById("aboutButton").addEventListener("click", function () {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});


