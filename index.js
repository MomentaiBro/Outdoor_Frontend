console.log("Hellow UwU")

const section = document.querySelector('section')
const backEndBaseUrl = "http://localhost:3000"
const searchParams = new URLSearchParams(window.location.search)
const search = searchParams.get("search")

let activityUrl = `${backEndBaseUrl}/activities`
if (search){
    activityUrl = `${activityUrl}?search=${search}`
}

fetch(activityUrl)
    .then(response => response.json())
    .then(activities => {
        activities.forEach(activity => {

            const flipCard = document.createElement('div')
            flipCard.className = "flip-card"
            flipCard.innerHTML = `
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                    <img src="${activity.picture}" alt="Avatar" style="width:300px;height:300px">
                    </div>
                    <div class="flip-card-back">
                    <h1>${activity.name}</h1>
                    <p>Description: ${activity.description}</p>
                    <p>Equipment: ${activity.equipment}</p>
                    </div>
                </div>
            `
            section.append(flipCard)


        })
    })