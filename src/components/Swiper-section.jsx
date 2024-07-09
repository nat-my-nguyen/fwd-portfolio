import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/effect-coverflow'


const SwiperSection = ({ images }) => {

    return (
        <div className="swipe-container">
            <Swiper
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                slidesPerView={1}
                spaceBetween={36}
                loop={true}
                loopAddBlankSlides={true}
                navigation={true}
                pagination={{ clickable: true }}
                mousewheel={true}
                keyboard={{ enabled: true }}
                centeredSlides={true}
                breakpoints={{
                    992: {
                    slidesPerView: 1.9,
                    spaceBetween: 18,
                    // centeredSlides: true,
                    },
                }}
                breakpointsBase={'container'}
                grabCursor={true}
            >
                {images.length > 0 && images.map((image) => (
                    <SwiperSlide key={image.id}>
                        <img src={image.source_url} alt={image.alt_text} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default SwiperSection