<template>
  <td @click="onClickTd">
    {{cellData}}
  </td>

</template>

<script>
  import { CLICK_CELL, SET_WINNER, CHANGE_TRUN } from './store';
  export default {
    props: {
      cellData: String,
      rowIndex: Number,
      cellIndex: Number,
    },
    methods: {
      onClickTd() {
        // 칸에 두 번 클릭되었을 때 넘어감
        if(this.cellData) return;

        this.$store.commit(CLICK_CELL, { row:this.row, cell:this.cellIndex });

        // 가로줄, 세로줄, 대각선 순서대로 3목이 되었는지 체크
        let win = false;
        if (this.tableData[this.rowIndex][0] === this.turn && this.tableData[this.rowIndex][1] === this.turn && this.tableData[this.rowIndex][2] === this.turn) {
          win = true;
        }
        if (this.tableData[0][this.cellIndex] === this.turn && this.tableData[1][this.cellIndex] === this.turn && this.tableData[2][this.cellIndex] === this.turn) {
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
            this.$store.commit(CHANGE_TRUN);
          }
        }
      }
    }
  };
</script>
