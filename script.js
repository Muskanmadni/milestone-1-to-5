var shareableLink = document.getElementById('shareable-link-container');
var shareableLinks = document.getElementById('shareable-link');
var pdfbutton = document.getElementById('Downloadpdf');
var form = document.getElementById('form');
var resumeDisplayElement = document.getElementById('resumePreview');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('Contact').value;
    var DOB = document.getElementById('date-of-Birth').value;
    var education = document.getElementById('Degree').value;
    var skills = document.getElementById('Skills').value;
    var Experience = document.getElementById('Experience').value;
    var resumeData = {
        name: name,
        email: email,
        contact: contact,
        education: education,
        Experience: Experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the data locally
    var resumePreview = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name : </b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email : </b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Contact : </b><span contenteditable=\"true\">").concat(contact, "</span></p>\n    <p><b>DOB : </b><span contenteditable=\"true\">").concat(DOB, "</span></p>\n    <p><b>Education : </b><span contenteditable=\"true\">").concat(education, "</span></p>\n\n    <p><b>Skills : </b><span contenteditable=\"true\">").concat(skills, "</span></p>\n    <p><b>Experience : </b><span contenteditable=\"true\">").concat(Experience, "</span></p>\n    ");
    resumeDisplayElement.innerHTML = resumePreview;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link
    shareableLink.style.display = 'block';
    shareableLinks.href = shareableURL;
    shareableLinks.textContent = shareableURL;
});
// Handle PDF download
pdfbutton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
});
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value =
                resumeData.name;
            document.getElementById('email').value =
                resumeData.email;
            document.getElementById('phone').value =
                resumeData.contact;
            document.getElementById('education').value =
                resumeData.education;
            document.getElementById('experience').value
                = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});
