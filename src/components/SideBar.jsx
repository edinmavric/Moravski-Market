import React from "react";
import "./sidebar.css"; 
import { href, useHref } from "react-router-dom";

const kategorije = [
  { naziv: "Novo u ponudi", href:"/novo" },
  { naziv: "Proizvodi na akciji", href:"/akcija" },
  { naziv: "Proizvođači", href:"/proizvodjaci" },
  { naziv: "Ostalo", broj: 36, href:"/ostalo" },
  { naziv: "Mlečni proizvodi", broj: 4, href:"/mlecni" },
  { naziv: "Meso i prerađevine", broj: 19, href:"/meso" },
  { naziv: "Povrće i prerađevine", broj: 77, href:"/povrce" },
  { naziv: "Voće i prerađevine", broj: 64, href:"/voce" },
  { naziv: "Sokovi i voćni sirupi", broj: 21 , href:"/sokovi" },
  { naziv: "Žitarice i testa", broj: 9, href:"/zitarice" },
  { naziv: "Biljni proizvodi", broj: 60, href:"/biljni" },
  { naziv: "Kolači i slatkiši", broj: 11, href:"/slatkisi" },
  { naziv: "Pčelarski proizvodi", broj: 46, href:"/pcelarski" },
  { naziv: "Alkoholna pića", broj: 113 , href:"/alkoholna" },
  { naziv: "Ambalaža", broj: 0 , href:"/ambalaza" },
  { naziv: "Domaća radinost", broj: 4 , href:"/domaca-radinost" },
  { naziv: "Suveniri", broj: 37, href:"/suveniri" },
  { naziv: "Promo paketi", broj: 7 , href:"/promo-paketi"},
];

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="sidebar-overlay"
          onClick={onClose}
        />
      )}
      {/* Sidebar */}
     <div className={`sidebar-container ${open ? "open" : ""}`}>
        <div className="sidebar-content">
          <div className="sidebar-header">
            <h2>Kategorije</h2>
            <button onClick={onClose} className="sidebar-close">
              &times;
            </button>
          </div>
          <ul className="sidebar-list">
            {kategorije.map((kat, index) => (
              <li key={index} className="sidebar-list-item">
                {kat.naziv}
                {kat.broj !== undefined && ` (${kat.broj})`}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
