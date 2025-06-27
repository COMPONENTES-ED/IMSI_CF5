<template>
  <div class="curso-main-container introduccion">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero">
          <span><i class="fas fa-info"></i></span>
        </div>
        <h1>Introducción</h1>
      </div>
      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-lg-3 col-7 mb-lg-0 mb-3">
          <img src="@/assets/curso/temas/1.svg" alt="" />
        </div>
        <div class="col-lg-9">
          <p class="mb-0">
            En la actualidad, las redes inalámbricas son una pieza fundamental
            en la infraestructura de comunicaciones, permitiendo la conectividad
            sin cables y facilitando el acceso a la información desde cualquier
            lugar. Con el auge del Internet de las Cosas (IoT) y la
            proliferación de dispositivos inteligentes, la necesidad de redes
            inalámbricas robustas y seguras se ha vuelto imprescindible. Este
            módulo ofrece una visión integral de las tecnologías, dispositivos y
            técnicas de configuración principales para la implementación y
            optimización de redes inalámbricas y su interacción con equipos de
            cómputo.
          </p>
        </div>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-9 mb-lg-0 mb-3">
          <p class="mb-4">
            El contenido abarca desde las tecnologías base, como Wi-Fi y
            Bluetooth, hasta los dispositivos específicos de IoT que habilitan
            la conectividad inteligente, tales como sensores, actuadores y
            microcontroladores. Estos componentes permiten la creación de
            entornos conectados que se adaptan a múltiples aplicaciones en áreas
            como la industria, el hogar y la salud. Comprender la función de
            cada uno y cómo interactúan en una red compleja es fundamental para
            lograr un funcionamiento eficiente y adaptado a las necesidades de
            los usuarios.
          </p>
          <div class="tarjeta rounded-3 p-4" style="background-color: #efe8f7">
            <p class="mb-0">
              Otro aspecto central de este módulo es la infraestructura
              necesaria para el despliegue de redes inalámbricas, incluyendo la
              planificación de cobertura, la elección de antenas y los métodos
              de configuración de Access Points. Estas herramientas permiten que
              las redes mantengan una cobertura adecuada y estable, asegurando
              que los dispositivos puedan conectarse de manera óptima y sin
              interrupciones. A través de estos procesos, los administradores de
              red pueden controlar el rendimiento y ajustarlo según los
              requisitos del entorno.
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-7">
          <img src="@/assets/curso/temas/2.png" alt="" />
        </div>
      </div>
      <div class="bloque-texto-g color-secundario p-3 p-sm-4 p-md-5 mb-5">
        <div
          class="bloque-texto-g__img"
          :style="{
            'background-image': `url(${require('@/assets/curso/temas/3.png')})`,
          }"
        ></div>
        <div class="bloque-texto-g__texto p-4">
          <p class="mb-0">
            Finalmente, este componente profundiza en los aspectos de seguridad
            y gestión en redes inalámbricas, abordando protocolos como WPA2 y
            técnicas avanzadas de monitoreo y autenticación. Con la creciente
            cantidad de dispositivos conectados y el intercambio constante de
            datos, asegurar la integridad y confidencialidad de las redes se ha
            convertido en una prioridad. Esta formación proporciona las
            herramientas necesarias para implementar políticas de seguridad
            efectivas, proteger el acceso a la red y mantener un rendimiento
            confiable en entornos inalámbricos de alta demanda.
          </p>
        </div>
      </div>
      <p class="mb-5" data-aos="fade-right">
        ¡Bienvenido a este viaje relacionado con la configuración e
        implementación de los equipos de cómputo!
      </p>
      <figure>
        <div class="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/uM2zKyfn5bA?si=Ml7Tgg3eSTRmnSzG"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="allowfullscreen"
          ></iframe>
        </div>
      </figure>
    </div>
  </div>
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
