const form = document.querySelector('.signup-form'); //adding submit event to the form, not the submit button. (form gets submitted, not  button)
const email = document.querySelector('#email');
const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
form.addEventListener('submit', e => {
    e.preventDefault(); //HTML by default refreshes page on submit
    // console.log(username.value);
    //or access children by 'name' or 'id'
    const email = form.email.value;
   

    const feedback = document.querySelector('.feedback');
    if (emailPattern.test(email))
    {
        feedback.textContent = 'Valid email';
    }
    else 
    {
        feedback.textContent = 'Invalid email';
    }

});

form.email.addEventListener('keyup', e => {
    if (emailPattern.test(e.target.value))
    {
        form.email.setAttribute('class', 'success');
    }
    else
    {
        form.email.setAttribute('class', 'error');
    }

    const feedback = document.querySelector('.feedback');
    if (emailPattern.test(form.email.value))
    {
        feedback.textContent = 'Valid email';
    }
    else 
    {
        feedback.textContent = 'Invalid email';
    }
});
