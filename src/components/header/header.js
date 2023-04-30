import logopsicologia from "../../img/logo-psicologia.jpg";

import consultorio5 from "../../img/consultorio5.png";
import "../header/style.css";

function Header() {
  return (
    <div className="h1 row">
      <div className="logo mt-4">
        <img src={consultorio5} alt="logo" className="d-block w-25" />
        <div className="">
          <strong>Rafael Matias Psicólogo Prof Psico Mestr. Psicanálise</strong>
          <h2 className="sub-text">
            Supervisão/atendimento CRP:02/19033 Te apresento uma psicanálise de
            forma leve, ética, e que fala dos nossos conflitos.
          </h2>
        </div>
      </div>

      {/* <header className="h-2 d-flex justify-content-around"> */}

      {/* <ul className="nav">
          
        
          <li className="nav-item">
          
            <a className="nav-link active" aria-current="page" >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" >
              Sobre
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" >
              Serviços
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" >
              Contato
            </a>
          </li>
        </ul> */}

      {/* </header> */}
    </div>
  );
}

export default Header;
