let rating = localStorage.getItem("rating")
let divMessage = document.getElementById('rating')


divMessage.innerHTML = `You selected ${rating} out of 5`

