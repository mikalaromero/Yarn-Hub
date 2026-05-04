
/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button");

// Step 2: Write the callback function
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
    // This section will run whenever the button is clicked
}

// Step 3: Register a 'click' event listener for the theme button,
themeButton.addEventListener("click", toggleDarkMode);


/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Add your query for the submit RSVP button here

// Step 1: get button
const button = document.getElementById("rsvp-button");

// Step 2: function
const addParticipant = (person) => {
  let newParticipant = document.createElement("p");

  newParticipant.textContent = `🧶 ${person.name} from ${person.hometown} has RSVP'd.`;

  document.querySelector(".rsvp-participants").appendChild(newParticipant);
};

// Step 3: event listener

// Step 3: Add a click event listener to the submit RSVP button here

/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = (event) => {
  event.preventDefault();

  let containsErrors = false;
  let rsvpInputs = document.getElementById("rsvp-form").elements;

  let person = {
    name: rsvpInputs[0].value,
    hometown: rsvpInputs[1].value,
    email: rsvpInputs[2].value
  };

  for (let i = 0; i < rsvpInputs.length; i++) {
    if (rsvpInputs[i].value.length < 2) {
      containsErrors = true;
      rsvpInputs[i].classList.add("error");
    } else {
      rsvpInputs[i].classList.remove("error");
    }
  }

  if (containsErrors === false) {
  addParticipant(person);
  toggleModal(person);

  for (let i = 0; i < rsvpInputs.length; i++) {
    rsvpInputs[i].value = "";
  }
}
};

button.addEventListener("click", validateForm);
/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Project 9 (STRETCH FEATURE)
  - [ ] Any time after
***/

const toggleModal = (person) => {
  let modal = document.getElementById("success-modal");

  modal.style.display = "flex";

  let modalText = document.getElementById("modal-text");
  modalText.textContent = `🧶 ${person.name}, your spot is secured! Get ready for cozy vibes ✨`;
  let intervalId = setInterval(animateImage, 500);

  setTimeout(() => {
    modal.style.display = "none";
    clearInterval(intervalId);
  }, 5000);
};

let rotateFactor = 0;

let modalImage = document.querySelector("#success-modal img");

const animateImage = () => {
  if (rotateFactor === 0) {
    rotateFactor = -10;
  } else {
    rotateFactor = 0;
  }

  modalImage.style.transform = `rotate(${rotateFactor}deg)`;
}
