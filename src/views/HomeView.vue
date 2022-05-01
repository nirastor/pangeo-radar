<template>
  <div class="home">
    <FormControls />
    <ResultTable />
    <ResultGraph />
  </div>
</template>

<script>
import FormControls from '@/components/FormControls.vue'
import ResultTable from '@/components/ResultTable.vue'
import ResultGraph from '@/components/ResultGraph.vue'

export default {
  name: 'HomeView',
  components: {
    FormControls,
    ResultTable,
    ResultGraph,
  },
}
</script>
