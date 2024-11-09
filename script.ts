
const shareableLink = document.getElementById('shareable-link-container') as HTMLDivElement;
const shareableLinks = document.getElementById('shareable-link') as HTMLAnchorElement;
const pdfbutton = document.getElementById('Downloadpdf') as HTMLButtonElement;




const form = document.getElementById('form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resumePreview')as HTMLDivElement

form.addEventListener('submit', (event : Event) =>{ 
    event.preventDefault();
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById('name')as HTMLInputElement).value
    const email = (document.getElementById('email')as HTMLInputElement).value
    const contact = (document.getElementById('Contact')as HTMLInputElement).value
    const DOB = (document.getElementById('date-of-Birth')as HTMLInputElement).value
    const education = (document.getElementById('Degree')as HTMLInputElement).value
    const skills= (document.getElementById('Skills')as HTMLInputElement).value
    const Experience= (document.getElementById('Experience')as HTMLInputElement).value

    const resumeData = {
        name,
        email,
        contact,
        education,
        Experience,
        skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the data locally



    const resumePreview = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name : </b><span contenteditable="true">${name}</span></p>
    <p><b>Email : </b><span contenteditable="true">${email}</span></p>
    <p><b>Contact : </b><span contenteditable="true">${contact}</span></p>
    <p><b>DOB : </b><span contenteditable="true">${DOB}</span></p>
    <p><b>Education : </b><span contenteditable="true">${education}</span></p>
    <p><b>Skills : </b><span contenteditable="true">${skills}</span></p>
    <p><b>Experience : </b><span contenteditable="true">${Experience}</span></p>
    `
    ;
    resumeDisplayElement.innerHTML = resumePreview;
    // Generate a shareable URL with the username only
    const shareableURL =
    `${window.location.origin}?username=${encodeURIComponent(username)}`;
    // Display the shareable link
    shareableLink.style.display = 'block';
    shareableLinks.href = shareableURL;
    shareableLinks.textContent = shareableURL;
});
// Handle PDF download
pdfbutton.addEventListener('click' , () => {
    window.print() // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
});

window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    
if (username) {
    const savedResumeData = localStorage.getItem(username);
    if (savedResumeData) {
        const resumeData = JSON.parse(savedResumeData);
            (document.getElementById('username') as HTMLInputElement).value = username;
            (document.getElementById('name') as HTMLInputElement).value =
            resumeData.name;
            (document.getElementById('email') as HTMLInputElement).value =
            resumeData.email;
            (document.getElementById('phone') as HTMLInputElement).value =
            resumeData.contact;
            (document.getElementById('education') as HTMLTextAreaElement).value =
            resumeData.education;
            (document.getElementById('experience') as HTMLTextAreaElement).value
            = resumeData.experience;
          (document.getElementById('skills') as HTMLTextAreaElement).value = resumeData.skills;
        }
    }        

});