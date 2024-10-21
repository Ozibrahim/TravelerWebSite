import React, { useRef } from 'react'
import navCss from '../Nav/nav.module.css'

function Nav() {

    const Menu = useRef();
    const Navbar = useRef();

    const NavHandler = () => {
        Menu.current.classList.toggle(navCss.activeNav);
    }

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            Navbar.current.classList.add(navCss.navbarActive);
        }
        else {
            Navbar.current.classList.remove(navCss.navbarActive);
        }
    })

    return (
        <div className={navCss.NawWrapper} ref={Navbar}>
            <div className={navCss.ContainerNav}>
                <div className={navCss.logo}>
                    <a href="#">Seyahat</a>
                </div>
                <ul ref={Menu}>
                    <li><a href="#home">AnaSayfa</a></li>
                    <li><a href="#destination">Yerler</a></li>
                    <li><a href="#recommended">Öneriler</a></li>
                    <li><a href="#Testimonials">Müşteri Yorumları</a></li>
                    <li><a href="#inspiration">Keşif Fikirleri</a></li>

                </ul>

            </div>
            <div className={navCss.NavButtons}>
                <button className={navCss.button}>Kayıt ol</button>
                <i className="ri-menu-3-line" onClick={NavHandler}></i>

            </div>

        </div>
    )
}

export default Nav