import { useState } from "react"

const CarouselSlide = ( { images } ) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
    }

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }

    return (
        <div className="carousel-container">
            <button onClick={prevSlide}>&lt;</button>
            <div className="carousel-image">
                <img src={images[currentIndex].source_url} alt={images[currentIndex].alt_text} />
            </div>
            <button onClick={nextSlide}>&gt;</button>
        </div>
    )
}

export default CarouselSlide