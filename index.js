console.log("Hellow UwU")

const section = document.querySelector('section')

fetch("http://localhost:3000/activities")
    .then(response => response.json())
    .then(activities => {
        activities.forEach(activity => {

            const card = document.createElement('article')
            const name = document.createElement('p')
            const picture = document.createElement('img')

            card.className = "activity-card"
            name.className = "activity-names"
            name.textContent = activity.name
            picture.src = activity.picture

            card.append(name, picture)
            section.appendChild(card)


        })
    })