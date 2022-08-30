function Nav() {
    return (
        <div className="nav">
            <h1>Your</h1>
            <img src="letterboxd-logo.png"/>
            <h1>Profile</h1>
        </div>
    )
}

function Director(props) {
    return (
        <div className="container">

            <div className="card">
                <h1>{props.ranking}</h1>
                <img src={props.img}/>
                <h3>{props.name}</h3>
                <p>Average Rating: {props.rating}</p>
            </div>

        </div>
    )
}

function App() {
    return (
        <div class="app">
            <Nav />
            <Director 
            ranking="1"
            img="https://m.media-amazon.com/images/M/MV5BOGYzMTdiMTAtZjkwZi00NmYwLWE5MTYtNmY1ZmJlMWY4ZGM0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.7273_AL_.jpg"
            name="Jordan Peele"
            rating="4.75"
            />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)
