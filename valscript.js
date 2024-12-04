var nameError = document.getElementById("name-error");      // var is the variable declaration where the name of the variable is nameError 
var emailError = document.getElementById("email-error");    // 
var phoneError = document.getElementById("phone-error");
var subjectError = document.getElementById("subject-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName()
{
    var name = document.getElementById("contact-name").value;

    if(name.length==0)
    {
        nameError.innerHTML="This field is required";
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/))
    {
        nameError.innerHTML="Enter your fullname";
        return false;
    }

    nameError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validateEmail()
{
    var email = document.getElementById("contact-mail").value;

    if(email.length==0){
        emailError.innerHTML="This field is required";
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/))
    {
        emailError.innerHTML="Enter a valid mail-id";
        return false;
    }
    emailError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
    return true;

}

function validatePhone()
{
    var phone = document.getElementById('contact-phone').value;

    if(phone.length==0)
    {
      phoneError.innerHTML = "This field is required";
      return false;  
    }
    if(phone.length!=10)
    {
        phoneError.innerHTML = "Phone no should be atleast 10 digits"
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/))
    {
        phoneError.innerHTML = "Only digits please"
        return false;
    }
    phoneError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
    return true;
}
function validateSubject()
{
    var subject = document.getElementById("contact-subject").value;

    if(subject.length==0)
    {
        subjectError.innerHTML="This field is required";
        return false;
    }


    nameError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validateMessage()
{
    var message=document.getElementById("contact-message").value;
    var required = 30;
    console.log(message.length)
    var left = required - message.length;

    if(left>0)
    {
        messageError.innerHTML=left + "more characters required"
        return false;
    }
    if(left<=0)
    {
        messageError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
        return true;
    }
    
}

function validateForm()
{
    if(!validateName() || !validateEmail()|| !validatePhone() || !validateSubject()||!validateMessage() )
    {
        submitError.style.display = "block";
        submitError.innerHTML="Please fill all fields and then submit";
        setTimeout(function(){submitError.style.display = "none";},3000)
        return false;
    }
}