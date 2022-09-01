function Nav() {
    return (
        <div className="nav">
            <h1>Your</h1>
            <img src="letterboxd-logo.png"/>
            <h1>Profile</h1>
        </div>
    )
}

// Top Rated 

function Card(props) {
    return (
        <div className="card">
            <h1>{props.ranking}</h1>
            <img className="pic" src={props.img}/>
            <h3>{props.name}</h3>
            <p><span className={props.className}><img src={props.imgsrc}/></span>{props.text}<span>{props.num}</span></p>
        </div>
    )
}

function TopRated() {
    return (
        <div className="container">
            <h1>Marcelle's best rated Directors</h1>
            <Card 
            ranking="1"
            img="https://m.media-amazon.com/images/M/MV5BOGYzMTdiMTAtZjkwZi00NmYwLWE5MTYtNmY1ZmJlMWY4ZGM0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.7273_AL_.jpg"
            name="Jordan Peele"
            className="star"
            imgsrc="./images/star.png"
            text="Average Rating: "
            num="4.75"
            />
            <Card
            ranking="2"
            img="https://m.media-amazon.com/images/M/MV5BNjE5MzI5NTcyN15BMl5BanBnXkFtZTcwNDc4MDg1Mw@@._V1_Ratio0.7727_AL_.jpg"
            name="Luca Guadagnino"
            className="star"
            imgsrc="./images/star.png"
            text="Average Rating: "
            num="4.75"
            />
            <Card 
            ranking="3"
            img="https://m.media-amazon.com/images/M/MV5BMTY5NzUyNjYxM15BMl5BanBnXkFtZTYwMDM1NDg0._V1_Ratio0.7273_AL_.jpg"
            name="Charlie Kaufman"
            className="star"
            imgsrc="./images/star.png"
            text="Average Rating: "
            num="4.75"
            />
        </div>
    )
}

// Most Watched

function MostWatched() {
    return (
        <div className="container">
            <h1>Marcelle's most watched Directors</h1>
            <Card 
            ranking="1"
            img="https://m.media-amazon.com/images/M/MV5BMzU2MDk5MDI2MF5BMl5BanBnXkFtZTcwNDkwMjMzNA@@._V1_Ratio0.7273_AL_.jpg"
            name="Denis Villeneuve"
            className="eye"
            imgsrc="./images/eye.png"
            text="Films Watched: "
            num="8"
            />
            <Card 
            ranking="2"
            img="https://m.media-amazon.com/images/M/MV5BMTczMTA5OTMxMl5BMl5BanBnXkFtZTcwMDA4NDg1Mw@@._V1_Ratio1.5000_AL_.jpg"
            name="M. Night Shyamalan"
            className="eye"
            imgsrc="./images/eye.png"
            text="Films Watched: "
            num="7"
            />
            <Card 
            ranking="3"
            img="https://m.media-amazon.com/images/M/MV5BMGM2NTk2MDEtN2Y4Ni00YzNjLWE1NDQtMWM4MjJlZWI1NmU2XkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_Ratio0.7273_AL_.jpg"
            name="Pedro Almodóvar"
            className="eye"
            imgsrc="./images/eye.png"
            text="Films Watched: "
            num="7"
            />
        </div>
    )
}

function App() {
    return (
        <div class="app">
            <Nav />
            <MostWatched />
            <TopRated />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)
