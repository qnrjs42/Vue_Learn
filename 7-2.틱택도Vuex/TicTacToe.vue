<template>
  <div>
    <table-component :table-data="tableData" />
    <div>
      {{turn}}님의 턴입니다.
    </div>
    <div v-if="winner">
      {{winner}}님의 승리!
    </div>
  </div>
</template>

<script>
  import TableComponent from './TableComponent';

  export default {
    components: {
      TableComponent,
    },
    data() {
      return {
        tableData: [
          ['', '', ''],
          ['', '', ''],
          ['', '', ''],
        ],
        turn: 'O',
        winner: '',
      };
    },
    computed: { // 데이터 계산같은거 할 때 성능적인 면에서 효과적임
    },
    methods: {
      onChangeData() {
        // this.tableData[1][0] = 'X'; 직접적으로 값이 바뀌지 않아 Vue.set을 써야함
        // this.$set === Vue.set 동일
        this.$set(this.tableData[1], 0, 'X');
      },
      onClickTd(rowIndex, cellIndex) {
        //console.log(this.$root.$data); // 최상위 부모의 데이터(TicTacToe)
        //console.log(this.$parent.$data); // 직속 부모의 데이터(TrComponent)
        // this.$set을 써야 배열의 데이터 수정이 가능


      }
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
