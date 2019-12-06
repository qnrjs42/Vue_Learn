import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex); // Vue와 Vuex 연결 || this.$store

export const SET_WINNER = 'SET_WINNER'; // import { SET_WINNER, CLICK_CELL } from './store';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';
export const NO_WINNER = 'NO_WINNER';

export default new Vuex.Store({ // import store from './store';
  state: {
    tableData: [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ],
    turn: 'O',
    winner: '',
  }, // vue의 data와 비슷
  getters: { // state에서 추가적인 작업할 때 사용

  }, // vue의 computed와 비슷
  mutations: { // mutations의 함수명은 대문자로 작성하는 것이 약속
    [SET_WINNER](state, winner) { // 승자 선정
      state.winner = winner;
    },
    [CLICK_CELL](state, { row, cell }) { // 현재 턴 사용자가 셀 클릭 시
      Vue.set(state.tableData[row], cell, state.turn);
    },
    [CHANGE_TURN](state) { // 승자 변경
      state.turn = state.turn === 'O' ? 'X' : 'O';
    },
    [RESET_GAME](state) { // 게임 초기화
      state.turn = 'O';
      state.tableData = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ];
    },
    [NO_WINNER](state) {
      state.winner = '';
    }
  }, // state를 수정할 때 사용해요. 동기적으로
  actions: {

  }, // 비동기 사용할 때, 여러 뮤테이션을 연달아 실행할 때
});
