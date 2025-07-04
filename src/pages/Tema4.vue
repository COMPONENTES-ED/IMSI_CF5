<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>4</span></div>
        <h1>Seguridad en redes inalámbricas</h1>
      </div>
      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-lg-2 col-7 mb-lg-0 mb-3">
          <img src="@/assets/curso/temas/44.svg" alt="" />
        </div>
        <div class="col-lg-9">
          <p class="mb-0">
            La seguridad en redes inalámbricas es un aspecto fundamental en la
            implementación de una red confiable, ya que las conexiones
            inalámbricas son particularmente vulnerables a diversas amenazas de
            seguridad. Debido a la naturaleza de la transmisión inalámbrica, las
            señales pueden ser interceptadas o manipuladas si no se toman
            medidas de seguridad adecuadas. Por ello, es importante emplear
            prácticas y protocolos que garanticen la confidencialidad,
            integridad y disponibilidad de los datos que se transmiten a través
            de la red, protegiendo tanto la información sensible como la
            infraestructura de la red.
          </p>
        </div>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-8 mb-lg-0 mb-3">
          <div class="p-4 mb-4" style="background-color:#ebf6ea ">
            <p class="mb-0">
              Uno de los métodos más utilizados para proteger redes inalámbricas
              es la implementación de protocolos de seguridad, como WEP (<em
                >Wired Equivalent Privacy</em
              >), WPA (<em>Wi-Fi Protected Access</em>) y WPA2. Estos protocolos
              encriptan la información que circula en la red, dificultando el
              acceso a los datos transmitidos por personas no autorizadas. Sin
              embargo, cada protocolo tiene un nivel de seguridad diferente;
              WEP, por ejemplo, es una tecnología más antigua y vulnerable,
              mientras que WPA2 es más avanzada y segura. Es importante que las
              redes actuales implementen, como mínimo, WPA2 para minimizar los
              riesgos de interceptación y ataques.
            </p>
          </div>
          <p class="mb-0">
            La autenticación y el control de acceso son otro pilar de la
            seguridad en redes inalámbricas. Estos mecanismos aseguran que solo
            los usuarios y dispositivos autorizados puedan conectarse a la red.
            Las técnicas de autenticación incluyen contraseñas seguras,
            autenticación multifactorial (MFA) y certificados digitales.
            Igualmente, los sistemas de control de acceso pueden dividir la red
            en diferentes niveles, creando redes de invitados separadas de las
            redes de uso interno, lo cual minimiza la exposición de la red
            interna a usuarios no autorizados.
          </p>
        </div>
        <div class="col-lg-4 col-7">
          <img src="@/assets/curso/temas/41.svg" alt="" />
        </div>
      </div>
      <div style="background-color: #efe8f7 ">
        <div class="row justify-content-center mb-5 g-0">
          <div class="col-lg-5 d-lg-block d-none">
            <img src="@/assets/curso/temas/42.png" alt="" />
          </div>
          <div class="col-lg-7">
            <div class="p-4">
              <p class="mb-0">
                Otro aspecto relevante es el monitoreo y la
                <b>gestión de la seguridad</b> en tiempo real. A través de
                herramientas de gestión de redes, es posible detectar y
                reaccionar ante amenazas o comportamientos anómalos en la red.
                El monitoreo continuo permite a los administradores de red
                identificar intentos de acceso no autorizado, detectar puntos de
                acceso no autorizados o "falsos APs" que imitan la red legítima,
                y bloquear dispositivos potencialmente peligrosos. La gestión y
                el monitoreo proactivos son determinantes para mantener la
                integridad de la red y garantizar una experiencia segura para
                los usuarios.
              </p>
            </div>
          </div>
        </div>
      </div>
      <p class="mb-5" data-aos="fade-right">
        Por otra parte, la educación de los usuarios en prácticas seguras
        también contribuye a la seguridad de las redes inalámbricas. Los
        usuarios deben ser conscientes de los riesgos potenciales y tomar
        medidas preventivas, como no conectarse a redes públicas desconocidas,
        evitar compartir contraseñas y mantener sus dispositivos actualizados.
        La concienciación sobre los riesgos asociados con la conexión
        inalámbrica puede ayudar a reducir incidentes de seguridad y mejorar la
        protección de la red.
      </p>
      <Separador></Separador>
      <div
        id="t_4_1"
        class="titulo-segundo color-acento-contenido"
        data-aos="fade-right"
      >
        <h2>4.1 Protocolos de seguridad (WEP, WPA, WPA2, WPA3)</h2>
      </div>
      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-lg-10 mb-lg-0 mb-3">
          <p class="mb-0">
            Los protocolos de seguridad en redes inalámbricas son fundamentales
            para proteger la información que se transmite y garantizar que solo
            usuarios autorizados accedan a la red. Los tres protocolos
            principales —WEP (Wired Equivalent Privacy), WPA (Wi-Fi Protected
            Access) y WPA2— fueron desarrollados para mejorar la seguridad de
            las redes inalámbricas, especialmente en entornos públicos y
            corporativos donde las amenazas son mayores. Estos protocolos
            encriptan la información y autentican los dispositivos que intentan
            conectarse, dificultando la interceptación y manipulación de datos
            por personas no autorizadas.
          </p>
        </div>
        <div class="col-lg-2 col-6">
          <img src="@/assets/curso/temas/43.svg" alt="" />
        </div>
      </div>
      <div class="mn p-5 bg-slyde mb-5">
        <div class="tarjeta bg-white p-5">
          <CarouselRED tipo="b">
            <div class="row">
              <div class="col-lg-9 mb-4 mb-md-0">
                <p>
                  WEP fue uno de los primeros protocolos implementados en redes
                  Wi-Fi, diseñado para proporcionar un nivel básico de
                  seguridad. Este protocolo emplea una clave de encriptación
                  estática, que debía configurarse manualmente en cada
                  dispositivo. Sin embargo, WEP mostró ser vulnerable a ataques
                  debido a su encriptación débil y la reutilización de claves,
                  lo que permite que los atacantes intercepten el tráfico y
                  accedan a la red. Hoy en día, WEP es considerado obsoleto,
                  pero su estudio es importante para comprender la evolución de
                  los protocolos de seguridad en redes inalámbricas.<br /><br />Para
                  abordar las vulnerabilidades de WEP, se introdujo WPA como un
                  estándar de seguridad mejorado. WPA utiliza el protocolo de
                  integridad de clave temporal (TKIP), que genera una clave de
                  encriptación nueva para cada paquete de datos. Este método
                  mejora la seguridad, ya que no reutiliza las mismas claves y
                  ofrece una protección más dinámica. Aunque WPA es más seguro
                  que WEP, sigue teniendo ciertas vulnerabilidades que lo hacen
                  susceptible a ataques avanzados. Por esta razón, WPA fue una
                  solución temporal mientras se desarrollaba una alternativa más
                  robusta: WPA2.
                </p>
              </div>
              <div class="col-lg-3 col-7">
                <figure>
                  <img
                    src="@/assets/curso/temas/45.png"
                    alt="Texto que describa la imagen"
                  />
                </figure>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-9 mb-4 mb-md-0">
                <p>
                  WPA2 es actualmente el estándar de seguridad recomendado para
                  redes Wi-Fi. Este protocolo introduce el cifrado AES (Advanced
                  Encryption Standard), un método de encriptación mucho más
                  seguro que el utilizado en WEP o WPA. AES utiliza claves de
                  cifrado de 128 o 256 bits, haciendo que la información sea
                  extremadamente difícil de descifrar sin la clave de acceso.
                  Extra a a AES, WPA2 también implementa el protocolo de
                  autenticación CCMP, que garantiza la integridad de los datos y
                  protege contra ataques de red comunes, como el "ataque de
                  repetición".<br /><br />Para configuraciones de seguridad más
                  avanzadas, especialmente en redes corporativas, es común
                  utilizar WPA2-Enterprise, una variante de WPA2 que permite
                  autenticación en servidores RADIUS, en lugar de usar una clave
                  compartida. Este método mejora la seguridad, ya que cada
                  usuario tiene credenciales únicas y la red puede monitorear y
                  gestionar cada conexión de forma individual. WPA2-Enterprise
                  es ideal en entornos donde se necesita un control estricto
                  sobre el acceso a la red, ya que proporciona autenticación y
                  control de acceso a nivel de usuario.
                </p>
              </div>
              <div class="col-lg-3 col-7">
                <figure>
                  <img
                    src="@/assets/curso/temas/46.png"
                    alt="Texto que describa la imagen"
                  />
                </figure>
              </div>
            </div>
          </CarouselRED>
        </div>
      </div>
      <div class="titulo-sexto color-acento-contenido" data-aos="fade-right">
        <h5>Tabla 3.</h5>
        <span>Protocolos de seguridad (WEP, WPA, WPA2, WPA3)</span>
      </div>
      <div class="tabla-a color-acento-botones mb-5">
        <table>
          <caption>
            Fuente: OIT, 2024.
          </caption>
          <thead class="border-0">
            <tr style="background-color: #efe8f7 ">
              <th class="border-0">Protocolo de seguridad</th>
              <th class="border-0">Propósito</th>
              <th class="border-0">Consideraciones clave</th>
              <th class="border-0">Ejemplos de aplicación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="fw-bold" style="background-color: #ebf6ea ">WEP</td>
              <td>
                Proteger redes inalámbricas mediante cifrado básico de datos
              </td>
              <td>
                Vulnerable a ataques; utiliza cifrado estático que se puede
                descifrar fácilmente.
              </td>
              <td>
                Redes antiguas que aún emplean WEP por compatibilidad, aunque es
                poco seguro.
              </td>
            </tr>
            <tr>
              <td class="fw-bold" style="background-color: #ebf6ea ">WPA</td>
              <td>
                Mejorar la seguridad frente a WEP con cifrado más robusto y
                autenticación.
              </td>
              <td>
                Mayor seguridad que WEP, pero aún con vulnerabilidades;
                reemplazado progresivamente por WPA2.
              </td>
              <td>
                Conexiones domésticas y pequeñas empresas que requieren una
                protección moderada.
              </td>
            </tr>
            <tr>
              <td class="fw-bold" style="background-color: #ebf6ea ">WPA2</td>
              <td>
                Proveer alta seguridad para redes inalámbricas con cifrado
                avanzado.
              </td>
              <td>
                Implementación de AES para mayor seguridad; requiere hardware
                compatible.
              </td>
              <td>
                Redes empresariales y domésticas modernas, estándar en la
                mayoría de dispositivos actuales.
              </td>
            </tr>
            <tr>
              <td class="fw-bold" style="background-color: #ebf6ea ">WPA3</td>
              <td>
                Ofrecer la máxima seguridad en redes modernas con protección
                avanzada de datos.
              </td>
              <td>
                Incluye cifrado individualizado para conexiones; ideal para
                redes que manejan información sensible.
              </td>
              <td>
                Redes de organizaciones con altos requisitos de seguridad, redes
                de última generación.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Separador></Separador>
      <div
        id="t_4_2"
        class="titulo-segundo color-acento-contenido"
        data-aos="fade-right"
      >
        <h2>4.2 Autenticación y control de acceso</h2>
      </div>
      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-lg-3 col-7 mb-lg-0 mb-3">
          <img src="@/assets/curso/temas/47.png" alt="" />
        </div>
        <div class="col-lg-9">
          <p class="mb-0">
            La autenticación y control de acceso en redes inalámbricas son
            componentes fundamentales para asegurar que solo los dispositivos y
            usuarios autorizados puedan conectarse a la red. Estos mecanismos no
            solo protegen la red contra accesos no autorizados, sino que también
            aseguran que cada usuario esté debidamente identificado y
            autenticado. La autenticación y control de acceso son fundamentales
            para evitar intrusiones y mejorar la protección de la información y
            de los recursos de la red.<br /><br />Uno de los métodos de
            autenticación más comunes es el uso de contraseñas seguras o claves
            de acceso. Este tipo de autenticación es adecuado para redes de uso
            doméstico o pequeñas empresas, donde cada usuario debe conocer la
            clave para conectarse. Sin embargo, este método tiene limitaciones
            en entornos de mayor envergadura, ya que, cuando la clave se
            comparte con personas no autorizadas, la seguridad de la red se ve
            comprometida. Asimismo, es difícil gestionar el acceso cuando hay
            muchos usuarios, ya que todos comparten la misma contraseña.
          </p>
        </div>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-9 mb-lg-0 mb-3">
          <TabsA class="color-acento-botones mb-5">
            <div
              class="tarjeta p-4"
              titulo="Para redes &lt;br&gt; empresariales"
              style="background-color: #efe8f7 "
            >
              <p>
                Se suele implementar la autenticación basada en RADIUS (<em
                  >Remote Authentication Dial-In User Service</em
                >), que utiliza un servidor de autenticación centralizado para
                gestionar el acceso de los usuarios. Este método permite que
                cada usuario tenga credenciales únicas, mejorando así el control
                sobre quién puede acceder a la red. El servidor RADIUS verifica
                las credenciales de cada usuario y, si son correctas, permite el
                acceso. Este tipo de autenticación es común en entornos
                empresariales y en redes públicas, donde se necesita un mayor
                control sobre el acceso y se requiere registrar el ingreso de
                cada usuario.
              </p>
            </div>
            <div
              class="tarjeta p-4"
              titulo="Extra a la autenticación"
              style="background-color: #efe8f7 "
            >
              <p>
                El control de acceso permite dividir la red en diferentes
                niveles, separando, por ejemplo, las redes de invitados de las
                redes internas. Esto es posible mediante el uso de redes
                virtuales o VLANs (Virtual Local Area Networks), que permiten
                segmentar el tráfico y limitar el acceso a ciertas áreas de la
                red. Esta práctica es altamente relevante para minimizar el
                riesgo de que dispositivos no autorizados accedan a información
                confidencial o recursos críticos de la red. Adicionalmente, al
                segmentar la red, se facilita la gestión y el monitoreo del
                tráfico de datos.
              </p>
            </div>
            <div
              class="tarjeta p-4"
              titulo="En algunos casos"
              style="background-color: #efe8f7 "
            >
              <p>
                Se utiliza la autenticación multifactor (MFA) como medida
                adicional de seguridad. La MFA requiere que el usuario
                proporcione más de una forma de verificación para acceder a la
                red, como una contraseña junto con un código de verificación
                temporal o una autenticación biométrica. Este enfoque aumenta
                significativamente la seguridad, ya que complica el acceso para
                usuarios no autorizados y reduce el riesgo de que alguien pueda
                obtener acceso únicamente mediante una contraseña robada o
                interceptada.
              </p>
            </div>
            <div
              class="tarjeta p-4"
              titulo="Finalmente"
              style="background-color: #efe8f7 "
            >
              <p>
                Es importante implementar políticas de seguridad y capacitación
                para que los usuarios comprendan la importancia de la
                autenticación y el control de acceso. Los administradores de red
                deben asegurar que los usuarios no compartan sus credenciales y
                que actualicen sus contraseñas regularmente. La educación y
                concienciación sobre estas prácticas de seguridad fortalecen la
                protección de la red y ayudan a mantener un entorno de red
                seguro y confiable.
              </p>
            </div>
          </TabsA>
        </div>
        <div class="col-lg-3 col-7">
          <img src="@/assets/curso/temas/48.svg" alt="" />
        </div>
      </div>
      <Separador></Separador>
      <div
        id="t_4_2"
        class="titulo-segundo color-acento-contenido"
        data-aos="fade-right"
      >
        <h2>4.3 Monitoreo y gestión</h2>
      </div>
      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-lg-2 col-7 mb-lg-0 mb-3">
          <img src="@/assets/curso/temas/44.svg" alt="" />
        </div>
        <div class="col-lg-9">
          <p class="mb-0">
            El monitoreo y gestión de redes inalámbricas son actividades
            críticas para garantizar su rendimiento y seguridad. En un entorno
            inalámbrico, donde los dispositivos se conectan y desconectan
            constantemente, el monitoreo permite identificar problemas de
            rendimiento, posibles intrusiones y amenazas, y también asegura el
            uso eficiente de los recursos de la red. Mediante herramientas
            avanzadas de monitoreo, los administradores de red pueden supervisar
            el tráfico en tiempo real, obtener estadísticas de uso y recibir
            alertas sobre cualquier actividad sospechosa o anomalía.
          </p>
        </div>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-9 mb-lg-0 mb-3">
          <AccordionRED
            class="mb-5"
            tipo="a"
            clase-tarjeta="tarjeta tarjeta--morada"
          >
            <div titulo="Una de las principales funciones del monitoreo">
              <p class="mb-0">
                Es detectar y prevenir intrusiones. Esto es posible gracias a
                sistemas de detección de intrusos (IDS,
                <em> Intrusion Detection System</em>) y de prevención de
                intrusiones (IPS, <em>Intrusion Prevention System</em>), que son
                capaces de identificar comportamientos sospechosos en la red y
                responder automáticamente para mitigar las amenazas. Estos
                sistemas alertan al administrador cuando un dispositivo no
                autorizado intenta acceder a la red, lo que permite bloquear el
                acceso o limitar las acciones del dispositivo hasta que se
                investigue el incidente.
              </p>
            </div>
            <div titulo="Extra al monitoreo">
              <p class="mb-0">
                La gestión de rendimiento es necesaria para mantener la calidad
                de la conexión y minimizar las interrupciones. La gestión
                incluye la optimización del ancho de banda y el control de
                acceso a la red para evitar la congestión en áreas de alta
                densidad de usuarios. A través de la configuración y ajuste de
                los <em>Access Points</em> y del análisis del tráfico de red,
                los administradores pueden asegurar que el ancho de banda se
                distribuya de forma eficiente y que cada usuario reciba una
                conexión estable. También es posible priorizar el tráfico de
                aplicaciones críticas, garantizando que no se vean afectadas por
                el uso de otros servicios.
              </p>
            </div>
            <div titulo="El uso de herramientas de análisis de datos">
              <p class="mb-0">
                En redes inalámbricas ha permitido una evolución significativa
                en el monitoreo de redes. Estas herramientas generan informes
                detallados sobre el comportamiento de los dispositivos
                conectados, las horas de mayor uso y el tipo de tráfico que
                circula en la red. Esta información permite a los
                administradores identificar patrones de uso y anticipar
                problemas antes de que afecten a los usuarios. Por su parte, los
                análisis de datos pueden utilizarse para mejorar la seguridad,
                identificando comportamientos anómalos que podrían indicar
                intentos de ataque o el uso indebido de la red.
              </p>
            </div>
            <div
              titulo="La actualización constante de &lt;em&gt;software&lt;/em&gt; y &lt;em&gt;firmware&lt;/em&gt;"
            >
              <p class="mb-0">
                De los dispositivos de red es otra práctica fundamental en la
                gestión. Las actualizaciones corrigen vulnerabilidades y mejoran
                el rendimiento de los <em>Access Points</em>, routers y otros
                dispositivos de la red. Un programa de actualización periódica
                asegura que la red esté protegida contra las amenazas más
                recientes y que funcione con los últimos estándares de
                seguridad.
              </p>
            </div>
            <div titulo="Pruebas de instalación y funcionamiento">
              <p class="mb-0">
                Durante la instalación, se deben realizar pruebas parciales y
                continuas para asegurar que cada componente cumple con los
                estándares de calidad. Por ejemplo, al instalar cables de par
                trenzado o fibra óptica, se deben verificar parámetros de
                conexión y continuidad para asegurarse de que no haya errores en
                las conexiones. En la fase final, se realizan pruebas de
                rendimiento para confirmar que el sistema cumple con los
                requisitos de ancho de banda y calidad de señal.
              </p>
            </div>
            <div titulo="Documentación y reportes de calidad">
              <p class="mb-0">
                El control de calidad incluye la documentación detallada de cada
                paso del proceso de instalación, así como los resultados de las
                pruebas realizadas. Esta documentación es valiosa tanto para los
                clientes como para el equipo de mantenimiento, ya que
                proporciona un registro de las condiciones iniciales del sistema
                y permite realizar futuras inspecciones o ampliaciones con mayor
                facilidad. Los reportes de calidad documentan los parámetros de
                rendimiento alcanzados y validan que la instalación ha sido
                realizada conforme a los estándares.
              </p>
            </div>
          </AccordionRED>
        </div>
        <div class="col-lg-3">
          <img src="@/assets/curso/temas/49.png" alt="" />
        </div>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-10">
          <div class="cajon color-secundario p-4 mb-4">
            <div class="row justify-content-center align-items-center">
              <div class="col-lg-12">
                <p class="mb-0">
                  Finalmente, el registro y almacenamiento de eventos de red son
                  componentes esenciales de una estrategia de monitoreo y
                  gestión efectiva. Los <em>logs</em> de red, o registros de
                  eventos, permiten a los administradores realizar auditorías,
                  investigar incidentes y analizar cualquier anomalía en el
                  funcionamiento de la red. Mantener estos registros
                  actualizados facilita la resolución de problemas, permite
                  tener un historial de incidentes y mejora el control sobre el
                  acceso a la red.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-h-10">
          <div
            class="titulo-sexto color-acento-contenido"
            data-aos="fade-right"
          >
            <h5>Figura 2.</h5>
            <span>Ciclo de monitoreo y gestión en redes inalámbricas</span>
          </div>
          <img
            src="@/assets/curso/temas/51.svg"
            alt="La Figura 2 se denomina «Ciclo de monitoreo y gestión en redes inalámbricas» presenta un gráfico que ilustra el ciclo continuo de actividades para el monitoreo y gestión en redes inalámbricas. Cada sección del ciclo representa un componente clave: monitoreo en tiempo real, gestión de rendimiento, detección de anomalías, gestión de incidentes y generación de reportes."
          />
          <figcaption>Fuente: OIT, 2024.</figcaption>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Tema4',
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
