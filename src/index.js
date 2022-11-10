console.log("It's movei time!")

const moviePoster = document.getElementById("poster")
const filmInfo = document.getElementById('film-info')
const showTime = document.getElementById('showtime')
const ticketNum = document.getElementById('ticket-num')
const movieTitle = document.getElementById('title')
const runTime = document.getElementById("runtime")
const filmList = document.getElementById('films')
const buyTicket = document.getElementById("buy-ticket")
const filmItem = document.getElementsByClassName("film item")


buyTicket.addEventListener("click", (e) => {
    e.preventDefault()
    if (ticketNum.innerText >= 1)
    return ticketNum.innerText = ticketNum.innerText - 1
})


const movies = async () => {
    let req = await fetch("http://localhost:3000/films")
    let res = await req.json()
    console.log(res[0])
    moviePoster.src = res[0].poster
    movieTitle.innerText = res[0].title
    runTime.innerText = `${res[0].runtime} min`
    filmInfo.innerText = res[0].description
    showTime.innerText = res[0].showtime
    ticketNum.innerText = res[0].capacity - res[0].tickets_sold
    res.forEach((film) =>{
        let li = document.createElement('li')
        li.classList = "film item"
        li.id = "film-item"
        li.innerText = film.title
        filmList.append(li)
        li.addEventListener("click", () => {
        moviePoster.src = film.poster
        movieTitle.innerText = film.title
        runTime.innerText = `${film.runtime} min`
        filmInfo.innerText = film.description
        showTime.innerText = film.showtime
        ticketNum.innerText = film.capacity - film.tickets_sold
        })
    })
}

movies()
