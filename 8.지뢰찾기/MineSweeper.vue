<template>
  <div>
    <mine-form />
    <div>{{timer}}</div>
    <table-component />
    <div>{{result}}</div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import store, { INCREMENT_TIMER } from './store';
  import TableComponent from './TableComponent';
  import MineForm from './MineForm';

  let interval;

  export default {
    store,
    components: {
      TableComponent,
      MineForm,
    },

    computed: { // 데이터 계산같은거 할 때 성능적인 면에서 효과적임
      ...mapState(['timer', 'result', 'halted']),
    },
    methods: {
    },
    watch: {
      halted(value, oldValue) {
        if(value === false) { // false 일 때 게임 시작
          interval = setInterval(() => {
            this.$store.commit(INCREMENT_TIMER);
          }, 1000); // 자바스크립트의 타이머는 정확하지 않을 수도 있다
        } else { // 게임 중단
          clearInterval(interval);
        }
      }
    }

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
