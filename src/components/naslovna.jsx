import React from 'react';
import './naslovna.css';



function Naslovna () {

    return (
        <div className="naslovnaStrana">
            <div className="gornjiDeo_slike">
                <div className="prvaSlika">
                    <img src='/slikaZaNaslovnu1.jpg' alt='slikaZaNaslovnu1' />
                </div>
                <div className='drugaSlika'>
                    <img src='/slikaZaNaslovnu2.png' alt='slikaZaNaslovnu2' />
                </div>
            </div>
            <div className='tekstIspodSlika'>
                <h2>Dobrodošli u Moravski market - Oazu lokalnih proizvoda!</h2>
                <p>Kod nas možete poručiti prehrambene i srodne proizvode lokalnih proizvođača, mikro, malih i srednjih preduzeća, preduzetnika
 i registrovanih poljoprivrednih gazdinstava sa područja Čačka, Gornjeg Milanovca i Lučana.

Mi smo Udruženje - partnerstvo za ruralni razvoj, a jedan od ciljeva nam je da na jednom mestu okupimo, predstavimo, promovišemo i unapredimo prodaju lokalnih proizvođača - prerađivača zdrave domaće hrane, da motivišemo sve nas kao deo lokalne zajednice, kako fizička, tako i pravna lica, da više kupujemo i konzumiramo zdrave lokalne i domaće proizvode i time utičemo na opstanak i razvoj naših lokalnih proizvođača zdrave domaće hrane.</p>
                <h3>Podrži lokalno, podrži zdravo, podrži domaće!</h3>
                <h2>Kupuj lokalno, da komšiji krava bude živa i zdrava!</h2>
                <p>Izdvajamo za vas zdrave i kvalitetne domaće proizvode!</p>
            </div>
            {/* ovde idu kartice za namirnice*/}
            
            <div className='slikaZaOnline'>
                <img src='/slikaZaOnlineProdaju.jpg' alt='slikaZaOnline' />
            </div>
            <div className='novostiNaPocetnoj'>
                <h2>Novosti</h2>
                <h3>Budite u toku sa dešavanjima na Moravskom Marketu.</h3>
            {/* ovde idu kartice za novosti*/}
            </div>
            <div className='sponzori'>
                <h2>Realizatori inicijative</h2>
                <h3>Organizacije i udruženja koja sprovode i finansiraju projekat</h3>
                <div className='slikeSponzora'>
                    <img src='/sponzor1.png' alt='sponzor1' />  
                    <img src='/sponzor2.jpg' alt='sponzor2' />
                    <img src='/sponzor3.jpg' alt='sponzor3' />
                    <img src='/sponzor4.jpg' alt='sponzor4' />      
                    <img src='/sponzor5.jpg' alt='sponzor5' />
                    <img src='/sponzor6.jpg' alt='sponzor6' />          
                    <img src='/sponzor7.jpg' alt='sponzor7' />
                    <img src='/sponzor8.jpg' alt='sponzor8' />

                </div>
                <h3>Izradu ovog web shopa finansirala je Evropska unija u partnerstvu sa Vladom Republike Srbije, preko programa EU PRO Plus.
Sadržaj stranice je isključiva odgovornost Udruženja "Unija Čačak 2000" i ni na koji način ne odražava stavove Evropske unije.</h3>
            </div>

        </div>
    )
}
export default Naslovna;