<template>
  <HeaderComponent />
  <h1>
    Somos um ambiente único para anúncios de venda e aluguel de imóveis
  </h1>
  <section>
    <ul>
      <li v-for="obj in objecties" :key="obj.name">
        <div>
          <h2>{{ obj.name }}</h2>
          <p>{{ obj.description }}</p>
        </div>
      </li>
    </ul>
  </section>

</template>

<script lang="ts">
const objecties = [
  {
    "name": "Missão",
    "description": "Conectar, organizar e inspirar a comunidade geek brasileira através de uma plataforma que centraliza e valoriza sua jornada no universo de mangás, animes, livros, jogos e HQs, transformando paixão em conexões significativas.",
  },
  {
    "name": "Visão",
    "description": "Ser a plataforma de referência para a comunidade geek latino-americana até 2028, reconhecida por promover descobertas, organização e conexões autênticas entre fãs, respeitando a diversidade de interesses dentro da cultura pop japonesa e geek global."
  },
  {
    "name": "Valores",
    "description": "saodeoadead"
  }
]
import HeaderComponent from '@/components/header/Header.vue';

export default {
  name: "SobreNosPage",

  components: {
    HeaderComponent,
  },

  data(){
    return {
      objecties
    }
  },

}
</script>
