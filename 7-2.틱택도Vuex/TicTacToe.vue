<template>
  <div>
    <div>
      {{turn}}님의 턴입니다.
    </div>
    <table-component>
      <tr v-for="(rowData, rowIndex) in tableData" :key="rowIndex">
        <td @click="onClickTd(rowIndex, cellIndex)" v-for="(cellData, cellIndex) in rowData" :key="cellIndex">
          {{cellData}}
        </td>
      </tr>
    </table-component>
    <div v-if="winner">
      {{winner}}님의 승리!
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import store, { CLICK_CELL, CHANGE_TURN, RESET_GAME, NO_WINNER, SET_WINNER } from './store';

  export default {
    store,

    computed: { // 데이터 계산같은거 할 때 성능적인 면에서 효과적임
      ...mapState(['winner', 'turn', 'tableData']), // ...mapState 사용하여 간단하게 데이터 호출
      // ...mapState({
      //   winner: (state) {
      //     return state.winner, + this.data;
      //   }
      //   turnState: 'turn',
      // })
      // winner() {
      //   return this.$store.state.winner,
      // },
      // turn() {
      //   return this.$store.state.turn,
      // },
    },
    methods: {
      onClickTd(rowIndex, cellIndex) {
        // 칸에 두 번 클릭되었을 때 넘어감
        if(this.cellData) return;

        this.$store.commit(CLICK_CELL, { row:rowIndex, cell:cellIndex });

        // 가로줄, 세로줄, 대각선 순서대로 3목이 되었는지 체크
        let win = false;
        if (this.tableData[rowIndex][0] === this.turn && this.tableData[rowIndex][1] === this.turn && this.tableData[rowIndex][2] === this.turn) {
          win = true;
        }
        if (this.tableData[0][cellIndex] === this.turn && this.tableData[1][cellIndex] === this.turn && this.tableData[2][cellIndex] === this.turn) {
          win = true;
        }
        if (this.tableData[0][0] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][2] === this.turn) {
          win = true;
        }
        if (this.tableData[0][2] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][0] === this.turn) {
          win = true;
        }

        if (win) { // 이긴 경우: 3줄 달성
          this.$store.commit(SET_WINNER, this.turn); // 승자 기록
          this.$store.commit(RESET_GAME);
        } else { // 무승부
          let all = true; // all이 true면 무승부라는 뜻
          this.tableData.forEach((row) => { // 무승부 검사
            row.forEach((cell) => {
              if (!cell) {
                all = false;
              }
            });
          });
          if (all) { // 무승부
            this.$store.commit(NO_WINNER);
            this.$store.commit(RESET_GAME);
          } else {
            this.$store.commit(CHANGE_TURN);
          }
        }
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
