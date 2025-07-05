import React from "react";
import "./Nalog.css";

const Nalog = () => {

    return(
        <div className="wrapper">
            <div className="red">Naslovna {'>'} <strong>Nalog</strong></div>
            <div className="donjiDeo">
                <div className="loginKocka">
                    <h1>Ulogujte se</h1>
                    <p style={{margin:'0px'}}><strong>Email:</strong></p>
                    <input type="email" id="input"></input>
                    <p style={{marginBottom:'0px'}}><strong>Lozinka:</strong></p>
                    <input type="password" id="input"></input>
                    <div className="zapamtiMe">
                        <input type="checkbox" name="zapamti" id="zapamti"></input>
                        <label for="zapamti" style={{marginLeft:"10px"}}><b>Zapamti me</b></label>
                    </div>
                    <button type="button" id="Uloguj">Ulogujte se</button>
                    <a href="#" id="registracija"><b>REGISTRUJTE SE</b></a>
                    <a href="#" id="zaboravili"><b>Zaboravili ste lozinku?</b></a>
                </div>
            </div>

        </div>
    )
}

export default Nalog