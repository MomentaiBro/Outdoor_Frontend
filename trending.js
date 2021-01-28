console.log('connect')
const section = document.querySelector('section')
fetch('http://localhost:3000/activities_trending')
    .then(response => response.json())
    .then(activities => 
        activities.forEach(activity => {

            const ratingArray = activity.ratings.map(rating => rating.rating)
            const ratingSum = ratingArray.reduce((sum, number) => sum + number, 0)
            const ratingAverage = ratingSum / ratingArray.length

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
                    <p>Average rating: ${ratingAverage.toFixed(1)}</p>
                    <p class="rate-button"><a class="nav-link" href="newRating.html">Rate it!</a></p>
                    </div>
                </div>
            `
            section.append(flipCard)
        }))
    
       

  
    
     