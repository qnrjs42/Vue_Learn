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
  import EventBus from './EventBus';

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

        // 칸에 두 번 클릭되었을 때 넘어감
        if(this.cellData) return;

        this.$set(this.tableData[rowIndex], cellIndex, this.turn);

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
          this.winner = this.turn; // 승자 기록
          this.turn = 'O'; // 데이터 초기화
          this.tableData = [['', '', ''], ['', '', ''], ['', '', '']]; // 데이터 초기화
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
            this.winner = '';
            this.turn = 'O';
            this.tableData = [['', '', ''], ['', '', ''], ['', '', '']];
          } else {
            this.turn = this.turn === 'O' ? 'X' : 'O';
          }
        }
      }
    },

    created() {
      EventBus.$on('clickTd', this.onClickTd);
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
