import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss"

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_11q7oq6', 'template_lpr4ege', refForm.current, 'lJDsmMeTrKDNF36uy')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                alert("Message successfully sent!")
                window.location.reload(false)
            }, function (error) {
                console.log('FAILED...', error);
                alert("Failed to sent the message, please try again.")
            });

    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>I'm excited about the opportunity to bring my skills to your team and help deliver exceptional digital experiences. Let's connect and discuss how I can contribute to your project's success.
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li >
                                    <input type="text" name="subject" placeholder="Subject" required />
                                </li>
                                <li >
                                    <textarea name="message" placeholder="Message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Lina Dai,
                    <br />
                    Sydney, Australia <br />
                    <span>linadaijuly@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[-33.867778, 151.21]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[-33.867778, 151.21]}>
                            <Popup>Lina lives here, come over for a cup of coffee :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='ball-spin-fade-loader' />
        </>
    )
}

export default Contact;