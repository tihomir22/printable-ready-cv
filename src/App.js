import logo from "./logo.svg";
import "./App.css";
import "./pillar-1.css";
import LocalizedStrings from "react-localization";

function App() {
  let strings = new LocalizedStrings({
    es: {
      objetivos_label: "Objetivos",
      objetivos_descripcion: `Trabajador y responsable. Con objetivos tanto personales como profesionales claros. Enamorado de la programación y de la
      tecnologia y su influencia en las personas. El entorno dinamico del mundo de la programación ofrece desafios a los que me
      enfrento con total pasion. Entusiasta con la tecnologia blockchain y las dApps, junto al Grafo acíclico dirigido de Iota.
      Con ganas de aprender y fortalecerme profesionalmente.`,
      experencia_laboral_label: "Experencia laboral",
      experencia_laboral_competencias_label: "Competencias:",
      experencia_laboral_technologies_used: "Tecnologias usadas:",

      experencia_laboral_title_job1: "Ingeniero Full MEAN Stack",
      experencia_laboral_date_job1: "Agosto 2020 - Agosto 2021",
      experencia_laboral_desc_job1: `Si en la anterior empresa empecé mi aventura como desarrollador de software, en esta crecí y sigo creciendo
      exponencialmente. Soy el encargado de mantener varios de sus proyectos, y empezar otros desde 0. Desde la parte
      de front usando tecnologias como Angular,RxJS,ES6-Beyond JS, entre otras tantas junto a tecnologias del backend
      como NodeJs, con frameworks como Loopback3/4 y tambien soy el encargado del despliegue de contenedores con
      Docker + Docker Compose y demás tareas DevOps.`,

      experencia_laboral_competencias_desc_job1:
        "Durante mi instancia desarollé varias competencias en distintos proyectos tanto internos como externos.",
      experencia_laboral_list_item_1_job1:
        "Mantenimiento de proyectos legacy con frameworks antiguos.",
      experencia_laboral_list_item_2_job1:
        "Desarollo de proyectos totalmente nuevos de principio a fin.",
      experencia_laboral_list_item_3_job1:
        "Desarollo responsive y user friendly.",
      experencia_laboral_list_item_4_job1: "Control de versión y CI/CD.",

      experencia_laboral_title_job2: "Desarrollador web junior",
      experencia_laboral_date_job2: "Marzo 2019 - Agosto 2020",
      experencia_laboral_desc_job2: `El desarollo de un ERP es un trabajo laborioso, el aprendizaje esta asegurado y la progresión tanto profesional
      como personal esta asegurada. En Geinfor di mis primeros pasos como programador y más en concreto en el front,
      desarollando en las ultimas tecnologias como Angular 9, Node , Ts, Rxjs , Git, HTML5,SCSS y metodologias agiles
      con SCRUM.`,
      experencia_laboral_competencias_desc_job2: `Durante mi instancia en esta empresa aprendí de una forma contundente la correcta utilización con Angular y las
      mejores metodologias de trabajo, que posteriormente me han servido en posteriores puestos profesionales.`,

      experencia_laboral_title_job3: "Administrador y contable",
      experencia_laboral_date_job3: "2015-2017",
      experencia_laboral_desc_job3: `Realicé tareas de ofimatica, control de flujo de caja y contabilidad financiera, aparte de tramitación de
      documentación y reformas vehiculares.`,
      experencia_laboral_list_item_1_job3:
        "Gestión de documentación de vehiculos personales..",
      experencia_laboral_list_item_2_job3:
        "Uso de todas las herramientas de ofimatica disponibles..",
      experencia_laboral_list_item_3_job3:
        "Contabilidad de empresa y flujo de caja.",
      experencia_laboral_list_item_4_job3: "Gestión de reformas vehiculares",

      experencia_laboral_title_job4: "Senior frontend developer",
      experencia_laboral_date_job4: "Junio 2021 - Octubre 2021",
      experencia_laboral_desc_job4: `En este empresa comencé mi aventura como senior developer por primera vez, con más responsabilidades que nunca y además en un entorno mucho más dinamico y sobretodo internacional, tratando con clientes de todo el mundo con proyectos y ideas desafiantes!`,

      experencia_laboral_competencias_desc_job4:
        "Durante mi todavia corta instancia en Aratech me desarrollé como profesional en proyectos IOT,gestion de logistica y sobretodo proyectos internacionales con entorno bilingüe.",
      experencia_laboral_list_item_1_job4:
        "Creación desde 0 de proyectos de IOT y definición de estructura.",
      experencia_laboral_list_item_2_job4:
        "Formación y entrevista tecnica a nuevos compañeros de equipo.",
      experencia_laboral_list_item_3_job4:
        "Desarollo responsive y mobile first.",
      experencia_laboral_list_item_4_job4: "Control de versión y CI/CD.",

      experencia_laboral_title_job5: "Senior frontend developer",
      experencia_laboral_date_job5: "Octubre 2021 - Noviembre 2022",
      experencia_laboral_desc_job5: `Trabajé como desarrollador web principalmente enfocado al frontend realizando las siguientes tareas:`,

      experencia_laboral_competencias_desc_job5: `
      *Desarrollo de aplicaciones IOT desde 0 desarrollando PWA's con Angular +v11.
*Mantenimiento de aplicaciones ya creadas.
*Implementacion de comunicación en tiempo real con GraphQL.
*Desarrollo de sistemas de testeo de la aplicación con Cypress, Jest entre otros.
*Contacto y reuniones de negocio con el cliente en un entorno internacional.
*Mentoring a diferentes compañeros más junior.
*Entrevistas tecnicas a compañeros entrantes.
*Trabajo en un entorno multidisciplinar, multidioma y internacional.`,
      experencia_laboral_list_item_1_job5: "Angular, Angular PWA, Ionic",
      experencia_laboral_list_item_2_job5: "SCSS, CSS3, JS ECMA 5,6, React.",
      experencia_laboral_list_item_3_job5: "Spring Boot, ExpressJs + GraphQL.",
      experencia_laboral_list_item_4_job5: "PrimeNg, Crypress, Jest, Jasmine.",

      experencia_laboral_date_job6: "Noviembre 2022 - Presente",

      habilidades: "Habilidades",
      anyo: "año",
      anyos: "años",
      meses: "meses",
      otros: "Otros",
      revision_codigo: "Revisión de codigo",
      testing_unitario: "Testing unitario",
      educacion: "Educación",
      educacion_titulo_1: "DESAROLLO DE APLICACIONES MULTIPLATAFORMA (DAM)",
      educacion_colegio_1: "IES DR LLUIS SIMARRO - XATIVA",
      educacion_titulo_2: "ADMINISTRACIÓN DE EMPRESAS",
      educacion_colegio_2: "IES DR LLUIS SIMARRO - XATIVA",
      premios: "Premios",
      titulo_premio_1: "Mejor expediente",
      desc_premio_1: `Mejor expediente academico del año 2019-2020, obtenido por la nota media insuperable de 8,6 en el ciclo formativo
      superior (DAM).`,
      titulo_premio_2: "Artic Code Vault Contributor",
      desc_premio_2: "Emitido por Github.",

      idiomas: "Idiomas",
      espanyol: "Español",
      english: "Inglés",
      bulgarian: "Búlgaro",
      native: "Nativo",
      professional: "Profesional",
    },
    en: {
      objetivos_label: "Goals",
      objetivos_descripcion: `Hard-working and responsible. With clean personal and professional goals. In love with programming and
      technology and its influence on people. The dynamic environment of the world of programming offers challenges to those who
      I face with total passion. Enthusiastic about blockchain technology and dApps, along with Iota's directed acyclic graph.
      Eager to learn and strengthen myself professionally.`,

      experencia_laboral_label: "Work experience",
      experencia_laboral_competencias_label: "Competences:",
      experencia_laboral_technologies_used: "Technologies used:",

      experencia_laboral_title_job1: "Fullstack MEAN engineer",
      experencia_laboral_date_job1: "August 2020 - August 2021",
      experencia_laboral_desc_job1: `If in the previous company I started my adventure as a software developer, in this one I grew and continue to grow
      exponentially. I am in charge of maintaining several of your projects, and starting others from scratch.
      of front using technologies such as Angular, RxJS, ES6-Beyond JS, among many others along with backend technologies
      like NodeJs, with frameworks like Loopback3 / 4 and I am also in charge of the deployment of containers with
      Docker + Docker Compose and other DevOps tasks.`,

      experencia_laboral_competencias_desc_job1:
        "During my time, I developed several competencies in different internal and external projects.",
      experencia_laboral_list_item_1_job1:
        "Maintenance of legacy projects with old frameworks.",
      experencia_laboral_list_item_2_job1:
        "Development of totally new projects from start to end.",
      experencia_laboral_list_item_3_job1:
        "Responsive & user friendly development.",
      experencia_laboral_list_item_4_job1: "Version control and CI/CD.",

      experencia_laboral_title_job4: "Senior frontend developer",
      experencia_laboral_date_job4: "August 2021 - Present",
      experencia_laboral_desc_job4: `In this company I started my adventure as a senior developer for the first time, with more responsibilities than ever and also in a much more dynamic and above all international environment, dealing with clients from all over the world with challenging projects and ideas!`,

      experencia_laboral_competencias_desc_job4:
        "During my still short stay at Aratech I developed as a professional in IOT projects, logistics management and especially international projects with a bilingual environment.",
      experencia_laboral_list_item_1_job4:
        "Creation from scratch of IOT projects and definition of structure.",
      experencia_laboral_list_item_2_job4:
        "Training and technical interview with new teammates.",
      experencia_laboral_list_item_3_job4:
        "Responsive development and mobile first.",
      experencia_laboral_list_item_4_job4: "Version control and CI / CD.",

      experencia_laboral_title_job5: "Senior frontend developer",
      experencia_laboral_date_job5: "October 2021 - November 2022",
      experencia_laboral_desc_job5: `I worked as a web developer mainly focused on the frontend performing the following tasks:`,

      experencia_laboral_competencias_desc_job5: `
      Development of IOT applications from scratch developing PWA's with Angular +v11.Maintenance of applications already created.Implementation of communication in real time with GraphQL.
Development of application testing systems with Cypress, Jest among others.
Contact and business meetings with the client in an international environment.
Mentoring to different colleagues more junior.
Technical interviews with incoming colleagues.
I work in a multidisciplinary, multilingual and international environment.`,
      experencia_laboral_list_item_1_job5: "Angular, Angular PWA, Ionic",
      experencia_laboral_list_item_2_job5: "SCSS, CSS3, JS ECMA 5,6, React.",
      experencia_laboral_list_item_3_job5: "Spring Boot, ExpressJs + GraphQL.",
      experencia_laboral_list_item_4_job5: "PrimeNg, Crypress, Jest, Jasmine.",

      experencia_laboral_date_job6: "November 2022 - Present",

      experencia_laboral_title_job2: "Junior web developer",
      experencia_laboral_date_job2: "March 2019 - August 2020",
      experencia_laboral_desc_job2: `The development of an ERP is a laborious job, learning is assured as professional progression. In Geinfor I took my first steps as a programmer and more specifically in the front,
      developing in the latest technologies such as Angular 9, Node, Ts, Rxjs, Git, HTML5, SCSS and agile methodologies
      with SCRUM.`,
      experencia_laboral_competencias_desc_job2: `During my time in this company I learned in a forceful way the correct use with Angular and the
      better work methodologies, which have subsequently served me in later professional positions.`,

      experencia_laboral_title_job3: "Bussines accountantman & manager",
      experencia_laboral_date_job3: "2015-2017",
      experencia_laboral_desc_job3: `I performed office automation tasks, cash flow control and financial accounting, apart from processing
      documentation and vehicle reforms.`,
      experencia_laboral_list_item_1_job3:
        "Management of personal vehicle documentation.",
      experencia_laboral_list_item_2_job3: "Use of all available office tools.",
      experencia_laboral_list_item_3_job3: "Business accounting and cash flow.",
      experencia_laboral_list_item_4_job3: "Management of vehicle reforms.",

      habilidades: "Skills",
      anyo: "year",
      anyos: "years",
      meses: "months",
      otros: "Others",
      revision_codigo: "Code revision",
      testing_unitario: "Unitary testing",
      educacion: "Education",
      educacion_titulo_1: "Development of cross-platform applications (DAM)",
      educacion_colegio_1: "IES DR LLUIS SIMARRO - XATIVA",
      educacion_titulo_2: "Company administration & accounting",
      educacion_colegio_2: "IES DR LLUIS SIMARRO - XATIVA",
      premios: "Awards",
      titulo_premio_1: "Best academic expedient",
      desc_premio_1: `Best academic record of the year 2019-2020, obtained by an unsurpassed average grade of 8.6 in the training cycle
      higher (DAM).`,
      titulo_premio_2: "Artic Code Vault Contributor",
      desc_premio_2: "Emitted by Github.",

      idiomas: "Languages",
      espanyol: "Spanish",
      english: "English",
      bulgarian: "Bulgarian",
      native: "Native",
      professional: "Professional",
    },
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
                  <div className="title mb-3">Full Stack MEAN Developer</div>
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
                              Inneo Innovative Technologies SA
                            </div>
                          </div>
                          <div className="resume-position-time">
                            {strings.experencia_laboral_date_job6}
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
                              {strings.experencia_laboral_title_job4}
                            </h3>
                            <div className="resume-company-name ml-auto">
                              Aratech
                            </div>
                          </div>
                          <div className="resume-position-time">
                            {strings.experencia_laboral_date_job4}
                          </div>
                        </div>
                        <div className="resume-timeline-item-desc">
                          <p>{strings.experencia_laboral_desc_job4}</p>
                          <h4 className="resume-timeline-item-desc-heading font-weight-bold">
                            {strings.experencia_laboral_competencias_label}
                          </h4>
                          <p>
                            {strings.experencia_laboral_competencias_desc_job4}
                          </p>
                          <ul>
                            <li>
                              {strings.experencia_laboral_list_item_1_job4}
                            </li>
                            <li>
                              {strings.experencia_laboral_list_item_2_job4}
                            </li>
                            <li>
                              {strings.experencia_laboral_list_item_3_job4}
                            </li>
                            <li>
                              {strings.experencia_laboral_list_item_4_job4}
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

                      <article className="resume-timeline-item position-relative pb-5">
                        <div className="resume-timeline-item-header mb-2">
                          <div className="d-flex flex-column flex-md-row">
                            <h3 className="resume-position-title font-weight-bold mb-1">
                              {strings.experencia_laboral_title_job3}
                            </h3>
                            <div className="resume-company-name ml-auto">
                              ITV Xativa
                            </div>
                          </div>
                          <div className="resume-position-time">
                            {strings.experencia_laboral_date_job3}
                          </div>
                        </div>
                        <div className="resume-timeline-item-desc">
                          <p>{strings.experencia_laboral_desc_job3}</p>
                          <ul>
                            <li>
                              {strings.experencia_laboral_list_item_1_job3}
                            </li>
                            <li>
                              {strings.experencia_laboral_list_item_2_job3}
                            </li>
                            <li>
                              {strings.experencia_laboral_list_item_3_job3}
                            </li>
                            <li>
                              {strings.experencia_laboral_list_item_4_job3}
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
                            Angular (+2 {strings.anyos})
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
                            React (+1 {strings.anyo})
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
                            JavaScript (+3 {strings.anyos})
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
                            ReactJs/Ionic (+1 {strings.anyo})
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
                          <span className="badge badge-light">Wireframing</span>
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
                      <li>
                        <span className="resume-lang-name font-weight-bold">
                          {strings.bulgarian}
                        </span>{" "}
                        <small className="text-muted font-weight-normal">
                          ({strings.native})
                        </small>
                      </li>
                    </ul>
                  </div>
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
