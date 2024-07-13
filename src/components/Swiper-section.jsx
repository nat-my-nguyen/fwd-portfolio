import { Swiper, SwiperSlide } from 'swiper/react'
import { register } from 'swiper/element/bundle'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/effect-coverflow'

const SwiperSection = ( { images } ) => {
    /* Register Swiper custom elements */
    register()

    return (
        <div className="swipe-container">
            <Swiper
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                slidesPerView={1}
                spaceBetween={16}
                loop={true}
                loopAddBlankSlides={true}
                navigation={true}
                pagination={{ clickable: true }}
                mousewheel={true}
                keyboard={{ enabled: true }}
                centeredSlides={true}
                breakpoints={{
                    390: {
                        slidesPerView: 1.5,
                    },
                    700: {
                        slidesPerView: 1.9,
                        spaceBetween: 18,
                    },
                    920: {
                        slidesPerView: 2.5,
                        spaceBetween: 24,
                    },
                }}
                breakpointsBase={'container'}
                grabCursor={true}
            >
                {images.length > 0 && images.map((image) => (
                    <SwiperSlide key={image.id}>
                        <img
                            src={image.source_url}
                            srcSet={`
                                ${image.small_url} 234w,
                                ${image.medium_url} 356w,
                                ${image.large_url} 400w
                            `}
                            sizes="(max-width: 460px) 234px, 
                            (max-width: 768px) 356px, 
                            400px"
                            alt={image.alt_text}
                            width="500" 
                            height="397"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default SwiperSection