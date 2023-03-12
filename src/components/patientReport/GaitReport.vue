<template>
  <div id="GaitReport">
    步态参数
  {{patientInfo.patientID}}
  {{patientInfo.patientName}}
  </div>
</template>

<script>
export default {
  name: "GaitReport",
  props: ["patient-info"]
}
</script>

<style scoped>

</style>
