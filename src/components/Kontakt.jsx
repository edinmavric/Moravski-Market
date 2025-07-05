import './Kontakt.css';
import { MapPin, Mail, Phone, Instagram, Facebook, Youtube, Clock, Send } from 'lucide-react';
import { useState, preventDefault } from 'react';
import ReCaptcha from 'react-google-recaptcha';
import MapComponent from './MapComponent';

const Kontakt = () => {
      const [captcha, setCaptcha] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captcha) {
      alert("Please verify you're human.");
      return;
    }
    alert("Form submitted!");
  };
    
    return(
        <div className='wrapper'>
            <p className='red'>Naslovna {'>'} <strong>Kontakt</strong></p>
            <div className='Informacije'>
                <div className='Informacija'>
                    <h1>Adresa</h1>
                    <p><MapPin id='ikona'/> Bate Jankovića 48</p>
                    <p>32000 Čačak, Srbija</p>
                </div>
                <div className='Informacija'>
                    <h1>Kontakt</h1>
                    <a href='mailto:moravskimarket@gmail.com'><Mail id='ikona'/> moravskimarket@gmail.com</a>
                    <a href='tel:061 67 15 941'><Phone id='ikona'/> 061 67 15 941</a>
                </div>
                <div className='Informacija'>
                    <h1>Pratite nas</h1>
                    <a href='facebook.com'><Facebook id='ikona'/> Facebook</a>
                    <a href='Instagram.com'><Instagram id='ikona'/> Instagram</a>
                    <a href='Youtube.com'><Youtube id='ikona'/> Youtube</a>  
                </div> 
                <div className='Informacija'>
                    <h1>Radno vreme</h1>
                    <p><Clock id='ikona'/> Radnim danom: 08:00-17:00h</p>
                    <p>Vikendom: Ne radimo</p>
                </div>
            </div>
            <div className='input'>
                <h2>Pišite nam, pristupite mreži uspešnih prodavaca..</h2>
                <div className='skupInputa'>
                    <div id='red1'>
                        <input type='text' id='ime' placeholder='Ime'/>
                        <input type='email' id='email' placeholder='Email'/>
                    </div>
                    <input type='text' id='predmet' placeholder='Predmet'/>
                    <input type='text' id='poruka' placeholder='Poruka'/>
                    <ReCaptcha 
                    sitekey='6LcOPXYrAAAAAPDA-F-JgZniM6fpQW5MMx-gyJIH'
                    onChange={(value) => setCaptcha(value)} id='captcha'
                    />            
                </div>
            <button className='send'><Send id='ikona' /> Pošaljite</button>
            </div>
            <div className='Mapa'>
                <MapComponent/>
            </div>
        </div>    
    )
}

export default Kontakt