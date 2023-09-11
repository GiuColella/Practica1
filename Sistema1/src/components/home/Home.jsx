import React, { useState } from 'react'
import HomeStyle from './home.module.css'

export default function Home() {
  const [contenido, setContenido] = useState('ofertas');

  const handleButtonClick = (formType) => {
    setContenido(formType);
  }

  return (
    <div className={HomeStyle.contenedor}>
      <div className="">
        {/*header: logo-menu-user */}
        <header className={HomeStyle.box_header}>
          <ul className={HomeStyle.box_lista}>
            <li className={HomeStyle.lista}>
              <img src="#" alt="Logo" />
            </li>
            <li className={HomeStyle.lista}>
              <ul className={HomeStyle.box_lista}>
                <li className={HomeStyle.lista}>
                  <button className={HomeStyle.btn_header_lista}>Productos</button>
                </li>
                <li className={HomeStyle.lista}>
                  <button className={HomeStyle.btn_header_lista}>Envios</button>
                  </li>
                <li className={HomeStyle.lista}>
                  <button className={HomeStyle.btn_header_lista}>Contactos</button>
                  </li>
              </ul>
            </li>
            <li className={HomeStyle.lista}>
              <button>Usuario</button>
            </li>
          </ul>
        </header>
        <nav className={HomeStyle.box_nav}>
          <ul className={HomeStyle.box_lista}>
            <li className={HomeStyle.lista}>
              <button className={HomeStyle.btn_nav_lista} onClick={() => handleButtonClick('consumible')}>Consumibles</button>
            </li>
            <li className={HomeStyle.lista}>
              <button className={HomeStyle.btn_nav_lista} onClick={() => handleButtonClick('limpieza')}>Limpieza</button>
            </li>
            <li className={HomeStyle.lista}>
              <button className={HomeStyle.btn_nav_lista} onClick={() => handleButtonClick('bebidas')}>Bebidas</button>
            </li>
            <li className={HomeStyle.lista}>
              <button className={HomeStyle.btn_nav_lista} onClick={() => handleButtonClick('ofertas')}>Ofertas</button>
            </li>
            <li className={HomeStyle.lista}>
              <button className={HomeStyle.btn_nav_lista} onClick={() => handleButtonClick('porMenor')}>Por Menor</button>
            </li>
            <li className={HomeStyle.lista}>
              <button className={HomeStyle.btn_nav_lista} onClick={() => handleButtonClick('porMayor')}>Por Mayor</button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="">
        {contenido === 'ofertas' && (
          <section>
            <div>
              Ofertas
            </div>

          </section>
        )}
        {contenido === 'consumible' && (
          <section>
            <div>
              Consumible
            </div>
          </section>
        )}
        {contenido === 'limpieza' && (
          <section>
            <div>
              Limpieza
            </div>
          </section>
        )}
        {contenido === 'porMenor' && (
          <section>
            <div>
              Por Menor
            </div>
          </section>
        )}
        {contenido === 'porMayor' && (
          <section>
          <div>
            Por Mayor
          </div>
          </section>
        )}
        {contenido === 'bebidas' && (
          <section>
          <div>
            Bebidas
          </div>
          </section>
        )}

        {/*carrousel de botones*/}

      </div>
      <div className="">
        <footer className="">
          {/*footer: ¿? */}
        </footer>
      </div>
    </div>
  )
}
