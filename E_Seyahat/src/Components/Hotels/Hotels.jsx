import React from "react";
import hotelsCSS from '../Hotels/Hotels.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { Autoplay } from 'swiper/modules'

import Hotel01 from '../../assets/Hotel01.jpg'
import Hotel02 from '../../assets/Hotel02.jpg'
import Hotel03 from '../../assets/Hotel03.jpg'
import Hotel04 from '../../assets/Hotel04.jpg'
import Hotel05 from '../../assets/Hotel05.jpg'
import Hotel06 from '../../assets/Hotel06.jpg'




function Hotels() {
    return (
        <div className={`${hotelsCSS.HotelsWrapper} section`} id="recommended">
            <div className='Section_heading'>
                <div>
                    <h2>Önerilen Oteller</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <button><small>Tüm Otelleri Göster</small><i className='ri-arrow-right-up-line'></i></button>
            </div>

            <Swiper
                spaceBetween={30}
                slidesPerView={4}
                autoplay={{
                    delay: 2500,
                }}
                loop={true}
                modules={[Autoplay]}
                breakpoints={{
                    0: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 4
                    }

                }}
                className={hotelsCSS.swiper}>
                <SwiperSlide>
                    <div className={hotelsCSS.card}>
                        <div className={hotelsCSS.imgWrapper}>
                            <img src={Hotel01} alt="" />
                        </div>
                        <h3>Altın Köşk Oteli</h3>
                        <h3>İstanbul</h3>
                        <small>Lorem ipsum dolor sit amet.</small>
                        <p><span>4.7</span>  (1453 kişi)</p>
                        <h4>2.420₺</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={hotelsCSS.card}>
                        <div className={hotelsCSS.imgWrapper}>
                            <img src={Hotel02} alt="" />
                        </div>
                        <h3>Gözde Saray</h3>
                        <h3>İzmir</h3>
                        <small>Lorem ipsum dolor sit amet.</small>
                        <p><span>4.8</span>  (2560 kişi)</p>
                        <h4>3.240₺</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={hotelsCSS.card}>
                        <div className={hotelsCSS.imgWrapper}>
                            <img src={Hotel03} alt="" />
                        </div>
                        <h3>Beyaz İnci Otel</h3>
                        <h3>İzmir</h3>
                        <small>Lorem ipsum dolor sit amet.</small>
                        <p><span>4.4</span>  (960 kişi)</p>
                        <h4>2.120₺</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={hotelsCSS.card}>
                        <div className={hotelsCSS.imgWrapper}>
                            <img src={Hotel04} alt="" />
                        </div>
                        <h3>Akasya Suites</h3>
                        <h3>Antalya</h3>
                        <small>Lorem ipsum dolor sit amet.</small>
                        <p><span>4.5</span>  (1630 kişi)</p>
                        <h4>2.950₺</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={hotelsCSS.card}>
                        <div className={hotelsCSS.imgWrapper}>
                            <img src={Hotel05} alt="" />
                        </div>
                        <h3>Güneş Meydanı Otel</h3>
                        <h3>İstanbul</h3>
                        <small>Lorem ipsum dolor sit amet.</small>
                        <p><span>4.3</span>  (3630 kişi)</p>
                        <h4>4.950₺</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={hotelsCSS.card}>
                        <div className={hotelsCSS.imgWrapper}>
                            <img src={Hotel06} alt="" />
                        </div>
                        <h3>Gökkuşağı Otel</h3>
                        <h3>Trabzon</h3>
                        <small>Lorem ipsum dolor sit amet.</small>
                        <p><span>4.2</span>  (2330 kişi)</p>
                        <h4>3.230₺</h4>
                    </div>
                </SwiperSlide>
            </Swiper>



        </div>
    )
}

export default Hotels