<template>
  <header>
    <img class="logo" src="../assets/logo.png"></img>
    <h1>Review Portal</h1>

  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
header {
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
  max-height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo{
  max-width: 50px;
  margin-right: 10px;
}
</style>
