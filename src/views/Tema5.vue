<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Almacenamiento temporal
    
    br
    .BGM01.px-md-5.px-4.mt-4mb-5
      .row.justify-content-end.align-items-center
        .col-lg-5.col-10.img-03.z-01
          img(src='@/assets/curso/tema5/img01.png' alt="Sustancias químicas peligrosas y residuos peligrosos")
        .col-lg-6.z-02
          .BGR24.p-4
            p.mb-0 De acuerdo con el Ministerio de Ambiente, Vivienda y Desarrollo Territorial (MAVDT) y el consejo colombiano de seguridad (CCS), (s.f.), en la guía ambiental de almacenamiento y transporte por carretera de sustancias químicas peligrosas y residuos peligrosos, describe que, durante el almacenamiento de sustancias químicas y residuos peligrosos es necesario tomar medidas de prevención y control para evitar daños a la salud de los trabajadores e impactos negativos al ambiente. En el caso particular de los residuos peligrosos, su tiempo de almacenamiento debería corresponder al mínimo posible, solo como un paso previo a su tratamiento y disposición final responsable.
        .col-lg-1.d-lg-flex.d-none
    
    separador
    #t_5_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 5.1 Responsabilidades del prestador del servicio de almacenamiento
    
    p.mb-5 Dentro de las responsabilidades del prestador del servicio de almacenamiento es guardar debidamente y de manera temporal los residuos peligrosos vigilando que se encuentren debidamente etiquetados y que corresponda a lo que se tiene almacenado, de otra parte es importante resaltar algunas de las funciones más importantes que tiene este prestador de servicio y son:

    .row.justify-content-center.align-items-center
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta(style="background-color: #ED8E1E;")
              span 1
            | Asegurarse de que todas las sustancias peligrosas almacenadas estén debidamente etiquetadas, se recomienda utilizar el sistema globalmente armonizado y la identificación dispuesta por las Naciones Unidas dadas por la Norma Técnica Colombiana (NTC) 1692.
          li 
            .lista-ol--cuadro__vineta(style="background-color: #ED8E1E;")
              span 2
            | Verificar que las hojas de seguridad han sido proporcionadas de acuerdo con las normas correspondientes.
          li 
            .lista-ol--cuadro__vineta(style="background-color: #ED8E1E;")
              span 3
            | Mantener un registro de las sustancias o residuos que tiene almacenado.
          li 
            .lista-ol--cuadro__vineta(style="background-color: #ED8E1E;")
              span 4
            | Asegurarse que los trabajadores no estén expuestos a sustancias o residuos peligrosos.
          li 
            .lista-ol--cuadro__vineta(style="background-color: #ED8E1E;")
              span 5
            | Informar a los trabajadores sobre los peligros y riesgos asociados.
          li 
            .lista-ol--cuadro__vineta(style="background-color: #ED8E1E;")
              span 6
            | Utilizar hojas de seguridad.
          li 
            .lista-ol--cuadro__vineta(style="background-color: #ED8E1E;")
              span 7
            | Mantener capacitados a los trabajadores.
          li 
            .lista-ol--cuadro__vineta(style="background-color: #ED8E1E;")
              span 8
            | Conocer y cumplir todas las leyes.
          li 
            .lista-ol--cuadro__vineta(style="background-color: #ED8E1E;")
              span 9
            | Mantener los equipos y los elementos de protección personal.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema5/img02.svg' alt="Almacenamiento")

    separador
    #t_5_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 5.2 Actores involucrados en el almacenamiento

    p.mb-5 Durante el almacenamiento de estos elementos, es necesario tomar las medidas de prevención respectivas con el fin de evitar daños a la salud de estos actores al igual que al medio ambiente. Dentro de los actores involucrados en el proceso de almacenamiento se pueden describir dos partes que son:

    .row.justify-content-center.mb-5
      .col-lg-6.col-md-8.col-sm-10.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema5/img03.png' alt="Administrador de la bodega de almacenamiento")
          .tarjetas-up_card.tarjeta.color-acento-contenido.p-xl-4.p-lg-3.p-4
            .title.d-flex.align-items-center.justify-content-center.text-white.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.text-center.mb-0 Administrador de la bodega de almacenamiento
            p.text-white.text-center.mb-0 Encargado del control y seguimiento del almacenamiento, es quien asigna labores, diseña y mantiene los planes de almacenamiento y hace un proceso de vigilancia.
      .col-lg-6.col-md-8.col-sm-10.mb-xl-0.mb-4(data-aos="fade-left")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema5/img04.png' alt="Operarios del sitio de almacenamiento")
          .tarjetas-up_card.tarjeta.color-primario.p-xl-4.p-lg-3.p-4
            .title.d-flex.align-items-center.justify-content-center.text-white.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.text-center.mb-0 Operarios del sitio de almacenamiento
            p.text-white.text-center.mb-0 Recibir los residuos conforme a las capacitaciones recibidas, entender el manejo de las etiquetas de los residuos, conocer la ubicación de las hojas de seguridad, entre otras. (MAVDT y CCS, (s.f.)).

    separador
    #t_5_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 5.3 Condiciones del sitio de almacenamiento

    .BGM01.px-md-5.px-4.mt-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema5/img05.svg')
        .col-lg-8(data-aos="fade-left")
          p.mb-0 De acuerdo con el Ministerio de Ambiente, Vivienda y Desarrollo Territorial (MAVDT) y el consejo colombiano de seguridad (CCS), (s.f.), en la guía ambiental de almacenamiento y transporte por carretera de sustancias químicas peligrosas y residuos peligrosos, un factor importante para disminuir los impactos ambientales en un sitio de almacenamiento es contar con un lugar adecuado que reúna todas las condiciones necesarias para esta actividad. Para los nuevos sitios destinados al almacenamiento de sustancias y residuos peligrosos se recomienda que dentro de la planeación se contemplen los requisitos aquí descritos y para aquellas que ya están en funcionamiento lo aconsejable es realizar todas las medidas posibles para alcanzar estos requerimientos.
    
    .BGM01.px-md-5.px-4.mt-4.mb-5
      .row.justify-content-center
        .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
          p.mb-5 Dentro de las variables que deben ser consideradas se relacionan las siguientes:
          ul.lista-ul--color.lista-ul--separador
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              p.mb-0 #[strong Ubicación:] los más alejado de fuentes de agua y de centros poblados que facilite el ingreso de los vehículos de transporte.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              p.mb-0 #[strong Diseño:] debe permitir la separación de los residuos de acuerdo con sus características, se sugiere que tenga muros cortafuegos o áreas separadas, dentro del diseño se puede establecer algunas características fundamentales:
            li(style="margin-bottom: 2px")
              i.fas.fa-check-double(style="color: #4DB1F0;")
              p.mb-0 #[strong Muros o separación de áreas:] separación de las áreas de almacenaje según los tipos de residuos y del área administrativa.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-double(style="color: #4DB1F0;")
              p.mb-0 #[strong Puertas:] definir las puertas dependiendo del área, si es posible establecer puerta de emergencia, el tamaño de las puertas debe permitir el acceso de facilidad y debe permanecer libre de toda obstrucción.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-double(style="color: #4DB1F0;")
              p.mb-0 #[strong Piso:] debe ser impermeable, liso, sin ser resbaloso y libre de grietas.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-double(style="color: #4DB1F0;")
              p.mb-0 #[strong Drenaje:] debe tener drenajes internos, si es para almacenamiento de residuos peligrosos el drenaje no debe ser conectado al alcantarillado sin pasar por un proceso de depuración.
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema5/img06.png' alt="Áreas de almacenaje")
    
    .BGM01.px-md-5.px-4.mt-4.mb-5
      .row.justify-content-center
        .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema5/img07.png' alt="Almacen")
        .col-lg-6(data-aos="fade-left")
          ul.lista-ul--color.lista-ul--separador
            li(style="margin-bottom: 2px")
              i.fas.fa-check-double(style="color: #4DB1F0;")
              p.mb-0 #[strong Techos:] con un diseño que no permita el ingreso de agua lluvia, pero que permita la salida del humo y el calor en caso de incendio.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-double(style="color: #4DB1F0;")
              p.mb-0 #[strong Ventilación:] tener una óptima ventilación natural o artificial.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-double(style="color: #4DB1F0;")
              p.mb-0 #[strong Equipos eléctricos e iluminación:] en lo posible usar iluminación artificial, en caso de que sea necesario usar elementos de iluminación para escoger estos elementos es necesario que atiendan los requisitos del código eléctrico colombiano (CEC).
            li(style="margin-bottom: 2px")
              i.fas.fa-check-double(style="color: #4DB1F0;")
              p.mb-0 #[strong Protección contra relámpagos:] si almacena materiales inflamables debe tener protección contra relámpagos. 
            li(style="margin-bottom: 2px")
              i.fas.fa-check-double(style="color: #4DB1F0;")
              p.mb-0 #[strong Señalización:] todos los elementos de señalización necesarios para identificar los residuos como los colores, etiquetas, rótulos. 
            li(style="margin-bottom: 2px")
              i.fas.fa-check-double(style="color: #4DB1F0;")
              p.mb-0 #[strong Sistemas de control de incendios:] poner todos los elementos necesarios para prevención y control de incendios. 

    .BGR04.p-4.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/img01.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Almacenamiento de sustancias 2 químicas y residuos peligrosos
              p.mb-0 Para ampliar la información sobre los elementos a considerar para el diseño de los almacenamientos, consultar la guía “Almacenamiento de sustancias químicas y residuos peligrosos”, que se encuentra en el material complementario.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="http://documentacion.ideam.gov.co/openbiblio/bvirtual/018903/Links/T-cap2.pdf" target="_blank")
                span Ir a página
                i.fas.fa-link

</template>

<script>
export default {
  name: 'Tema5',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
