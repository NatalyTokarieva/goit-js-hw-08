import throttle  from "lodash.throttle";
import '../css/03-feedback.css';
import '../css/common.css';
const STORAGE_KEY = "feedback-form-state";


const feedBackForm = document.querySelector('.feedback-form');


feedBackForm.addEventListener('submit', onFormSubmit);
feedBackForm.addEventListener('input', throttle(onTextareaInput, 500));


// refs.form.addEventListener('input', e => {
//     // console.log(e.target);

//     formData[e.target.name] = e.target.value;

//     console.log(formData);
// })

//     localStorage.setItem(STORAGE_KEY, JSON.stringify({formData}));

//     const savedData = localStorage.getItem('formData');
//     console.log('savedData', savedData);

//     const parcedData = JSON.parse(savedData);
//     console.log('parsedData', parcedData)





populateTextarea();


function onFormSubmit(evt){
    evt.preventDefault();
 
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
