$(document).ready(function(){
    $("#submit-form").validate({
        rules:{
            fullName:{
                required:true,
                minlength:4
            },
            emailAddress:{
                required:true,
                email:true
            },
            phoneNumber:{
                required:true,
                minlength:10,
                maxlength:10
            },
            subject:{
                required:true,
                minlength:6
            },
            textMessage:{
                required:true,
                minlength:30
            }
        },
        messages:{
            fullName:{
                required: "Fullname required",
                minlength:"Atleast 4 characters"
            },
             phoneNumber:{
                required:"Contact number required"   

            },
            subject:{
                required:"Enter your subject here",
                minlength:"Atleast six characters"
            },
            textMessage:{
                required:"Enter your message here",
                minlength:"Minimum 30 characters message "
            }

        }
    })
})