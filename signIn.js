let btn = document.getElementById("btn")
let number = document.querySelector('.input-field')
let parol = document.getElementById('pasword')


let numb = JSON.parse(localStorage.getItem('account')) 
console.log(numb);



btn.addEventListener('click', function () {
    numb.forEach((account) => {
        if(number.value === account.tel && number.value === account.tel){
            console.log("Екеуіде бар");
            newAccount(account)
        }
    });
})


function newAccount(account) {
    localStorage.setItem('currentAccount', JSON.stringify(account));
    window.location.href = "index.html"
}
