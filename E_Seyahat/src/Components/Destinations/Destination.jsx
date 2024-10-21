import React from 'react'
import destinationCSS from '../Destinations/Destination.module.css'
import Destination01 from '../../assets/Destination01.jpg'
import Destination02 from '../../assets/Destination02.jpg'
import Destination03 from '../../assets/Destination03.jpg'
import Destination04 from '../../assets/Destination04.jpg'
import Destination05 from '../../assets/Destination05.jpg'
import Destination06 from '../../assets/Destination06.jpg'

function Destination() {
  return (
    <div className={`${destinationCSS.DestinationWrapper} section`} id="destination">
      <div className='Section_heading'>
        <div>
          <h2>Popüler Yerler</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <button><small>Tüm Yerleri Göster</small><i className='ri-arrow-right-up-line'></i></button>
      </div>

      <div className={destinationCSS.DestinationCards}>
        <div className={destinationCSS.DestinationCard}>
          <img src={Destination01} alt="" />
          <div className={destinationCSS.Content}>
            <h2>İstanbul</h2>
            <button>Keşfet</button>
          </div>
        </div>

        <div className={destinationCSS.DestinationCard}>
          <img src={Destination02} alt="" />
          <div className={destinationCSS.Content}>
            <h2>İzmir</h2>
            <button>Keşfet</button>
          </div>
        </div>

        <div className={destinationCSS.DestinationCard}>
          <img src={Destination03} alt="" />
          <div className={destinationCSS.Content}>
            <h2>Antalya</h2>
            <button>Keşfet</button>
          </div>
        </div>

        <div className={destinationCSS.DestinationCard}>
          <img src={Destination04} alt="" />
          <div className={destinationCSS.Content}>
            <h2>Nevşehir</h2>
            <button>Keşfet</button>
          </div>
        </div>

        <div className={destinationCSS.DestinationCard}>
          <img src={Destination05} alt="" />
          <div className={destinationCSS.Content}>
            <h2>Denizli</h2>
            <button>Keşfet</button>
          </div>
        </div>

        <div className={destinationCSS.DestinationCard}>
          <img src={Destination06} alt="" />
          <div className={destinationCSS.Content}>
            <h2>Trabzon</h2>
            <button>Keşfet</button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Destination