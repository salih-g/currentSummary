<template>
  <div class="container">
    <NuxtLink to="/" class="link back"> Go Back</NuxtLink>
    <h1>{{ question.title }}</h1>
    <p>{{ question.question }}</p>
    <div class="form">
      <div class="inputs">
        <textarea
          type="text"
          id="question"
          rows="5"
          class="input-textarea"
          placeholder="What is your answer?"
          v-model="postData.answer"
        />
      </div>
      <input
        type="submit"
        value="Submit"
        class="buttton"
        @click="handleCreate"
      />
    </div>
    <div class="card" v-for="(answer, key) in question.comments" :key="key">
      <main>
        <p>{{ answer }}</p>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "Question",
  data() {
    return {
      question: {},
      postData: {
        answer: "",
      },
    };
  },
  async asyncData({ params }) {
    const id = params.id;
    return { id };
  },
  async created() {
    this.getQuestion();
  },
  methods: {
    async getQuestion() {
      await this.$axios.$get(`/${this.id}`).then((data) => {
        this.question = data;
      });
    },
    async handleCreate() {
      await this.$axios.$put(`/${this.id}/answer`, this.postData).then(() => {
        this.getQuestion();
      });
    },
  },
};
</script>

<style scoped>
.back {
  position: absolute;
  top: 0;
  left: 0;
}
.inputs {
  width: 50%;
  margin: 0 auto;
}
.input-textarea {
  width: 100%;
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px;
}

.buttton {
  padding: 10px 30px;
  margin-bottom: 10px;

  background-color: #c6e1ed;
  color: black;

  border: none;
  border-radius: 5px;

  cursor: pointer;
}
.card {
  border-radius: 20px;
  background: #191a1d;
  overflow: hidden;
  padding: 14px;

  margin: 10px auto;
  width: 40%;
}
</style>
