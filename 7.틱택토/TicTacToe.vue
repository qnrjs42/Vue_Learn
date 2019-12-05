<template>
  <table-component :table-data="tableData" />
</template>

<script>
  import TableComponent from './Tablecomponent';
  export default {
    components: {
      TableComponent
    },
    data() {
      return {
        tableData: [
          ['', '', ''],
          ['', '', ''],
          ['', '', ''],
        ]
      };
    },
    computed: { // 데이터 계산같은거 할 때 성능적인 면에서 효과적임
    },
    methods: {

    },
    mounted() { // 화면에 보여준 후
    },

    beforeDestroy() { // 사용한 라이프사이클 메모리 누수 위해 제거

    },

  };
</script>
<!--
  scoped는 vue의 컴포넌트에 유효한 css가 적용이 되고
  scoped가 없으면 기본적인 css
-->
<style scoped>

</style>
