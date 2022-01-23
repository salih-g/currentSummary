<template>
  <div class="container">
    <h1 class="title">Current Summary</h1>
    <form class="form">
      <div class="inputs">
        <input type="text" id="title" placeholder="Title" class="input" />
        <textarea
          type="text"
          id="question"
          rows="5"
          class="input-textarea"
          placeholder="Your question"
        />
      </div>
      <input type="submit" value="Submit" class="buttton" />
    </form>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  font-family: "Tomorrow", sans-serif;
}

* {
  box-sizing: border-box;
}
.container {
  width: 90%;
  margin: 0 auto;
  text-align: center;
}
.title {
  font-size: 20px;
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

  background-color: #4198d3;
  color: white;

  border: none;
  border-radius: 5px;

  cursor: pointer;
}
.title {
  text-transform: capitalize;
}

.list {
  background-color: #eeeeee;
  border-radius: 10px;

  width: 80%;
  max-width: 600px;

  padding: 10px;
  margin: 30px auto;
}

.linkPreview {
  max-width: 400px;
  margin: 0 auto;
  overflow: hidden;
}

.deleteButton {
  margin-top: 15px;
  padding: 5px 80px;

  color: white;
  font-size: 24px;
  background-color: rgb(236, 67, 146);

  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
