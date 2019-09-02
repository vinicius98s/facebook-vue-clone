<template>
  <li>
    {{ tech }}
    <input type="button" value="Remover" @click="onDelete(tech)" />
  </li>
</template>

<script>
export default {
  name: "TechItem",
  props: {
    tech: {
      type: String,
      default: "Oculto"
    },
    onDelete: {
      type: Function,
      required: true
    }
  }
};
</script>

<style>
</style>