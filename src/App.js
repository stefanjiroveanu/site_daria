import * as React from "react";
import background from "./background-daria.png";
import emailjs from "@emailjs/browser";

function Header({ home, me, services, contact }) {
  const handleScrollToHome = () => {
    home.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToMe = () => {
    me.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToServices = () => {
    services.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = () => {
    contact.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="flex flex-row gap-5 justify-center items-center pt-[1%] pb-[2%] text-base leading-6 bg-white rounded-b-xl z-10 w-[50%] phone:w-full phone:text-xs">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1926c03ba1be701f8800cff75b09531e7a639a324f4fd012ea01e6d4905795f?apiKey=0880e1bd5662460ca1ff94309a0b814d&"
        alt=""
        className="shrink-0 my-auto aspect-square w-[30px] relative left-3"
      />
      <div className="text-xl mr-[5%] phone:justify-center phone:w-0 phone:h-0 phone:invisible phone:mr-0">
        DARIA GRIGORE
      </div>
      <button onClick={handleScrollToHome}>Home</button>
      <button onClick={handleScrollToMe}>Despre Mine</button>
      <button onClick={handleScrollToServices}>Servicii</button>
      <button onClick={handleScrollToContact}>Contact</button>
      <button onClick={handleScrollToContact} className="justify-center self-stretch px-4 py-2.5 text-white bg-amber-400 rounded-lg  phone:p-1 phone:relative phone:right-1">
        Programeaza o intalnire
      </button>
    </header>
  );
}

const HeroSection = React.forwardRef((props, ref) => {
  const { license } = props;

  const goToLicense = () => {
    license.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="flex relative w-[80%] bg-white rounded-[35px] mt-[5%] phone:flex-col"
    >
      <div className="flex flex-col px-16 py-20 w-[60%] text-base font-semibold text-black phone:w-full phone:px-4 phone:justify-center phone:items-center">
        <h1 className="mt-4 mr-6 text-6xl italic leading-[68.8px] phone:text-2xl phone:text-center phone:justify-center phone:items-center phone:m-0">
          Daria Grigore
        </h1>
        <p className="self-start mt-5 text-lg tracking-tight leading-10 phone:text-sm phone:text-center">
          Psiholog clinician si consilier de dezvoltare personala
        </p>
        <div className="phone:flex phone:flex-col phone:ml-0 phone:w-[100%] phone:z-10 hidden">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/297e154458a8ef1d1284ad7b1e063345d7da4388dee1914615dbb72d9375c278?apiKey=0880e1bd5662460ca1ff94309a0b814d&"
            alt=""
            className="phone:w-full phone:aspect-[0.89]"
          />
        </div>
        <p className="mt-5 mr-6 tracking-tight leading-6 phone:m-0 phone:p-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          ultrices, sem a euismod sagittis, nisl turpis pulvinar orci, et
          lobortis quam sem sit amet leo. Sed eu laoreet mi. Quisque semper
          purus velit, sit amet accumsan augue condimentum a. Suspendisse id
          neque malesuada, accumsan neque nec, dictum dui. Duis nisi erat,
          bibendum ac convallis ac, mollis vitae purus. Proin vel lorem eu risus
          sollicitudin bibendum quis ultrices lacus. Phasellus in massa diam.
        </p>
        <button
          onClick={goToLicense}
          className="flex gap-2 justify-center mt-5 max-w-full px-12 py-5 tracking-tighter text-center bg-orange-400 text-white leading-[186%] rounded-md max-md:px-5 w-[221px]"
        >
          <span className="grow">Afla mai multe</span>
        </button>
      </div>
      <div className="flex flex-col ml-0 w-[100%] max-md:ml-0 max-md:w-full z-10 phone:hidden">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/297e154458a8ef1d1284ad7b1e063345d7da4388dee1914615dbb72d9375c278?apiKey=0880e1bd5662460ca1ff94309a0b814d&"
          alt=""
          className="w-full aspect-[0.89] max-md:max-w-full"
        />
      </div>
    </section>
  );
});

function FirstColumns() {
  const stressItems = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fa77a9b0cc2cf132223f758a74d638d121a3570a8e896529be1bb8574c287d3f?apiKey=0880e1bd5662460ca1ff94309a0b814d&",
      alt: "Stima de sine scazuta",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d4e07c351ac3094e2547ac35cc39eee4f65aa0c3688e9b0ef07f2706e9750a4b?apiKey=0880e1bd5662460ca1ff94309a0b814d&",
      alt: "Probleme relationale",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bfe2e9f5c98c9cf537d8dd7cf842d6c246288059c7c4ba72e2cb9835c86be30d?apiKey=0880e1bd5662460ca1ff94309a0b814d&",
      alt: "Stres",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8eefe0ad447ff0b9cfde20dd3a7eabc437ff6242679124cde739224a49b2f113?apiKey=0880e1bd5662460ca1ff94309a0b814d&",
      alt: "Lipsa somnului",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/71cb95a4d4cdfc3917600aa527494b9494254fc0369eba9972d4f846f18f43a2?apiKey=0880e1bd5662460ca1ff94309a0b814d&",
      alt: "Dificultate in stabilirea si indeplinirea obiectivelor",
    },
  ];

  return (
    <div className="flex flex-row mt-24 max-w-full w-full relative items-center justify-center px-[20%] phone:flex-col phone:px-0 gap-10">
      <section className="flex flex-col w-[100%] max-md:w-full">
        <div className="flex flex-col grow px-16 py-14 w-full bg-white rounded-3xl shadow-xl max-md:px-5 max-md:max-w-full">
          <h1 className="mr-9 text-3xl font-bold tracking-tighter leading-10 text-black max-md:mr-2.5 max-md:max-w-full">
            Cu mare caldura si deschidere iti urez bun venit!
          </h1>
          <p className="mt-5 mr-9 text-lg tracking-tight leading-7 text-black max-md:mr-2.5 max-md:max-w-full">
            Daca te confrunti cu: <br />
          </p>
          <div className="flex gap-3 justify-between self-start mt-5 max-md:flex-wrap">
            <div className="flex flex-col items-center">
              {stressItems.map((item, index) => (
                <img
                  key={index}
                  loading="lazy"
                  src={item.src}
                  alt={item.alt}
                  className={`mt-${index === 0 ? 0 : 3.5} aspect-${
                    index === 0 || index === 3 || index === 4
                      ? "square"
                      : "[1.05]"
                  } w-[22px]`}
                />
              ))}
            </div>
            <p className="text-lg tracking-tight leading-9 text-black max-md:max-w-full">
              {stressItems.map((item) => (
                <React.Fragment key={item.alt}>
                  {item.alt} <br />
                </React.Fragment>
              ))}
            </p>
          </div>
          <p className="mt-5 mr-9 text-2xl font-bold tracking-tighter leading-10 text-black max-md:mr-2.5 max-md:max-w-full">
            Atunci ai ajuns in locul potrivit.
          </p>
        </div>
      </section>
      <aside className="flex flex-col w-[100%] max-md:ml-0 max-md:w-full phone:ml-0 phone:w-[85%] relative right-20 bottom-5">
        <div className="flex flex-col px-16 py-16 mt-12 w-full text-white rounded-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full bg-gradient-to-tr from-orange-300 to-orange-500">
          <p className="text-3xl font-medium tracking-tighter leading-10 max-md:mr-1.5">
            Contacteaza-ma pentru a programa o prima sedinta gratis fizic sau
            online.
          </p>
          <div className="flex gap-5 mt-12 text-2xl tracking-tighter leading-10 max-md:mt-10 max-md:mr-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5c9966366caf83ae7832c5933990e7f2bd099b4abe66be90b588be591af6d05?apiKey=0880e1bd5662460ca1ff94309a0b814d&"
              alt=""
              className="shrink-0 aspect-square w-[78px]"
            />
            <div className="flex flex-col py-2.5">
              <p className="font-extrabold">LET'S CHAT</p>
              <p href="tel:+40773771441" className="mt-5 font-medium">+40773771441</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

const Description = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex gap-5 flex-row items-center justify-center w-full px-[10%] phone:px-0 phone:text-center phone:mt-8 phone:mb-10"
    >
      <div className="flex flex-col self-stretch px-5 my-auto text-black max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-row phone:gap-5">
          <h1 className="text-4xl italic font-bold tracking-tighter leading-[56px] max-md:max-w-full px-[10%] phone:px-0 phone:justify-start phone:text-3xl phone:w-full">
            Te pot ajuta să depășești temerile și obstacolele din viața ta.
          </h1>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b02c41da2f8dfb79d5956972a3e8e87a04f941cd6655e53adfa71fc86c7d2be?apiKey=0880e1bd5662460ca1ff94309a0b814d&"
            alt="Daria Grigore profile"
            className="hidden phone:flex w-[45%]"
          />
        </div>
        <p className="mt-10 text-base tracking-tight leading-6 max-md:max-w-full px-[10%]">
          Sunt Daria Grigore, psiholog clinician si consilier pentru dezvoltare
          personala.
          <br />
          <br />
          Am inceput sa cochetez cu domeniul psihologiei inca din primul an de
          liceu cand, din proprie initiativa si cu foarte mare curiozitate, m-am
          inscris la un curs de dezvoltare personala pentru adolescenti. Dupa
          acea experienta de cunoastere si dezvoltare proprie, pentru mine
          psihologia a fost singura optiune.
          <br />
          Dupa terminarea licelui am ales sa urmez o facultate de psihologie in
          Marea Britanie (City, University of London) pentru a invata intr-un
          mediu dinamic, practic, si in care toate informatiile erau actualizate
          la zi. Cu bagajul de cunostinte acumulate despre complexitatea mintii
          umane m-am intors in Romania pentru a darui mai departe cele invatate.
          <br />
          <br />
          Am decis sa urmez acesta cariera nu doar din pasiunea pentru a
          descoperi cat mai multe despre mintea umana, ci si pentru ca lucrand
          la dezvoltarea mea persoanala am realizat cat este de important sa ai
          un asemenea sprijin alaturi atunci cand viata te copleseste.
        </p>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b02c41da2f8dfb79d5956972a3e8e87a04f941cd6655e53adfa71fc86c7d2be?apiKey=0880e1bd5662460ca1ff94309a0b814d&"
        alt="Daria Grigore profile"
        className="w-[30%] phone:hidden"
      />
    </div>
  );
});

const MethodsSection = () => (
  <section className="overflow-hidden relative flex-col justify-center px-12 py-10 text-base tracking-tight leading-6 text-center text-white min-h-[463px] max-md:px-5 max-md:max-w-full">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3f5e2f555f51ec3335fd58b545a6f87fea983d8726b7e275a754954a01afcf5?apiKey=0880e1bd5662460ca1ff94309a0b814d&"
      alt=""
      className="absolute z-0 inset-0 size-full"
    />
    <p className="z-10 text-white relative top-32 italic font-semibold">
      Metodele mele înglobează aspecte mentale, corporale si spirituale pentru
      atingerea stării de bine ale fiecărui client. Clientul pleacă din terapie
      cu instrumente aplicabile in viața de zi cu zi pentru a se vindeca singur.
    </p>
  </section>
);

const QualificationItem = ({ imageSrc, title, subtitle }) => (
  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
    <div className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
      <img
        loading="lazy"
        src={imageSrc}
        alt=""
        className="shrink-0 max-w-full rounded-full border-2 border-white border-dashed aspect-square stroke-[2px] w-[100px] max-md:mt-8"
      />
    </div>
    <div className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full">
      <div className="self-stretch my-auto text-xl font-bold tracking-tighter leading-9 text-white max-md:mt-10 max-md:max-w-full">
        {title}
        {subtitle && (
          <>
            <br />
            <span className={subtitle.startsWith("📍") ? "" : "font-medium"}>
              {subtitle}
            </span>
          </>
        )}
      </div>
    </div>
  </div>
);

const qualifications = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5a7bf8174121a9fe3226bf1c227c9847a34d05a2f9bd2358db2df64d02da52be?apiKey=0880e1bd5662460ca1ff94309a0b814d&",
    title: "Licenta in Psihologie",
    subtitle: "📍 City, University of London",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/50c511f4cd32b3fd4145d08090a1cf31e1b1bac5fa95c31b815b16dd074b8e7d?apiKey=0880e1bd5662460ca1ff94309a0b814d&",
    title: "Atestat Psiholog Clinician",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/45afb2a8757ad340d450d3a98721e0a02868846a8317fafe95d85bd0c24e951c?apiKey=0880e1bd5662460ca1ff94309a0b814d&",
    title: "Consilier NLP",
    subtitle: "(Neuro-Programare Lingvistica)",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/75891d311d37fe1fe1b88d48068842feb4ace2c406c99ee561b795a79523c6bc?apiKey=0880e1bd5662460ca1ff94309a0b814d&",
    title: "Psihoterapeut Integrativ in formare",
    subtitle: "📍 Asociatia de Psihoterapie Integrativa",
  },
];

const SecondColumn = React.forwardRef((props, ref) => {
  const { contact } = props;

  const goToContact = () => {
    contact.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      ref={ref}
      className="flex overflow-hidden relative flex-col pt-20 pb-1.5 w-full bg-red-400 phone:pt-10"
    >
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/945bd9e94dbb65f04917c58eed0061d70111ef365010ee311abbf2eaf10bf050?apiKey=0880e1bd5662460ca1ff94309a0b814d&"
        alt=""
        className="inset-0 absolute size-full w-full"
      />
      <div className="flex relative justify-center items-center px-16 py-20 mt-2 w-full rounded-[55px] max-md:px-5 max-md:mt-10 max-md:max-w-full phone:px-2 phone:py-0">
        <div className="flex flex-col mb-9 w-full max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 phone:flex-col">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full phone:w-full">
                <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full phone:w-full">
                  <h2 className="text-5xl italic font-bold tracking-tighter text-white leading-[49.14px] max-md:max-w-full phone:w-full text-center">
                    De ce sa ma alegi pe mine?
                  </h2>
                  <div className="mt-8 max-md:max-w-full phone:hidden">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[83%] max-md:ml-0 max-md:w-full">
                        <MethodsSection />
                      </div>
                      <div className="flex flex-col ml-5 w-[17%] max-md:ml-0 max-md:w-full">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/df121ba09a114d126b7fe7fb8c667882c503045272c52c79a8467cf1a153ed2e?apiKey=0880e1bd5662460ca1ff94309a0b814d&"
                          alt=""
                          className="grow shrink-0 absolute mt-96 max-w-full aspect-[1.01] w-[103px] max-md:mt-10"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full phone:w-full phone:px-2">
                <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
                  {qualifications.map((qualification, index) => (
                    <div
                      key={index}
                      className={`${
                        index > 0 ? "mt-12" : ""
                      } max-md:mt-10 max-md:max-w-full`}
                    >
                      <QualificationItem {...qualification} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={goToContact}
            className="flex justify-center items-center px-16 py-8 mt-10 text-3xl tracking-tighter text-center text-white rounded-2xl shadow-xl leading-[57.66px] max-md:px-5 max-md:max-w-full bg-[#ff718e] phone:justify-center phone:items-center phone:p-2"
          >
            <div className="flex gap-5 px-px ml-28 phone:ml-0">
              <div className="flex-auto phone:justify-center phone:text-center">
                Programeaza o intalnire
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
});

const ServiceCard = ({ imageSrc, title }) => (
  <div className="flex flex-col grow justify-center text-sm tracking-tight leading-9 text-black max-md:mt-8 phone:w-full phone:h-full">
    <div className="flex flex-col justify-center bg-white rounded-3xl shadow-xl phone:w-full">
      <div className="overflow-clip relative flex-col items-center px-7 pt-52 pb-20 w-full aspect-[1.44] max-md:px-5 max-md:pt-10 text-center justify-center phone:w-full">
        <img
          loading="lazy"
          src={imageSrc}
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <div className="text-sm font-semibold italic pt-3 phone:pt-1">
          {title}
        </div>
      </div>
    </div>
  </div>
);

const services = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/254e0f396b04fb835275ee6d86bd49cf45157f8eceeebe2195b8018700c3188c?apiKey=0880e1bd5662460ca1ff94309a0b814d&",
    title: "Consiliere individuala adulti",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b6b98e14ca88cfb459dbbe5a4c79ff8a63ce81e35b8b5a1247a70539f245e1c7?apiKey=0880e1bd5662460ca1ff94309a0b814d&",
    title: "Consiliere individuala adolescenti",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/07d0e68718beb06d056fb3c16d414dcbfc66f5189b96581d806239685d4a9664?apiKey=0880e1bd5662460ca1ff94309a0b814d&",
    title: "Consiliere individuala copii",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b131f4cb564cdb2cf8de64f45278b34bb7bf4d235dfc85e6510538fabc0c7303?apiKey=0880e1bd5662460ca1ff94309a0b814d&",
    title: "Consiliere de familie",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/491e75c3d33985b17ca997ba62f362564fd43c4d960a0d11c733ca981c689f37?apiKey=0880e1bd5662460ca1ff94309a0b814d&",
    title: (
      <>
        Evaluari clinice (evaluare psihologica nivel, inteligenta I.Q., evaluare
        cognitiva, avize psihologice etc.)
      </>
    ),
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d9f6d0e7584b7c8b8528b33d90cda044485a19a4f009cae0be01428e28d65a23?apiKey=0880e1bd5662460ca1ff94309a0b814d&",
    title: "Grupuri de dezvoltare personala",
  },
];

const ThirdColumn = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="flex overflow-hidden relative z-10 flex-col justify-center items-center px-16 py-20 mt-0 w-full min-h-[1281px] max-md:px-5 max-md:max-w-full"
    >
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/804c48686d8ecff7369bd3001f3c1777162550ec04b436c73fb1864bd88e6481?apiKey=0880e1bd5662460ca1ff94309a0b814d&"
        alt="Background"
        className="object-cover absolute inset-0 size-full phone:w-[100%] phone:h-[40%]"
      />
      <div className="flex relative flex-col mt-10 mb-40 w-full max-w-[1140px] max-md:mb-10 max-md:max-w-full">
        <h1 className="self-center text-6xl italic font-bold tracking-tighter text-center bg-clip-text leading-[69.12px] max-md:max-w-full max-md:text-4xl">
          Relatia este motorul schimbarii
        </h1>
        <p className="self-center mt-7 text-2xl tracking-tighter leading-10 text-center text-white max-md:max-w-full">
          Fiecare conexiune reprezinta un pas important in calatoria de
          dezvoltare personala. Consider ca fiecare persoana este unica si
          valoroasa, si de aceea cu totii meritam <br />o astfel de calatorie
          care sa rezulte intr-o viata mai implinita si mai autentica.
        </p>
        <div className="mt-28 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 phone:flex-col">
            {services.slice(0, 3).map((service) => (
              <div
                key={service.title}
                className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full phone:w-full"
              >
                <ServiceCard
                  imageSrc={service.imageSrc}
                  title={service.title}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-7 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 phone:flex-col">
            {services.slice(3).map((service) => (
              <div
                key={service.title}
                className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full phone:w-full"
              >
                <ServiceCard
                  imageSrc={service.imageSrc}
                  title={service.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

const FourthColumn = React.forwardRef((props, ref) => {
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_njcj871", "template_q6wdw4e", form.current, {
        publicKey: "LO_CxeeNoi3wj_ySl",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div
      ref={ref}
      className="z-10 self-center mt-0 w-full max-w-[1270px] max-md:max-w-full"
    >
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 phone:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full phone:w-full">
          <div className="flex flex-col self-stretch px-5 my-auto text-base tracking-tight leading-6 text-black max-md:mt-10 max-md:max-w-full">
            <div className="self-center text-6xl italic font-bold tracking-tighter leading-[69.12px] max-md:ml-1.5 max-md:text-4xl">
              Contact
            </div>
            <div className="mt-12 leading-6 max-md:mt-10 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              ultrices, sem a euismod sagittis, nisl turpis pulvinar orci, et
              lobortis quam sem sit amet leo.
            </div>
            <div className="flex gap-5 mt-16 max-md:flex-wrap max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f305fe515f314e8cf1eecc2e522f939fc36504a10415c60229ac8a4cc80b096?apiKey=0880e1bd5662460ca1ff94309a0b814d&"
                className="shrink-0 w-10 aspect-square"
              />
              <div className="flex-auto my-auto">
                Strada Ion Maiorescu 4, Craiova
              </div>
            </div>
            <div className="flex gap-5 justify-between self-start mt-8 whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ba4b57b9d2b2e1d6f0ef31aec5c8ae4ed7b28259d83b6ac262b8347cf3f5bfe?apiKey=0880e1bd5662460ca1ff94309a0b814d&"
                className="shrink-0 w-10 aspect-square"
              />
              <div href="tel:+40773771441" className="my-auto">0773771441</div>
            </div>
            <div className="flex gap-5 self-start mt-8 whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/92c2b7ec849cb6fda2d8570f83f18b95f4cd929c5be918ec7f55b546dff352f0?apiKey=0880e1bd5662460ca1ff94309a0b814d&"
                className="shrink-0 w-10 aspect-square"
              />
              <div className="flex-auto my-auto underline">
                dariagrigore01@gmail.com
              </div>
            </div>
            <div className="flex gap-5 mt-8 max-md:flex-wrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/db711467748720c641d7d7ff7df829d4f0689a1283b2c4241713551d24ec79f9?apiKey=0880e1bd5662460ca1ff94309a0b814d&"
                className="shrink-0 w-10 aspect-square"
              />
              <div className="flex-auto my-auto">
                Luni-Vineri: 9-19, Sambata si Duminica: inchis
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full phone:w-full phone:m-0 phone:p-2">
          <form
            ref={form}
            className="flex gap-5 flex-col grow justify-center p-12 w-full text-base tracking-tight leading-7 bg-white rounded-xl border border-solid shadow-sm border-stone-300 max-md:px-5 max-md:mt-10 max-md:max-w-full"
          >
            <input
              name="from_name" // Name for the sender's first name
              placeholder="Prenume"
              className="justify-center items-start px-5 py-3.5 bg-white rounded-xl border border-amber-400 border-solid"
            ></input>
            <input
              name="from_last_name" // Name for the sender's last name
              placeholder="Nume de familie"
              className="justify-center items-start px-5 py-3.5 bg-white rounded-xl border border-amber-400 border-solid"
            ></input>
            <input
              name="phone" // Name for the phone number
              placeholder="Nr. de telefon"
              className="justify-center items-start px-5 py-3.5 bg-white rounded-xl border border-amber-400 border-solid"
            ></input>
            <input
              name="email" // Name for the email address
              placeholder="Adresa de email"
              className="justify-center items-start px-5 py-3.5 bg-white rounded-xl border border-amber-400 border-solid"
            ></input>
            <textarea
              name="previous_therapy" // Name for previous therapy experiences
              placeholder="Ai mai fost la alte sedinte de terapie?"
              className="justify-center items-start px-5 py-10 bg-white rounded-xl border border-amber-400 border-solid"
            ></textarea>
            <textarea
              name="message" // Name for the main message
              placeholder="Scrie un mesaj"
              className="justify-center items-start px-5 py-10 bg-white rounded-xl border border-amber-400 border-solid"
            ></textarea>
            <button
              onClick={sendEmail}
              className="justify-center items-start px-5 py-3.5 bg-amber-400 text-white rounded-xl border border-amber-400 border-solid"
            >
              Trimite mesajul
            </button>
          </form>
        </div>
      </div>
    </div>
  );
});

function Footer() {
  return (
    <div className="flex justify-center items-center py-20 mt-32 w-full bg-black ">
      <div className="flex flex-col mt-5 mb-2 w-full max-w-[1313px] max-md:max-w-full">
        <div className="flex gap-5 justify-between text-white max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <div className="flex flex-col self-start phone:w-[50%]">
            <div className="flex gap-3.5 text-4xl leading-[60px] phone:flex-col phone:items-center phone text-center phone:px-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6dad2d32b7bb982f222ba4fa353b2ebc439f907a1ce23516ae8bf396fa762ff8?apiKey=0880e1bd5662460ca1ff94309a0b814d&"
                className="shrink-0 my-auto aspect-[0.98] w-[53px]"
              />
              <div>DARIA GRIGORE</div>
            </div>
            <div className="mt-10 text-base tracking-tight leading-6 phone:flex phone:text-center phone:px-4">
              Metodele mele înglobează aspecte mentale, corporale si spirituale
              pentru atingerea stării de bine ale fiecărui client. Clientul
              pleacă din terapie cu instrumente aplicabile in viața de zi cu zi
              pentru a se vindeca singur.
            </div>
          </div>
          <div className="flex flex-col text-lg tracking-tight leading-7 phone:w-[50%] phone:justify-center phone:text-center phone:text-sm ">
            <div className="flex gap-5 phone:flex-col">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c544cddf4056834211259df62a53075295206346d3f66787e7203b685e4f48e8?apiKey=0880e1bd5662460ca1ff94309a0b814d&"
                className="shrink-0 w-11 aspect-square phone:items-center phone:justify-center phone:self-center"
              />
              <div className="flex-auto my-auto">
                Strada Ion Maiorescu 4, Craiova
              </div>
            </div>
            <div className="flex gap-5 mt-9 whitespace-nowrap phone:flex-col">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/073e2103902c16e5ef531586a273437df5343208b3d271d4108f7c7882b723f5?apiKey=0880e1bd5662460ca1ff94309a0b814d&"
                className="shrink-0 w-11 aspect-square phone:self-center phone:justify-center phone:items-center"
              />
              <div href="tel:+40773771441" className="flex-auto my-auto">0773771441</div>
            </div>
            <div className="flex gap-5 mt-9 whitespace-nowrap phone:flex-col">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/143ffac0a171c3598b69fed028ba78e48781ea13ba14bc104221a5bb1493c383?apiKey=0880e1bd5662460ca1ff94309a0b814d&"
                className="shrink-0 w-11 aspect-square phone:self-center phone:justify-center phone:items-center"
              />
              <div className="flex-auto my-auto underline">
                dariagrigore01@gmail.com
              </div>
            </div>
            <div className="flex gap-5 text-lg tracking-tight leading-7 text-white max-md:flex-wrap mt-9 phone:flex-col">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0515b333a8f7f2c74940c7ce2fbbc9ae1d57724cd161cbe3c4a8adc1a3441a4?apiKey=0880e1bd5662460ca1ff94309a0b814d&"
                className="shrink-0 w-11 aspect-square phone:self-center phone:justify-center phone:items-center"
              />
              <div className="flex-auto my-auto phone:text-sm">
                Luni-Vineri: 9-19, Sambata si Duminica: inchis
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-between items-start mt-9 w-full max-md:flex-wrap max-md:max-w-full phone:justify-center">
          <div className="flex gap-5 justify-between mt-3.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/78ba47b7041159a7ac77b19b0e20978cfac68bfcc27c5276c4c9316772623918?apiKey=0880e1bd5662460ca1ff94309a0b814d&"
              className="shrink-0 w-8 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fef6ec8407409ab73863c4abc6b7fedc33d8c436d50943be9161714b034a62a0?apiKey=0880e1bd5662460ca1ff94309a0b814d&"
              className="shrink-0 w-8 aspect-square"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const home = React.useRef(null);
  const me = React.useRef(null);
  const services = React.useRef(null);
  const contact = React.useRef(null);
  const license = React.useRef(null);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* <img
        src={background}
        alt="back"
        className="max-w-full h-[30%] absolute z-0 w-full "
      /> */}
      <Header home={home} me={me} services={services} contact={contact} />
      <div className="flex flex-col gap-3 items-center justify-center mt-5 w-full sm:mt-2">
        <HeroSection license={license} ref={home} />
        <FirstColumns />
        <Description ref={me} />
        <SecondColumn contact={contact} ref={license} />
        <ThirdColumn ref={services} />
        <FourthColumn ref={contact} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
