<template>
  <div>
    <b-button-group>
      <b-button
        v-for="b in buttons"
        :key="b.displayName"
        @click="b.clickHandler"
        >{{ b.displayName }}</b-button
      >
    </b-button-group>

    <component
      :is="selectedChartType"
      :chart-data="chartData"
      :chart-options="chartOptions"
    ></component>
  </div>
</template>

<script>
import { Pie, Bar } from 'vue-chartjs/legacy'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  BarElement,
  LinearScale,
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  LinearScale,
  ArcElement,
  CategoryScale
)

const PIE = 'Pie'
const BAR = 'Bar'
const CHARTS = {
  [PIE]: { componentName: PIE, displayName: 'Круговая', chartOptions: {} },
  [BAR]: {
    componentName: BAR,
    displayName: 'Столбчатая',
    chartOptions: {
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  },
}

export default {
  components: { Pie, Bar },
  data() {
    return {
      selectedChartType: PIE,
    }
  },
  computed: {
    buttons() {
      return Object.values(CHARTS).map(c => ({
        displayName: c.displayName,
        clickHandler: () => (this.selectedChartType = c.componentName),
      }))
    },
    chartOptions() {
      return CHARTS[this.selectedChartType].chartOptions
    },
    chartData() {
      const rawData = this.$store.getters.getFakeDataForGraph
      return {
        labels: Object.keys(rawData),
        datasets: [
          {
            label: false,
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
