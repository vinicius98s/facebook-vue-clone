<template>
  <form @submit="handleSubmit">
    <p v-if="!techs.length">Adicione novas tecnologias!</p>
    <ul>
      <TechItem
        v-for="tech in techs"
        v-bind:key="tech"
        v-bind:tech="tech"
        v-bind:onDelete="handleDelete"
      />
    </ul>
    <input type="text" v-model="newTech" />
    <input type="submit" value="Enviar" />
  </form>
</template>

<script>
import TechItem from "./TechItem.vue";

export default {
  name: "TechList",
  components: {
    TechItem
  },
  data() {
    return {
      newTech: "",
      techs: []
    };
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault();
      this.techs = [...this.techs, this.newTech];
      this.newTech = "";
    },
    handleDelete(tech) {
      this.techs = this.techs.filter(t => t !== tech);
    }
  },
  mounted: function() {
    const techs = localStorage.getItem("techs");

    if (techs) {
      this.techs = JSON.parse(techs);
    }
  },
  watch: {
    techs: function(newTechs, prevTechs) {
      if (newTechs !== prevTechs) {
        localStorage.setItem("techs", JSON.stringify(newTechs));
      }
    }
  }
};
</script>

<style lang="scss" scoped>
input[type="text"] {
  margin-top: 10px;
}
</style>