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
  import store from './store';
  import TableComponent from './TableComponent';
  import MineForm from './MineForm';


  export default {
    store,
    components: {
      TableComponent,
      MineForm,
    },

    computed: { // 데이터 계산같은거 할 때 성능적인 면에서 효과적임
      ...mapState(['timer', 'result']),
    },
    methods: {
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
