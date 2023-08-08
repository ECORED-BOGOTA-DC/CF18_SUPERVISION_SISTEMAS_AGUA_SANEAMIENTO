<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .BGM01.px-md-5.px-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-4.col-8.mb-lg-0(data-aos="fade-right")
          img(src='@/assets/curso/intro/img01.svg' alt="Tratamiento de residuos")
        .col-lg-8(data-aos="fade-left")
          .row.justify-content-center.align-items-center
            .col-lg-1.col-2.p-0
              .arrow-left
            .col-lg.col-12.px-0
              .BGR02.p-4
                p.mx-5 El tratamiento de residuos de diferente índole se ha convertido en una estrategia primordial para cualquier país, porque su objetivo no solo es reducir el impacto por su disposición sino, iniciar procesos para reintroducir esos residuos como materia prima para otros procesos y que puedan tener mayor vida útil. Por lo anterior, le damos la bienvenida a este momento de aprendizaje orientado a detallar, entre otras cosas, el manejo que debe darse a los residuos sólidos, sus técnicas, almacenamiento, separación, metodologías, entre otros.
                .h5.mx-5.mb-0 Bienvenido.
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
