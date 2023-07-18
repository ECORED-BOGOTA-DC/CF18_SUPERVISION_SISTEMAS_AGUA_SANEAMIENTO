<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Transporte RESPEL
    
    p.mb-5 El transporte de residuos peligrosos es una actividad a la cual se le debe prestar especial atención con el fin de evitar efectos adversos sobre la salud del personal e impactos negativos al ambiente. De acuerdo con el Ministerio de Transporte, en su decreto 1609 (2002), hay cinco roles específicos que tienen responsabilidad en el transporte de los residuos peligrosos, estos son:

    .BGR14.p-4.mb-5
      SlyderA(tipo="b" data-aos="zoom-in")
        .row.justify-content-around.align-items-center
          .col-lg-3.col-6.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img01.svg' alt="Remitente o propietario")
          .col-lg-8
            .h4 Remitente o propietario
            p.mb-0 Es cualquier persona u organización que presente un residuo sólido peligroso para su transporte.
        .row.justify-content-around.align-items-center
          .col-lg-3.col-6.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img02.svg' alt="Destinatario de la carga")
          .col-lg-8
            .h4 Destinatario de la carga
            p.mb-0 Es cualquier persona u organización que reciba un residuo peligroso.
        .row.justify-content-around.align-items-center
          .col-lg-3.col-6.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img03.svg' alt="Empresa transportadora")
          .col-lg-8
            .h4 Empresa transportadora
            p.mb-0 Es la persona natural o jurídica habilitada por el Ministerio de Transporte para la movilización de los residuos peligrosos. 
        .row.justify-content-around.align-items-center
          .col-lg-3.col-6.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img04.svg' alt="Conductor del vehículo")
          .col-lg-8
            .h4 Conductor del vehículo
            p.mb-0 Es la persona encargada de maniobrar el vehículo.
        .row.justify-content-around.align-items-center
          .col-lg-3.col-6.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img05.svg' alt="Propietario o tenedor del vehículo")
          .col-lg-8
            .h4 Propietario o tenedor del vehículo
            p.mb-0 Es la persona a la cual se encuentra asignada la propiedad del vehículo en los sistemas de información de movilidad.
    
    p Una vez se establecen las responsabilidades de estos actores se definen requisitos básicos para poder realizar el transporte de los residuos peligrosos estos son:

    separador
    #t_4_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 4.1 Requisitos del vehículo
    
    .BG03.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-1.col-2(data-aos="fade-right")
          img(src='@/assets/curso/tema4/img06.svg' alt="Vehículo")
        .col(data-aos="fade-left")
          p.mb-0 El vehículo debe cumplir con las especificaciones técnicas del Ministerio de Transporte que se establecen en el artículo 5 del decreto 1609 (2002), entre las que se encuentran:
    
    .row.justify-content-start.mb-5
      .col-auto.BGRS08.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Rótulos de identificación
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        p Este elemento permite de forma clara especificar que en el vehículo se están transportando sustancias peligrosas, la base de los rótulos es la clasificación de la Organización de las Naciones Unidas (ONU), conforme a los lineamientos dados por el Ministerio de Transporte en la NTC 1692 (2005).
        p.mb-0 Deben estar ubicados a dos metros de distancia en la parte lateral de la unidad de transporte a una altura que permita su fácil lectura, en camiones, remolques y semirremolques los rótulos deben ser fijos y debe existir un rótulo por cada característica de peligrosidad.
      .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema4/img07.jpg' alt="rótulo por cada característica de peligrosidad")

    .BGM01.px-md-5.px-4.mb-5
      p.mb-5 Así mismo en las guías ambientales de almacenamiento y transporte por carretera de sustancias químicas peligrosas y residuos peligrosos se menciona que el Ministerio de Transporte define requerimientos respecto a los rótulos basándose en la NTC 1692 (2005) entre los que se encuentran:
      .row.justify-content-center.align-items-end
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          ul.lista-ul--color.lista-ul--separador
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Tamaño superior a 250 mm x 250 mm.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Material refractivo y resistente al deterioro causado por exposición a la intemperie.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Símbolo y número de la clase dentro del rótulo.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Poseer una línea del mismo color del símbolo a 5 mm del borde en todo su perímetro.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | En lo posible, contener el texto indicativo de la clase a la cual pertenece.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Parte superior reservada para el símbolo.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Parte inferior para el texto, el número de la clase o de la división, y si es el caso, la letra del grupo de compatibilidad de la sustancia peligrosa.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Símbolos, textos y números impresos en negro en todos los rótulos, excepto en la clase 8, en las que el texto y el número de la clase deben figurar en blanco y en los rótulos con fondo rojo, verde o azul, en las que pueden figurar en blanco.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Garantizar que la información sea identificable en bultos que hayan permanecido tres meses sumergidos en agua.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Colocarse sobre un fondo de color tal que contraste con ellos.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema4/img08.svg' alt="Transporte por carretera de sustancias químicas peligrosas y residuos peligrosos") 

    .row.justify-content-start.mb-5
      .col-auto.BGRS08.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Placa de identificación de la ONU
    
    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema4/img09.png')
      .col-lg-8(data-aos="fade-left")
        p Es la forma de identificar la sustancia química peligrosa que se está transportando sin importar el país de donde provenga, el número UN (por sus siglas en inglés United Nations) resuelve la problemática de los nombres técnicos de las sustancias químicas en cada idioma y los posibles cambios de nombre por los usos que se le dan.
        .cajon.color-acento-botones.p-4
          p.mb-0 La placa debe tener un fondo naranja y los bordes y números deben ser negros, las dimensiones deben ser 30cm x 12 cm, el número correspondiente a cada sustancia química se puede consultar en el libro “recomendaciones relativas al transporte de mercancías peligrosas. Reglamento modelo”. Comúnmente conocido como libro naranja.

    p La lista ordenada por número UN debe tener una estructura de once columnas donde se encuentran:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta(style="background-color: #ED8E1E;")
              span 1
            p.mb-0 #[strong Número UN:] esta columna contiene el número asignado a la sustancia peligrosa, cada sustancia tiene un número único y no varía a nivel mundial.
          li 
            .lista-ol--cuadro__vineta(style="background-color: #ED8E1E;")
              span 2
            p.mb-0 #[strong Nombre y descripción:] en esta columna se da el nombre oficial de acuerdo con las naciones unidas y algunas características que pueda presentar.
          li 
            .lista-ol--cuadro__vineta(style="background-color: #ED8E1E;")
              span 3
            p.mb-0 #[strong Clase o división:] es el riesgo principal que posee la sustancia.
          li 
            .lista-ol--cuadro__vineta(style="background-color: #ED8E1E;")
              span 4
            p.mb-0 #[strong Riesgo secundario:] contiene los riesgos adicionales al de la clase o división.
          li 
            .lista-ol--cuadro__vineta(style="background-color: #ED8E1E;")
              span 5
            p.mb-0 #[strong Grupo de embalaje o envase:] es el grado relativo de peligro que posee la sustancia y su embalaje.
          li 
            .lista-ol--cuadro__vineta(style="background-color: #ED8E1E;")
              span 6
            p.mb-0 #[strong Disposiciones especiales:] condiciones especiales a las que están sujetas las sustancias peligrosas.
      .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4.px-2(data-aos="fade-left")
        img(src='@/assets/curso/tema4/img10.svg' alt="Digitación del checklist")

    .row.justify-content-center.mb-5
      .col-lg-6.col-10.mb-lg-0.mb-4.px-2(data-aos="fade-right")
        img(src='@/assets/curso/tema4/img11.svg' alt="Análisis del checklist")
      .col-lg-6(data-aos="fade-left")
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta(style="background-color: #ED8E1E;")
              span 7
            p.mb-0 #[strong Cantidades limitadas:] cantidad máxima por embalaje que se puede transportar de mercancía peligrosa.
          li 
            .lista-ol--cuadro__vineta(style="background-color: #ED8E1E;")
              span 8
            p.mb-0 #[strong Instrucciones de embalaje:] esta columna tiene códigos alfanuméricos que establecen los procedimientos para el envase de las sustancias.
          li 
            .lista-ol--cuadro__vineta(style="background-color: #ED8E1E;")
              span 9
            p.mb-0 #[strong Disposiciones especiales de embalaje:] condiciones diferenciales en el envase y embalaje de las sustancias químicas establecidas a través de códigos alfanuméricos.
          li 
            .lista-ol--cuadro__vineta(style="background-color: #ED8E1E;")
              span 10
            p.mb-0 #[strong Instrucción para cisternas portátiles:] en esta columna se establecen los tipos de cisterna exigidos para el transporte de las sustancias peligrosas a través de un código precedido por la letra T.
          li 
            .lista-ol--cuadro__vineta(style="background-color: #ED8E1E;")
              span 11
            p.mb-0 #[strong Disposiciones especiales para las cisternas portátiles:] se especifican condiciones especiales tales como grado de llenado, temperatura media, temperatura máxima de la carga entre otras a través de un código precedido por las letras TP. 

    .row.justify-content-start.mb-5
      .col-auto.BGRS08.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Equipo de carretera

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img12.jpg')})`}" data-aos="fade-right" alt="Uso del gato en el carro"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Las guías ambientales de almacenamiento y transporte por carretera de sustancias químicas peligrosas y residuos peligrosos se mencionan que el Ministerio de Transporte a través del artículo 30 del Código Nacional de Tránsito Terrestre (CNTT) “equipos de prevención y seguridad” establece que ningún vehículo podrá transitar por las vías del territorio nacional sin portar el siguiente equipo de carretera como mínimo:

    .BGM01.px-md-5.px-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
          ul.lista-ul--color.lista-ul--separador
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Un gato con capacidad para elevar el vehículo con la carga que transporta.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Una cruceta.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Dos señales de carretera en forma de triángulo en material refractivo y provisto de soportes para ser colocadas en forma vertical, o lámparas de señal de luz amarilla intermitentes o de destello.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Un botiquín de primeros auxilios: aunque el código de transporte no fija el contenido de este, se recomienda que contenga antisépticos, que son substancias cuyo objetivo es la prevención de la infección evitando el crecimiento de los gérmenes que comúnmente están presente en toda lesión. Entre estos se encuentra el agua oxigenada.  Material de curación que se utiliza para controlar hemorragias, limpiar, cubrir heridas o quemaduras y prevenir la contaminación e infección, tales como gasas estériles, compresas de agua, vendas de gasa, vendas elásticas (para torceduras y esguinces), vendas adhesivas de diversos tamaños resistentes al agua, esparadrapo y algodón. Instrumental tales como tijeras, guantes estériles desechables y termómetro.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | El decreto 1609 (2002) exige mínimo dos extintores cuando se transportan sustancias químicas y residuos peligrosos.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Dos tacos para bloquear el vehículo.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Caja de herramienta básica que como mínimo deberá contener: alicate, destornilladores, llave de expansión y llaves fijas.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Llanta de repuesto.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Linterna.
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema4/img13.svg' alt="Equipo de carretera")

    .row.justify-content-start.mb-5
      .col-auto.BGRS08.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Equipos básicos para atención a emergencias
    
    p.mb-5 Adicionalmente al equipo de carretera los vehículos que transporten residuos peligrosos deben contar con elementos básicos para la atención a emergencias, así como las dotaciones especiales que se especifiquen en cada una de las hojas de seguridad de las sustancias transportadas, estos elementos son:

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema4/img14.png')
      .col-lg-8(data-aos="fade-left")
        TabsA.color-acento-contenido
          .tarjeta.BGR04.p-4(titulo="Extintor de incendios")
            .h4 Extintor de incendios
            p Deben ser mínimo dos extintores multipropósito de acuerdo con el residuo peligroso transportado, uno debe ubicarse en la cabina y los demás cerca de la carga, pero donde se pueda acceder fácilmente a ellos. Deben ser inspeccionados regularmente y se les debe efectuar el mantenimiento adecuado.
            p.mb-0 Todo el personal vinculado al transporte de los residuos peligrosos debe ser entrenado en la operación de extintores en caso de emergencia.
          .tarjeta.BGR04.p-4(titulo="Equipo de protección")
            .h4 Equipo de protección personal para atención a emergencias
            p Aunque se deben tomar las medidas de prevención necesarias en el transporte de residuos peligrosos puede existir alguna situación de emergencia y por ello el personal debe estar capacitado para realizar las primeras acciones de control de la emergencia.
            p.mb-0 El equipo de protección personal se selecciona a partir de la sustancia transportada, se utiliza para evitar el posible contacto o inhalación de las sustancias peligrosas.
          .tarjeta.BGR04.p-4(titulo="Equipo de recolección")
            .h4 Equipo para recolección y limpieza de derrames
            p Las guías ambientales de almacenamiento y transporte por carretera de sustancias químicas y residuos peligrosos mencionan que de acuerdo con la cantidad y tipo de sustancia del residuo transportado se deben seleccionar los elementos para la recolección y limpieza de derrames. Estos elementos son:
            ul.lista-ul--color.lista-ul--separador
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #4DB1F0;")
                | Un rollo de cinta amarilla y negra para aislar la zona y demarcar peligro.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #4DB1F0;")
                | Paños absorbentes seleccionados de acuerdo con las características de la sustancia. Son idóneos para responder ante situaciones provocadas por derrames de líquidos. Tienen una buena capacidad de absorción y un manejo fácil y cómodo.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #4DB1F0;")
                | Cordones o barreras absorbentes seleccionados de acuerdo con las características de la sustancia a confinar.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #4DB1F0;")
                | Una pala de plástico antichispas.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #4DB1F0;")
                | Bolsas de polietileno de alta densidad, para depositar temporalmente los desechos de los derrames.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #4DB1F0;")
                | Masillas epoxy para reparar fisuras.

    .row.justify-content-start.mb-5
      .col-auto.BGRS08.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Requisitos técnicos
    
    figure(data-aos="zoom-in")
      img(src='@/assets/curso/tema4/img15.png' alt="Funcionamiento de frenos, del sistema de dirección, del sistema de suspensión")
    .row.justify-content-center.mb-lg-0.mb-5
      .col-lg-10.BGR15.img-02.p-4(data-aos="fade-right")
        p.mb-0 Adicional a las señalizaciones y equipos para emergencias, es necesario que el vehículo que transporta residuos peligrosos cuente con perfecto funcionamiento de frenos, del sistema de dirección, del sistema de suspensión, del sistema de señales visuales y audibles permitidas y del sistema de escape de gases; además demostrar un estado adecuado de llantas, del conjunto de vidrios de seguridad y espejos según lo establecido en el CNTT y el cumplimiento de la norma de emisión de gases.

    .BGM01.px-md-5.px-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          p.mb-5 De igual manera, se debe contar con los siguientes requisitos técnicos:
          ul.lista-ul--color.lista-ul--separador
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Tener el sistema eléctrico con dispositivos que minimicen los riesgos de chispas o explosiones.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Contar con un dispositivo sonoro o pito que se active en el momento en el cual el vehículo se encuentre en movimiento de reversa.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Poseer dispositivo de cargue y descargue en el caso de transportar sustancias químicas peligrosas en cilindros.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | No circular con más de un remolque o semirremolque.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Cuando se transporten sustancias químicas peligrosas de Clase 2. Gases, deben cumplir con los requisitos del vehículo establecido en la resolución 074 (1996), la resolución 80505 (1997) y demás disposiciones que sobre el tema se dispongan.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema4/img16.png' alt="Requisitos técnicos")
        
    separador
    #t_4_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 4.2 Operación de transporte

    .BGM01.px-md-5.px-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema4/img17.svg' alt="Checklist condiciones técnicas de los vehículos")
        .col-lg-8(data-aos="fade-left")
          p.mb-0 Las condiciones técnicas de los vehículos se pueden cumplir a cabalidad; sin embargo, para disminuir accidentes y efectos negativos hacia el medio ambiente y la población cercana es de vital importancia verificar procedimientos para cada una de las actividades que abarca la operación de transporte. Para ello se debe hacer revisión de los siguientes ítems:
    
    .row.justify-content-start.mb-5
      .col-auto.BGRS08.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Manejo de carga
    
    p.mb-5 Se debe hacer control del manejo de la carga y por ello se deben contar con documentos para todo el personal que incluyan lo que se indica a continuación:

    .row.justify-content-center.align-items-end.mb-4
      .col-lg-5
        .BGR08.p-4.mb-4(data-aos="fade-right")
          p.text-white.mb-0 Instrucciones para realizar una operación segura y correcta de todos los equipos incluyendo equipo de protección personal. 
        .BGR16.p-4.mb-4(data-aos="fade-right")
          p.my-2 Hojas de seguridad para todas las sustancias manejadas.
        .BGR17.p-4.mb-4(data-aos="fade-right")
          p.mb-0 Instrucciones y procedimientos sobre higiene, seguridad y medio ambiente.
        .BGR18.p-4.mb-4(data-aos="fade-right")
          p.my-2 Instrucciones y procedimientos sobre emergencias.
      .col-lg-3.d-lg-flex.d-none(data-aos="fade-left")
        img(src='@/assets/curso/tema4/img18.svg' alt="Checklist control del manejo")

    .BG03.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-1.col-2(data-aos="fade-right")
          img(src='@/assets/curso/tema4/img19.svg' alt="Etiquetado")
        .col(data-aos="fade-left")
          p.mb-0 Adicionalmente a la documentación, se deben cumplir con el principio de no mezclar sustancias peligrosas con alimentos y mantener la clasificación, etiquetado, embalaje y envase de las sustancias peligrosas.
    
    .row.justify-content-start.mb-5
      .col-auto.BGRS08.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Carga y descarga
    
    p Todos los puntos de carga y descarga deben contar con condiciones de accesibilidad, maniobrabilidad y seguridad, así como buena ventilación y control de temperatura. La actividad de carga debe ser realizada por personal capacitado, entrenado y con experiencia, antes de iniciar se deben leer y entender las hojas de seguridad.
    p.mb-5 Las guías ambientales de almacenamiento y transporte por carretera de sustancias químicas peligrosas y residuos peligrosos dentro de las operaciones de carga y descarga se recomiendan también:

    .BGM01.px-md-5.px-4.mb-5
      .row.justify-content-center
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema4/img20.png' alt="Operaciones de carga y descarga")
        .col-lg-8(data-aos="fade-left")
          ul.lista-ul--color.lista-ul--separador
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Utilizar protección personal durante estas labores.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Limpiar los vehículos en caso de que se produzcan fugas. 
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Limpiar las unidades de transporte para sustancias químicas a granel antes de cargar otra sustancia diferente. 
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Apagar los motores de los vehículos durante la carga o la descarga, excepto para hacer funcionar el equipo de manipulación, por ejemplo, bombas. 
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Disponer de elementos para contención de derrames y atención de emergencias. 
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Tener vigilada la zona mientras dura la operación. 
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Ante cualquier anomalía detener la operación y no continuar hasta realizar la corrección oportuna.
    p Así mismo, se recomienda establecer una planificación del transporte donde se incluya:

    .BGM01.px-md-5.px-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          ul.lista-ul--color.lista-ul--separador
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Hora de salida del origen.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Hora de llegada al destino.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Ruta seleccionada.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Listado de los teléfonos para notificación en caso de una emergencia: de la empresa, del fabricante o dueño de la sustancia peligrosa, destinatarios y comités regionales y locales para atención de emergencias, localizados en la ruta a seguir.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Lista de puestos de control de la empresa a lo largo de la ruta.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema4/img21.png' alt="Ruta seleccionada")
    
    .row.justify-content-start.mb-5
      .col-auto.BGRS08.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Documentación

    .BG03.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-1.col-2(data-aos="fade-right")
          img(src='@/assets/curso/tema4/img22.svg' alt="Documentos")
        .col(data-aos="fade-left")
          p.mb-0 Para llevar seguimiento y control de los procesos que se realizan a través del transporte de residuos peligrosos es indispensable contar con los siguientes documentos.
    
    ol.lista-ol--cuadro.mb-5
      li 
        .lista-ol--cuadro__vineta
          span a
        .h4.mb-0 Manifiesto de carga

    p.mb-5 Es el documento que se estableció mediante el decreto 173 (2001), amparando el transporte de sustancias peligrosas ante las distintas autoridades. Es elaborado y expedido por la empresa transportadora y tiene la siguiente información:
    .row.justify-content-center.mb-5
      .col-lg-5(data-aos="fade-right")
        ul.lista-ul--color.lista-ul--separador
          li(style="margin-bottom: 2px")
            i.fas.fa-clipboard-check(style="color: #4DB1F0;")
            | Datos de la empresa que expide el documento.
          li(style="margin-bottom: 2px")
            i.fas.fa-clipboard-check(style="color: #4DB1F0;")
            | Información del vehículo que transporta la sustancia peligrosa.
          li(style="margin-bottom: 2px")
            i.fas.fa-clipboard-check(style="color: #4DB1F0;")
            | Datos relacionados con el propietario o tenedor del vehículo.
          li(style="margin-bottom: 2px")
            i.fas.fa-clipboard-check(style="color: #4DB1F0;")
            | Datos relacionados con el conductor del vehículo.
      .col-lg-5(data-aos="fade-left")
        ul.lista-ul--color.lista-ul--separador
          li(style="margin-bottom: 2px")
            i.fas.fa-clipboard-check(style="color: #4DB1F0;")
            | Información de la sustancia peligrosa transportada.
          li(style="margin-bottom: 2px")
            i.fas.fa-clipboard-check(style="color: #4DB1F0;")
            | Datos del remitente y destinatario.
          li(style="margin-bottom: 2px")
            i.fas.fa-clipboard-check(style="color: #4DB1F0;")
            | Información referente al flete.
          li(style="margin-bottom: 2px")
            i.fas.fa-clipboard-check(style="color: #4DB1F0;")
            | Datos de los seguros de transporte.

    ol.lista-ol--cuadro.mb-5
      li 
        .lista-ol--cuadro__vineta
          span b
        .h4.mb-0 Remesas y registros
    
    .BG03.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-2.col-3(data-aos="fade-right")
          img(src='@/assets/curso/tema4/img23.svg' alt="Documentos")
        .col.p-4(data-aos="fade-left")
          p.mb-0 Las remesas son los documentos establecidos de acuerdo con el código de comercio en su artículo 1010, allí se fijan las especificaciones del contrato de transporte y las condiciones del mismo, las remesas deben ser expedidas mínimo con dos ejemplares debido a que el transportador debe firmar y entregar un ejemplar al destinatario.
    
    p.mb-5 Los registros son documentos estatales que permiten el transporte de residuos peligrosos, actualmente se requieren dos:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-5.col-10.px-0
            .BGR19.p-lg-5.p-4(data-aos="fade-right")
              .h3.mb-0 Registro nacional de transporte de carga
          .col-lg-7.px-0
            .BG21.p-4(data-aos="flip-up")
              p.mb-0 Tarjeta expedida cuando el propietario registra el vehículo ante el Ministerio de Transporte.
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-5.col-10.px-0
            .BGR20.p-lg-5.p-4(data-aos="fade-right")
              .h3.text-white.mb-0 Registro nacional para el transporte de mercancías peligrosas
          .col-lg-7.px-0
            .BG22.p-4(data-aos="flip-up")
              p.mb-0 Documento expedido por el estado donde autoriza a un vehículo a transportar sustancias peligrosas.
      .col-lg-3.d-lg-flex.d-none(data-aos="fade-left")
        img(src='@/assets/curso/tema4/img24.svg' alt="Documentos estatales")
      
    .row.justify-content-center.mb-5
      .col-lg-8.cajon.color-acento-botones.p-4(data-aos="flip-up")
        p.mb-0 De acuerdo con el tipo de residuo que se quiere transportar en algunas ocasiones se necesitan pólizas vigentes de seguro de responsabilidad civil extracontractual, de acuerdo con lo establecido en el artículo 39 del #[strong decreto 1521 (1998)], que cubra muerte o lesiones a una persona, daños a bienes de terceros y muerte o lesiones a dos o más personas, por ejemplo, en el transporte de líquidos inflamables, clase 3 y transporte de gases, clase 2.

    ol.lista-ol--cuadro.mb-5
      li 
        .lista-ol--cuadro__vineta
          span c
        .h4.mb-0 Tarjeta de emergencia

    p Es el documento que contiene la información de la sustancia y recomendaciones para el control, es de carácter obligatorio contar con ella en el momento del transporte. El diseño de la tarjeta de emergencia está hecho para todo tipo de audiencia, desde los transportadores, profesionales de la salud hasta los grupos de apoyo de la comunidad.
    p.mb-5 De acuerdo con la NTC 4532, todas las tarjetas de emergencia deben tener el mismo orden, a saber:
    
    AcordionA.mb-5(tipo="a" clase-tarjeta="BGR09" data-aos="zoom-in")
      .row.justify-content-around(titulo="Identificación producto")
        .col-lg-7.order-lg-1.order-2
          p.mb-0 Nombre de la sustancia peligrosa, número UN, teléfono de fabricante, número de organismos de atención a emergencias.
        .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema4/img25.svg' alt="Identificación producto")
      .row.justify-content-around(titulo="Identificación de peligros")
        .col-lg-7.order-lg-1.order-2
          p.mb-0 Efectos adversos a la salud y al medio ambiente, síntomas por contacto entre otros.
        .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema4/img26.svg' alt="Identificación de peligros")
      .row.justify-content-around(titulo="Controles de exposición")
        .col-lg-7.order-lg-1.order-2
          p.mb-0 Alternativas de ingeniería para disminuir riesgos químicos y físicos, así como elementos de protección personal que se deben usar en la manipulación del residuo.
        .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema4/img27.svg' alt="Controles de exposición")
      .row.justify-content-around(titulo="Estabilidad y reactividad")
        .col-lg-7.order-lg-1.order-2
          p.mb-0 Describe las condiciones que pueden resultar en reacciones químicas potencialmente peligrosas.
        .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema4/img28.svg' alt="Estabilidad y reactividad")
      .row.justify-content-around(titulo="Medidas de primeros auxilios")
        .col-lg-7.order-lg-1.order-2
          p.mb-0 Instrucciones y protocolos para la atención de las personas con salud comprometida a causa de los residuos transportados.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema4/img29.svg' alt="Medidas de primeros auxilios")
      .row.justify-content-around(titulo="Medidas para extinción de incendios")
        .col-lg-7.order-lg-1.order-2
          p.mb-0 Describe si hay propiedades explosivas en el residuo y las medidas para extinguir el fuego.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema4/img30.svg' alt="Medidas para extinción de incendios")
      .row.justify-content-around(titulo="Medidas en caso de vertido accidental")
        .col-lg-7.order-lg-1.order-2
          p.mb-0 Protocolos para el control de derrames, goteos y fugas.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema4/img31.svg' alt="Medidas en caso de vertido accidental")

    ol.lista-ol--cuadro.mb-5
      li 
        .lista-ol--cuadro__vineta
          span d
        .h4.mb-0 Plan de transporte

    .BG23.p-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-3.col-6.px-3(data-aos="fade-right")
          img(src='@/assets/curso/tema4/img32.svg' alt="Vehículo")
        .col(data-aos="fade-left")
          p.mb-0 En este documento se debe consignar la hora de salida y llegada, la ruta seleccionada y los teléfonos en caso de emergencia.
      
</template>

<script>
export default {
  name: 'Tema4',
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
