<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Metodologías de muestreo y separación de residuos
    
    .BG03.p-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-1.col-2(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img01.svg' alt="Cantidad de residuos")
        .col(data-aos="fade-left")
          p.mb-0 Teniendo en cuenta la cantidad de residuos que se pueden generar en los territorios, la cual puede ser directamente proporcional al crecimiento de la población, las autoridades ambientales han creado estrategias para lograr la disminución de los residuos generados, lo que se conoce como control en la fuente. Estas estrategias pueden ser genéricas a todas las poblaciones, pero cada región o localidad aplica la que sea acorde, atendiendo las características socioculturales particulares que se evidencian en el tipo, cantidad y especificaciones de los residuos generados.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Partiendo de esta premisa, y de acuerdo con el Ministerio de Vivienda (MINVIVIENDA) (2015), en su documento guía para la formulación, implementación, evaluación, seguimiento, control y actualización de los Planes de Gestión Integral de Residuos Sólidos (Pgirs),  la autoridad ambiental estableció que era responsabilidad de los municipios y/o distritos velar porque la prestación del servicio público de aseo se dé en el marco de una adecuada planeación y gestión integral de los residuos sólidos en todo su territorio, a partir de principios de calidad, eficiencia, solidaridad y sostenibilidad, en función de garantizar la presencia de la comunidad en la gestión y fiscalización del servicio, lo que permite el mejoramiento de la calidad de vida de los ciudadanos. Esta planeación debe estar orientada a disminuir o prevenir la generación de residuos, promoviendo el aprovechamiento, la valorización, el tratamiento y la disposición final.
        .cajon.color-acento-botones.p-4
          p.mb-0 Se definió también que cada territorio debe crear y mantener actualizado su documento denominado Planes de Gestión Integral de Residuos Sólidos (Pgirs), Instrumento de planeación municipal o regional que busca garantizar el mejoramiento continuo del manejo de residuos y la prestación del servicio de aseo en los ámbitos municipal o regional. Los PGIRS deben centrarse en los residuos no peligrosos: aprovechables, no aprovechables y especiales.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img02.png' alt="Metodologías de muestreo y separación de residuos")
    
    separador
    #t_1_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.1 Contenido general de un Plan de gestión integral de residuos sólidos (Pgirs)
    
    p.mb-5 La oficina de planeación municipal o regional, tiene una serie de programas trazados sobre el manejo de los residuos sólidos de su localidad, el procedimiento para la formulación y actualización de estos planes (Pgirs) se compone de ocho pasos generales de acuerdo con MINVIVIENDA, (2015), estos son:

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img03.svg' alt="Plan de gestión integral de residuos sólidos (Pgirs)")
      .col-lg-8(data-aos="fade-left")
        TabsA.color-acento-contenido
          .tarjeta.BGR04.p-4(titulo="Organización")
            h4 Organización para la formulación
            p.mb-0 Definir el carácter si será municipal o regional, se conforman los grupos de trabajo tanto el coordinador como el técnico, se planeará los procesos de divulgación y participación ciudadana.
          .tarjeta.BGR04.p-4(titulo="Línea base")
            h4 Línea base
            p.mb-0 Es la fase de recopilación de información a través de mediciones en campo y otros elementos como encuestas e información secundaria de entidades para identificar causas y consecuencias de las problemáticas asociadas con los residuos.
          .tarjeta.BGR04.p-4(titulo="Objetivos y metas")
            h4 Objetivos y metas
            p.mb-0 Establecer objetivos y metas claros que se quieren lograr con el manejo o gestión de los residuos, la idea es que también sean soluciones reales a los problemas identificados en el territorio por medio de la línea base.
          .tarjeta.BGR04.p-4(titulo="Programas")
            h4 Programas y proyectos para la implementación
            p Es obligatorio que los objetivos y las metas específicas se materialicen a través de programas y proyectos viables y sostenibles, enfocados en cada uno de los componentes del servicio, dentro de los programas que deben ser formulados se encuentra:
            ul.lista-ul--color.lista-ul--separador
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #4DB1F0;")
                | El programa institucional para la prestación del servicio de aseo.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #4DB1F0;")
                | El programa recolección transporte y transferencia.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #4DB1F0;")
                | El programa de barrido de limpieza de vías.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #4DB1F0;")
                | El programa de corte de césped y poda.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #4DB1F0;")
                | El programa de lavado de áreas públicas.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #4DB1F0;")
                | El programa de aprovechamiento.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #4DB1F0;")
                | El programa de inclusión de recicladores.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #4DB1F0;")
                | El programa de disposición final.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #4DB1F0;")
                | Programas para gestión de residuos especiales, de construcción y demolición y residuos rurales.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #4DB1F0;")
                | El programa de gestión de riesgo.
          .tarjeta.BGR04.p-4(titulo="Cronograma")
            h4 Cronograma
            p De acuerdo con MINVIVIENDA, (2015) Los elementos de un buen cronograma son:
            ul.lista-ul--color.lista-ul--separador
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #4DB1F0;")
                | Identificar las actividades principales y específicas.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #4DB1F0;")
                | Determinar claramente los responsables.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #4DB1F0;")
                | Establecer tiempos a corto, mediano y largo plazo para cada uno de los proyectos del PGIRS.
          .tarjeta.BGR04.p-4(titulo="Plan financiero")
            h4 Plan financiero
            p.mb-0 El objetivo del plan financiero es direccionar la asignación de recursos del municipio y garantizar la viabilidad de los proyectos que se proponen.
          .tarjeta.BGR04.p-4(titulo="Implementación")
            h4 Implementación, evaluación y seguimiento
            p.mb-0 Una vez diseñado el Pgirs este deberá publicarse en la página web del municipio por un periodo de 15 a 20 días para comentarios y observaciones de la comunidad, finalizado este periodo, se revisan e incorporan las observaciones que se consideren pertinentes y se procede a su firma y adopción por decreto.
          .tarjeta.BGR04.p-4(titulo="Revisión")
            h4 Revisión y actualización del PGIRS
            p.mb-0 Revisar por medio de indicadores el cumplimiento de los objetivos y metas y cuando se vea necesario debe ser actualizado.
    
    separador
    #t_1_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.2 Caracterización de residuos sólidos
    
    .BG05.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-3.col-6.mb-lg-0.px-3.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img04.svg' alt="Caracterización de residuos sólidos")
        .col-lg-9(data-aos="fade-left")
          p.mb-0 Determinar la cantidad de residuos sólidos que genera un municipio y de qué tipo son, es de vital importancia porque a partir de los resultados obtenidos se establecen diferentes aspectos de la logística tanto de transporte como de tratamiento y disposición final. El objetivo principal de la caracterización de los residuos es obtener el mejor aprovechamiento de los recursos planteados en el PGIRS, así como brindar información para la mejora continua del mismo.
    
    p.mb-5 La caracterización de los residuos sólidos municipales se realiza a través de los siguientes pasos:

    .BGM01.px-md-5.px-4.mb-5
      .tarjeta--container.row
        .col-lg.tarjeta.BG06.p-5(data-aos="fade-right")
          .row.justify-content-center.mb-4
            .col-6
              img(src='@/assets/curso/tema1/img05.svg' alt="Muestreo")
          .h4.text-center Muestreo
          p.text-center.mb-0 Se establece una muestra representativa dentro de una zona determinada del municipio, los residentes de esta zona entregarán al personal encargado de la caracterización los residuos por un lapso de 8 días (no lo hacen al prestador de servicio habitual).
        .col-lg.tarjeta.BG07.p-5(data-aos="flip-up")
          .row.justify-content-center.mb-4
            .col-6
              img(src='@/assets/curso/tema1/img06.svg' alt="Tabulación")
          .h4.text-center Tabulación
          p.text-center.mb-0 Durante los 8 días del muestreo personal calificado pesará, separará y almacenará los residuos sólidos de los habitantes de la zona a estudiar y evaluará la información obtenida.
        .col-lg.tarjeta.color-primario.p-5(data-aos="fade-left")
          .row.justify-content-center.mb-4
            .col-6
              img(src='@/assets/curso/tema1/img07.svg' alt="Informe")
          .h4.text-center Informe
          p.text-center.mb-0 El personal especializado realizará un informe detallado sobre los resultados obtenidos en la caracterización de los residuos de la muestra en el municipio.

    .row.justify-content-start.mb-5
      .col-auto.BGRS08.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Requerimientos para la caracterización de residuos sólidos
    
    p.mb-5 Es necesario disponer de diferentes recursos para realizar la caracterización de los residuos sólidos, principalmente se necesita:

    ul.lista-ul--color.mb-5(data-aos="fade-right")
      li
        i.fas.fa-star-half-alt.fa-spin(style="color: #115089")
        .h4.mb-0 Recurso humano
    
    p.mb-5 Debido a que la separación de los residuos se realiza de forma manual se necesita un equipo de personas que reciba la muestra a analizar y ejerzan las siguientes funciones:


    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="zoom-in")
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/img08.svg', alt='Infografia recurso humano')
          .tarjeta.BGR04.p-3(x="32.5%" y="24%" numero="1")
            .h5.mb-2 Operarios
            p Personas encargadas de realizar encuestas a los usuarios del servicio de aseo, levantan información sobre hábitos de consumo, satisfacción con el servicio, posibles mejoras, entre otras.
            p.mb-0 Así mismo, recolectan los residuos que serán analizados, por esta razón se recomienda que sea un personal, por lo menos con estudios medios y sin prejuicios para la manipulación de los residuos y con condición física.
          .tarjeta.BGR04.p-3(x="76.7%" y="88.5%" numero="2")
            .h5.mb-2 Técnicos
            p Son las personas encargadas de la supervisión de la tabulación y manipulación de los residuos, deben conocer la zona donde se tomará la muestra ya que plantean las micro rutas de recolección.
            p.mb-0 Se recomienda que tenga estudios técnicos en manipulación de residuos sólidos.
          .tarjeta.BGR04.p-3(x="11.25%" y="62.7%" numero="3")
            .h5.mb-2 Coordinadores
            p Son las personas expertas en gestión de residuos, debe supervisar todas las actividades durante la medición y enviar los informes a las personas interesadas.

    ul.lista-ul--color.mb-5(data-aos="fade-right")
      li
        i.fas.fa-star-half-alt.fa-spin(style="color: #115089")
        .h4.mb-0 Recurso de equipos y herramientas
    
    p.mb-5 Para poder realizar la caracterización de los residuos dentro de la zona que se escoge como muestra es necesario contar con lo siguiente:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="fade-right")
      .tarjeta.BGR06.p-4
        .row.justify-content-center.mb-3
          .col-lg-8.col-6
            img(src='@/assets/curso/tema1/img09.svg' alt='Vehículo')
        h4.text-center Vehículo
        p.text-center.mb-0 Se utilizará para recolección de las muestras de los usuarios seleccionados.
      .tarjeta.BGR06.p-4
        .row.justify-content-center.mb-3
          .col-lg-8.col-6
            img(src='@/assets/curso/tema1/img10.svg' alt='Depósitos')
        h4.text-center Depósitos
        p.text-center.mb-0 Se dispondrán allí los residuos para las mediciones de densidad, deben estar sin abolladuras y limpios, se sugiere una capacidad de 200 litros.
      .tarjeta.BGR06.p-4
        .row.justify-content-center.mb-3
          .col-lg-8.col-6
            img(src='@/assets/curso/tema1/img11.svg' alt='Elementos de protección')
        h4.text-center Elementos de protección
        p.text-center.mb-0 Todos los operarios, técnicos y coordinadores deben contar con overol, guantes, mascarillas, botas y gafas de seguridad cuando se esté realizando la caracterización.
      .tarjeta.BGR06.p-4
        .row.justify-content-center.mb-3
          .col-lg-8.col-6
            img(src='@/assets/curso/tema1/img12.svg' alt='Herramientas')
        h4.text-center Herramientas
        p.text-center.mb-0 Se requieren para la manipulación de los residuos tales como escobas, recogedores, contenedores de residuos pequeños.
      .tarjeta.BGR06.p-4
        .row.justify-content-center.mb-3
          .col-lg-8.col-6
            img(src='@/assets/curso/tema1/img13.svg' alt='Papelería')
        h4.text-center Papelería
        p.text-center.mb-0 Formatos para consignar los valores obtenidos, tableros para dejar indicaciones, marcadores, bolsa para almacenar temporalmente residuos, cinta, entre otros.

    ul.lista-ul--color.mb-5(data-aos="fade-right")
      li
        i.fas.fa-star-half-alt.fa-spin(style="color: #115089")
        .h4.mb-0 Recurso de infraestructura

    .BG03.p-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-1.col-2(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img14.svg' alt="Ubicar los residuos que se recogen en la zona de muestreo")
        .col(data-aos="fade-left")
          p.mb-0 Poder ubicar los residuos que se recogen en la zona de muestreo durante ocho días requiere de un espacio que cumpla con una serie de condiciones que minimicen los impactos ambientales negativos asociados a la acumulación de dichos residuos.
    
    p.mb-5 Se recomienda que el espacio a utilizar cumpla con las siguientes condiciones:

    AcordionA.mb-5(tipo="a" clase-tarjeta="BGR09" data-aos="zoom-in")
      .row.justify-content-center(titulo="Espacio amplio")
        .col-lg-7.order-lg-1.order-2
          p.mb-0 Todos los colaboradores deben poder movilizarse con facilidad, los residuos recolectados en el lapso de 8 días deben poder almacenarse y adicional los vehículos de recolección deben poder ingresar al espacio disponible. Se recomienda que el espacio designado a la caracterización de los residuos sea lo más cercano a la zona donde se está obteniendo la muestra.
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema1/img15.png' alt="Espacio amplio")
      .row.justify-content-center(titulo="Ventilación e iluminación")
        .col-lg-5.col-10.mb-lg-0.mb-4
          img(src='@/assets/curso/tema1/img16.png' alt="Ventilación e iluminación")
        .col-lg-7
          p.mb-0 El espacio debe contar con ventilación e iluminación natural, y debe cumplir con dos condiciones, la primera: debe haber una cubierta para que la lluvia no cambie las propiedades físicas de los residuos y la segunda: no se deben producir ráfagas de viento que levante los residuos más livianos para que no se pierda masa en la muestra seleccionada.    
      .row.justify-content-center(titulo="Arquitectura")
        .col-lg-7.order-lg-1.order-2
          p.mb-0 El lugar debe contar con piso liso, en ningún momento se puede considerar pisos de tierra, arena o similares debido a que estos se mezclan con los residuos aumentando la masa, no debe tener inclinaciones para que los camiones puedan acceder con facilidad, debe contar con todos los servicios sanitarios para mantener la salubridad de los colaboradores.
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema1/img17.png' alt="Arquitectura")

    .row.justify-content-start.mb-5
      .col-auto.BGRS08.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Procedimiento para llevar a cabo la caracterización
    
    .BG03.p-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-1.col-2(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img18.svg' alt="Procedimiento para llevar a cabo la caracterización")
        .col(data-aos="fade-left")
          p.mb-0 Una vez se tienen disponibles todos los recursos que serán necesarios en la caracterización, se deben tener en cuenta una serie de actividades que se deben realizar para hacer de los resultados lo más confiables posibles y minimizar el error en la medición.

    p.mb-5 Las actividades a tener en cuenta son:

    TabsC.color-primario(data-aos="zoom-in")
      .BG04.pt-md-5.pt-4.pb-4(titulo="Antecedentes")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            p El primer paso para llevar a cabo la caracterización es hacer una revisión de antecedentes, consultar si alguna empresa u organización (pública o privada) ha realizado un proceso similar.
            p.mb-0 Cuando se han realizado anteriormente las caracterizaciones se pueden ver plasmadas las dificultades que se han tenido en la realización para no cometer los mismos errores y para optimizar los procesos.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img19.svg' alt="Revisión de antecedentes")
      .BG04.pt-md-5.pt-4.pb-4(titulo="Divulgación")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            p Los usuarios son parte fundamental del sistema de aseo del municipio, por ello se deben mantener informados sobre las actividades que se realicen en el marco del Pgirs.
            p.mb-0 Es importante aprovechar los espacios de grupos organizados y canales de comunicación locales, para generar una mayor participación comunitaria propiciando una buena comunicación; asimismo, permitirá confirmar o fortalecer la información previamente recolectada.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img20.svg' alt="Informar las actividades")

</template>

<script>
export default {
  name: 'Tema1',
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
