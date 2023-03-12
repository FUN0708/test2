<template>
<div id="BaseInfo">
  患者基本信息
  {{physiologicalParams.weight}}
  {{physiologicalParams.height}}
</div>
</template>

<script>
export default {
  name: "BaseInfo",
  props: ["physiological-params"],
  data() {
    return {
    }
  },
  created() {
  }
}
</script>

<style scoped>

</style>
