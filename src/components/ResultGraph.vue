<template>
  <Pie :chart-data="chartData" :chart-options="chartOptions" />
</template>

<script>
import { Pie } from 'vue-chartjs/legacy'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default {
  name: 'BarChart',
  components: { Pie },
  data() {
    return {
      chartOptions: {},
    }
  },
  computed: {
    chartData() {
      const rawData = this.$store.getters.getFakeDataForGraph
      console.log(this.$store.getters.getFakeDataForGraph)
      return {
        labels: Object.keys(rawData),
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
            data: Object.values(rawData),
          },
        ],
      }
    },
  },
}
</script>
