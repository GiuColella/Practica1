import React, { useState } from 'react'
import Style from './logreg.module.css'
import { Link } from 'react-router-dom';

export default function LogReg() {
    const [form, setForm] = useState('log');

    const handleButtonClick = (formType) => {
        setForm(formType);
    }

    return (
        <div className={Style.contenedor}>
            <div className={Style.box}>
                <div className={Style.contenedor_box}>
                    <ul className={Style.box_lst}>
                        <li className={Style.lista}>
                            <button className={Style.box_btn} onClick={() => handleButtonClick('log')}>Log In</button>
                        </li>
                        <li className={Style.lista}>
                            <button className={Style.box_btn} onClick={() => handleButtonClick('reg')}>Sign Up</button>
                        </li>
                    </ul>
                </div>
                <div className={Style.contenedor_box}>
                    {form === 'log' && <h1 className={Style.title}>Log In</h1>}
                    {form === 'reg' && <h1 className={Style.title}>Sign Up</h1>}
                </div>
                <div className={Style.contenedor_form}>
                    {/*cambio de formulario = login*/}
                    {form === 'log' && (
                        <div className="">
                            <form className={Style.form_log} action="">
                                <input className={Style.ipt} type="text" placeholder='Usuario' />
                                <input className={Style.ipt} type="text" placeholder='Contraseña' />
                                <Link to='/home'><button className={Style.form_btn} type='button'>Log In</button></Link>
                            </form>
                        </div>
                    )}
                    {/*cambio de formulario = registro*/}
                    {form === 'reg' && (
                        <div className="">
                            <form className={Style.form_reg} action="">
                                <div className={Style.form__reg}>
                                    <input className={Style.ipt_reg} type="text" placeholder='Nombre' />
                                    <input className={Style.ipt_reg} type="text" placeholder='Apellido' />
                                </div>
                                <input className={Style.ipt} type="text" placeholder='Email' />
                                <input className={Style.ipt} type="text" placeholder='Usuario' />
                                <input className={Style.ipt} type="text" placeholder='Contraseña' />
                                <Link to='/home'><button className={Style.form_btn} type='button'>Sign Up</button></Link>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
