import React from 'react'
import TestimonialCSS from '../Testimonials/Testimonial.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

import user1 from '../../assets/user1.png'
import user2 from '../../assets/user2.png'
import user3 from '../../assets/user3.png'
import user4 from '../../assets/user4.png'

function Testimonial() {
    return (
        <div className={`${TestimonialCSS.TestimonialWrapper} section`} id='Testimonials'>
            <div className={TestimonialCSS.content}>
                <h2>Müşteri Yorumları</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, labore.</p>
                <div className={TestimonialCSS.Rating}>
                    <div>
                        <h3>45+ <span>Müşteri Memnuniyeti</span></h3>
                    </div>
                    <div>
                        <h3>4.7+ <span>Genel Puan</span></h3>
                    </div>
                </div>

            </div>

            <Swiper className={TestimonialCSS.swiper}
                loop={true}
                modules={[Autoplay]}
                autoplay={{
                    delay: 2500,
                }}
            >
                <SwiperSlide>
                    <div className={TestimonialCSS.Testimonial}>
                        <div className={TestimonialCSS.profile}>
                            <img src={user1} alt="" />
                            <h3>İbrahim Yıldırım</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis magni corrupti consectetur tempore saepe ab eligendi vel dicta! Nam?</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={TestimonialCSS.Testimonial}>
                        <div className={TestimonialCSS.profile}>
                            <img src={user2} alt="" />
                            <h3>Safa Yılmaz</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis magni corrupti consectetur tempore saepe ab eligendi vel dicta! Nam?</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={TestimonialCSS.Testimonial}>
                        <div className={TestimonialCSS.profile}>
                            <img src={user3} alt="" />
                            <h3>Hatice Sönmez</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis magni corrupti consectetur tempore saepe ab eligendi vel dicta! Nam?</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={TestimonialCSS.Testimonial}>
                        <div className={TestimonialCSS.profile}>
                            <img src={user4} alt="" />
                            <h3>Selçuk Çağlayan</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis magni corrupti consectetur tempore saepe ab eligendi vel dicta! Nam?</p>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default Testimonial