console.log("exercice 6");

$(document).ready(() => {
    click()
})

click = () => {
    $('#send').on('click', () => {
        let mail = $('#InputEmail').val();
        let pass = $('#InputPassword').val();
        isCheck(mail, pass)
    })
}

isCheck = ((mail, pass) => {
    let passok = 0
    let mailok = 0
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (mail === '' || !regex.test(mail)) {
        $("#mailvalid").removeClass('d-none')
    } else $("#mailvalid").addClass('d-none'), mailok = 1;

    if (pass === '') {
        $("#pass.d-none").removeClass('d-none')
    } else $("#pass").addClass('d-none')

    if (pass.length < 6) {
        $("#passsixt").removeClass('d-none')
    } else $("#passsixt").addClass('d-none'), passok = 1;

    if (mail === 'hello@me.com' && pass === 'secret8') {
        alert('**Vous êtes connecté**')
    } else if (mailok===1 && passok===1){
        alert('ton compte est accepté ')
    }

})



