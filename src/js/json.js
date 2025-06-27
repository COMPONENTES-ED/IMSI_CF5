export default {
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
        titulo: 'Tecnologías inalámbricas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Estándares y protocolos (WiFi, Bluetooth, 3G/4G/5G).',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Espectro electromagnético y propagación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Arquitecturas inalámbricas',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Dispositivos y componentes IoT',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Sensores y actuadores',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: '<em>Gateways y controladores</em>',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Microcontroladores y plataformas',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Infraestructura inalámbrica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: '<em>Access Points</em> y controladores',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Antenas y cobertura',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: '<em>Site surveys</em> y planificación',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Seguridad en redes inalámbricas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Protocolos de seguridad (WEP, WPA, WPA2)',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Autenticación y control de acceso',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Monitoreo y gestión',
            hash: 't_4_3',
          },
        ],
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
        download: 'downloads/228142_CF05_DU_V2.pdf',
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
  global: {
    Name:
      'Redes inalámbricas y equipos de cómputo: configuración e implementación',
    Description:
      'Este componente aborda los elementos para desarrollar la configuración, instalación y administración de redes inalámbricas, junto con la integración y puesta en marcha de equipos de cómputo. El módulo, también incluye la selección y configuración de dispositivos de red, aplicación de protocolos de seguridad y optimización del rendimiento de conexiones inalámbricas, garantizando la conectividad y funcionalidad de sistemas de cómputo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
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
    ],
  },
}
