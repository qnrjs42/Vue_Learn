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

        // 칸에 두 번 클릭되었을 때 넘어감
        if(this.cellData) return;

        const rootData = this.$root.$data;
        this.$set(rootData.tableData[this.rowIndex], this.cellIndex, rootData.turn);

        // 가로줄, 세로줄, 대각선 순서대로 3목이 되었는지 체크
        let win = false;
        if (rootData.tableData[this.rowIndex][0] === rootData.turn && rootData.tableData[this.rowIndex][1] === rootData.turn && rootData.tableData[this.rowIndex][2] === rootData.turn) {
          win = true;
        }
        if (rootData.tableData[0][this.cellIndex] === rootData.turn && rootData.tableData[1][this.cellIndex] === rootData.turn && rootData.tableData[2][this.cellIndex] === rootData.turn) {
          win = true;
        }
        if (rootData.tableData[0][0] === rootData.turn && rootData.tableData[1][1] === rootData.turn && rootData.tableData[2][2] === rootData.turn) {
          win = true;
        }
        if (rootData.tableData[0][2] === rootData.turn && rootData.tableData[1][1] === rootData.turn && rootData.tableData[2][0] === rootData.turn) {
          win = true;
        }

        if (win) { // 이긴 경우: 3줄 달성
          rootData.winner = rootData.turn; // 승자 기록
          rootData.turn = 'O'; // 데이터 초기화
          rootData.tableData = [['', '', ''], ['', '', ''], ['', '', '']]; // 데이터 초기화
        } else { // 무승부
          let all = true; // all이 true면 무승부라는 뜻
          rootData.tableData.forEach((row) => { // 무승부 검사
            row.forEach((cell) => {
              if (!cell) {
                all = false;
              }
            });
          });
          if (all) { // 무승부
            rootData.winner = '';
            rootData.turn = 'O';
            rootData.tableData = [['', '', ''], ['', '', ''], ['', '', '']];
          } else {
            rootData.turn = rootData.turn === 'O' ? 'X' : 'O';
          }
        }
      }
    }
  };
</script>
