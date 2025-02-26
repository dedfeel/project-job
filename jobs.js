
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

