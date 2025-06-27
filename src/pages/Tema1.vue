<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5 f1">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>1</span></div>
        <h1>Tecnologías inalámbricas</h1>
      </div>
      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-lg-3 col-7 mb-lg-0 mb-3">
          <img src="@/assets/curso/temas/4.svg" alt="" />
        </div>
        <div class="col-lg-9">
          <p class="mb-0">
            Las tecnologías inalámbricas permiten la transmisión de datos sin
            necesidad de cables, utilizando ondas electromagnéticas para
            establecer comunicación entre dispositivos. Estas tecnologías
            facilitan la conectividad en redes locales y en redes de larga
            distancia y son decisivas en aplicaciones móviles, redes de área
            local y dispositivos IoT. Además, cada tecnología inalámbrica tiene
            características específicas en cuanto a velocidad, alcance y
            capacidad, adaptándose a diferentes entornos y necesidades de
            comunicación.
          </p>
        </div>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-10 mb-lg-0 mb-3">
          <p class="mb-0">
            Las tecnologías inalámbricas abarcan una variedad de métodos y
            estándares de comunicación que van desde redes de área personal,
            como Bluetooth, hasta redes de área amplia, como las redes celulares
            3G, 4G y 5G. Estas tecnologías permiten a los dispositivos
            conectarse y transferir datos sin restricciones físicas, ofreciendo
            mayor flexibilidad y accesibilidad. La comunicación inalámbrica ha
            transformado sectores como la movilidad, el internet de las cosas
            (IoT) y las redes de sensores, permitiendo que múltiples
            dispositivos trabajen de manera colaborativa y sin interrupciones
            físicas.<br /><br />A medida que las tecnologías inalámbricas
            avanzan, el enfoque en la eficiencia, la seguridad y la velocidad de
            transferencia de datos se vuelve cada vez más importante. Las redes
            inalámbricas deben optimizar el uso del espectro electromagnético y
            adaptarse a entornos complejos, como áreas urbanas con alta densidad
            de dispositivos. La implementación de tecnologías como 5G, con mayor
            velocidad y menor latencia, impulsa una conectividad casi en tiempo
            real, abriendo posibilidades en aplicaciones avanzadas como la
            conducción autónoma, la telemedicina y las ciudades inteligentes.
          </p>
        </div>
        <div class="col-lg-2 col-7">
          <img src="@/assets/curso/temas/5.png" alt="" />
        </div>
      </div>
      <Separador></Separador>
      <div
        id="t_1_1"
        class="titulo-segundo color-acento-contenido"
        data-aos="fade-right"
      >
        <h2>1.1 Estándares y protocolos (WiFi, Bluetooth, 3G/4G/5G).</h2>
      </div>
      <div class="p-4 mb-4" style="background-color: #d7eed6 ">
        <div class="row justify-content-center align-items-center">
          <div class="col-lg-1 col-4 mb-lg-0 mb-3">
            <img src="@/assets/curso/temas/6.svg" alt="" />
          </div>
          <div class="col-lg-11">
            <p class="mb-0 fw-bold">
              Los estándares y protocolos inalámbricos definen las reglas y
              tecnologías que permiten la comunicación entre dispositivos sin
              cables. Cada estándar tiene características específicas que lo
              hacen adecuado para ciertos usos y entornos.
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-9 mb-lg-0 mb-3">
          <TabsA class="color-acento-botones mb-5">
            <div
              class="tarjeta p-4"
              titulo="WiFi &lt;br&gt;(IEEE 802.11)"
              style="background-color: #efe8f7 "
            >
              <p>
                Principal tecnología para redes locales inalámbricas (WLAN),
                diseñada para ofrecer conexión de alta velocidad en áreas
                limitadas, como hogares o espacios de trabajo. Los protocolos
                más utilizados son 802.11n, 802.11ac y 802.11ax, cada uno con
                mejoras en velocidad y eficiencia.
              </p>
            </div>
            <div
              class="tarjeta p-4"
              titulo="Bluetooth &lt;br&gt;(IEEE 802.15.1)"
              style="background-color: #efe8f7 "
            >
              <p>
                Enfocado en la comunicación a corta distancia, Bluetooth es
                ideal para la conectividad entre dispositivos personales, como
                teléfonos, auriculares y periféricos. Las versiones más
                recientes, como Bluetooth 5.0, ofrecen mayor velocidad y
                cobertura.
              </p>
            </div>
            <div
              class="tarjeta p-4"
              titulo="3G, 4G y 5G"
              style="background-color: #efe8f7 "
            >
              <p>
                Estos estándares de redes celulares permiten la transmisión de
                datos a largas distancias, adecuadas para la conectividad móvil.
                Cada generación ha mejorado en velocidad, latencia y capacidad
                de conectividad. Mientras que 4G permitió el
                <em>streaming</em> y la transmisión de grandes volúmenes de
                datos, 5G habilita una conectividad más rápida y estable,
                favoreciendo aplicaciones en tiempo real y el IoT a gran escala.
              </p>
            </div>
          </TabsA>
        </div>
        <div class="col-lg-3 col-7">
          <img src="@/assets/curso/temas/7.svg" alt="" />
        </div>
      </div>
      <p class="mb-5" data-aos="fade-right">
        Cada uno de estos estándares y protocolos contribuye a satisfacer
        diferentes necesidades de conectividad, desde redes locales hasta la
        comunicación a nivel global.
      </p>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-10">
          <div
            class="titulo-sexto color-acento-contenido"
            data-aos="fade-right"
          >
            <h5>Figura 1.</h5>
            <span>Estándares y protocolos de conectividad inalámbrica</span>
          </div>
          <img
            src="@/assets/curso/temas/8.svg"
            alt="La Figura 1 se denomina «Estándares de Conectividad Inalámbrica» muestra un esquema jerárquico de los principales protocolos de redes inalámbricas, destacando Wi-Fi, Bluetooth y redes celulares (3G/4G/5G). Cada protocolo se presenta con una breve descripción de sus características y usos, ilustrando las distintas aplicaciones de conectividad para redes locales, dispositivos personales y áreas de cobertura amplia."
          />
          <figcaption>Fuente: OIT, 2024.</figcaption>
        </div>
      </div>
      <Separador></Separador>
      <div
        id="t_1_2"
        class="titulo-segundo color-acento-contenido"
        data-aos="fade-right"
      >
        <h2>1.2 Espectro electromagnético y propagación</h2>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-4 col-7 mb-lg-0 mb-3">
          <img src="@/assets/curso/temas/9.png" alt="" />
        </div>
        <div class="col-lg-8">
          <p class="mb-3">
            El espectro electromagnético es el rango de todas las frecuencias de
            ondas electromagnéticas, utilizado para transmitir datos en
            tecnologías inalámbricas. Las diferentes frecuencias permiten que
            las señales viajen a distintas velocidades, distancias y niveles de
            penetración. En telecomunicaciones, las bandas de frecuencia más
            comunes incluyen las frecuencias de 2.4 GHz y 5 GHz, empleadas en
            redes WiFi, y frecuencias más bajas y altas en redes móviles como 4G
            y 5G.
          </p>
          <div class="row justify-content-center align-items-center mb-3">
            <div class="col-lg-9">
              <p class="mb-0">
                La propagación de la señal depende de factores como la
                frecuencia utilizada y el entorno en el que se transmite. Las
                ondas de baja frecuencia pueden cubrir distancias mayores y
                penetrar de mejor manera, mayores obstáculos, como paredes, pero
                tienden a tener velocidades de transmisión más bajas. Por otro
                lado, las ondas de alta frecuencia ofrecen mayor velocidad, pero
                su alcance y capacidad de penetración son limitados. Los
                entornos urbanos densos presentan retos de propagación, como
                interferencias y atenuación, que afectan la calidad de la señal.
              </p>
            </div>
            <div class="col-lg-3 col-7">
              <img src="@/assets/curso/temas/10.svg" alt="" />
            </div>
          </div>
          <p class="mb-0">
            La planificación adecuada del uso del espectro y la comprensión de
            la propagación son fundamentales para optimizar el rendimiento y la
            cobertura de redes inalámbricas.
          </p>
        </div>
      </div>
      <Separador></Separador>
      <div
        id="t_1_3"
        class="titulo-segundo color-acento-contenido"
        data-aos="fade-right"
      >
        <h2>1.3 Arquitecturas inalámbricas</h2>
      </div>
      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-lg-2 col-7 mb-lg-0 mb-3">
          <img src="@/assets/curso/temas/11.png" alt="" />
        </div>
        <div class="col-lg-10">
          <p class="mb-0">
            Las arquitecturas inalámbricas son los modelos y configuraciones de
            red que permiten la interconexión de dispositivos sin necesidad de
            cables físicos. Estas arquitecturas son fundamentales para organizar
            y gestionar el tráfico de datos en redes inalámbricas, adaptándose a
            distintos entornos y necesidades de conectividad. Los dos modelos
            principales en redes inalámbricas son la arquitectura de
            infraestructura y la arquitectura ad hoc, cada uno con aplicaciones
            específicas en función de las características de la red y los
            requisitos de comunicación.<br /><br />En una red de
            infraestructura, los dispositivos se conectan a través de un punto
            de acceso central, como un router o un access point, que regula y
            controla la transmisión de datos. Este modelo es común en redes
            empresariales y domésticas, ya que facilita el control y la
            seguridad de la red, permitiendo que los dispositivos accedan a la
            conexión de manera ordenada. Asimismo, las redes de infraestructura
            permiten una mejor gestión del tráfico de datos, la implementación
            de medidas de seguridad y una mayor estabilidad en las
            comunicaciones.
          </p>
        </div>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-7 mb-lg-0 mb-3">
          <p class="mb-0">
            Por otro lado, las redes ad hoc no dependen de un punto de acceso
            central; en este modelo, los dispositivos se conectan directamente
            entre sí para intercambiar información. Las redes ad hoc se utilizan
            generalmente en situaciones temporales o de emergencia, donde no es
            posible desplegar una infraestructura fija. Estas redes permiten la
            creación de conexiones rápidas y flexibles, pero pueden presentar
            limitaciones en términos de alcance y seguridad debido a la falta de
            un punto de control central. Este tipo de arquitectura es útil en
            entornos militares, conferencias, o situaciones de desastre donde se
            necesita comunicación inmediata.
          </p>
        </div>
        <div class="col-lg-5 col-7">
          <img src="@/assets/curso/temas/12.svg" alt="" />
        </div>
      </div>
      <div class="cajon color-primario p-4 mb-4">
        <div class="row justify-content-center align-items-center">
          <div class="col-lg-1 col-4 mb-lg-0 mb-3">
            <img src="@/assets/curso/temas/13.svg" alt="" />
          </div>
          <div class="col-lg-11">
            <p class="mb-0">
              Cada tipo de arquitectura inalámbrica presenta ventajas y desafíos
              específicos. Las redes de infraestructura son más adecuadas para
              entornos donde se requiere un control y una administración
              centralizados, mientras que las redes ad hoc ofrecen flexibilidad
              y rapidez en el despliegue, aunque con una estructura menos
              robusta. La elección de una arquitectura inalámbrica adecuada
              depende de factores como la cantidad de dispositivos, la seguridad
              necesaria y el alcance de la red.
            </p>
          </div>
        </div>
      </div>
      <div class="bloque-texto-a color-acento-contenido p-4 p-md-5 mb-5">
        <div class="row m-0 align-items-center justify-content-between">
          <div class="col-lg-8">
            <div class="bloque-texto-a__texto p-4">
              <p>
                Las arquitecturas inalámbricas representan todo un avance en los
                sistemas de intercomunicación de dispositivos, también presentan
                aspectos de debilidad como lo es la seguridad y la estabilidad
                de la conexión en cada tipo de red. Las redes de
                infraestructura, al depender de un punto central de acceso,
                pueden implementar protocolos de seguridad más avanzados, como
                el control de acceso y la autenticación de usuarios. Esto las
                convierte en una opción más segura y estable para entornos que
                requieren confidencialidad en la transmisión de datos, como
                oficinas o instituciones.<br /><br />Por su parte, las redes
                <em>ad hoc</em>, al carecer de un nodo de control centralizado,
                presentan desafíos adicionales en términos de seguridad, ya que
                cada dispositivo actúa como un nodo independiente. Esto las hace
                más vulnerables a ataques externos y menos estables cuando se
                incrementa el número de dispositivos conectados o cuando existen
                interferencias en el entorno.
              </p>
            </div>
          </div>
          <div class="col-lg-4 mb-4 mb-lg-0">
            <img src="@/assets/curso/temas/14.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Tema1',
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
