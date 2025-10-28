import "./Main.css"
import Profile from "./Profile/Profile.jsx"
import CardContainer from "./CardContainer/CardContainer.jsx"

function Main() {
    return (
        <main className="main">
            <section className="traveler">
                <Profile />
            </section>
            <section className="gallery">
                <CardContainer />
            </section>
        </main>
    )
}

export default Main;