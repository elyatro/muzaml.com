<template>
  <div id="loading">
    <img class="" src="../assets/img/logo.png" alt="">
  </div>
</template>

<script setup>
  onMounted(() => {
    function onReady(callback) {
      var intervalId = window.setInterval(function () {
        if (document.getElementsByTagName('body')[0] !== undefined) {
          window.clearInterval(intervalId);
          callback.call(this);
        }
      }, 1000);
    }

    function setVisible(selector, visible) {
      document.querySelector(selector).style.display = visible ? 'block' : 'none';
    }

    onReady(function () {
      setVisible('.page', true);
      setVisible('#loading', false);
    });
  })
</script>

<style>
#loading {
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: #264653;
}
</style>