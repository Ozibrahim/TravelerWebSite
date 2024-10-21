import React from 'react'
import futureTripCSS from '../FutureTrip/FutureTrip.module.css'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'

function FutureTrip() {
    return (
        <div className={`${futureTripCSS.FutureTripWrapper} section`} id='inspiration'>
            <div className={futureTripCSS.FutureTripCards}>
                <div className={futureTripCSS.FutureTripCard}>
                    <div className={futureTripCSS.FutureTripCardImage}>
                        <img src={image1} alt="" />
                    </div>
                    <h3>Görülücek Şehirlerde En Başa Alınması Gereken 10 Şehir</h3>
                    <p>17-10-2024</p>
                </div>
                <div className={futureTripCSS.FutureTripCard}>
                    <div className={futureTripCSS.FutureTripCardImage}>
                        <img src={image2} alt="" />
                    </div>
                    <h3>2024'ün Popüler Tatil Noktaları</h3>
                    <p>12-10-2024</p>

                </div>
                <div className={futureTripCSS.FutureTripCard}>
                    <div className={futureTripCSS.FutureTripCardImage}>
                        <img src={image3} alt="" />
                    </div>
                    <h3>Macera Tutkunları İçin Tatil Rotaları</h3>
                    <p>15-10-2024</p>

                </div>
            </div >
        </div >




    )
}

export default FutureTrip