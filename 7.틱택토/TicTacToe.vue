<template>
  <div>
    <table-component :table-data="tableData" />
    <div>
      {{turn}}님의 턴입니다.
    </div>
  </div>
</template>

<script>
  import TableComponent from './TableComponent';
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
        ],
        turn: 'O',
      };
    },
    computed: { // 데이터 계산같은거 할 때 성능적인 면에서 효과적임
    },
    methods: {
      onChangeData() {
        // this.tableData[1][0] = 'X'; 직접적으로 값이 바뀌지 않아 Vue.set을 써야함
        // this.$set === Vue.set 동일
        this.$set(this.tableData[1], 0, 'X');
      }
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
