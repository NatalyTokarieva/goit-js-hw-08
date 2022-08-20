import throttle  from "lodash.throttle";
import '../css/03-feedback.css';
import '../css/common.css';
const STORAGE_KEY = "feedback-form-state";


const feedBackForm = document.querySelector('.feedback-form');


feedBackForm.addEventListener('submit', onFormSubmit);
feedBackForm.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarea();

function onFormSubmit(evt){
    evt.preventDefault();
    const {
        elements: {email, message}
    } = evt.currentTarget;
    
 if(feedBackForm.email.value ==="" || feedBackForm.message.value ===''){
    return console.log('Please fill in all the fields');
 }
    console.log(formData());
    
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
}

function onTextareaInput(evt){
    // const message = evt.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData()));
}

function formData(){
    return{
        email: feedBackForm.email.value,
        message: feedBackForm.message.value,
    };
}

function populateTextarea() {
   let savedMessage;
   try{
   savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

  feedBackForm.elements.email.value = savedMessage.email;
  feedBackForm.elements.message.value = savedMessage.message;
} catch(error){
}
}

// function onFormSubmit(input) {
//     return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input.vlue);
// }