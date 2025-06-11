import "../styling/hero.css"
function Hero() {
    return (
        <section className="hero-container">
            <video autoPlay muted loop className="hero-video">
                <source src="hero-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="hero-content">
                <h1 className="hero-title">ACACIA, votre <span className="text-green">partenaire essentiel</span><br />​ en transformation digitale.​</h1>
                <p className="hero-subtitle">Experts en solutions de gestion Sage, nous excellons aussi ​ en cartographie des processus et en implémentation de solutions​ adaptées à vos besoins.</p>
            </div>

        </section>
    )
}
export default Hero;