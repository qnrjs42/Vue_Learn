<template>
  <td @click="onClickTd">
    {{cellData}}
  </td>

</template>

<script>
  import { mapState } from 'vuex';
  import { CLICK_CELL, SET_WINNER, CHANGE_TURN, NO_WINNER } from './store';
  export default {
    props: {
      rowIndex: Number,
      cellIndex: Number,
    },
    computed: {
      ...mapState({ // ...mapState 사용하여 간단하게 데이터 호출
        tableData: state => state.tableData,
        turn: state => state.turn,
        cellData(state) {
          return state.tableData[this.rowIndex][this.cellIndex];
        },
      }),
      // cellData() {
      //   return this.$store.state.tableData[this.rowIndex][this.cellIndex];
      // },
      // tableData() {
      //   return this.$store.state.tableData;
      // },
      // turn() {
      //   return this.$store.state.turn;
      // }
    },
    methods: {

    }
  };
</script>
