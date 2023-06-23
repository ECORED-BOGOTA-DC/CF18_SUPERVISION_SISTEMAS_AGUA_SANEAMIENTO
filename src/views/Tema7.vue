<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Aprovechamiento de residuos sólidos peligrosos

    .BG03.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-1.col-2(data-aos="fade-right")
          img(src='@/assets/curso/tema7/img01.svg' alt="Desechos peligrosos")
        .col(data-aos="fade-left")
          p.mb-0 De acuerdo con el informe nacional de generación y manejo de residuos o desechos peligrosos Colombia 2014-2015 del Instituto De hidrología, meteorología y estudios Ambientales (IDEAM, 2016), el aprovechamiento de los residuos peligrosos se entiende como toda actividad orientada a recuperar el valor remanente o el poder calorífico de los materiales que componen el residuo.
    
    .BGM01.px-md-5.px-4.mt-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          p Siguiendo las recomendaciones dadas por el área metropolitana del Valle de Aburrá (2011), en la guía para gestión de residuos peligrosos manifiestan que para seleccionar el tipo de aprovechamiento adecuado se debe realizar un estudio previo a cada residuo teniendo en cuenta características químicas como la familia, el estado de la materia, la cantidad, la frecuencia de generación, el transporte del material, el valor del servicio entre otros aspectos, de este modo se puede tomar la decisión si el residuo es susceptible de aprovechamiento o si definitivamente ya no tiene uso y ha llegado al fin de su ciclo de vida, momento en el cual deberá gestionarse hasta la disposición final.
          p.mb-0 Existen diferentes técnicas de aprovechamiento para los residuos peligrosos y se clasifican de acuerdo con el principio de desactivación de la peligrosidad así:
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema7/img02.png')

    ul.lista-ul--color.mb-5(data-aos="fade-right")
      li
        i.fas.fa-star-half-alt.fa-spin(style="color: #115089")
        .h4.mb-0 Tratamientos físicos
    
    p.mb-5 Consisten principalmente en la eliminación del contenido de agua del residuo sólido peligroso con el fin de que esta no se filtre al suelo, entre las diferentes técnicas  que se utilizan para este tipo de tratamiento se encuentran:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.BGR06.p-4
        .row.justify-content-center.mb-3
          .col-lg-8.col-6
            img(src='@/assets/curso/tema7/img03.svg' alt='Sedimentación')
        .h3.text-center Sedimentación
        p.text-center Se asientan los sólidos por acción de la gravedad para separarlos del líquido.
      .tarjeta.BGR06.p-4
        .row.justify-content-center.mb-3
          .col-lg-8.col-6
            img(src='@/assets/curso/tema7/img04.svg' alt='Centrifugación')
        .h3.text-center Centrifugación
        p.text-center Utiliza el movimiento circular para generar fuerza centrífuga que permite la remoción del agua.
      .tarjeta.BGR06.p-4
        .row.justify-content-center.mb-3
          .col-lg-8.col-6
            img(src='@/assets/curso/tema7/img05.svg' alt='Autoclave')
        .h3.text-center Autoclave
        p.text-center Esta técnica además de la evaporación del agua mediante calor y presión esteriliza los residuos minimizando su riesgo biológico.
      .tarjeta.BGR06.p-4
        .row.justify-content-center.mb-3
          .col-lg-8.col-6
            img(src='@/assets/curso/tema7/img06.svg' alt='Absorción')
        .h3.text-center Absorción
        p.text-center Es la adhesión de sustancias contaminantes gaseosas sobre superficies líquidas para que se disuelva.

    ul.lista-ul--color.mb-5(data-aos="fade-right")
      li
        i.fas.fa-star-half-alt.fa-spin(style="color: #115089")
        .h4.mb-0 Tratamientos químicos

    .BGM01.px-md-5.px-4.mt-4.mb-5
      p El principio de este tipo de tratamiento es la adición de un componente químico para la eliminación de la característica de peligrosidad del residuo, entre las técnicas principales se encuentran:
      .row.justify-content-center.mb-5
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema7/img07.svg' alt="Adición de un componente químico")
        .col-lg-8(data-aos="fade-left")
          ul.lista-ul--color.lista-ul--separador
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              p.mb-0 #[strong Oxidación y reducción química:] adición de componentes ricos en oxígeno para la transformación de componentes peligrosos.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              p.mb-0 #[strong Neutralización:] adición de sustancias ácidas o básicas de acuerdo con las características de peligrosidad para la neutralización del pH.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              p.mb-0 #[strong Precipitación:] uso de componentes químicos para la solidificación y posterior sedimentación de componentes peligrosos.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              p.mb-0 #[strong Decloración:] eliminación química del cloro en los residuos.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              p.mb-0 #[strong Hidrólisis:] ruptura de componentes peligrosos en soluciones acuosas basándose en la adición de agua.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              p.mb-0 #[strong Electrólisis:] ruptura de componentes peligrosos a partir de descargas eléctricas.

    ul.lista-ul--color.mb-5(data-aos="fade-right")
      li
        i.fas.fa-star-half-alt.fa-spin(style="color: #115089")
        .h4.mb-0 Tratamientos fisicoquímicos
    
    .BGM01.px-md-5.px-4.mt-4.mb-5
      p.mb-5 Este tipo de métodos emplea tanto sustancias químicas como procesos físicos para poder eliminar las características de peligrosidad en los residuos, entre algunos métodos se encuentran:
      .row.justify-content-center.align-items-center
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          ul.lista-ul--color.lista-ul--separador
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              p.mb-0 #[strong Extracción de solventes:] por el principio de polaridad algunas sustancias que tienen características de peligrosidad se pueden migrar a fases acuosas o grasosas para ser separadas posteriormente por decantación.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              p.mb-0 #[strong Floculación y coagulación:] se agregan sustancias químicas con el fin de eliminar las cargas electrostáticas que tienen algunos componentes peligrosos, de este modo se forman flocs que luego de una sedimentación se retiran de las fases acuosas.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              p.mb-0 #[strong Stripping:] a través de corrientes de gas se separan componentes de peligrosidad con características volátiles.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              p.mb-0 #[strong Lixiviación:] se permite la separación de componentes líquidos solubles en su parte sólida.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              p.mb-0 #[strong Ozonólisis:] fraccionamiento de moléculas peligrosas mediante el uso de ozono. 
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema7/img08.png' alt="Sustancias químicas")

    ul.lista-ul--color.mb-5(data-aos="fade-right")
      li
        i.fas.fa-star-half-alt.fa-spin(style="color: #115089")
        .h4.mb-0 Tratamientos biológicos
    
    .BGM01.px-md-5.px-4.mt-4.mb-5
      p En este tipo de tratamiento se utilizan diferentes microorganismos, hongos, plantas y otros seres vivos en función de la reducción de peligrosidad de los residuos para su posterior uso, algunas de las técnicas más comunes son:
      .row.justify-content-center.mb-5
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema7/img09.svg' alt="Seres vivos en función de la reducción de peligrosidad")
        .col-lg-8(data-aos="fade-left")
          ul.lista-ul--color.lista-ul--separador
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              p.mb-0 #[strong Lodos activados:] se realiza la biodegradación de especies orgánicas con lodo bioactivado en fase acuosa.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              p.mb-0 #[strong Biológico giratorio:] un filtro rico en material bacteriano se pone en contacto con los residuos para eliminar las especies químicas orgánicas acuosas.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              p.mb-0 #[strong Lagunas aireadas:] en este tratamiento se eliminan los componentes químicos peligrosos por oxidación en las cavidades profundas de la laguna.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              p.mb-0 #[strong Digestión anaerobia:] degradación de componentes a través de acción de microorganismos en ausencia de oxígeno.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              p.mb-0 #[strong Biorremediación:] eliminación de componentes peligrosos a través de mezclas de microorganismos y enzimas.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              p.mb-0 #[strong Landfarming:] los materiales contaminados son esparcidos en una superficie o en el suelo y a través de métodos biológicos se eliminan los contaminantes peligrosos de los residuos.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              p.mb-0 #[strong Fitorremediación:] a través de algunas especies vegetales se extraen contaminantes inorgánicos de los suelos para acumularlos en el tejido vegetal. 

    ul.lista-ul--color.mb-5(data-aos="fade-right")
      li
        i.fas.fa-star-half-alt.fa-spin(style="color: #115089")
        .h4.mb-0 Técnicas de solidificación y encapsulamiento
    
    p.mb-5 Con este tipo de técnicas se busca acumular de forma inorgánica los componentes de peligrosidad de los residuos, entre las técnicas más utilizadas se encuentran:

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema7/img10.png' alt="Forma inorgánica los componentes de peligrosidad de los residuos")
      .col-lg-8(data-aos="fade-left")
        TabsA.color-acento-contenido
          .tarjeta.BGR04.p-4(titulo="Solidificación")
            p.mb-0 A partir de los residuos tratados se forma una masa monolítica incrementando su dureza y disminuyendo la compresibilidad y permeabilidad.
          .tarjeta.BGR04.p-4(titulo="Estabilización")
            p.mb-0 A través de esta técnica se busca reducir el área superficial de los RESPEL para reducir la transferencia de masa y la solubilidad de los contaminantes.
          .tarjeta.BGR04.p-4(titulo="Fijación inorgánica")
            p.mb-0 Los residuos sólidos peligrosos se mezclan con materiales como el cemento o la cal.
          .tarjeta.BGR04.p-4(titulo="Encapsulamiento")
            p.mb-0 Los residuos sólidos peligrosos se insertan en capas de asfalto, polietileno, o vidrio.

    ul.lista-ul--color.mb-5(data-aos="fade-right")
      li
        i.fas.fa-star-half-alt.fa-spin(style="color: #115089")
        .h4.mb-0 Técnicas térmicas
    
    p Las técnicas térmicas buscan la desintegración de los componentes peligrosos de los residuos sólidos a partir del incremento de temperatura, las más utilizadas en la industria son:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.BGR06.p-4
        .row.justify-content-center.mb-3
          .col-lg-8.col-6
            img(src='@/assets/curso/tema7/img11.svg' alt='Incineración')
        .h3.text-center Incineración
        p.text-center.mb-0 Combustión con oxígeno donde se oxidan los componentes peligrosos del residuo sólido.
      .tarjeta.BGR06.p-4
        .row.justify-content-center.mb-3
          .col-lg-8.col-6
            img(src='@/assets/curso/tema7/img12.svg' alt='Co-procesamiento en horno cementero')
        .h3.text-center Co-procesamiento en horno cementero
        p.text-center.mb-0 Se utiliza la misma unidad de producción de clinker para la combustión de residuos.
      .tarjeta.BGR06.p-4
        .row.justify-content-center.mb-3
          .col-lg-8.col-6
            img(src='@/assets/curso/tema7/img13.svg' alt='Pirolisis')
        .h3.text-center Pirolisis
        p.text-center.mb-0 Descomposición térmica en ausencia de oxígeno.
      .tarjeta.BGR06.p-4
        .row.justify-content-center.mb-3
          .col-lg-8.col-6
            img(src='@/assets/curso/tema7/img14.svg' alt='Gasificación')
        .h3.text-center Gasificación
        p.text-center.mb-0 Combustión incompleta en ausencia de oxígeno.
      .tarjeta.BGR06.p-4
        .row.justify-content-center.mb-3
          .col-lg-8.col-6
            img(src='@/assets/curso/tema7/img15.svg' alt='Arco de plasma')
        .h3.text-center Arco de plasma
        p.text-center.mb-0 Volatilización y combustión del residuo por el contacto con gas energizado.
      .tarjeta.BGR06.p-4
        .row.justify-content-center.mb-3
          .col-lg-8.col-6
            img(src='@/assets/curso/tema7/img16.svg' alt='Oxidación en sal fundida')
        .h3.text-center Oxidación en sal fundida
        p.text-center.mb-0 Oxidación sin llama a temperaturas entre 1500 y 2000 °C donde los residuos están en contacto con sales alcalinas fundidas.
      
</template>

<script>
export default {
  name: 'Tema7',
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
