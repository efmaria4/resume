const scriptURL = "https://sheetdb.io/api/v1/usbrgk6zuh84b";

document.addEventListener("DOMContentLoaded", () => {
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", async (event) => {
    event.preventDefault(); 

    const formData = {
        name: contactForm.name.value,
        email: contactForm.email.value,
        message: contactForm.message.value,
    };

    try {
        const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json",
        },
        });

const result = await response.json();
    if (result.result === "success") {
        alert("Message sent successfully!");
        contactForm.reset();
        } else {
        alert("Something went wrong. Please try again.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to send the message. Please try again later.");
    }
    });
}
});
