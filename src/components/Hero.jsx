import "../styling/hero.css"
function Hero() {
    return (
        <section className="hero-container">
            <video autoPlay muted loop className="hero-video">
                <source src="hero-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

        </section>
    )
}
export default Hero;