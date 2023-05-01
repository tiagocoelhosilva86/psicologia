/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */

import "../footer/style.css";
import svgfacebook from "../../img/facebook.png";
import svginstagram from "../../img/instagram.png";
import svgtwitter from "../../img/twitter.png";
import svgwhatsapp from "../../img/whatsapp.png";
import svyoutube from "../../img/youtube.png";

function Footer() {
  return (
    <div className="h-1 mt-0 p-5">
      <header className="h-2">
        <h2>Nossa localização</h2>
      <div className="m-5">
      <iframe className="maps w-100 " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.781491039296!2d-34.90232188521962!3d-8.123716294151931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1fb1453f1815%3A0xec9f3c661d2eb8ac!2sEmpresarial%20Blue%20Tower!5e0!3m2!1spt-BR!2sbr!4v1682869933018!5m2!1spt-BR!2sbr" width="670"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
        <ul className="nav d-flex justify-content-around align-items-center">
          <div className="h-3">
            <p>© 2023 Company, Inc. Todos os direitos reservados.</p>
          </div>

          <div className="h-4 d-flex flex-row  ">
            
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" >
                <img src={svgfacebook} alt="logo" width="40" height="40" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" >
                <img src={svginstagram} alt="logo" width="40" height="40"   />
                <link ></link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" >
                <img src={svgtwitter} alt="logo" width="40" height="40" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" >
                <img src={svgwhatsapp} alt="logo" width="40" height="40" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" >
                <img src={svyoutube} alt="logo" width="40" height="40" />
              </a>
            </li>
          </div>
        </ul>
      </header>
    </div>
  );
}

export default Footer;
