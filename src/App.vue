<script>
import ToolbarComponent from "@/news/components/toolbar.component.vue";
import FooterContent from "@/news/components/footer-content.component.vue"; // Importa el componente Footer
import CardComponent from "@/news/components/card.component.vue";
export default {
  name: 'App',
  components: {
    ToolbarComponent,
    CardComponent,
    FooterContent
  }
}
</script>

<template>
  <toolbar-component></toolbar-component>
  <card-component></card-component>
  <footer-content></footer-content>
</template>
