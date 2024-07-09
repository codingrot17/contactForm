const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    //First Name Validation 
    const firstName = document.getElementById('firstName').value;
    const firstNameError = document.getElementById('firstNameError');
    
    if (firstName === "") {
    
        firstNameError.innerHTML="This field is required";
       return
    }else {
        firstNameError.innerHTML=" ";
    };
    
       //Last Name Validation 
    const lastName = document.getElementById('lastName').value;
    const lastNameError = document.getElementById('lastNameError');
    
     if (lastName === ""){
    
        lastNameError.innerHTML="This field is required";
        return
    }else {
        lastNameError.innerHTML=" ";
    };
    
       //Email Validation 
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    
    if (email === "") {
    
        emailError.innerHTML = "This field is required";
        
        return;
    }else if (!emailIsValid(email)) {
                const emailError = document.getElementById('emailError');
        emailError.innerHTML = "Please enter a valid email address";
        
        return;
    } else {
    
        emailError.innerHTML = "";
        
    };
    
    //radio button validation 
    const genEnq = document.getElementById('genEnq');
    const supportRequest = document.getElementById('supportRequest');
    const queryError = document.getElementById('queryError');

    if (!genEnq.checked && !supportRequest.checked) {
    
      queryError.innerHTML = "Please select a query type";
      
      return;
    } else {
    
      queryError.innerHTML = "";
      
    }
    
    //Message Validation 
    const message = document.getElementById('message').value;
    const messageError = document.getElementById('messageError');
    
     if (message === ""){
    
        messageError.innerHTML="This field is required";
        return
    }else {
        messageError.innerHTML=" ";
    };
    
    
    // Consent Validation 
    const consent = document.getElementById('consent').value;
    const consentError = document.getElementById('consentError');
    
     if (consent.checked){
    
        consentError.innerHTML="To submit this form, please consent to being contacted";
        
       return;
        
    }else {
        consentError.innerHTML=" ";
    };
    
    
   const success = document.getElementById("success");
   success.style.display="inline";
    
    
    
    
   // form.submit();
});

function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
} 
