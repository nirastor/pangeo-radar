<template>
  <div class="form-controls row align-items-start">
    <div class="col">
      <b-form-group
        class="min-height-100"
        label="Всего записей"
        invalid-feedback="Введите число больше 0"
        :state="!$v.numberOfEntries.$error"
      >
        <b-form-input v-model="numberOfEntries"></b-form-input>
      </b-form-group>
    </div>

    <div class="col">
      <b-form-group
        class="min-height-100"
        label="Записей на страницу"
        invalid-feedback="Введите число больше 0"
        :state="!$v.entriesPerPage.$error"
      >
        <b-form-input v-model="entriesPerPage"></b-form-input>
      </b-form-group>
    </div>

    <div class="col">
      <b-form-group label="Перечень вариантов">
        <b-form-input v-model="variantsInputString"></b-form-input>
      </b-form-group>
    </div>

    <div class="col">
      <b-button @click="onApplyFakeData" class="me-4 form-button-margin"
        >Применить</b-button
      >
      <b-button @click="onResetFakeData" class="form-button-margin"
        >Сбросить</b-button
      >
    </div>
  </div>
</template>

<script>
import { required, integer, minValue } from 'vuelidate/lib/validators'

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
  validations: {
    numberOfEntries: {
      required,
      integer,
      minValue: minValue(1),
    },
    entriesPerPage: {
      required,
      integer,
      minValue: minValue(1),
    },
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
      if (this.$v.$invalid) {
        return
      }

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

<style>
legend {
  text-align: left;
}
.min-height-100 {
  min-height: 100px;
}
.form-button-margin {
  margin-top: 31px;
}
</style>
