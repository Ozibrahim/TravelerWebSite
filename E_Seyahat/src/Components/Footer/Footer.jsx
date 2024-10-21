import React from 'react'
import footerCSS from './Footer.module.css'
import IMGmobil from '../../assets/gplay-astore.png'

function Footer() {
    return (
        <footer className={`${footerCSS.footerWrapper}`}>
            <div className={footerCSS.banner}>
                <div className={footerCSS.content}>
                    <i className='ri-newspaper-line'></i>
                    <h2>En Son Çıkan Haber ve Güncellemeler için <span>Seyahatleriniz Burada Başlıyor</span></h2>
                </div>
                <div className={footerCSS.form}>
                    <input type="text" placeholder='Email Adresinizi Yazınız' />
                    <button>Abone ol</button>
                </div>
            </div>
            <div className={footerCSS.FooterContainer}>
                <div className={footerCSS.footerLinks}>
                    <h3>Şirket</h3>
                    <a href="#">Hakkımızda</a>
                    <a href="#">Kariyer</a>
                    <a href="#">Blog</a>
                    <a href="#">Basın</a>
                    <a href="#">Hediye Kartları</a>
                </div>
                <div className={footerCSS.footerLinks}>
                    <h3>Hizmetler</h3>
                    <a href="#">İletişim</a>
                    <a href="#">Yasal Uyarı</a>
                    <a href="#">Gizlilik Hakları</a>
                    <a href="#">Şartlar ve Koşullar</a>
                    <a href="#">Site Haritası</a>
                </div>
                <div className={footerCSS.footerLinks}>
                    <h3>Diğer Hizmetler</h3>
                    <a href="#">Araç Kiralayın</a>
                    <a href="#">Aktivite Bulun</a>
                    <a href="#">Tur Listesi</a>
                    <a href="#">Uçuş Bulun</a>
                    <a href="#">Gemi TuruK Bileti Alın</a>
                    <a href="#">Tatil Fırsatlarını Kaçırmayın</a>
                </div>
                <div className={footerCSS.footerLinks}>
                    <h3>Mobil</h3>
                    <img src={IMGmobil} alt="" />

                </div>
            </div>


        </footer>

    )
}

export default Footer