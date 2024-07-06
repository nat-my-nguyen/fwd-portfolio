import { useState } from "react"

const CarouselSlide = ( { images, icons } ) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
    }

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }

    const getPrevIndex = () => {
        return currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    }

    const getNextIndex = () => {
        return currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    }

    return (
        <div className="carousel-container">
            <div className="carousel-slide">
                {/* {images.length > 1 && (
                    <>
                        {images.length > 2 ? (
                            <img src={images[getPrevIndex()].source_url} alt={images[getPrevIndex()].alt_text} className="carousel-other-image prev" />
                        ) : (
                            <div className="carousel-other-image prev placeholder"></div>
                        )}
                        <button onClick={prevSlide} className="slide-btn left">
                            <img src={icons.prev_icon.url} alt={icons.prev_icon.alt} className="slide-icon" />
                        </button>
                    </>
                )} */}
                {images.length > 2 && (
                    <>
                        <img src={images[getPrevIndex()].source_url} alt={images[getPrevIndex()].alt_text} className="carousel-other-image prev" />
                        <button onClick={prevSlide} className="slide-btn left">
                            <img src={icons.prev_icon.url} alt={icons.prev_icon.alt} className="slide-icon" />
                        </button>
                    </>    
                )}

                <img src={images[currentIndex].source_url} alt={images[currentIndex].alt_text} className="carousel-current-image" />

                {images.length > 1 && (
                    <>
                        <img src={images[getNextIndex()].source_url} alt={images[getNextIndex()].alt_text} className="carousel-other-image next" />
                        <button onClick={nextSlide} className="slide-btn right">
                            <img src={icons.next_icon.url} alt={icons.next_icon.alt} className="slide-icon" />
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}

export default CarouselSlide