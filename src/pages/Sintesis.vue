<template>
  <div class="curso-main-container pb-3">
    <BannerInterno icono="fas fa-sitemap" titulo="Síntesis"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5">
      <div class="row justify-content-center mb-5">
        <div class="col-lg-2 col-7 mb-lg-0 mb-3">
          <img src="@/assets/curso/temas/s1.svg" alt="" />
        </div>
        <div class="col-lg-10">
          <p class="mb-0">
            Este componente aborda los fundamentos y técnicas primordiales para
            la configuración, implementación y gestión de redes inalámbricas,
            así como los dispositivos de cómputo que las soportan. Comienza con
            un análisis de las tecnologías inalámbricas y sus estándares
            principales, como Wi-Fi, Bluetooth, y redes celulares 3G/4G/5G, que
            también explora conceptos de propagación en el espectro
            electromagnético y arquitecturas que sustentan estas redes.
          </p>
        </div>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-9 mb-lg-0 mb-3">
          <p class="mb-0">
            Asimismo, se examinan los dispositivos que permiten el intercambio
            de datos de manera inteligente y eficiente en la red, considerando
            no solo los componentes básicos, sino también aquellos que habilitan
            funcionalidades avanzadas, como la integración de sensores y
            controladores. Esta interconectividad resulta fundamental en el
            contexto del Internet de las Cosas (IoT), donde los dispositivos
            deben operar en conjunto para lograr una red funcional, autónoma y
            escalable, capaz de sostener múltiples usuarios y aplicaciones.<br /><br />Por
            último, se enfatiza en la importancia de la seguridad en redes
            inalámbricas, abordando tanto la protección de la infraestructura
            como la autenticación y control de acceso para los usuarios. Se
            presentan estrategias avanzadas de monitoreo y gestión que permiten
            supervisar y mantener la integridad de la red, asegurando que el
            acceso sea seguro y que el rendimiento se mantenga óptimo en todo
            momento.
          </p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-10 mb-5">
          <figure>
            <img
              src="@/assets/curso/SintesisC5.svg"
              alt="La imagen muestra la «Síntesis temática del componente», allí se mencionan los principales temas tratados sobre redes inalámbricas y equipos de cómputo: configuración e implementación —como sus fundamentos, tecnologías, dispositivos, infraestructura, herramientas y prácticas— y algunos subtemas que los integran."
            />
          </figure>
        </div>
        <div class="col-auto">
          <a
            class="anexo mb-5"
            :href="obtenerLink('/downloads/SintesisC5.pdf')"
            target="_blank"
          >
            <div class="anexo__icono">
              <img src="@/assets/bullets/icono-pdf.svg" />
            </div>
            <div class="anexo__texto">
              <p>Anexo. Síntesis</p>
            </div></a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Sintesis',
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
