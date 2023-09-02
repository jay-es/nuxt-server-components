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
  <div v-html="html" />
</template>

<style scoped>
div {
  color: #15ca82;
}
</style>
