<template>
  <div class="container mt-5">
    <div class="mb-5">
      <FormControls />
    </div>

    <div class="row">
      <div class="col col-6 pe-5">
        <ResultTable />
      </div>
      <div class="col col-6 ps-5">
        <ResultGraph />
      </div>
    </div>
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
