<template>
<div id="story">
  <v-img :src='require("../assets/imgs/trans.jpg")' ref="background"></v-img>
  <div id="par-1" ref="par1" class="my-4 pa-2" style="background-color: rgba(231,245,230,0.21);">
    <p class="story-text text-justify">
      <span>Faccio consegne a domicilio per Marco's Pizza. Una notte ho dovuto consegnare una pizza in una zona
      in mezzo ai boschi.<br>Arrivo all'abitazione, prendo il cibo dalla macchina, lo scontrino e mi avvio verso la porta.
      Una magra signora di mezz'età esce dal retro e mi dice 'Hey! Siamo giù nel garage'.</span><br>

      <span>Questo è stato il primo campanello d'allarme.</span><br>

      <span>Titubante, vado verso il garage, senza passare l'uscio. Dentro al garage, due uomini
      anziani seduti su sedie reclinabili, vestiti in abiti mimetici e sulle pareti almeno 5 bandiere dei confederati americani,
       6 teste di cervo e un poster di Trump del 2016.</span>
    </p>
  <p class="story-text text-justify">
    <span>Sono transgender FTM, ho fatto del mio meglio per presentarmi come maschio. Tuttavia la donna e i due uomini continuavano
    a chiamarmi 'signora' o 'signorina'.<br>Penso che la parte più spaventosa sia stata quando uno degli uomini mi ha chiesto di entrare nel garage.
    Ho educatamente rifiutato e l'ho informato che non ci era permesso entrare nella casa o nel garage dei clienti.
    Mi ha ignorato e presto tutti e tre mi hanno invitato nuovamente ad entrare nel garage. Rifiutando ancora, gli ho dato la pizza e detto
    il conto. Penso mi abbiano anche dato una mancia di circa 3 dollari, che non è poi così male - sicuramente è meglio di una mazzata almeno.</span><br>

    <span>Ogni volta che ripasso da quelle strade mi vengono i brividi.</span>
  </p>
  </div>
</div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: "Story",
  props: ['boxDesc'],
  setup() {
    const handleScroll = () => {
      const scrollY = window.scrollY
      background.value.style.opacity = (100 - ((scrollY + window.innerHeight) - background.value.offsetHeight)) / 100
    }

    const background = ref(null)
    const par1 = ref(null)
    const par2 = ref(null)

    onMounted(() => {
      document.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      document.removeEventListener('scroll', handleScroll)
    })

    return {
      background,
      par1,
      par2
    }
  }

}
</script>

<style scoped>

</style>