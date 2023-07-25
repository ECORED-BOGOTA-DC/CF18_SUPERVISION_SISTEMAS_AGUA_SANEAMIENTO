export default {
  global: {
    componenteFormativo: 'Técnicas de tratamiento',
    descripcionCurso:
      'El aprovechamiento y manejo de los residuos es fundamental no solo para reducir el riesgo provocado por la manipulación de estos elementos, sino para reducir la cantidad de residuos que son dispuestos de forma no técnica generando mayores impactos ambientales, en este componente se determinará el procedimiento para la cuantificación y  el tratamiento posible para algunos tipos de residuos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Metodologías de muestreo y separación de residuos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Contenido general de un PGIRS',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Caracterización de residuos sólidos',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Caracterización y cuantificación de residuos peligrosos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Plan de gestión integral de residuos peligrosos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Componentes de un PGIRP',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Caracterización de residuos peligrosos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Cuantificación',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Metodología de cuantificación',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Separación de residuos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Código de colores a nivel nacional',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Código de colores a nivel empresarial',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Condiciones para la separación en la fuente',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Condiciones para la separación en la fuente según el tipo de residuo',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Transporte RESPEL',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Requisitos del vehículo',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Operación de transporte',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Almacenamiento temporal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo:
              'Responsabilidades del prestador del servicio de almacenamiento',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Actores involucrados en el almacenamiento',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Condiciones del sitio de almacenamiento',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Aprovechamiento de residuos sólidos no peligrosos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Aprovechamiento de residuos plásticos',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Aprovechamiento de residuos de envases de vidrio',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Aprovechamiento de residuos de papel y cartón',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Aprovechamiento de residuos metálicos',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Aprovechamiento de residuos sólidos orgánicos',
            hash: 't_6_5',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Aprovechamiento de residuos sólidos peligrosos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA18_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.	 Metodologías de muestreo y separación de residuos',
      referencia:
        'Decreto 4741, Presidencia de la República de Colombia, Bogotá, Colombia. 30 de diciembre 2005.',
      tipo: 'Normatividad',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=18718',
    },
    {
      tema: '2. Caracterización y cuantificación de residuos peligrosos',
      referencia:
        'Resolución 0062, Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM). Bogotá. Colombia. 2007.',
      tipo: 'Normatividad',
      link:
        'http://www.ideam.gov.co/documents/51310/56882/Parte_1_Resolucion_0062_de_2007.pdf/6cd3555a-2bfc-403a-83ae-5f4fde24e5dc',
    },
    {
      tema: '1.	Almacenamiento temporal',
      referencia:
        'Senado Colombia. (4 de junio de 2017). Alerta sanitaria y ambiental en rellenos sanitarios del país. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=k8BouGzKtqA',
    },
    {
      tema: '1.	Almacenamiento temporal',
      referencia:
        'Sonsón Televisión oficial. (24 de abril de 2018). Inadecuada disposición de residuos sólidos. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=P9nY_4VIusE',
    },
  ],
  glosario: [
    {
      termino: 'Documentos de transporte',
      significado:
        'son aquellos documentos de porte obligatorio, requeridos como requisitos para el transporte de mercancías peligrosas y que pueden ser solicitados en cualquier momento y lugar por la autoridad competente.',
    },
    {
      termino: 'Embalaje',
      significado:
        'es un contenedor o recipiente que contiene varios empaques.',
    },
    {
      termino: 'Empaque',
      significado:
        'cualquier recipiente o envoltura que contenga algún producto de consumo para su entrega o exhibición a los consumidores.',
    },
    {
      termino: 'Envase',
      significado:
        'recipiente destinado a contener productos hasta su consumo final.',
    },
    {
      termino: 'Producción diaria per cápita',
      significado:
        'cantidad de residuos sólidos generada por una persona, expresada en términos de Kg./hab - día o unidades equivalentes, de acuerdo con los aforos realizados o estimaciones del Departamento Administrativo Nacional de Estadística -DANE.',
    },
    {
      termino: 'Producción diaria por usuario',
      significado:
        'cantidad de residuos sólidos generada por un usuario, expresada en términos de Kg/usuario - día o unidades equivalentes, de acuerdo con los aforos realizados y el número de habitantes atendidos o estimaciones del DANE.',
    },
    {
      termino: 'Reducción en el origen',
      significado:
        'forma más eficaz de reducir la cantidad, peso y volumen de los residuos, así como los costos asociados a su gestión y los impactos ambientales. Se encuentra en primer lugar en la jerarquía de la gestión integral de residuos sólidos.',
    },
    {
      termino: 'Remediación',
      significado:
        'conjunto de medidas a las que se someten los sitios contaminados para reducir o eliminar los contaminantes hasta un nivel seguro para la salud y el ambiente o prevenir su dispersión en el ambiente sin modificarlos.',
    },
    {
      termino: 'Rótulo',
      significado:
        'advertencia que se hace sobre el riesgo de una mercancía, por medio de colores y símbolos que se ubican sobre las unidades de transporte (remolque, semirremolque y remolque balanceado) y vehículos de carga.',
    },
  ],
  referencias: [
    {
      referencia:
        'Área metropolitana del Valle de Aburrá. (2011). Guía para gestión de residuos peligrosos.',
    },
    {
      referencia:
        'Centro Panamericano de Ingeniería Sanitaria y Ciencias del Ambiente (CEPIS). (2005). Procedimientos estadísticos para los estudios de caracterización de residuos sólidos.',
      link:
        'https://sinia.minam.gob.pe/documentos/procedimientos-estadisticos-estudios-caracterizacion-residuos-solidos',
    },
    {
      referencia:
        'Decreto 173 de 2001. [Presidente de la República de Colombia]. Por el cual se reglamenta el Servicio Público de Transporte Terrestre Automotor de Carga. Bogotá. Colombia. 5 de febrero de 2001.',
    },
    {
      referencia:
        'Decreto 1076 de 2015. [Presidente de la República de Colombia]. Por medio del cual se expide el Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible. Bogotá. Colombia. 26 mayo 2015.',
    },
    {
      referencia:
        'Decreto 1077 de 2015. [Presidente de la República de Colombia]. Por medio del cual se expide el Decreto Único Reglamentario del Sector Vivienda, Ciudad y Territorio. Bogotá. Colombia. 26 mayo 2015.',
    },
    {
      referencia:
        'Decreto 1609 de 2002. [Presidente de la República de Colombia]. Por el cual se reglamenta el manejo y transporte terrestre automotor de mercancías peligrosas por carretera". Bogotá. Colombia. 31 Julio 2002.',
    },
    {
      referencia:
        'Decreto 4741 de 2005. [Presidente de la República de Colombia]. Por el cual se reglamenta parcialmente la prevención y el manejo de los residuos o desechos peligrosos generados en el marco de la gestión integral. Bogotá. Colombia. 30 diciembre de 2005.',
    },
    {
      referencia:
        'Departamento Administrativo Nacional de Estadística (DANE). (s.f.). Hoja metodológica de indicadores cuenta satélite ambiental. Dirección de Síntesis y Cuentas Nacionales. Residuos sólidos generados per cápita.',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas (ICONTEC). (1998). Guía Técnica Colombia GTC 53-3. Gestión ambiental, residuos sólidos, guía para el aprovechamiento de envases de vidrio.',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas ICONTEC. (1998). Guía Técnica Colombia (GTC) 53-  5. Gestión ambiental, residuos sólidos, guía para el aprovechamiento de residuos metálicos.',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas (ICONTEC). (2003). Guía Técnica Colombia (GTC) 53-  4. Gestión ambiental, residuos sólidos, guía para el aprovechamiento de los residuos papel y cartón.',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas (ICONTEC). (2004). Guía Técnica Colombia (GTC) 53-  2. Gestión ambiental, residuos sólidos, guía para el aprovechamiento de los residuos plásticos.',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas (ICONTEC). (2006). Guía Técnica Colombia GTC 53-7. Gestión ambiental, residuos sólidos, guía para el aprovechamiento de residuos sólidos orgánicos no peligrosos.',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas (ICONTEC). (2005). Norma Técnica Colombia NTC 1692. Transporte de mercancías peligrosas, clasificación, marcado, etiquetado y rotulado.',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas (ICONTEC). (2010). Norma Técnica Colombia NTC 4532. Transporte de mercancías peligrosas. Tarjetas de emergencia para transporte de materiales peligrosos.',
    },
    {
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial (MAVDT) y el consejo colombiano de seguridad (CCS). (s.f), Guía ambiental de almacenamiento y transporte por carretera de sustancias químicas peligrosas y residuos peligrosos.',
    },
    {
      referencia:
        'Ministerio de Transporte. Código Nacional de Tránsito Terrestre (CNTT) “equipos de prevención y seguridad”.',
    },
    {
      referencia:
        'Ministerio de Vivienda (MINVIVIENDA). (2015). Guía para la formulación, implementación, evaluación, seguimiento, control y actualización de los Planes de Gestión Integral de Residuos Sólidos (PGIRS).',
    },
    {
      referencia:
        'Ministerio de Vivienda, Ciudad y Territorio (MVCT). (2012). Reglamento técnico del sector Agua potable y Saneamiento básico (RAS). Título F.',
    },
    {
      referencia:
        'Resolución 0062 de 2007. [Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM)]. Por la cual se adoptan los protocolos de muestreo y análisis de laboratorio para la caracterización fisicoquímica de los residuos o desechos peligrosos en el país. Bogotá. Colombia. 2007.',
    },
    {
      referencia:
        'Resolución 2148 de 2019. [Ministerio de Ambiente y Desarrollo Sostenible]. por la cual se modifica la Resolución 668 de 2016 sobre uso racional de bolsas plásticas y se adoptan otras disposiciones. Bogotá. Colombia. 26 de diciembre de 2019.',
    },
    {
      referencia:
        'Secretaría Distrital de Ambiente (SDA). (2008).  Gestión integral de residuos peligrosos. Dirección de evaluación, control y seguimiento ambiental. Bogotá.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Xiomara Becerra Aldana',
          cargo: 'Instructora Ambiental',
          centro: 'Regional Distrito Capital - Centro de gestión industrial',
        },
        {
          nombre: 'Jesús Ricardo Arias Munévar',
          cargo: 'Instructor Ambiental',
          centro: 'Regional Distrito Capital - Centro de gestión industrial',
        },
        {
          nombre: 'Silvia Milena Sequeda Cardenas',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Distrito Capital - Centro de diseño y metrología',
        },
        {
          nombre: 'Sergio Arturo Medina Castillo',
          cargo: 'Diseñador Instruccional',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrección de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Gloria Amparo López Escudero',
          cargo: 'Adecuador Instruccional',
          centro:
            'Regional Distrito Capital - Centro de gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesor Metodológico',
          centro:
            'Regional Distrito Capital - Centro de gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmín Rocío Figueroa Pacheco',
          cargo: 'Diseñador web',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
