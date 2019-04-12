console.log("exercice 6");
function checkLogin(mail) {


};

$(document).ready(() => {

    $("#mail").hide()
    $("#pass").hide()

    $('#send').on('click', () => {
        alert('youpi');
        let mail = $('#InputEmail').val();
        let pass = $('#InputPassword').val();
        checkmail (mail, pass)
    })

})

checkmail = ((mail, pass) => {
    if (mail === '') {
        console.log(mail)
        $("#mail").show()
    }

    if (pass === '') {
        console.log(pass)
        $("#pass").show()
    }
})
