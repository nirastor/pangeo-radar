<template>
  <div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <b-table
      id="my-table"
      :items="items"
      :fields="fields"
      hover
      :per-page="perPage"
      :current-page="currentPage"
      label-sort-asc=""
      label-sort-desc=""
      label-sort-clear=""
      small
    ></b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
    }
  },
  computed: {
    perPage() {
      return this.$store.getters.getEntriesPerPage
    },
    items() {
      return this.$store.getters.getFakeData
    },
    fields() {
      return Object.keys(this.$store.getters.getFakeData[0]).map(k => ({
        key: k,
        sortable: true,
      }))
    },
    rows() {
      return this.items.length
    },
  },
}
</script>

<style scoped>
table >>> thead {
  user-select: none;
}
</style>
