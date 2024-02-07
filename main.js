let button = document.getElementById('butoni');
let first_name = document.getElementById('first_name').value;
let email = document.getElementById('email').value;
let last_name = document.getElementById('last_name').value;
let phone_number = document.getElementById('phone_number').value;
let psw_one = document.getElementById('psw_one');
let psw_two = document.getElementById('psw_two');
let comment = document.getElementById('comment');
const form = document.forms['account']




form.addEventListener('submit', (event) => {
    if (psw_two.value != psw_one.value) {
        comment.innerText = "*Passwords do not match";
    } 
    else {
        forms()
    }
});


function forms() {
    comment.innerHTML = ''
    form.reset()
}
