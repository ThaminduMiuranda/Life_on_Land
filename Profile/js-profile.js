const promptsPart1 = [
    { prompt: "Enter Your Name", display: "Name", answer: "", skippable: false, type: "Text" },
    { prompt: "Enter Your Email Address", display: "Email", answer: "", skippable: false, type: "Text" },
    { prompt: "Enter Your Phone Number", display: "Phone Number", answer: "", skippable: false, type: "Number" },
    { prompt: "Enter Your Birthday", display: "Birth Day", answer: "", skippable: true, type: "Date" },
    { prompt: "Enter Your Gender", display: "Gender", answer: "", skippable: true, type: "Option", optionNum: 1 },
    { prompt: "Do you agree with our privacy terms", display: "Agree with privacy terms", answer: "", skippable: false, type: "CheckBox", chkNum: 1 }
];
const promptsPart2 = [
    { prompt: "Enter Your Country", display: "Country", answer: "", skippable: false, type: "Text", optionNum: 2 },
    { prompt: "Enter Your City", display: "City", answer: "", skippable: true, type: "Text" },
    { prompt: "Postal Code", display: "Zip Code", answer: "", skippable: true, type: "Number" },
    { prompt: "Language Preference", display: "Preferred Language", answer: "", skippable: true, type: "Option", optionNum: 3 }
]
const promptsPart3 = [
    { prompt: "Main Field of Study", display: "Area of Study", answer: "", skippable: true, type: "Text" },
    { prompt: "Your University or Institution", display: "University/Institution", answer: "", skippable: true, type: "Text" },
    { prompt: "Completion Year", display: "Year", answer: "", skippable: true, type: "Number" },
    
]
const promptsPart4 = [
    { prompt: "Preferred Mods of Engagement", display: "Modes of Engagement", answer: "", skippable: true, type: "Option", optionNum: 4 },
    { prompt: "Frequency of Engagement", display: "Frequency of Engagement", answer: "", skippable: true, type: "Option", optionNum: 5 },
    { prompt: "Notification Preferences", display: "Notification Preferences", answer: "", skippable: true, type: "Option", optionNum: 6 },
    { prompt: "Interest in Participating in Events or Workshops related to Life on Land", display: "Interest in Events/Workshops", answer: "", skippable: true, type: "Option", optionNum: 7 },
] 

const promptContainer = document.getElementById('prompt-container');
const progress = document.getElementById('progress');
const profileOutput = document.getElementById('profile-output');
const partDetail = document.getElementById('question-part-details')

let currentStep = 0;
let currentPart = 1;
let step = 0;
const stepTot = 17;

// Function to display prompts
function displayPrompt() {
    promptContainer.style.display = 'block';
    partDetail.style.display = 'block';
    let prompts = currentPart === 1 ? promptsPart1 :
        currentPart === 2 ? promptsPart2 :
            currentPart === 3 ? promptsPart3 :
                promptsPart4;

    if (currentStep < prompts.length) {
        const prompt = prompts[currentStep].prompt;
        const isSkippable = prompts[currentStep].skippable; // Check for skippable property

        const promptElement = document.createElement('div');
        promptElement.classList.add('prompt');
        let promptGetHTML = ''; // Define promptGetHTML outside the conditional block
        if (prompts[currentStep].type === "Text") {
            promptGetHTML = `
                <label class="PromptLabel">${prompts[currentStep].prompt}</label><br>
                <input type="text" class="PromptBar" id="input-${currentStep}" data-step="${currentStep}">
                <br>
            `;
        } else if (prompts[currentStep].type === "CheckBox") {
            if (prompts[currentStep].chkNum === 1) {
                promptGetHTML = `
                    <label for="input-${currentStep}">I agree to the terms and conditions:</label>
                    <input type="checkbox" id="input-${currentStep}" onchange="handleCheckbox(this)" checked>
                    <br>
                `;
            }
        } else if (prompts[currentStep].type === "Option") {
            if (prompts[currentStep].optionNum === 1) {
                promptGetHTML = `
                <label class="PromptLabel">${prompts[currentStep].prompt}</label><br>
                <div id = "select-prompt">
                    <select class="PromptBar" id="input-${currentStep}" name="input-${currentStep}">
                        <option value="" selected disabled>Select an option</option> 
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select><br>
                </div>
            `;
            } else if (prompts[currentStep].optionNum === 3) {
                promptGetHTML = `
                <label class="PromptLabel">${prompts[currentStep].prompt}</label><br>
                <div id = "select-prompt">
                    <select class="PromptBar" id="input-${currentStep}" name="input-${currentStep}" onchange="optionOther(this)">
                        <option value="" selected disabled>Select a Language</option> 
                        <option value="English">English</option>
                        <option value="Sinhala">Sinhala</option>
                        <option value="Tamil">Tamil</option>
                        <option value="Other">Other</option>
                    </select><br>
                </div>
            `;
            } else if (prompts[currentStep].optionNum === 4) {
                promptGetHTML = `
            <label class="PromptLabel">${prompts[currentStep].prompt}</label><br>
                <div id = "select-prompt">
                    <select class="PromptBar" id="input-${currentStep}" name="input-${currentStep}" onchange="optionOther(this)">
                        <option value="" selected disabled>Select a prefferd mode of engagement</option> 
                        <option value="Discussions">Discussions</option>
                        <option value="Articles">Articles</option>
                        <option value="Resource Sharing">Resource Sharing</option>
                        <option value="Other">Other</option>
                    </select><br>
                </div>
            `;
            } else if (prompts[currentStep].optionNum === 5) {
                promptGetHTML = `
                    <label class="PromptLabel">${prompts[currentStep].prompt}</label><br>
                    <div id = "select-prompt">
                        <select class="PromptBar" id="input-${currentStep}" name="input-${currentStep}" onchange="optionOther(this)">
                            <option value="" selected disabled>Select a frequency of engagement</option> 
                            <option value="Daily">Daily</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Monthly">Monthly</option>
                        </select><br>
                    </div>
                `;
            } else if (prompts[currentStep].optionNum === 6) {
                promptGetHTML = `
                    <label class="PromptLabel">${prompts[currentStep].prompt}</label><br>
                    <div id = "select-prompt">
                        <select class="PromptBar" id="input-${currentStep}" name="input-${currentStep}" onchange="optionOther(this)">
                            <option value="" selected disabled>Select a prefferd mode of engagement</option> 
                            <option value="Email updates">Email Updates</option>
                            <option value="App Notifications">App Notifications</option>
                            <option value="No Notifications">No Notifications</option>
                        </select><br>
                    </div>
                `;
            } else if (prompts[currentStep].optionNum === 7) {
                promptGetHTML = `
                    <label class="PromptLabel">${prompts[currentStep].prompt}</label><br>
                    <div id = "select-prompt">
                        <select class="PromptBar" id="input-${currentStep}" name="input-${currentStep}" onchange="optionOther(this)">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select><br>
                    </div>
                `;
            }
        } else if (prompts[currentStep].type === "Date") {
            promptGetHTML = `
                <label class="PromptLabel">${prompts[currentStep].prompt}</label><br>
                <input type="date" class="PromptBar" id="input-${currentStep}" name="input-${currentStep}"><br>
            `;
        } else if (prompts[currentStep].type === "Number") {
            promptGetHTML = `
                <label class="PromptLabel">${prompts[currentStep].prompt}</label><br>
                <input type="number" class="PromptBar" id="input-${currentStep}" data-step="${currentStep}">
                <br>
            `;
        }
        let buttonHTML = `
            <div id ="button-container">
            <button class="Buttons" onclick="backQuestion()" id="backButton">Back</button>
            <button class="Buttons" onclick="nextStep()" id="nextButton">Next</button>
            <button class="Buttons" onclick="skipQuestion()" id="skipButton">Skip</button>
            </div>
        `;

        promptElement.innerHTML = promptGetHTML + buttonHTML;
        promptContainer.appendChild(promptElement);
        displayProfilePart(currentPart);

        // Check if the field is unskippable and enable/disable the next button accordingly
        if (currentStep === 0) {
            backButton.disabled = true; // Disable the back button when on the first step
        } else {
            backButton.disabled = false; // Enable the back button for other steps
        }
        const nextButton = document.getElementById('nextButton');
        const inputField = document.getElementById(`input-${currentStep}`);
        if (!isSkippable) {
            skipButton.disabled = true;
        }
        if (inputField.value === '' || prompts[currentPart].answer === '') {
            nextButton.disabled = true;
            inputField.addEventListener('input', function () {
                nextButton.disabled = this.value === '';
            });
        }
    } else {
        promptContainer.innerHTML = '';
        currentPart++;
        currentStep = 0;
        if (currentPart <= 4) {
            displayPrompt(); // Proceed to the next part
        } else {
            displayProfile(); // All parts completed, display profile
        }
    }


}

function confirmPart() {
    currentStep = 0;
    promptContainer.innerHTML = ''; // Clear the prompt container
    // Hide the confirm container
    document.getElementById('confirm-container').style.display = 'none';
    // Proceed to the next part
    currentPart++;
    if (currentPart <= 4) {
        displayPrompt();
    } else {
        displayProfile(); // All parts completed, display profile
    }
}

// Function to move to the next step
function nextStep() {
    const input = document.getElementById(`input-${currentStep}`).value;
    let prompts = currentPart === 1 ? promptsPart1 :
        currentPart === 2 ? promptsPart2 :
            currentPart === 3 ? promptsPart3 :
                promptsPart4;
    prompts[currentStep].answer = input;
    currentStep++;
    step++;
    const percentage = (step / stepTot) * 100;
    progress.style.width = `${percentage}%`;
    // Update the profile part
    promptContainer.innerHTML = ''; // Clear the prompt container
    if (currentStep < prompts.length) {
        displayPrompt(); // Display next prompt or proceed to the next part
    }
    if (prompts[currentStep] && prompts[currentStep].answer !== "") {
        // Set the value of the next input field to the answer of the current step
        const nxtAnswer = prompts[currentStep].answer;
        const inputField = document.getElementById(`input-${currentStep}`);
        inputField.value = nxtAnswer;
    }
    if (currentStep === prompts.length) {
        displayProfilePart(currentPart)
        document.getElementById('confirm-container').style.display = 'block';
        promptContainer.style.display = 'none';
        partDetail.style.display = 'none';
    } else {
        document.getElementById('confirm-container').style.display = 'none';
    }
}

function skipQuestion() {
    currentStep++;
    let prompts = currentPart === 1 ? promptsPart1 :
        currentPart === 2 ? promptsPart2 :
            currentPart === 3 ? promptsPart3 :
                promptsPart4;
    step++
    const percentage = (step / stepTot) * 100;
    progress.style.width = `${percentage}%`;
    promptContainer.innerHTML = ''; // Clear the prompt container
    if (currentStep < prompts.length) {
        displayPrompt(); // Display next prompt or proceed to the next part
    }
    if (prompts[currentStep] && prompts[currentStep].answer !== "") {
        // Set the value of the next input field to the answer of the current step
        const nxtAnswer = prompts[currentStep].answer;
        const inputField = document.getElementById(`input-${currentStep}`);
        inputField.value = nxtAnswer;
    }
    if (currentStep === prompts.length) {
        displayProfilePart(currentPart)
        document.getElementById('confirm-container').style.display = 'block';
        promptContainer.style.display = 'none';
        partDetail.style.display = 'none';
    } else {
        document.getElementById('confirm-container').style.display = 'none';
    }
}

function backQuestion() {
    if (step > 0) {
        currentStep = currentStep - 1;
        step = step - 1;
        let prompts = currentPart === 1 ? promptsPart1 :
            currentPart === 2 ? promptsPart2 :
                currentPart === 3 ? promptsPart3 :
                    promptsPart4;
        const percentage = (step / stepTot) * 100;
        progress.style.width = `${percentage}%`;
        promptContainer.innerHTML = ''; // Clear the prompt container
        displayPrompt(); // Display previous prompt
        // Fetch the previous answer and populate the input field
        const prevAnswer = prompts[currentStep].answer;
        const inputField = document.getElementById(`input-${currentStep}`);
        inputField.value = prevAnswer;
    } else {
        backQuestion.disabled;
    }
}

function handleCheckbox(checkbox) {
    const nextButton = document.getElementById('nextButton');
    if (checkbox.checked) {
        nextButton.disabled = false;
        checkbox.value = 'Yes';
    } else {
        nextButton.disabled = true;
        checkbox.value = '';
    }
}

// Function to display user profile
function displayProfile() {
    profileOutput.innerHTML = '';
    let profileContent = ''; // Accumulator for profile content

    for (let part = 1; part <= 4; part++) {
        let prompts;
        if (part === 1) {
            prompts = promptsPart1;
            profileContent += `
                <div class="profile-topic">
                    <br>
                    <strong><h3>Personal Details</h3></strong><hr>
                </div>
            `;
        } else if (part === 2) {
            prompts = promptsPart2;
            profileContent += `
                <div class="profile-topic">
                    <br>
                    <strong><h3>Location</h3></strong><hr>
                </div>
            `;
        } else if (part === 3) {
            prompts = promptsPart3;
            profileContent += `
                <div class="profile-topic">
                    <br>
                    <strong><h3>Interests & Qualifications</h3></strong><hr>
                </div>
            `;
        } else if (part === 4) {
            prompts = promptsPart4;
            profileContent += `
                <div class="profile-topic">
                    <br>
                    <strong><h3>Engagement Preferences</h3></strong><hr>
                </div>
            `;
        }

        for (let i = 0; i < prompts.length; i++) {
            const input = prompts[i].answer || ''; // If input for this step doesn't exist, use an empty string
            profileContent += `
                <div class="profile-item">
                    <strong>${prompts[i].display}:</strong> ${input}
                </div>
            `;
        }
    }

    profileOutput.innerHTML += profileContent; // Append accumulated content
    promptContainer.style.display = 'none';
    partDetail.style.display = 'none';
}

function displayProfilePart(part) {
    let profilePart = '';
    let prompts;

    let partDetailHTML = '';
    if (part === 1) {
        partDetailHTML = `<h4>STEP 1 Personal Details       | Question ${currentStep + 1}/${promptsPart1.length}</h4>`;
        profilePart += `<div class="profile-topic">
                <strong><h3>Personal Details</h3></strong>
                </div>`;
        prompts = promptsPart1;
    } else if (part === 2) {
        partDetailHTML = `<h4>STEP 2 Location               | Question ${currentStep + 1}/${promptsPart2.length}</h4>`;
        profilePart += `<div class="profile-topic">
                <strong><h3>Location</h3></strong>
                </div>`;
        prompts = promptsPart2;
    } else if (part === 3) {
        partDetailHTML = `<h4>STEP 3 Qualifications         | Question ${currentStep + 1}/${promptsPart3.length}</h4>`;
        profilePart += `<div class="profile-topic">
                <strong><h3>Qualifications</h3></strong>
                </div>`;
        prompts = promptsPart3;
    } else if (part === 4) {
        partDetailHTML = `<h4>STEP 4 Engagement Preferences  | Question ${currentStep + 1}/${promptsPart4.length}</h4>`;
        profilePart += `<div class="profile-topic">
                 <strong><h3>Engagement Preferences</h3></strong>
                </div>`;
        prompts = promptsPart4;
    }

    partDetail.innerHTML = partDetailHTML;

    for (let i = 0; i < prompts.length; i++) {
        const input = prompts[i].answer || ''; // If input for this step doesn't exist, use an empty string
        profilePart += `<div id = "profilePart-text"><strong>${prompts[i].display}:</strong> ${input}<br></div>`;
    }
    profileOutput.innerHTML = profilePart;
}

// Display initial prompt
displayPrompt();
