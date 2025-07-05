import './footer.css';

function Footer () {

  return (
    <div class="footer">
        <div class="slika">
            <img src="https://moravskimarket.rs/images/footer-image.png" alt="footer image" />
        </div>
        <div class="sredisnji-deo-footera">
            <div class="text">
                <h2>MAPA SAJTA</h2>
                <p>Naslovna</p>
                <p>O nama</p>
                <p>Prodavnica</p>
                <p>Proizvodjaci</p>
                <p>Distributivni centar</p>
                <p>Novosti</p>
                <p>Kontakt</p>
            </div>
            <div class="text">
                <h2>KUPOVINA</h2>
                <p>Zasto da kupujem lokalno?</p>
                <p>Kako kupiti?</p>
                <p>Nacin dostave</p>
                <p>Nacin placanja</p>
                <p>Politika privatnosti</p>
            </div>
            <div class="text">
                <h2>KONTAKT</h2>
                <p>Bate Jankovića 48</p>
                <p>32000 Čačak, Srbija</p>

                <p>E-mail: moravskimarket@gmail.com</p>
                <p>Call centar: 061 67 15 941</p>
                
                <p>Radnim danom: 08:00-17:00h</p>
                <p>Vikendom: Ne radimo</p>
            </div>
            <div class="text">
                <h2>ZAPRATITE NAS</h2>
                <div class="ikonice">
                    <a href="https://www.facebook.com"><ion-icon name="logo-facebook"></ion-icon></a>
                    <a href="https://www.instagram.com"><ion-icon name="logo-instagram"></ion-icon></a>
                    <a href="https://www.twitter.com"><ion-icon name="logo-twitter"></ion-icon></a>
                </div>
                <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
            
            </div>
            <div class="text">
                <img src="https://moravskimarket.rs/images/footer-stamp.png" alt="slicica" />
            </div>
        </div>
        <div class="donji-deo-footera1">
            <p>Cene na sajtu su iskazane u dinarima sa uračunatim porezom, a plaćanje se vrši isključivo u dinarima. Nastojimo da budemo što precizniji u opisu proizvoda, prikazu slika i samih cena, ali ne možemo garantovati da su sve informacije  kompletne i bez grešaka. Svi artikli prikazani na sajtu su deo naše ponude i ne podrazumeva se da su dostupni u svakom trenutku. Za raspoloživost artikala pozovite naš Call centar.</p>
        </div>
        <div class="donji-deo-footera2">
            <p>Moravski Market © 2025 Developed by SuperWeb</p>
            
        </div>
        <div class="donji-deo-footera3">
            <p></p>
            
        </div>
    </div>
    );
}
export default Footer;