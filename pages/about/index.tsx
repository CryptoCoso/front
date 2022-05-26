import { Alert, Box } from "@mui/material";
import { FC } from "react";

const About: FC = () => {
  return (
    <div>
      <Alert severity="warning">
        Please check the documentation for a more updated version
      </Alert>
      <Box sx={{ margin: "25px" }}>
        <h1>About</h1>
        <h2>URL Repositorio: </h2>
        <p>https://github.com/CryptoCoso</p>
        <h2>Cómo agregar un desarrollador nuevo: </h2>
        <p>
          En el readme están las instrucciones de instalación y pasos para
          correrlo.
        </p>
        <h2>Caso de uso principal: </h2>
        <p>
          Nuestro proyecto se trata de una aplicación descentralizada de
          alquileres. El caso de uso principal consiste en que primero el dueño
          de alguna propiedad mintea un NFT de la misma llenando un formulario
          con los datos requeridos. Cualquier persona que desee alquilar tiene
          acceso a ver todas las propiedades disponibles con su precio y elegir
          una para alquilar. <br /> En el momento que paga, lo que ocurre es que
          transfiere los tokens necesarios al contrato y quedan “congelados”
          allí hasta que pase el período de 30 días. Además, se le transfiere el
          NFT y queda como su dueño. <br />
          Al cumplirse los 30 días quién alquila el NFT indica desde la web que
          terminó su tiempo o se va y de esa forma se le re-transfiere el NFT al
          dueño original y al dueño se le “liberan” los fondos del alquiler
          ganado.
        </p>
        <h2>Visión, objetivos y roadmap del producto post-hackathon:</h2>{" "}
        <p>
          En primer lugar, se debe aclarar que dado el corto tiempo con la gran
          cantidad de conceptos que se tuvo que aprender, la programación no fue
          la más prolija. Así que seguro se debería mejorar en la calidad de
          código. Algo más a considerar para que esto pudiese ser un proyecto
          real, es pensar bien las restricciones de cada función, todos los
          aspectos de seguridad y profundizar en los casos alternativos.
          <br /> Nos centramos únicamente en un PoC considerando que gran parte
          del equipo no tenía experiencia, sobre todo con el manejo de NFTs.
        </p>
        <h2>Nuestra visión: </h2>
        <p>
          Así como el caso blockchain permitió bancarizar a los nos
          bancarizados, nosotros le vamos a dar seguridad y garantía a quien no
          puede acceder a una pero también brindarle confianza a dueños de
          propiedades, dónde ninguno de los actores pueden cambiar las reglas o
          interpretarlas.
          <b>Fair rents for the people around the world</b> Nuestro objetivo a
          futuro es facilitar el trámite de quien alquila, eliminando todas los
          pasos intermedios. Lo más importante es contestar a la pregunta: ¿Qué
          problema queremos resolver? Nuestro objetivo es resolver el problema
          de la desconfianza mutua en un contrato de alquiler, tanto para quien
          da el dinero como para quien lo recibe. Buscamos que su experiencia de
          usuario implique facilidad, tranquilidad, seguridad y confianza.
          Gracias a la transparencia que provee la blockchain, nos imaginamos
          que el escribano del futuro podría ser quien audite estos contratos de
          alquiler y brinde tranquilidad y seguridad a ambas partes. La idea no
          es que todo el mundo comprenda estos contratos, sino que exista
          alguien que pueda asegurar la validez de los mismos.
          <br /> Una funcionalidad que no nos dio el tiempo a implementar es en
          vez de que el dueño solo pueda retirar dinero el último día del mes,
          retirando el 100% de los fondos, pueda retirar el día que guste todo
          lo acumulado hasta el momento. <br />
          También en un caso ideal hubiésemos manejado la transición del NFT de
          otra forma. Una vez pasado el tiempo, el NFT debería volver
          automáticamente al dueño original. Eso podría lograrse con un Oráculo
          pero eso implicaría un Spike de investigación acerca de ello. En el
          grupo se estuvo discutiendo la posibilidad de un hosting
          descentralizado. Sin dudas sería algo a investigar a futuro. De
          momento se encontró la opción de flick que hacer deploy con IPFS,
          dando lo mejor de ambos mundos. <br />
          Es importante aclarar que elegimos el caso del alquiler de casas para
          la Hackaton pero esto sería extensible al alquiler de cualquier otro
          bien tanto virtual cómo tangible.
          <br /> Nuestro proyecto tiene un pie en el futuro en el sentido que si
          bien hoy se pensaría que no podría hacerse legalmente por falta de
          regularización, existe una oportunidad en la utilización de “monedas
          virtuales” , término legal utilizado en la normativa uruguaya , Ley N°
          16.696 (“Carta Orgánica del BCU” e interpretación smart contracts,
          cómo firma digital ) y en la legislación de Estonia para la “Estonia
          cryptocurrency Law”, para taxation y acceso a la normativa europea
          para empresas blockchain ) Por tanto existe un gris interpretativo
          legal.
          <br /> Utilizando stable coins cómo forma de pago, en el futuro uno
          podría tener un NFT de la escritura de una casa o la libreta de
          propiedad del auto, y todo eso formaría parte de lo que se podría
          alquilar, abriendo así el mercado inmobiliario y resolviendo el
          problema de acceso a las garantías para muchas personas
        </p>
        <h2>“Hemos empezado el diálogo con a CIU” </h2>
        <p>
          {" "}
          ( Cámara Inmobiliaria Uruguaya) y la ANRTCI, (Asociación Nacional de
          Rematadores), Tasadores y corredores inmobiliario) dado el gran
          interés por el mismo entendemos que existe un mercado para este
          producto, y posibles inversores para el mismo así cómo asesoría legal
          para compatibilizar la ésta tecnología con la legislación actual.{" "}
          <br />
          Si bien hicimos el contrato para NFT por la consigna del Hackaton, se
          podría hacer para tokens, permitiendo la fraccionalización de los
          mismos para tener varios dueños de casas, terrenos o cualquier otro
          bien. Creando nuevos flujos de capital y oportunidades de crecimiento
          e inversión tanto para capitales internacionales cómo capital retail,
          siendo amparados en la ley de Lavado de activos para el posicionando a
          Uruguay como una crypto nation (Concepto derivado de la startup nation
          de Israel). <br />
          Queríamos mencionar que los objetivos de los integrantes a corto
          plazo, es decir el tiempo de duración del Hackaton, realmente era
          aprender y conocer gente con más experiencia y conocimiento en el
          tema, y la realidad es que fue completamente cumplido. Todos
          aprendimos entre nosotros y de los organizadores y pudimos
          “empaparnos” un poco más de esta tecnología tan nueva e innovadora.
        </p>
        <h2>Post hackathon </h2>
        <p>
          Mejorar el producto, estando en coordinación con la CIU y otros
          actores legales para entender las necesidades del mercado uruguayo y
          viabilidad, pasar del PoC al MVP y buscar rondas de financiamiento
          tanto público como privado para crear una startup alrededor de éste
          proyecto y <b>poder llevar a cabo nuestra visión</b>.
        </p>
      </Box>
    </div>
  );
};

export default About;
