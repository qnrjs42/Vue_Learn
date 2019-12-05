<template>
  <td @click="onClickTd">
    {{cellData}}
  </td>

</template>

<script>
  export default {
    props: {
      cellData: String,
      rowIndex: Number,
      cellIndex: Number,
    },
    methods: {
      onClickTd() {
        //console.log(this.$root.$data); // 최상위 부모의 데이터(TicTacToe)
        //console.log(this.$parent.$data); // 직속 부모의 데이터(TrComponent)
        // this.$set을 써야 배열의 데이터 수정이 가능
        const rootData = this.$root.$data;
        this.$set(rootData.tableData[this.rowIndex], this.cellIndex, rootData.turn);
        rootData.turn = rootData.turn === 'O' ? 'X' : 'O';

      }
    }
  };
</script>
