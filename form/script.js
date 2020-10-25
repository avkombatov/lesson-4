function name1() {
    let strName = /^[A-Za-zА-Яа-я ]+$/i;
    let name = document.getElementById('name').value;
    let valid = strName.test(name);
    if (valid === true) {
        document.getElementById('messageName').innerHTML = 'Имя введено корректно!';

    } else {
        let border1 = document.getElementById('name');
        border1.style.borderColor = 'red';
        document.getElementById('messageName').innerHTML = 'Имя введено некорректно!';

    }
    return valid;
}

function mail() {
    let strMail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/i;
    let mail = document.getElementById('email').value;
    let valid = strMail.test(mail);
    if (valid === true) {
        document.getElementById('message').innerHTML = 'Адрес эл. почты введен корректно!';

    } else {
        let border = document.getElementById('email');
        border.style.borderColor = 'red';
        document.getElementById('message').innerHTML = 'Адрес электронной почты введен некорректно!';

    }

    return valid;
}

function tel() {
    let strTel = /^\+\d{1}\(\d{3}\)\d{3}-\d{4}$/g;
    let tel = document.getElementById('tel').value;
    let valid = strTel.test(tel);
    if (valid === true) {
        document.getElementById('messageTel').innerHTML = 'Телефон введён корректно!';
    } else {
        let border = document.getElementById('tel');
        border.style.borderColor = 'red';
        document.getElementById('messageTel').innerHTML = 'Телефон должен быть формата +7(000)000-0000';
    }
    return valid;
}

function comment() {
    let comment = document.getElementById('comment').value;
    if (comment === "") {
        let border = document.getElementById('comment');
        border.style.borderColor = 'red';
        document.getElementById('messageCom').innerHTML = 'Введите сообщение!';

    }
}