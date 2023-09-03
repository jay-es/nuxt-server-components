<script setup lang="ts">
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();
const string = `# my component
- markdown list
- rendered as html
- cool
`;
const html = md.render(string);
</script>

<template>
  <div>
    <slot />
    <div v-html="html" />
  </div>
</template>

<style scoped>
div {
  color: #15ca82;
}
</style>
