<template>
  <Pie :chart-data="chartData" :chart-options="chartOptions" />
</template>

<script>
// start work with additional task
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
            backgroundColor: [
              '#4e79a7',
              '#f28e2c',
              '#e15759',
              '#76b7b2',
              '#59a14f',
              '#edc949',
              '#af7aa1',
              '#ff9da7',
              '#9c755f',
              '#bab0ab',
            ],
            data: Object.values(rawData),
          },
        ],
      }
    },
  },
}
</script>
