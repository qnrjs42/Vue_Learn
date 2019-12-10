<template>
  <div>
    <div>
      <router-link to="/number-baseball">숫자야구</router-link>
      <router-link to="/response-check">반응속도</router-link>
      <router-link to="/rock-scissors-paper">가위바위보</router-link>
      <router-link to="/lotto-generator">로또생성기</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import router from './routes';

  export default {
    router,

  };
</script>
<!--
  scoped는 vue의 컴포넌트에 유효한 css가 적용이 되고
  scoped가 없으면 기본적인 css
-->
<style>
table {
  border-collapse: collapse;
}
td {
  border: 1px solid black;
  width: 40px;
  height: 40px;
  text-align: center;
}

</style>
