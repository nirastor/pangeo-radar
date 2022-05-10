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
import { Pie, Bar, Radar } from 'vue-chartjs/legacy'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  BarElement,
  LinearScale,
  PointElement,
  RadialLinearScale,
  LineElement,
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  LinearScale,
  ArcElement,
  CategoryScale,
  PointElement,
  RadialLinearScale,
  LineElement
)

const PIE = 'Pie'
const BAR = 'Bar'
const RADAR = 'Radar'
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
  [RADAR]: {
    componentName: RADAR,
    displayName: 'Радар',
    chartOptions: {
      radialLinearScale: {
        ticks: {
          min: 0,
          max: 100,
        },
      },
    },
  },
}

export default {
  components: { Pie, Bar, Radar },
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
