console.log('connected yo')
const activityDropdown = document.querySelector('#activity-dropdown')

fetch('http://localhost:3000/activities')
    .then(response => response.json())
    .then(activities => activities.forEach(activity => {
        const activityOption = document.createElement('option')
        activityOption.value = activity.id
        activityOption.textContent = activity.name
        activityDropdown.append(activityOption)

    }) )