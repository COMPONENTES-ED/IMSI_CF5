<template>
  <div class="curso-main-container complementario">
    <BannerInterno
      icono="far fa-folder-open"
      titulo="Material complementario"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th colspan="3" scope="col">Tema</th>
              <th colspan="5" scope="col">Referencia APA del material</th>
              <th colspan="2" scope="col">Tipo</th>
              <th colspan="2" scope="col">Enlace</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in computedData"
              :key="'complementario-' + index"
            >
              <td
                class="text-start"
                colspan="3"
                scope="row"
                v-html="item.tema"
              ></td>
              <td
                class="text-start"
                colspan="5"
                scope="row"
                v-html="item.referencia"
              ></td>
              <td colspan="2" v-html="item.tipo"></td>
              <td colspan="2">
                <div class="complementario__enlaces">
                  <a
                    v-for="(link, linkIndex) of item.link"
                    :key="linkIndex"
                    class="complementario__btn"
                    :href="link"
                    target="_blank"
                    ><i class="fas fa-external-link-alt"></i
                  ></a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MaterialComplementario',
  computed: {
    complementarioData() {
      return [
        {
          tema: '1. Tecnologías inalámbricas',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2021f, junio 25). Tecnologías inalámbricas.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=hyIpJZBLYg0',
        },
        {
          tema: '2. Dispositivos y componentes IoT',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023d, octubre 30). Infraestructura Inalambrica.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=XaZJ3EYxQHU',
        },
        {
          tema: '3. Infraestructura inalámbrica',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2022f, marzo 11). Dispositivos y componentes IoT.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=gaa-7nYolxE',
        },
        {
          tema: '4. Seguridad en redes inalámbricas',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023e, enero 29). Seguridad en redes inalámbricas.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=gp2cLOeucn4',
        },
        {
          tema: '4. Seguridad en redes inalámbricas',
          referencia:
            'Contando Bits. (2024c, agosto 8). Protocolos de seguridad (WEP, WPA, WPA2).',
          tipo: 'Video',
          link: 'https://youtu.be/bloaGu5rl_I?feature=shared',
        },
      ]
    },
    computedData() {
      const data = this.complementarioData
      return data.map(item => {
        let nuevoLink = []
        if (item.link) {
          if (typeof item.link === 'string') {
            nuevoLink.push(item.link)
          } else {
            nuevoLink = item.link
          }
        } else if (item.descarga) {
          if (typeof item.descarga === 'string') {
            nuevoLink.push(this.obtenerLink(item.descarga))
          } else {
            item.descarga.forEach(link => {
              nuevoLink.push(this.obtenerLink(link))
            })
          }
        }
        return {
          ...item,
          link: nuevoLink,
        }
      })
    },
  },
}
</script>

<style lang="sass">
.complementario
  &__enlaces
    display: flex
    justify-content: center
    flex-wrap: wrap
    a
      margin: 0 5px
  &__btn
    font-size: 1.5em
    line-height: 1em
table
  width: calc(100% - 1px)
  min-width: 800px
  thead
    background-color: $color-sistema-e
    th
      border-color: $color-sistema-e
  th, td
    padding: 25px 20px
    text-align: center
</style>
