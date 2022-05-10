<template>
  <b-button @click="onExport">Выгрузить в CSV</b-button>
</template>

<script>
export default {
  methods: {
    onExport() {
      const csvEncode = '\ufeff'
      const fileName = `export_${new Date().getTime()}.csv`

      const data = this.$store.getters.getFakeData
      let csvContent = ''

      const headers = Object.keys(data[0]).join(',') + '\n'
      csvContent += headers

      data.forEach(row => {
        csvContent += Object.values(row).join(',') + '\n'
      })

      const downloadLink = document.createElement('a')
      const blob = new Blob([csvEncode + csvContent], {
        type: 'text/csv;charset=utf-8',
      })
      downloadLink.download = fileName
      downloadLink.href = window.URL.createObjectURL(blob)
      downloadLink.onclick = function (e) {
        document.body.removeChild(e.target)
      }
      downloadLink.style.display = 'none'
      document.body.appendChild(downloadLink)
      downloadLink.click()
    },
  },
}
</script>
