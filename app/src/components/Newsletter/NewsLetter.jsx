import React, { useState } from 'react';
//import styles
import style from './NewsLetter.module.css';
// services
import { setNewsletter } from '../../services/NewsLetter';
// email validator
import validator from 'validator';

const NewsLetter = () => {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (evento) => {
        evento.preventDefault();
        if ([firstName, email].includes('')) {
            return alert('debes completar todos los campos');
        }

        if (!validator.isEmail(email)) {
            alert('el correo es invalido, favor ingresar nuevamente');
            return;
        }
        setNewsletter(firstName, email);
        console.log('enviando formulario');
    };

    return (
        <>
            <div className={style.newsletter_container}>
                <h2 className={style.newsletter_title}>
                    ¡Únete a nuestras novedades y promociones!
                </h2>
                <div className={style.newsletter_inputs}>
                    <input
                        type='text'
                        placeholder='Ingresa tu nombre'
                        value={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value);
                        }}
                    />
                    <input
                        type='email'
                        placeholder='Ingresa tu mail'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <button
                        onClick={(e) => {
                            handleSubmit(e);
                        }}
                    >
                        Suscribirme
                    </button>
                </div>
            </div>
        </>
    );
};

export default NewsLetter;
