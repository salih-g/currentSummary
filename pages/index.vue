<template>
  <div class="container">
    <h1 class="title">Current Summary</h1>
    <h3 v-if="postCreated" class="postCreated">Post Created</h3>
    <div class="inputs">
      <input
        type="text"
        id="title"
        placeholder="Title"
        class="input"
        v-model="postData.title"
      />
      <textarea
        type="text"
        id="question"
        rows="5"
        class="input-textarea"
        placeholder="What is your question?"
        v-model="postData.question"
      />
    </div>
    <input type="submit" value="Submit" class="buttton" @click="handleCreate" />

    <div class="card" v-for="(question, key) in questions" :key="key">
      <div class="ovelay"></div>
      <header class="user">
        <div class="user-info">
          <h2 class="user-info-name">{{ question.title }}</h2>
          <p class="user-info-time">4 min ago</p>
        </div>
      </header>
      <main>
        <p>{{ question.question }}</p>
      </main>
      <section>
        <p class="comment">10 comment</p>
      </section>
    </div>
  </div>
</template>

<script>
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
    await this.$axios.$get("").then((data) => {
      this.questions = data;
    });
  },
  methods: {
    async handleCreate() {
      this.$axios.$post("/", this.postData).then(() => {
        this.postData.title = "";
        this.postData.question = "";
        this.postCreated = true;
        setTimeout(() => (this.postCreated = false), 2000);
      });
    },
  },
};
</script>

<style>
.container {
  width: 90%;
  margin: 0 auto;
  text-align: center;
}
.title {
  font-size: 20px;
  text-transform: capitalize;
  color: #c6e1ed;
}
.postCreated {
  color: green;
}
.inputs {
  width: 50%;
  margin: 0 auto;
}
.input {
  display: flex;
  align-self: flex-start;

  width: 50%;
  height: 30px;
  margin-bottom: 5px;
  border-radius: 5px;
  padding: 10px;
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
  width: 80%;
}
.card header.user {
  display: flex;
  gap: 12px;
}
.card header .user-info-name {
  letter-spacing: 0.4px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
}
.card header .user-info-time {
  font-size: 12px;
  color: #ffffff96;
}
.card main p {
  font-size: 14px;
  color: #fff;
  margin-top: 16px;
  line-height: 1.7;
}
.card section {
  margin-top: 20px;
  display: flex;
  align-items: center;
}

.card section p {
  color: #ffff;
  font-size: 12px;
  margin-left: 10px;
}
.card section p.comment {
  margin-left: auto;
}
</style>
