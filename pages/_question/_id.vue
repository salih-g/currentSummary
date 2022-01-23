<template>
  <div class="container">
    <h1>{{ this.id }}</h1>
  </div>
</template>

<script>
export default {
  name: "Question",
  async asyncData({ params }) {
    const id = params.id;
    return { id };
  },
};
</script>
