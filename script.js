window.onscroll = function () {
    changeHeader();
};

function changeHeader() {
    let header = document.getElementById("header");

    if (window.scrollY > 100) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}



let login = document.getElementById('headBtn1')
let signin = document.getElementById('headBtn2')
let profilImg = document.querySelector('.profilImg')

let profil = JSON.parse(localStorage.getItem("currentAccount")) 

console.log(profil);

if (profil) {
    login.style.display = 'none'
    signin.style.display = 'none'
    profilImg.style.display = 'block'
}


let imgProfil = document.getElementById('img-profil')
let asideProfil = document.getElementById('asideProfil')

imgProfil.addEventListener('click', function(){
    asideProfil.style.display = 'block'
    imgProfil.style.display = 'none'
    accountProfil()
})
let accountCard = document.createElement('div')

function accountProfil(){
    
    accountCard.classList = 'accountCard'

    accountCard.innerHTML = `
    <div class='cardContent'>
        <h1 class='card'>${profil.name}</h1>
        <h1 class='card'>${profil.surname}</h1>
        <p  class='card1'>+${profil.tel}</p>
        <p  class='card1'>${profil.city}</p>
        <p  class='card1'>${profil.day}.${profil.month}.${profil.year}</p>
        <button  class='card2'>Өзгерту</button>
    </div>
`;
asideProfil.appendChild(accountCard)
}



let xImg = document.getElementById('xImg').addEventListener('click', function(){
    asideProfil.style.display = 'none'
    imgProfil.style.display = 'block'
    accountCard.textContent = ''
})



let getOut = document.getElementById('getOut')

getOut.addEventListener('click', function(){
    asideProfil.style.display = 'none'
    imgProfil.style.display = 'none'
    login.style.display = 'block'
    signin.style.display = 'block'
})





async function fetchApi() {
    try{
        let data = await fetch('./mels.JSON')
        
        if(!data.ok){
            throw new Error("Алу мүмкін болмады");
        }

        let jobs = await data.json();
        console.log(jobs);

        let randomObjects = [];
        while (randomObjects.length < 3) {
            let randomIndex = Math.floor(Math.random() * jobs.length);
            let randomItem = jobs[randomIndex];
            if (!randomObjects.includes(randomItem)) {
                randomObjects.push(randomItem);
            }
        }

        console.log(randomObjects);

        vacancy(randomObjects)



    }catch(err){
        console.error(err);
    }
}

fetchApi()


function vacancy(randomObjects) {
    let section4Div = document.querySelector('.section4Div')
    
    

    randomObjects.forEach(element => {
        let vacancyCard = document.createElement('div')

        vacancyCard.innerHTML = `
        <div class='card-content'>
            <h1 class='card1'>${element.Profession}</h1>
            <h1 class='card1 kzt'>${element['Average Salary']}</h1>
            <p  class='card1'>${element.Company}</p>
            <p  class='card1'>${element["Work Schedule"]}</p>
            <p  class='card1'>${element["Work Experience"]}</p>
            <p  class='card1'>${element.City}</p>
            <button class="card-button">Толығырақ</button>
        </div>`;
        section4Div.appendChild(vacancyCard)
    });
}

let section1form = document.getElementById('section1-form');
let section1input = document.getElementById('section1input');
let section1Btn = document.getElementById('section1Btn')

section1form.addEventListener('submit', function(e) {
    e.preventDefault()

    sessionStorage.setItem('job', JSON.stringify(section1input.value))
    
    window.location.href = 'job.html'
});