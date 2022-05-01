<template>
  <div class="form-controls">
    <b-form-input
      v-model="numberOfEntries"
      placeholder="Всего записей"
    ></b-form-input>

    <b-form-input
      v-model="entriesPerPage"
      placeholder="Записей на страницу"
    ></b-form-input>

    <b-form-input
      v-model="variantsInputString"
      placeholder="Перечень вариантов"
    ></b-form-input>

    <b-button @click="onApplyFakeData">Применить</b-button>

    <b-button @click="onResetFakeData">Сбросить</b-button>
  </div>
</template>

<script>
const DEFAULT_NUMBER_OF_ENTRIES = 4
const DEFAULT_ENTRIES_PER_PAGE = 4
const DEFAULT_VARIANTS_INPUT_STRING = 'Яблоки, Груши, Томаты'

export default {
  data() {
    return {
      numberOfEntries: '',
      entriesPerPage: '',
      variantsInputString: '',
    }
  },
  created() {
    this.onResetFakeData()
  },
  methods: {
    createFakeData(length, valuesString) {
      const randomValues = valuesString.split(',').map(s => s.trim())
      const numberOfValues = randomValues.length

      const result = []

      // start from 1
      for (let i = 1; i <= length; i++) {
        result.push({
          id: i,
          name: `name ${i}`,
          rand: randomValues[Math.floor(Math.random() * numberOfValues)],
        })
      }
      return result
    },
    onApplyFakeData() {
      const fakeData = this.createFakeData(
        Number(this.numberOfEntries),
        this.variantsInputString
      )
      this.$store.commit('setFakeData', fakeData)
      this.$store.commit('setEntriesPerPage', Number(this.entriesPerPage))
    },
    onResetFakeData() {
      this.setDefaultValues()
      this.onApplyFakeData()
    },
    setDefaultValues() {
      this.numberOfEntries = DEFAULT_NUMBER_OF_ENTRIES
      this.entriesPerPage = DEFAULT_ENTRIES_PER_PAGE
      this.variantsInputString = DEFAULT_VARIANTS_INPUT_STRING
    },
  },
}
</script>
