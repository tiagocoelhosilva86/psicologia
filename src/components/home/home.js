import "../home/style.css";

import consultorio1 from "../../img/consultorio1.jpg";
import consultorio2 from "../../img/consultorio2.jpg";
import consultorio3 from "../../img/consultorio3.jpg";
import consultorio4 from "../../img/consultorio4.jpg";
import consultorio5 from "../../img/consultorio5.png";

function Home() {
  return (

    
      <div class="card w-25">
      <img src={consultorio5} alt="logo" className="d-block w-25" />
      <div class="card-body  ">
        <p class="card-text">
          Rafael Matias Psicólogo Prof Psico Mestr. Psicanálise
          Supervisão/atendimento CRP:02/19033 Te apresento uma psicanálise de
          forma leve, ética, e que fala dos nossos conflitos.
        </p>
      </div>
    </div>
    
    
    
    // <div id="carouselExampleCaptions" className="carousel slide w-25">
    //   <div className="carousel-indicators">
    //     <button
    //       type="button"
    //       data-bs-target="#carouselExampleCaptions"
    //       data-bs-slide-to="0"
    //       className="active"
    //       aria-current="true"
    //       aria-label="Slide 1"
    //     ></button>
    //     <button
    //       type="button"
    //       data-bs-target="#carouselExampleCaptions"
    //       data-bs-slide-to="1"
    //       aria-label="Slide 2"
    //     ></button>
    //     <button
    //       type="button"
    //       data-bs-target="#carouselExampleCaptions"
    //       data-bs-slide-to="2"
    //       aria-label="Slide 3"
    //     ></button>
    //     <button
    //       type="button"
    //       data-bs-target="#carouselExampleCaptions"
    //       data-bs-slide-to="3"
    //       aria-label="Slide 4"
    //     ></button>
    //   </div>
    //   <div className="carousel-inner">
    //     <div className="carousel-item active">
    //     <img src={consultorio1} alt="logo" className="d-block w-100" />
    //       <div className="carousel-caption d-none d-md-block">
    //         <h5>First slide label</h5>
    //         <p>Some representative placeholder content for the first slide.</p>
    //       </div>
    //     </div>
    //     <div className="carousel-item">
    //     <img src={consultorio2} alt="logo" className="d-block w-100" />
    //       <div className="carousel-caption d-none d-md-block">
    //         <h5>Second slide label</h5>
    //         <p>Some representative placeholder content for the second slide.</p>
    //       </div>
    //     </div>
    //     <div className="carousel-item">
    //     <img src={consultorio3} alt="logo" className="d-block w-100" />
    //       <div className="carousel-caption d-none d-md-block">
    //         <h5>Third slide label</h5>
    //         <p>Some representative placeholder content for the third slide.</p>
    //       </div>
    //     </div>
    //     <div className="carousel-item">
    //     <img src={consultorio4} alt="logo" className="d-block w-100" />
    //       <div className="carousel-caption d-none d-md-block">
    //         <h5>Third slide label</h5>
    //         <p>Some representative placeholder content for the third slide.</p>
    //       </div>
    //     </div>
    //   </div>
    //   <button
    //     className="carousel-control-prev"
    //     type="button"
    //     data-bs-target="#carouselExampleCaptions"
    //     data-bs-slide="prev"
    //   >
    //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Previous</span>
    //   </button>
    //   <button
    //     className="carousel-control-next"
    //     type="button"
    //     data-bs-target="#carouselExampleCaptions"
    //     data-bs-slide="next"
    //   >
    //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Next</span>
    //   </button>
    // </div>
  );
}

export default Home;
