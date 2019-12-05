import Vue from 'vue';
import Vuex from 'vuex';

export const SET_WINNER = 'SET_WINNER'; // import { SET_WINNER, CLICK_CELL } from './store';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TRUN = 'CHANGE_TRUN';
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
  getters: {

  }, // vue의 computed와 비슷
  mutations: { // mutations의 함수명은 대문자로 작성하는 것이 약속
    SET_WINNER(state, winner) { // 승자 선정
      state.winner = winner;
    },
    CLICK_CELL(state, {row, cell}) { // 현재 턴 사용자가 셀 클릭 시
      Vue_set(state.tableData[row], cell, state.turn);
    },
    CHANGE_TURN(state) { // 승자 변경
      state.turn = state.turn === 'O' ? 'X' : 'O';
    },
    RESET_GAME(state) { // 게임 초기화
      state.turn = 'O';
      state.tableData = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ];
    },
    No_WINNER(state) { // 무승부
      state.winner = '';
    }
  }, // state를 수정할 때 사용. 동기적으로
  actions: {

  }, // 비동기 사용할 때, 여러 뮤테이션을 연달아 실행할 때
});
