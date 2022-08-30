function Nav() {
    return (
        <div className="nav">
            <h1>Your</h1>
            <img src="letterboxd-logo.png"/>
            <h1>Profile</h1>
        </div>
    )
}

function Card(props) {
    return (
        <div className="card">
                <h1>{props.ranking}</h1>
                <img src={props.img}/>
                <h3>{props.name}</h3>
                <p>Average Rating: <span>{props.rating}</span></p>
        </div>
    )
}

function Container() {
    return (
        <div className="container">
            <h1>Marcelle's best rated Directors</h1>
            <Card 
            ranking="1"
            img="https://m.media-amazon.com/images/M/MV5BOGYzMTdiMTAtZjkwZi00NmYwLWE5MTYtNmY1ZmJlMWY4ZGM0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.7273_AL_.jpg"
            name="Jordan Peele"
            rating="4.75"
            />
            <Card
            ranking="2"
            img="https://m.media-amazon.com/images/M/MV5BNjE5MzI5NTcyN15BMl5BanBnXkFtZTcwNDc4MDg1Mw@@._V1_Ratio0.7727_AL_.jpg"
            name="Luca Guadagnino"
            rating="4.5"
            />
            <Card 
            ranking="3"
            img="https://m.media-amazon.com/images/M/MV5BMTY5NzUyNjYxM15BMl5BanBnXkFtZTYwMDM1NDg0._V1_Ratio0.7273_AL_.jpg"
            name="Charlie Kaufman"
            rating="4.5"
            />
        </div>
    )
}

function App() {
    return (
        <div class="app">
            <Nav />
            <Container />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)
