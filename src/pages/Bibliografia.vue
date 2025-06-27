<template>
  <div class="curso-main-container referencias">
    <BannerInterno
      icono="fas fa-book"
      titulo="Referencias bibliográficas"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div v-for="ref in orderedData" :key="ref.link" class="referencias__item">
        <span v-html="ref.referencia"></span
        ><a v-if="ref.link" class="ms-1" :href="ref.link" target="_blank"
          ><span v-html="ref.link"></span
          ><i class="ms-1 fas fa-external-link-alt"></i
        ></a>
        <hr class="my-3" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Referencias',
  data: () => ({
    referencias: [
      {
        referencia:
          'Alvear-Puertas, V., Rosero-Montalvo, P., & Peluffo-Ordóñez, D. (2017). Internet de las Cosas y Visión Artificial: Funcionamiento y aplicaciones: Revisión de literatura. Tomado de Internet de las Cosas y Visión Artificial, Funcionamiento y Aplicaciones: Revisión de Literatura',
        link: '',
      },
      {
        referencia:
          'Bluetooth Special Interest Group (SIG). (2021). Bluetooth Core Specification Version 5.3. Bluetooth SIG.',
        link:
          'https://www.bluetooth.com/specifications/specs/core-specification-5-3/?form=MG0AV3',
      },
      {
        referencia:
          'Durán, F. F., Mondragón, N., & Sánchez, M. (2008). Redes cableadas e inalámbricas para transmisión de datos. Científica, 12(3), 113-118. Tomado de Redalyc. Redes cableadas e inalámbricas para transmisión de datos',
        link: '',
      },
      {
        referencia:
          'Flores Zermeño, F. J., & Cossio Franco, E. G. (2017). Aplicaciones, enfoques y tendencias del Internet de las Cosas (IoT): Revisión sistemática de la literatura. Tomado de Aplicaciones enfoques y tendencias del',
        link: 'https://iot.pdf/?form=MG0AV3',
      },
      {
        referencia:
          'González García, A. J. (2017). IoT: Dispositivos, tecnologías de transporte y aplicaciones: Trabajo final. Tomado de IoT: Dispositivos, tecnologías de transporte y aplicaciones',
        link: '',
      },
      {
        referencia:
          'IEEE Standards Association. (2022). IEEE 802.11: Wireless Local Area Networks (Wi-Fi). IEEE Standards Association.',
        link: 'https://standards.ieee.org/ieee/802.11/865/?form=MG0AV3',
      },
      {
        referencia:
          'Jiménez Bonilla, Z. C., & Leaño Suárez, C. E. (2011). Redes inalámbricas: Diseño e implementación. Universidad Tecnológica de Bolívar. Tomado de Redes Inalámbricas: Diseño e Implementación',
        link: '',
      },
      {
        referencia:
          'Karygiannis, T., & Owens, L. (2002). Wireless Network Security: 802.11, Bluetooth and Handheld Devices. NIST Special Publication 800-48.',
        link: 'https://nistspecialpublication800-48.pdf/?form=MG0AV3',
      },
      {
        referencia:
          'Rappaport, T. S., Heath, R. W., Daniels, R. C., & Murdock, J. N. (2014). Millimeter Wave Wireless Communications. Pearson Education.',
        link: '',
      },
      {
        referencia:
          'Sharma, S. K., & Giannakis, G. B. (2020). Ultra-Reliable and Low-Latency Communications for 5G. IEEE Signal Processing Magazine, 37(2), 14-23.',
        link:
          'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8688469&form=MG0AV3',
      },
      {
        referencia:
          'Wi-Fi Alliance. (2022). Wi-Fi Certified 6™ Release 2: Bringing Enhanced Features and Capabilities. Wi-Fi Alliance. Tomado de ',
        link:
          'https://www.wi-fi.org/beacon/the-beacon/the-future-of-wi-fi-using-standardized-key-performance-indicators-and-evaluation',
      },
    ],
  }),
  computed: {
    orderedData() {
      return [...this.referencias].sort((a, b) => {
        const afl = this.quitarAcentos(a.referencia.split(' ')[0].toLowerCase())
        const bfl = this.quitarAcentos(b.referencia.split(' ')[0].toLowerCase())
        if (afl < bfl) return -1
        if (afl > bfl) return 1
        return 0
      })
    },
  },
  methods: {
    quitarAcentos(str) {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    },
  },
}
</script>

<style lang="sass">
.referencias
  &__item
    &:last-child
      hr
        display: none
    a
      color: $blue
      text-decoration: underline
      overflow-wrap: break-word
</style>
