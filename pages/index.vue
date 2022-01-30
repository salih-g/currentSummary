<template>
  <div class="container">
    <h1 class="text-center">Current Summary</h1>
    <div class="form">
      <div class="card text-white bg-primary mb-3" style="max-width: 50%">
        <div class="card-header">
          <input
            class="form-control form-control-sm"
            type="text"
            placeholder="Title"
            id="inputSmall"
            v-model="postData.title"
            style="max-width: 25%"
          />
        </div>
        <div class="card-body">
          <p class="card-text">
            <textarea
              type="text"
              id="question"
              rows="5"
              class="input-textarea"
              placeholder="What is your question?"
              v-model="postData.question"
            />
          </p>
          <button
            type="button"
            class="btn btn-secondary cz-color-16777215 cz-color-4472634 cz-color-0"
            @click="handleCreate"
          >
            Submit
          </button>
        </div>
      </div>
    </div>

    <div v-for="(question, key) in questions" :key="key">
      <div class="card text-white bg-primary mb-3" style="max-width: 80%">
        <div class="card-header">
          <h5 class="card-title">
            {{ question.title }}
          </h5>
          <h6 class="card-subtitle mb-2 text-muted">
            {{ calcTime(new Date(question.updatedAt)) }} ago
          </h6>
        </div>
        <div class="card-body">
          <p class="card-text">
            {{ question.question }}
          </p>
          <NuxtLink :to="`/question/${question._id}`">
            <div class="text-end">
              {{ question.comments.length }} answer
            </div></NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { timeSince } from "../utils";
export default {
  name: "IndexPage",
  data() {
    return {
      questions: [],
      postData: {
        title: "",
        question: "",
      },
      postCreated: false,
    };
  },
  async created() {
    this.getQuestions();
  },
  methods: {
    async getQuestions() {
      await this.$axios.$get("/").then((data) => {
        this.questions = data;
      });
    },
    async handleCreate() {
      await this.$axios.$post("/", this.postData).then(() => {
        this.postData.title = "";
        this.postData.question = "";
        this.postCreated = true;
        setTimeout(() => (this.postCreated = false), 2000);
        this.getQuestions();
      });
    },
    calcTime(date) {
      return timeSince(date);
    },
  },
};
</script>

<style>
.input-textarea {
  width: 100%;
  height: 100%;
}
</style>
