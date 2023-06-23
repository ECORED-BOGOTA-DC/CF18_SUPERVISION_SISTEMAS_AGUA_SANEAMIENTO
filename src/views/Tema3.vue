<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Separación de residuos

    p.mb-5 De acuerdo con la Guía Técnica Colombiana GTC 24 (2009), la separación en la fuente permite obtener una mejor calidad de los residuos optimizando su aprovechamiento o disposición final. Una vez realizada esta separación, se debe llevar a cabo una recolección selectiva de los residuos seleccionados; pues sin este componente lo efectuado en la separación pierde valor, veamos esto con mayor detalle en el siguiente video:

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/hToeoDC0Q6c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    separador
    #t_3_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 3.1 Condiciones para la separación en la fuente
    
    p.mb-5 La separación en la fuente, es una práctica que consiste en separar y almacenar los diferentes tipos de residuos, con el fin de facilitar su aprovechamiento y manejo posterior; las condiciones a tener en cuenta para llevar a cabo este procedimiento son:

    .BGM01.px-md-5.px-4.mb-5
      .row.justify-content-center
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema3/img01.svg' alt="Separación en la fuente")
        .col-lg-8(data-aos="fade-left")
          ul.lista-ul--color.lista-ul--separador
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              |	Contar con recipientes, bolsas y vehículos de recolección interna para el movimiento interno de residuos que cumplan las características y condiciones establecidas al tipo de residuo.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Separar cada residuo, según su clasificación (peligroso y no peligroso), código de colores y las especificaciones a que hace referencia la etiqueta de cada recipiente.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | No se debe compactar las bolsas que contienen residuos o desechos peligrosos.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | El recipiente al igual que la bolsa podrá llenarse hasta un máximo de (3/4) partes de su capacidad.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Se recomienda elaborar ayudas visuales e informativas para facilitar el proceso de segregación en la fuente tanto por el personal trabajador como por el personal visitante.

    .BG10.p-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          p.mb-0 #[strong Nota:]  es deber de los usuarios realizar separación en la fuente cuando se haga recolección selectiva de residuos sólidos aprovechables, de acuerdo con las condiciones establecidas por los respectivos Planes de Gestión Integral de Residuos Sólidos-PGIRS y el Programa de Prestación del Servicio (Decreto 1077, 2015).
        .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema3/img02.svg' alt="Realizar separación en la fuent")
    
    separador
    #t_3_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 3.2 Condiciones para la separación en la fuente según el tipo de residuo

    p.mb-5 De acuerdo con las condiciones o materiales de residuos se pueden tener otras consideraciones importantes para el momento de la separación, como las que se mencionan a continuación: 

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img03.png' alt="separación en la fuente según el tipo de residuo")
      .col-lg-8(data-aos="fade-left")
        TabsA.color-acento-contenido
          .tarjeta.BGR04.p-4(titulo="Residuos plásticos")
            .h4 Separación de residuos plásticos
            p Una vez se tengan todos los residuos plásticos generados, estos se pueden subdividir de acuerdo con la resina plástica que los compone, para ello se contempla la Guía Técnica Colombia GTC 53- 2 (2004), gestión ambiental, residuos sólidos, guía para el aprovechamiento de los residuos plásticos.
            p.mb-0 La separación en la fuente de este residuo a nivel doméstico es, generalmente suficiente para separar los envases o productos plásticos en un contenedor diferenciado y específico que permita recolectar los residuos plásticos libres de contaminación hasta una cantidad que facilite el transporte económico al procesador o usuario final ICONTEC. (2004).  GTC 53- 2.
          .tarjeta.BGR04.p-4(titulo="Residuos papel y cartón")
            .h4 Separación de residuos papel y cartón
            p.mb-0 Para la separación en la fuente de los residuos papel y cartón, lo que se solicita normalmente es tener un contenedor específico para este tipo de residuos, en lo posible garantizar que no se encuentre contaminado por otro tipo de residuos, una vez esta separación, en las plantas de tratamiento se puede realizar una reclasificación de acuerdo con las fibras celulósicas que contienen, teniendo en cuenta la Guía Técnica Colombia GTC 53- 4 (2003).
          .tarjeta.BGR04.p-4(titulo="Residuos de vidrio")
            .h4 Separación de residuos de vidrio
            p Para la gestión de residuos de vidrio, se cuenta con la GTC 53-3 (1998), gestión ambiental, residuos sólidos, guía para el aprovechamiento de envases de vidrio, en la cual describe la separación y selección de los envases de vidrio posconsumo, esta separación debe hacerse en el sitio donde se consume el producto contenido en el envase de vidrio.
            p A este material se le puede hacer una sub separación o clasificación dependiendo de su color:
            .row.justify-content-center
              .col-lg-4
                ul.lista-ul--color.lista-ul--separador
                  li(style="margin-bottom: 2px")
                    i.fas.fa-check-circle(style="color: #115089;")
                    |	Blanco.
              .col-lg-4
                ul.lista-ul--color.lista-ul--separador
                  li(style="margin-bottom: 2px")
                    i.fas.fa-check-circle(style="color: #115089;")
                    |	Ámbar o café.
              .col-lg-4
                ul.lista-ul--color.lista-ul--separador
                  li(style="margin-bottom: 2px")
                    i.fas.fa-check-circle(style="color: #115089;")
                    |	Verde.
            p.mb-0 De acuerdo con la ICONTEC (1998), la separación se debe hacer, debido a la composición química de cada uno de los materiales, no permite que cuando se reincorporen al ciclo productivo para la fabricación de nuevos envases, se puedan mezclar unos con los otros.
          .tarjeta.BGR04.p-4(titulo="Residuos metálicos")
            .h4 Separación de residuos metálicos
            p.mb-0 Para la separación de los residuos metálicos generados, lo que se solicita normalmente es tener un contenedor específico para estos residuos y en lo posible garantizar que no se encuentre contaminado por otros tipos de residuos. Para la gestión de residuos metálicos, se cuenta con la GTC 53-5 (1999).
      
</template>

<script>
export default {
  name: 'Tema3',
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
