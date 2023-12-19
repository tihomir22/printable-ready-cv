import logo from "./logo.svg";
import "./App.css";
import "./pillar-1.css";
import LocalizedStrings from "react-localization";
import * as es from "./es";
import * as en from "./en";

function App() {
  let strings = new LocalizedStrings({
    es: es.es,
    en: en.en,
  });

  strings.setLanguage("en");

  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900"
        rel="stylesheet"
      ></link>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
        integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
        crossOrigin="anonymous"
      />
      <article
        className="resume-wrapper text-center position-relative"
        id="toPrint"
      >
        <div className="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
          <header className="resume-header pt-4 pt-md-0">
            <div className="media flex-column flex-md-row">
              <img
                className="mr-3 img-fluid picture mx-auto"
                src="https://avatars.githubusercontent.com/u/20975446?s=460&u=b377dea4783687b4d7c50ab69065ae1fdaef5d4e&v=4"
                alt=""
              ></img>
              <div className="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
                <div className="primary-info">
                  <h1 className="name mt-0 mb-1 text-white text-uppercase text-uppercase">
                    Tihomir Stoychev Stoychev
                  </h1>
                  <div className="title mb-3">Senior Frontend Developer</div>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <a href="#">
                        <i
                          className="far fa-envelope fa-fw mr-2"
                          data-fa-transform="grow-3"
                        ></i>
                        tihomir_alcudia3@hotmail.com
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i
                          className="fas fa-mobile-alt fa-fw mr-2"
                          data-fa-transform="grow-6"
                        ></i>
                        +34603680594
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="secondary-info ml-md-auto mt-2">
                  <ul className="resume-social list-unstyled">
                    <li className="mb-3">
                      <a
                        href="https://www.linkedin.com/in/tihomir-stoychev-stoychev/"
                        target="_blank"
                      >
                        <span className="fa-container text-center mr-2">
                          <i className="fab fa-linkedin-in fa-fw"></i>
                        </span>
                        Tihomir Stoychev Stoychev
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="https://github.com/tihomir22" target="_blank">
                        <span className="fa-container text-center mr-2">
                          <i className="fab fa-github-alt fa-fw"></i>
                        </span>
                        github.com/tihomir22
                      </a>
                    </li>
                    <li className="mb-3">
                      <a
                        href="https://tihomirstoychevstoychev.com/"
                        target="_blank"
                      >
                        <span className="fa-container text-center mr-2">
                          <i className="fab fa-codepen fa-fw"></i>
                        </span>
                        codepen.io/tihomir22/
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa-container text-center mr-2">
                          <i className="fas fa-globe"></i>
                        </span>
                        tihomirstoychevstoychev.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
          <div className="resume-body p-5">
            <section className="resume-section summary-section mb-5">
              <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                {strings.objetivos_label}
              </h2>
              <div className="resume-section-content">
                <p className="mb-0">{strings.objetivos_descripcion}</p>
              </div>
            </section>
            <div className="row">
              <div className="col-lg-9">
                <section className="resume-section experience-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                    {strings.experencia_laboral_label}
                  </h2>
                  <div className="resume-section-content">
                    <div className="resume-timeline position-relative">
                      <article className="resume-timeline-item position-relative pb-5">
                        <div className="resume-timeline-item-header mb-2">
                          <div className="d-flex flex-column flex-md-row">
                            <h3 className="resume-position-title font-weight-bold mb-1">
                              {strings.experencia_laboral_title_job5}
                            </h3>
                            <div className="resume-company-name ml-auto">
                              INEO Innovative Technologies SA
                            </div>
                          </div>
                          <div className="resume-position-time">
                            {strings.experencia_laboral_date_job6}
                          </div>
                          <div className="resume-timeline-item-desc">
                            <p>{strings.experencia_laboral_desc_job6}</p>
                            <h4 className="resume-timeline-item-desc-heading font-weight-bold">
                              {strings.experencia_laboral_competencias_label}
                            </h4>
                            <p>
                              {
                                strings.experencia_laboral_competencias_desc_job6
                              }
                            </p>
                            <ul>
                              <li>
                                {strings.experencia_laboral_list_item_1_job6}
                              </li>
                              <li>
                                {strings.experencia_laboral_list_item_2_job6}
                              </li>
                              <li>
                                {strings.experencia_laboral_list_item_3_job6}
                              </li>
                              <li>
                                {strings.experencia_laboral_list_item_4_job6}
                              </li>
                            </ul>
                            <h4 className="resume-timeline-item-desc-heading font-weight-bold">
                              {strings.experencia_laboral_technologies_used}
                            </h4>
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <span className="badge badge-primary badge-pill">
                                  Angular
                                </span>
                              </li>
                              <li className="list-inline-item">
                                <span className="badge badge-primary badge-pill">
                                  Rxjx
                                </span>
                              </li>
                              <li className="list-inline-item">
                                <span className="badge badge-primary badge-pill">
                                  NgRx
                                </span>
                              </li>
                              <li className="list-inline-item">
                                <span className="badge badge-primary badge-pill">
                                  NgXs
                                </span>
                              </li>
                              <li className="list-inline-item">
                                <span className="badge badge-primary badge-pill">
                                  Rx Workspace
                                </span>
                              </li>
                              <li className="list-inline-item">
                                <span className="badge badge-primary badge-pill">
                                  HTML/SASS/JS
                                </span>
                              </li>
                              <li className="list-inline-item">
                                <span className="badge badge-primary badge-pill">
                                  Cypress
                                </span>
                              </li>
                              <li className="list-inline-item">
                                <span className="badge badge-primary badge-pill">
                                  Jest
                                </span>
                              </li>
                              <li className="list-inline-item">
                                <span className="badge badge-primary badge-pill">
                                  Docker/Docker-compose
                                </span>
                              </li>
                              <li className="list-inline-item">
                                <span className="badge badge-primary badge-pill">
                                  Spring Boot
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </article>

                      <article className="resume-timeline-item position-relative pb-5">
                        <div className="resume-timeline-item-header mb-2">
                          <div className="d-flex flex-column flex-md-row">
                            <h3 className="resume-position-title font-weight-bold mb-1">
                              {strings.experencia_laboral_title_job5}
                            </h3>
                            <div className="resume-company-name ml-auto">
                               Ecovium 
                            </div>
                          </div>
                          <div className="resume-position-time">
                            {strings.experencia_laboral_date_job5}
                          </div>
                        </div>
                        <div className="resume-timeline-item-desc">
                          <p>{strings.experencia_laboral_desc_job5}</p>
                          <h4 className="resume-timeline-item-desc-heading font-weight-bold">
                            {strings.experencia_laboral_competencias_label}
                          </h4>
                          <p>
                            {strings.experencia_laboral_competencias_desc_job5}
                          </p>
                          <ul>
                            <li>
                              {strings.experencia_laboral_list_item_1_job5}
                            </li>
                            <li>
                              {strings.experencia_laboral_list_item_2_job5}
                            </li>
                            <li>
                              {strings.experencia_laboral_list_item_3_job5}
                            </li>
                            <li>
                              {strings.experencia_laboral_list_item_4_job5}
                            </li>
                          </ul>
                          <h4 className="resume-timeline-item-desc-heading font-weight-bold">
                            {strings.experencia_laboral_technologies_used}
                          </h4>
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <span className="badge badge-primary badge-pill">
                                Angular
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span className="badge badge-primary badge-pill">
                                GraphQL
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span className="badge badge-primary badge-pill">
                                NgRx
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span className="badge badge-primary badge-pill">
                                Vanilla Javascript
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span className="badge badge-primary badge-pill">
                                Webpack
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span className="badge badge-primary badge-pill">
                                HTML/SASS
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span className="badge badge-primary badge-pill">
                                Docker/Docker-compose
                              </span>
                            </li>
                          </ul>
                        </div>
                      </article>

                      <article className="resume-timeline-item position-relative pb-5">
                        <div className="resume-timeline-item-header mb-2">
                          <div className="d-flex flex-column flex-md-row">
                            <h3 className="resume-position-title font-weight-bold mb-1">
                              {strings.experencia_laboral_title_job1}
                            </h3>
                            <div className="resume-company-name ml-auto">
                              PFS Group
                            </div>
                          </div>
                          <div className="resume-position-time">
                            {strings.experencia_laboral_date_job1}
                          </div>
                        </div>
                        <div className="resume-timeline-item-desc">
                          <p>{strings.experencia_laboral_desc_job1}</p>
                          <h4 className="resume-timeline-item-desc-heading font-weight-bold">
                            {strings.experencia_laboral_competencias_label}
                          </h4>
                          <p>
                            {strings.experencia_laboral_competencias_desc_job1}
                          </p>
                          <ul>
                            <li>
                              {strings.experencia_laboral_list_item_1_job1}
                            </li>
                            <li>
                              {strings.experencia_laboral_list_item_2_job1}
                            </li>
                            <li>
                              {strings.experencia_laboral_list_item_3_job1}
                            </li>
                            <li>
                              {strings.experencia_laboral_list_item_4_job1}
                            </li>
                          </ul>
                          <h4 className="resume-timeline-item-desc-heading font-weight-bold">
                            {strings.experencia_laboral_technologies_used}
                          </h4>
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <span className="badge badge-primary badge-pill">
                                Angular
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span className="badge badge-primary badge-pill">
                                NodeJs
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span className="badge badge-primary badge-pill">
                                Vanilla Javascript
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span className="badge badge-primary badge-pill">
                                Webpack
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span className="badge badge-primary badge-pill">
                                HTML/SASS
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span className="badge badge-primary badge-pill">
                                PostgresSQL
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span className="badge badge-primary badge-pill">
                                MongoDB
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span className="badge badge-primary badge-pill">
                                Java
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span className="badge badge-primary badge-pill">
                                Docker/Docker-compose
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span className="badge badge-primary badge-pill">
                                Jenkins
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span className="badge badge-primary badge-pill">
                                Loopback
                              </span>
                            </li>
                          </ul>
                        </div>
                      </article>

                      <article className="resume-timeline-item position-relative pb-5">
                        <div className="resume-timeline-item-header mb-2">
                          <div className="d-flex flex-column flex-md-row">
                            <h3 className="resume-position-title font-weight-bold mb-1">
                              {strings.experencia_laboral_title_job2}
                            </h3>
                            <div className="resume-company-name ml-auto">
                              Geinfor SL
                            </div>
                          </div>
                          <div className="resume-position-time">
                            {strings.experencia_laboral_date_job2}
                          </div>
                        </div>
                        <div className="resume-timeline-item-desc">
                          <p>{strings.experencia_laboral_desc_job2}</p>
                          <h4 className="resume-timeline-item-desc-heading font-weight-bold">
                            {strings.experencia_laboral_competencias_label}
                          </h4>
                          <p>
                            {strings.experencia_laboral_competencias_desc_job2}
                          </p>
                          <h4 className="resume-timeline-item-desc-heading font-weight-bold">
                            {strings.experencia_laboral_technologies_used}
                          </h4>
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <span className="badge badge-primary badge-pill">
                                Angular
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span className="badge badge-primary badge-pill">
                                NodeJs
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span className="badge badge-primary badge-pill">
                                Vanilla Javascript
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span className="badge badge-primary badge-pill">
                                HTML/SASS/Typescript
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span className="badge badge-primary badge-pill">
                                PostgresSQL
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span className="badge badge-primary badge-pill">
                                MongoDB
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span className="badge badge-primary badge-pill">
                                Java
                              </span>
                            </li>
                          </ul>
                        </div>
                      </article>
                    </div>
                  </div>
                </section>
              </div>
              <div className="col-lg-3">
                <section className="resume-section skills-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                    {strings.habilidades}
                  </h2>
                  <div className="resume-section-content">
                    <div className="resume-skill-item">
                      <h4 className="resume-skills-cat font-weight-bold">
                        Frontend
                      </h4>
                      <ul className="list-unstyled mb-4">
                        <li className="mb-2">
                          <div className="resume-skill-name">
                            Angular (+5 {strings.anyos})
                          </div>
                          <div className="progress resume-progress">
                            <div
                              className="progress-bar theme-progress-bar-dark"
                              role="progressbar"
                              style={{ width: "98%" }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </li>
                        <li className="mb-2">
                          <div className="resume-skill-name">
                            React (+1,5 {strings.anyo})
                          </div>
                          <div className="progress resume-progress">
                            <div
                              className="progress-bar theme-progress-bar-dark"
                              role="progressbar"
                              style={{ width: "74%" }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </li>
                        <li className="mb-2">
                          <div className="resume-skill-name">
                            JavaScript (+5 {strings.anyos})
                          </div>
                          <div className="progress resume-progress">
                            <div
                              className="progress-bar theme-progress-bar-dark"
                              role="progressbar"
                              style={{ width: "96%" }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </li>

                        <li className="mb-2">
                          <div className="resume-skill-name">
                            Ionic (+1,5 {strings.anyo})
                          </div>
                          <div className="progress resume-progress">
                            <div
                              className="progress-bar theme-progress-bar-dark"
                              role="progressbar"
                              style={{ width: "92%" }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </li>
                        <li className="mb-2">
                          <div className="resume-skill-name">
                            HTML/CSS/SASS/LESS (+3 {strings.anyos})
                          </div>
                          <div className="progress resume-progress">
                            <div
                              className="progress-bar theme-progress-bar-dark"
                              role="progressbar"
                              style={{ width: "96%" }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="resume-skill-item">
                      <h4 className="resume-skills-cat font-weight-bold">
                        Backend
                      </h4>
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <div className="resume-skill-name">
                            Python (+1 {strings.anyo})
                          </div>
                          <div className="progress resume-progress">
                            <div
                              className="progress-bar theme-progress-bar-dark"
                              role="progressbar"
                              style={{ width: "65%" }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </li>
                        <li className="mb-2">
                          <div className="resume-skill-name">
                            Node.Js + frameworks (+2 {strings.anyos}){" "}
                          </div>
                          <div className="progress resume-progress">
                            <div
                              className="progress-bar theme-progress-bar-dark"
                              role="progressbar"
                              style={{ width: "92%" }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </li>
                        <li className="mb-2">
                          <div className="resume-skill-name">
                            PHP (+6 {strings.meses})
                          </div>
                          <div className="progress resume-progress">
                            <div
                              className="progress-bar theme-progress-bar-dark"
                              role="progressbar"
                              style={{ width: "86%" }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </li>
                        <li className="mb-2">
                          <div className="resume-skill-name">
                            Java + frameworks (2 {strings.anyos})
                          </div>
                          <div className="progress resume-progress">
                            <div
                              className="progress-bar theme-progress-bar-dark"
                              role="progressbar"
                              style={{ width: "82%" }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="resume-skill-item">
                      <h4 className="resume-skills-cat font-weight-bold">
                        {strings.otros}
                      </h4>
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <span className="badge badge-light">
                            IA & Big Data
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span className="badge badge-light">Clean code</span>
                        </li>
                        <li className="list-inline-item">
                          <span className="badge badge-light">Blockchain</span>
                        </li>
                        <li className="list-inline-item">
                          <span className="badge badge-light">DevOps</span>
                        </li>
                        <li className="list-inline-item">
                          <span className="badge badge-light">
                            {strings.revision_codigo}
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span className="badge badge-light">Git</span>
                        </li>
                        <li className="list-inline-item">
                          <span className="badge badge-light">
                            {strings.testing_unitario}
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span className="badge badge-light">Cypress</span>
                        </li>
                        <li className="list-inline-item">
                          <span className="badge badge-light">
                            Unit testing
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span className="badge badge-light">CI/CD</span>
                        </li>
                        <li className="list-inline-item">
                          <span className="badge badge-light">
                            Native/Mobile
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span className="badge badge-light">WordPress</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
                <section className="resume-section education-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                    {strings.educacion}
                  </h2>
                  <div className="resume-section-content">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <div className="resume-degree font-weight-bold">
                          {strings.educacion_titulo_3}
                        </div>
                        <div className="resume-degree-org">
                          {strings.educacion_colegio_3}
                        </div>
                        <div className="resume-degree-time">2022 - 2023</div>
                      </li>
                      <li className="mb-2">
                        <div className="resume-degree font-weight-bold">
                          {strings.educacion_titulo_1}
                        </div>
                        <div className="resume-degree-org">
                          {strings.educacion_colegio_1}
                        </div>
                        <div className="resume-degree-time">2017 - 2019</div>
                      </li>
                      <li>
                        <div className="resume-degree font-weight-bold">
                          {strings.educacion_titulo_2}
                        </div>
                        <div className="resume-degree-org">
                          {strings.educacion_colegio_1}
                        </div>
                        <div className="resume-degree-time">2013-2015</div>
                      </li>
                    </ul>
                  </div>
                </section>
                <section className="resume-section reference-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                    {strings.premios}
                  </h2>
                  <div className="resume-section-content">
                    <ul className="list-unstyled resume-awards-list">
                      <li className="mb-2 pl-4 position-relative">
                        <i
                          className="resume-award-icon fas fa-trophy position-absolute"
                          data-fa-transform="shrink-2"
                        ></i>
                        <div className="resume-award-name">
                          {strings.titulo_premio_3}
                        </div>
                        <div className="resume-award-desc">
                          {strings.desc_premio_3}
                        </div>
                      </li>
                      <li className="mb-2 pl-4 position-relative">
                        <i
                          className="resume-award-icon fas fa-trophy position-absolute"
                          data-fa-transform="shrink-2"
                        ></i>
                        <div className="resume-award-name">
                          {strings.titulo_premio_1}
                        </div>
                        <div className="resume-award-desc">
                          {strings.desc_premio_1}
                        </div>
                      </li>
                      <li className="mb-0 pl-4 position-relative">
                        <i
                          className="resume-award-icon fas fa-trophy position-absolute"
                          data-fa-transform="shrink-2"
                        ></i>
                        <div className="resume-award-name">
                          {strings.titulo_premio_2}
                        </div>
                        <div className="resume-award-desc">
                          {strings.desc_premio_2}
                        </div>
                      </li>
                    </ul>
                  </div>
                </section>
                <section className="resume-section language-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                    {strings.idiomas}
                  </h2>
                  <div className="resume-section-content">
                    <ul className="list-unstyled resume-lang-list">
                      <li className="mb-2">
                        <span className="resume-lang-name font-weight-bold">
                          {strings.espanyol}
                        </span>{" "}
                        <small className="text-muted font-weight-normal">
                          ({strings.native})
                        </small>
                      </li>
                      <li className="mb-2 align-middle">
                        <span className="resume-lang-name font-weight-bold">
                          {strings.english}
                        </span>{" "}
                        <small className="text-muted font-weight-normal">
                          ({strings.professional} - B2)
                        </small>
                      </li>
                      <li className="mb-2 align-middle">
                        <span className="resume-lang-name font-weight-bold">
                          {strings.bulgarian}
                        </span>{" "}
                        <small className="text-muted font-weight-normal">
                          ({strings.native})
                        </small>
                      </li>
                      <li className="mb-2 align-middle">
                        <span className="resume-lang-name font-weight-bold">
                          {strings.german}
                        </span>{" "}
                        <small className="text-muted font-weight-normal">
                          ({strings.aone})
                        </small>
                      </li>
                    </ul>
                  </div>
                </section>
                <section className="resume-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                    {strings.proyectosPersonales}
                  </h2>
                  <ul className="list-unstyled resume-awards-list">
                    <li className="mb-2 pl-4 position-relative">
                      <i
                        className="resume-award-icon fas fa-link position-absolute"
                        data-fa-transform="shrink-2"
                      ></i>
                      <div className="resume-award-name">
                        <a href="https://orimgames.com/">{strings.orimgames}</a>
                      </div>
                      <div className="resume-award-desc">
                        {strings.orimgames_desc}
                      </div>
                    </li>
                    <li className="mb-2 pl-4 position-relative">
                      <i
                        className="resume-award-icon fas fa-link position-absolute"
                        data-fa-transform="shrink-2"
                      ></i>
                      <div className="resume-award-name">
                        <a href="https://mikosava.com/">{strings.mikosava}</a>
                      </div>
                      <div className="resume-award-desc">
                        {strings.mikosava_desc}
                      </div>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default App;
