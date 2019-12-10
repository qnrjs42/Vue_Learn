import Vue from 'vue';
import VueRouter from 'vue-router';
import NumberBaseball from '../3.숫자야구/NumberBaseball';
import ResponseCheck from '../4.반응속도체크/ResponseCheck';

Vue.use(VueRouter);

export default new VueRouter ({
  routes: [
    { path: '/number-baseball', component: NumberBaseball },
    { path: '/response-check', component: ResponseCheck },
    { path: '/rock-scissors-paper', component: RockScissorsPaper },
    { path: '/lotto-generator', component: LottoGenerator },
  ],
});
