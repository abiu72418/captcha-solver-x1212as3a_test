document.getElementById('captchaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const url = document.getElementById('url').value;
    const captchaDisplay = document.getElementById('captchaDisplay');
    const solvedText = document.getElementById('solvedText');

    // Display the captcha image
    captchaDisplay.innerHTML = `<img src='${url}' alt='Captcha Image'>`;

    // Simulate captcha solving
    setTimeout(() => {
        const solved = 'Sample Captcha Text'; // Replace with actual solving logic
        solvedText.innerText = `Solved Captcha: ${solved}`;
    }, 15000);
});
