<template>
  <div class="curso-main-container glosario">
    <BannerInterno icono="fas fa-atlas" titulo="Glosario"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div
        v-for="letra in orderedData"
        :key="'letra-' + letra.letra"
        class="glosario__letra-item mb-2"
      >
        <div class="glosario__letra-item__letra me-4">
          <div class="glosario__letra-item__letra__icono">
            <span>{{ letra.letra }}</span>
          </div>
        </div>
        <div class="glosario__letra-item__texto">
          <p
            v-for="termino in letra.terminos"
            :key="termino.termino"
            class="mb-3"
          >
            <strong><i class="lista-ul__vineta"></i></strong
            ><strong v-html="termino.terminoHtml || termino.termino"> </strong
            ><strong>: </strong><span v-html="termino.significado"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import plantillaMixins from '@/js/plantillaMixins'
export default {
  name: 'Glosario',
  mixins: [plantillaMixins],
  data() {
    return {
      glosarioData: [
        {
          termino: '<em>Access Point</em>',
          significado:
            'Dispositivo que permite la conexión inalámbrica de dispositivos a una red local, actuando como un puente entre dispositivos y el servidor o la red principal.',
        },
        {
          termino: 'Actuador',
          significado:
            'Componente de un sistema IoT que recibe señales y realiza una acción física en respuesta, como encender un motor, abrir una válvula o ajustar una luz.',
        },
        {
          termino: 'Antena',
          significado:
            'Dispositivo que transmite y recibe ondas de radio para la comunicación en redes inalámbricas, determinando en gran medida la cobertura y calidad de la señal.',
        },
        {
          termino: 'Arquitectura inalámbrica',
          significado:
            'Estructura y organización de los componentes y dispositivos de una red inalámbrica, incluyendo la disposición de <em>access points</em>, antenas y dispositivos terminales.',
        },
        {
          termino: 'Autenticación',
          significado:
            'Proceso mediante el cual se verifica la identidad de un usuario o dispositivo para permitir el acceso a una red o sistema de manera segura.',
        },
        {
          termino: '<em>Bluetooth</em>',
          significado:
            'Estándar de comunicación inalámbrica de corto alcance diseñado para la transmisión de datos entre dispositivos de forma rápida y sencilla.',
        },
        {
          termino: 'Cobertura',
          significado:
            'Área geográfica en la que una red inalámbrica puede operar de manera efectiva y proporcionar conectividad a los dispositivos.',
        },
        {
          termino: 'Controlador',
          significado:
            'Componente de un sistema de redes o IoT que gestiona y coordina la operación de diversos dispositivos, asegurando que funcionen de manera sincronizada.',
        },
        {
          termino: 'Espectro electromagnético',
          significado:
            'Conjunto de todas las frecuencias de ondas electromagnéticas, desde ondas de radio hasta rayos gamma, utilizado en diversas tecnologías de comunicación, incluida la transmisión de datos inalámbricos.',
        },
        {
          termino: '<em>Gateway</em>',
          significado:
            'Dispositivo que conecta redes diferentes entre sí, permitiendo la comunicación y transmisión de datos entre sistemas IoT y otros dispositivos o redes.',
        },
        {
          termino: 'Gestión de incidentes',
          significado:
            'Proceso de respuesta ante problemas detectados en la red, incluyendo acciones correctivas para restaurar el servicio y prevenir futuras interrupciones.',
        },
        {
          termino: 'Microcontrolador',
          significado:
            'Unidad de procesamiento de pequeña escala que integra una CPU, memoria y entradas/salidas en un solo chip, utilizado en dispositivos IoT para realizar tareas específicas de forma autónoma.',
        },
        {
          termino: 'Monitoreo',
          significado:
            'Actividad de supervisión continua de la red para identificar posibles problemas, caídas de servicio o intentos de acceso no autorizado, permitiendo respuestas rápidas.',
        },
        {
          termino: 'Protocolo de seguridad',
          significado:
            'Conjunto de reglas y algoritmos diseñados para proteger la comunicación en redes inalámbricas, como WEP, WPA y WPA2, asegurando que solo usuarios autorizados puedan acceder a la red.',
        },
        {
          termino: 'Red inalámbrica',
          significado:
            'Sistema de comunicación que permite la transmisión de datos sin necesidad de cables físicos, utilizando ondas electromagnéticas para la conexión entre dispositivos.',
        },
        {
          termino: 'Sensor',
          significado:
            'Dispositivo que detecta y mide condiciones físicas o químicas del entorno (como temperatura, presión o luz) y convierte esa información en señales que pueden ser interpretadas por otros dispositivos',
        },
        {
          termino: '<em>Site survey</em>',
          significado:
            'Proceso de evaluación de un sitio para planificar la implementación de una red inalámbrica, considerando factores como la cobertura, interferencias y ubicación de los <em>access points.</em>',
        },
        {
          termino: 'WiFi',
          significado:
            'Tecnología de red inalámbrica que permite la conexión de dispositivos a internet mediante la transmisión de datos a través de frecuencias de radio.',
        },
        {
          termino: 'WEP',
          significado:
            'Protocolo de seguridad antiguo para redes inalámbricas, que en su momento ofrecía protección básica, pero ha sido reemplazado por opciones más seguras debido a sus vulnerabilidades.',
        },
        {
          termino: 'WPA/WPA2',
          significado:
            'Protocolos de seguridad que mejoran la protección en redes inalámbricas respecto a WEP, proporcionando encriptación más avanzada para evitar accesos no autorizados',
        },
      ],
    }
  },
  computed: {
    orderedData() {
      const newGlosarioData = [...this.glosarioData]
      newGlosarioData.forEach(element => {
        element.significado =
          element.significado.charAt(0).toLowerCase() +
          element.significado.slice(1)
      })

      const sortedData = [...newGlosarioData].reduce((r, e) => {
        const letra = this.quitarAcentos(e.termino.toLowerCase())[0]
        if (!r[letra]) r[letra] = { letra, terminos: [e] }
        else r[letra].terminos.push(e)
        return r
      }, {})

      const soloLetras = Object.keys(sortedData).sort()
      const newSortedData = []

      soloLetras.forEach(element => {
        const letraObj = sortedData[element]
        let terminos = letraObj.terminos

        if (terminos.length > 1) {
          const terminosOrdenados = []
          const soloTerminos = letraObj.terminos
            .map(termObj => termObj.termino)
            .sort((a, b) => {
              const an = this.quitarAcentos(a).toLowerCase()
              const bn = this.quitarAcentos(b).toLowerCase()
              if (an < bn) return -1
              if (bn < an) return 1
              return 0
            })
          soloTerminos.forEach(term => {
            terminosOrdenados.push(
              terminos.find(termino => termino.termino === term),
            )
          })
          terminos = terminosOrdenados
        }
        newSortedData.push({
          letra: letraObj.letra.toUpperCase(),
          terminos: terminos,
        })
      })
      return newSortedData
    },
  },
}
</script>

<style lang="sass">
.glosario
  &__letra-item
    display: flex
    &__texto
      padding-top: 5px
    &__letra
      &__icono
        width: 32px
        height: 32px
        position: relative
        line-height: 1em
        border-radius: 50%
        background-color: $color-sistema-d

        span
          position: absolute
          left: 50%
          top: 50%
          transform: translate(-50%,-50%)
          font-size: 1.1em
          font-weight: $base-black-font-weight
</style>
