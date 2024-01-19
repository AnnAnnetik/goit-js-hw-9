





const formEl = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

formEl.addEventListener('input', onInputForm);
formEl.addEventListener('submit', onSabmitForm);

restorData();

function onInputForm(){
  const input = formEl.elements.email.value.trim();
  const textarea = formEl.elements.message.value.trim();

  const data ={
    email:input,
    message:textarea,
  };
  setItemToLS(localStorageKey, data);
  };


function setItemToLS(key, value){
  const jsonData = JSON.stringify(value);
localStorage.setItem(key, jsonData);
};

function onSabmitForm(e){
  const email = formEl.elements.email.value.trim();
  const message = formEl.elements.message.value.trim();

  if (email === '' || message === '') {

  e.preventDefault();
  }else {
      console.log({email, message});

          localStorage.removeItem(localStorageKey);
          formEl.reset();
        }
};

function getItemFromLS(key){
    const data = localStorage.getItem(key) || {};
    try{
      return JSON.parse(data);
    } catch {
      return data;
    }
  };
  
  function restorData(){
      const data = getItemFromLS(localStorageKey)|| {};
    
      formEl.elements.email.value = data.email || '';
      formEl.elements.message.value = data.message || '';
    }
    
    restorData();


