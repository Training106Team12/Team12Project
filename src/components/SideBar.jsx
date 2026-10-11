import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function SideBar() {
  const [isOpen, setIsOpen] = useState(true);
  const bgColor= {backgroundColor : "white"} ;

  return (
    <div className="sidebar d-flex flex-column gap-3 "  
     style = { isOpen ? bgColor : {} } 
     
     >
      <button className="btn d-flex align-items-center justify-content-center" type="button" onClick={() => setIsOpen((open) => !open)}>
 
        <img
          src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/template/open.svg"
          alt=""
        />
            </button>
      {isOpen && <>
     
      <a href="" className="menu d-flex align-items-center justify-content-center">
        <img src="./src/assets/img/monitor.svg" alt="" />
        <ul className="submenu">
          <li>Computer Accessories</li>
          <li> Computer Cases</li>
          <li>Laptop</li>
          <li>HDD</li>
          <li>RAM</li>
          <li>Headphone</li>
        </ul>
      </a>
      <a href="" className="menu d-flex align-items-center justify-content-center">
        <img src="./src/assets/img/mobile.svg" alt="" />
        <ul className="submenu">
          <li> Phone Accessories</li>
          <li>Postpaid Phones</li>
          <li>Unlocked Phones </li>
          <li>Prepaid Phones </li>
          <li>Prepaid Plans</li>
          <li>Refurbished Phones</li>
          <li>Straight Talk</li>
          <li>iPhone</li>
          <li>Samsung Galaxy</li>
          <li>Samsung Galaxy</li>
          <li>Samsung Galaxy</li>
          <li>Samsung Galaxy</li>
          <li>Samsung Galaxy</li>
        </ul>
      </a>
      <a href="" className="menu d-flex align-items-center justify-content-center">
        <img src="./src/assets/img/game.svg" alt="" />
        <ul className="submenu">
          <li>Wireless Routers</li>
          <li>Cool New Gadgets</li>
          <li>Tech and Gadgets</li>
          <li>Geek Gifts and Gadgets</li>
          <li>Xbox Accessories</li>
          <li>PlayStation Accessories</li>
        </ul>
      </a>
      <a href="" className="menu d-flex align-items-center justify-content-center">
        <img src="./src/assets/img/clock.svg" alt="" />
        <ul className="submenu">
          <li>Smart Watches</li>
          <li>Fashion Smart Watches</li>
          <li>Smart Bracelets</li>
          <li>Pocket Watches</li>
          <li>Smart Rings</li>
          <li>Other Watches</li>
        </ul>
      </a>
      <a href="" className="menu d-flex align-items-center justify-content-center">
        <img src="./src/assets/img/airpods.svg" alt="" />
        <ul className="submenu">
          <li>On-Ear Headphones</li>
          <li>Earbud & In-Ear</li>
          <li>DJ Headphones</li>
          <li>PC Accessories</li>
          <li>PC Game Headsets</li>
        </ul>
      </a>
      <a href="" className="menu d-flex align-items-center justify-content-center">
        <img src="./src/assets/img/mouse.svg" alt="" />
        <ul className="submenu">
          <li>Logitech</li>
          <li>Redragon</li>
          <li>Amazon Basics</li>
          <li>Microsoft</li>
          <li>MageGee</li>
        </ul>
      </a>
      <a href="" className="menu d-flex align-items-center justify-content-center">
        <img src="./src/assets/img/music-play.svg" alt="" />

        <ul className="submenu">
          <li>Car Audio Systems</li>
          <li>Cellphones</li>
          <li>Desktops</li>
          <li>Gaming Consoles</li>
          <li>Telephones</li>
        </ul>
      </a>
      <a href="" className="menu d-flex align-items-center justify-content-center">
        <img src="./src/assets/img/bluetooth.svg" alt="" />
        <ul className="submenu">
          <li>Player Accessories</li>
          <li>Computer Accessories</li>
          <li>Speakers & Audio</li>
          <li>Computer Networking</li>
          <li>Movies & Films</li>
        </ul>
      </a>
      <a href="" className="menu d-flex align-items-center justify-content-center">
        <img src="./src/assets/img/clound.svg" alt="" />
        <ul className="submenu">
          <li>Android</li>
          <li>Linux & Unix</li>
          <li>Macintosh</li>
          <li>Windows</li>
          <li>iPhone & iO</li>
        </ul>
      </a>
      <a href="" className="menu d-flex align-items-center justify-content-center">
        <img src="./src/assets/img/electricity.svg" alt="" />
        <ul className="submenu">
          <li>Antenna Toppers</li>
          <li>Automotive Body Armor</li>
          <li>Power Inverter</li>
          <li>Gas Tank Doors</li>
          <li>Hood Scoops & Vents</li>
        </ul>
      </a>
      <a href="" className="menu d-flex align-items-center justify-content-center">
        <img src="./src/assets/img/cpu.svg" alt="" />{" "}
        <ul className="submenu">
          <li>Computer CPU Processors</li>
          <li>Internal Fans & Cooling</li>
          <li>Graphics Cards</li>
          <li>Network I/O Port Cards</li>
          <li>Internal Memory Card</li>
        </ul>
      </a>
      <a href="" className="menu d-flex align-items-center justify-content-center">
        <img src="./src/assets/img/devices.svg" alt="" />
        <ul className="submenu">
          <li>Graphic PC</li>
          <li>Office PC</li>
          <li>Gaming PC</li>
          <li>Server</li>
        </ul>
      </a>
      <a href="" className="menu d-flex align-items-center justify-content-center">
        <img src="./src/assets/img/driver.svg" alt="" />
        <ul className="submenu">
          <li>JBL</li>
          <li>Anker</li>
          <li>Pyle</li>
          <li>Bose</li>
          <li>Logitech</li>
        </ul>
      </a>
      <a href="" className="menu d-flex align-items-center justify-content-center">
        <img src="./src/assets/img/airpod.svg" alt="" />
        <ul className="submenu">
          <li>On-Ear Headphones</li>
          <li>In-Ear Headphones</li>
          <li>Earbud</li>
          <li>Over-Ear Headphones</li>
          <li>Other</li>
        </ul>
      </a>
      <a href="" className="menu d-flex align-items-center justify-content-center">
        <img src="./src/assets/img/lamp.svg" alt="" />{" "}
        <ul className="submenu">
          <li>Copyholders</li>
          <li>Office Bookends</li>
          <li>Business Card Holders</li>
          <li>Lap Desks</li>
          <li>Mouse Pads</li>
        </ul>
      </a>
      </>
      }
    </div>
  );
}

export default SideBar;
