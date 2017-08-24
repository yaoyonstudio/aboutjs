<template>
  <div class="main myHeader">
    <img class="logo" src="/static/img/js.jpg" />
    <h2>About Javascript</h2>
  </div>
</template>

<script>
export default {
  name: 'myHeader'
}
</script>

<style scoped lang="scss">
.myHeader {
  width: 100%;
  height: 8rem;
  background-color: #353130;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  h2 {
    color: #ffffff;
    line-height: 8rem;
    text-align: center;
    font-size: 1.8rem;
    font-family: 'Arial';
  }
  .logo {
    height: 6rem;
  }
}
</style>
