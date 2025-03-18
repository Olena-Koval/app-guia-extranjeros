// src/components/Tramites.js
import React from "react";
import "./Tramites.css"; // Importa el archivo CSS

const Tramites = () => {
  return (
    <section>
      <h2>Trámites para Extranjeros en Zaragoza</h2>

      <h3>1. Empadronamiento en Zaragoza</h3>
      <p>
        El empadronamiento es el registro administrativo que acredita la
        residencia de una persona en un municipio en España. En Zaragoza, puedes
        realizar este trámite en la{" "}
        <strong>
          {" "}
          <a
            href="https://www.zaragoza.es/sede/servicio/equipamiento/325"
            target="_blank"
            rel="noopener noreferrer"
          >
            Oficina de Registro Plaza del Pilar
          </a>
          , o en las{" "}
          <a
            href="https://www.zaragoza.es/sede/servicio/equipamiento/category/90"
            target="_blank"
            rel="noopener noreferrer"
          >
            Juntas Municipales
          </a>
          , o{" "}
          <a
            href="https://www.zaragoza.es/sede/servicio/equipamiento/category/91"
            target="_blank"
            rel="noopener noreferrer"
          >
            Juntas Vecinales
          </a>
        </strong>
        .
      </p>
      <p>
        <strong>Documentación acreditativa de la IDENTIDAD:</strong>
      </p>
      <ul>
        <li>
          Autorización expresa para la realización del trámite ({" "}
          <a
            href="https://www.zaragoza.es/contenidos/tramites/impresos/Padron-M004.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Impreso M004
          </a>
          ), firmada por representante y representado.
        </li>
        <li>
          Mayores de edad: DNI o NIE o Pasaporte expedido por las autoridades
          del país de procedencia.
        </li>
        <li>
          Menores de edad (hasta los 14 años): se identificarán con el Libro de
          Familia, Certificado de nacimiento o DNI / NIE/ Pasaporte, si lo
          tuvieran.
        </li>
      </ul>
      <p>
        <strong>Documentación acreditativa del DOMICILIO:</strong>
      </p>
      <ul>
        <li>
          SI NO FIGURA nadie empadronado en la vivienda: 
          Título de propiedad, o
          Contrato de alquiler de vivienda o habitacion con el justificante de pago del mismo,o 
          Autorización original del propietario de la vivienda con la copia de su documento acreditativo de identidad y Título de propiedad o 
          Autorización original del arrendador de la vivienda, junto con la copia de su documento acreditativo de identidad y el Contrato de arrendamiento de la misma, acompañado del último recibo de
          alquiler, que deberá estar abonado.
        </li>
        <li>
          SI YA FIGURA alguien empadronado en la vivienda y reside en ella:
          Autorización original por escrito (Impreso M005) de la persona mayor de edad que figure empadronada en ese domicilio, siempre que aporte el título acreditativo de la posesión efectiva de la vivienda a nombre del autorizante (Título de propiedad / Contrato vigente de arrendamiento, acompañado del último recibo de alquiler, con justificación del pago del mismo / Contrato vigente de arrendamiento de habitación, acompañado del último recibo del alquiler de la misma, con justificación del pago.
        </li>
      </ul>
      <p>
        Se presentará original y copia de todos los documentos, excepto del
        documento de identidad del representado (en caso de actuar por
        representación) y del autorizante (en los casos en que se requiera
        autorización).
      </p>
      <p>
        <strong>Lugar de Presentación:</strong>
      </p>
      <p>
        <li>{" "}
          <a
            href="https://www.zaragoza.es/sede/servicio/equipamiento/325"
            target="_blank"
            rel="noopener noreferrer"
          >
            Oficina de Registro Plaza del Pilar
          </a> <strong>sin cita previa</strong>,</li>
        <li>{" "}
          <a
            href="https://www.zaragoza.es/sede/servicio/equipamiento/category/90"
            target="_blank"
            rel="noopener noreferrer"
          >
            Juntas Municipales
          </a> <strong>con cita previa</strong>,</li>
        <li>{" "}
          <a
            href="https://www.zaragoza.es/sede/servicio/equipamiento/category/91"
            target="_blank"
            rel="noopener noreferrer"
          >
            Juntas Vecinales
          </a> <strong>con cita previa</strong></li>
      </p>
      <p>
        <strong>Horario:</strong>
      </p>
      <ul>
        <li>Lunes a viernes de 8:30 a 14:00 h (excepto festivos).</li>
      </ul>
       

      <h3>2. Tarjeta de Identidad de Extranjero (TIE) en Zaragoza</h3>
      <p>
        La TIE es el documento que acredita la situación legal de residencia de
        los extranjeros en España. Debes solicitarla en la{" "}
        <strong>Comisaría Provincial de Zaragoza</strong> o en la{" "}
        <strong>Oficina de Extranjería</strong>.
      </p>
      <p>
        <strong>Documentación necesaria:</strong>
      </p>
      <ul>
        <li>Pasaporte o título de viaje en vigor.</li>
        <li>Formulario EX-17 debidamente cumplimentado.</li>
        <li>Justificante de pago de la tasa correspondiente.</li>
        <li>Fotografía reciente en color.</li>
        <li>Justificante de empadronamiento.</li>
        <li>Documentación que acredite la situación legal de residencia.</li>
      </ul>
      <p>
        Solicita una cita en la{" "}
        <a
          href="https://icp.administracionelectronica.gob.es/icpplus/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sede Electrónica de la Policía Nacional de la provincia correspondiente.</a></p>

      <h3>3. Tarjeta Sanitaria en Zaragoza</h3>
      <p>
        La tarjeta sanitaria permite acceder a la atención médica pública en
        Zaragoza. Para obtenerla, primero debes estar empadronado y solicitar el
        Número de Seguridad Social.
      </p>
      <p>
        <strong>Documentación necesaria:</strong>
      </p>
      <ul>
        <li>DNI / NIE / Pasaporte.</li>
        <li>Número de Seguridad Social.</li>
        <li>Certificado de empadronamiento.</li>

        <li>Documentación que acredite la situación laboral o de estudiante.</li>
      </ul>
      <p>Acude al {" "}<a href="https://www.aragon.es/tramites/oficinas-de-informacion" target="_blank" rel="noopener noreferrer">
          centro de salud</a> más cercano con estos documentos.</p>

      <h3>4. Permiso de Trabajo en Zaragoza</h3>
      <p>
        El permiso de trabajo es necesario para trabajar legalmente en España.
        Lo gestiona el empleador en el portal Empléate y, posteriormente, se
        solicita en la {" "}<a href="https://icp.administracionelectronica.gob.es/icpplus/index.html" target="_blank" rel="noopener noreferrer">Oficina de Extranjería en Zaragoza</a>.
      </p>
      <p>
        <strong>Documentación necesaria:</strong>
      </p>
      <ul>
        <li>Contrato de trabajo firmado.</li>
        <li>Oferta de empleo registrada.</li>
        <li>Documentación personal (pasaporte, NIE, etc.).</li>
        <li>Justificante de alta en la Seguridad Social.</li>
      </ul>
      <p>
        Para más información, visita el{" "}
        <a
          href="https://www.inclusion.gob.es/web/migraciones/w/autorizacion-inicial-de-residencia-temporal-y-trabajo-por-cuenta-ajena-hi-16-"
          target="_blank"
          rel="noopener noreferrer">Ministerio de Inclusión, Seguridad Social y Migraciones</a>.</p>

      <h3>5. DARDE en INAEM en Zaragoza</h3>
      <p>
        El DARDE es el documento que acredita tu situación como demandante de
        empleo en el Instituto Aragonés de Empleo (INAEM). Puedes registrarte en el{" "}<a href="https://inaem.aragon.es/quienes-somos" target="_blank" rel="noopener noreferrer">portal de INAEM</a> de Zaragoza o en las{" "}
        <a href="https://inaem.aragon.es/solicitud-cita-previa-oficinas-de-empleo" target="_blank" rel="noopener noreferrer">oficinas de INAEM</a>.</p>
      <p>
        <strong>Documentación necesaria:</strong>
      </p>
      <ul>
        <li>DNI o NIE.</li>
        <li>Número de la Seguridad Social.</li>
        <li>Justificante de empadronamiento.</li>
        <li>Currículum vitae actualizado.</li>
      </ul>
      <p>
        Renueva tu DARDE en línea en la{" "}
        <a
          href="https://inaem.aragon.es/renovacion-de-la-demanda"
          target="_blank"
          rel="noopener noreferrer"
        >
          Oficina Virtual del INAEM
        </a>
        .
      </p>

      <h3>6. Número de Seguridad Social en Zaragoza</h3>
      <p>
        El Número de Seguridad Social es necesario para acceder a servicios
        médicos y trabajar en España. Puedes solicitarlo a través de la{" "}
        <strong>Seguridad Social</strong> en Zaragoza.
      </p>
      <p>
        <strong>Documentación necesaria:</strong>
      </p>
      <ul>
        <li>DNI o NIE.</li>
        <li>Formulario de solicitud.</li>
        <li>Justificante de residencia o trabajo.</li>
      </ul>
      <p>
        Solicítalo en la{" "}
        <a
          href="https://sede.seg-social.gob.es/wps/portal/sede/sede/Inicio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sede Electrónica de la Seguridad Social
        </a>
        .
      </p>

      <h3>7. Vivienda, Habitaciones y Albergues en Zaragoza</h3>
      <p>
        Si necesitas alojamiento en Zaragoza, existen diversos programas de
        ayuda para acceder a vivienda. Puedes buscar alojamiento en portales web
        como{" "}
        <a
          href="https://www.idealista.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Idealista
        </a>
        ,{" "}
        <a
          href="https://www.fotocasa.es/es/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fotocasa
        </a>
        , o contactar con asociaciones locales que gestionan 
        {" "}
        <a
          href="https://www.zaragoza.es/sede/servicio/equipamiento/490"
          target="_blank"
          rel="noopener noreferrer"
        >
          albergue municipal 
        </a>
        , o {" "}
        <a
          href="https://www.zaragozavivienda.es/#gsc.tab=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          viviendas sociales
        </a>.
      </p>
      <p>
        Para obtener más información sobre programas de vivienda y alojamiento,
        consulta con tu trabajadora social en  
        {" "}
        <a
          href="https://www.zaragoza.es/sede/servicio/equipamiento/category/105"
          target="_blank"
          rel="noopener noreferrer"
        >Centros Municipales de Servicios Sociales
        </a>.
        
        
      </p>    
      </section>
  );
};

export default Tramites;
