let nameS = document.getElementById('name');
let surname = document.getElementById('surname');
let tel = document.getElementById('tel');
let password = document.getElementById('password');
let city = document.getElementById('city');
let day = document.getElementById('day');
let month = document.getElementById('month');
let year = document.getElementById('year');
let btn = document.getElementById('btn');

let account = JSON.parse(localStorage.getItem('account')) || [];

btn.addEventListener('click', function() {
    saveToAccount();
    localStorage.setItem('account', JSON.stringify(account));  
});

function saveToAccount() {

    if(tel.value.length == 11  && password.value.length >= 5 ){
        let userData = {
            name: nameS.value.trim(),
            surname: surname.value.trim(),
            tel: tel.value.trim(),
            password: password.value.trim(),
            city: city.value.trim(),
            day: day.value.trim(),
            month: month.value.trim(),
            year: year.value.trim()
        };
    
        account.push(userData);  
    
        nameS.value = '';
        surname.value = '';
        tel.value = '';
        password.value = '';
        city.value = '';
        day.value = '';
        month.value = '';
        year.value = '';
        
        alert('Сәтті тіркелдіңіз аккаунтыңызға кіріңіз')
    }else{
        alert('Номермен парольді дұрыс толтырыныз толтырыныз')
    }
}

// localStorage.clear() 