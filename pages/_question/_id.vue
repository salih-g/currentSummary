<template>
  <div>
    <NuxtLink to="/" class="link back"> Go Back</NuxtLink>
    <div class="container">
      <div class="card text-white bg-primary mb-3" style="max-width: 60%">
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
          <p class="card-text">
            <textarea
              type="text"
              id="question"
              rows="5"
              class="input-textarea"
              placeholder="What is your answer?"
              v-model="postData.answer"
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

      <div v-for="(answer, key) in question.comments" :key="key">
        <div class="card text-white bg-primary mb-3" style="max-width: 80%">
          <div class="card-body">
            <p class="card-text">
              {{ answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { timeSince } from "../../utils";

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

    calcTime(date) {
      return timeSince(date);
    },
  },
};
</script>
