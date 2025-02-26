
async function fetchApi() {
    try{
        let data = await fetch('./mels.JSON')
        
        if(!data.ok){
            throw new Error("Алу мүмкін болмады");
        }

        let jobs = await data.json();
        console.log(jobs);

        lead(jobs)




    }catch(err){
        console.error(err);
    }
}

fetchApi()



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





let currentJob = JSON.parse(sessionStorage.getItem("job"))
console.log(currentJob);



let section2Div = document.getElementById('section2Div')

function lead(jobs){

    jobs.forEach(element => {
        if(element.Profession == currentJob){
        
        console.log(element);
        let vacancyCard = document.createElement('div')

        vacancyCard.innerHTML = `
        <div class='cardContainer'>
            <h1 class='card1'>${element.Profession}</h1>
            <h1 class='card1 kzt'>${element['Average Salary']}</h1>
            <p  class='card1'>${element.Company}</p>
            <p  class='card1'>${element["Work Schedule"]}</p>
            <p  class='card1'>${element["Work Experience"]}</p>
            <p  class='card1'>${element.City}</p>
            <button class="card-button">Толығырақ</button>
        </div>`;
        section2Div.appendChild(vacancyCard)
    }  
    });
     

}







async function addApi() {
    try{
        let data = await fetch('./mels.JSON')
        
        if(!data.ok){
            throw new Error("Алу мүмкін болмады");
        }

        let jobs = await data.json();
        

        let randomObjects = [];
        while (randomObjects.length < 4) {
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

addApi()


function vacancy(randomObjects) {
   
    let section2Div2 = document.getElementById('section2Div2')
    
    

    randomObjects.forEach(element => {
        let vacancyCard = document.createElement('div')

        vacancyCard.innerHTML = `
        <div class='cardContainer'>
            <h1 class='card1'>${element.Profession}</h1>
            <h1 class='card1 kzt'>${element['Average Salary']}</h1>
            <p  class='card1'>${element.Company}</p>
            <p  class='card1'>${element["Work Schedule"]}</p>
            <p  class='card1'>${element["Work Experience"]}</p>
            <p  class='card1'>${element.City}</p>
            <button class="card-button">Толығырақ</button>
        </div>`;
        section2Div2.appendChild(vacancyCard)
    });
}

