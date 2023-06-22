// 
const email = document.getElementById('email')

function validateEmail(email) {

    const EmailRegext = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!EmailRegext.test(email)) {
        return false
    }
    else {
        return true
    }
}

const newsletter_form_container = document.getElementById('newsletter_form_container')
const err = document.getElementById('err')
const success_subscribing = document.getElementById('success_subscribing')
const newsletter_form = document.getElementById('newsletter_form')


// 
document.getElementById('email_form').addEventListener('submit',(e)=>{
    e.preventDefault();
    if (validateEmail(email.value)) {
        console.log('valid')
        newsletter_form_container.classList.add('hidden')
        err.classList.add('hidden')
        success_subscribing.classList.remove('hidden')
        newsletter_form.classList.add('bg-dark_slate_grey')
    }
    else {
        console.log('No valid')
        err.classList.remove('hidden')
        success_subscribing.classList.add('hidden')
        newsletter_form.classList.remove('bg-dark_slate_grey').add('hidden')
    }
})


// 

const btn = document.getElementById('btn').addEventListener('click',()=> {
    location.reload();
})








