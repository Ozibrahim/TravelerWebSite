import React from 'react'
import headerCSS from '../Header/Header.module.css'

function Header() {
    return (
        <div className={`${headerCSS.HeaderWrapper} section`} id="home">
            <div className={headerCSS.Container}>
                <h1>Gezilecek Bir Sonraki Yeri Ara</h1>
                <small>Özel fırsatlarla yeni yerler keşfedin</small>

                <form>
                    <div className={headerCSS.inputWrapper}>
                        <label>Konum</label>
                        <input type="text" placeholder='Konum Giriniz' />
                    </div>
                    <div className={headerCSS.inputWrapper}>
                        <label>Giriş / Çıkış</label>
                        <input type="datetime-local" />
                    </div>
                    <button><i className='ri-search-line'></i> Ara</button>



                </form>

            </div>
        </div>
    )
}

export default Header