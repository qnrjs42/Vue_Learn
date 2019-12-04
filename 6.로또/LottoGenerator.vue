<template>
  <div> <!-- vue-css 태그는 카밀코드로 작성 예) backgroundImage yes background-image no -->
    <div>
      당첨숫자
    </div>
    <div id="결과창">
      <lotto-ball v-for="ball in winBalls" number="5"></lotto-ball>
    </div>
    <div>
      보너스
    </div>
    <lotto-ball v-if="bonus"></lotto-ball>
    <button v-if="redo">한 번 더!</button>
  </div>
</template>

<script>
  import LottoBall from './LottoBall';

  function getWinNumbers() { // 랜덤 숫자 추출
    console.log('getWinNumbers');
    const candidate = Array(45).fill().map((v,i) => i+1);
    const shuffle = [];
    while(candidate.length > 0) {
      shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length -1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p-c);
    return [...winNumbers, bonusNumber];
  }

  export default {
    components: {
      /*
        'lotto-ball': LottoBall 이 부분을
        LottoBall로 생략 가능

        'lotto-ball'은 케밥케이스로 구분한 것
        LottoBall은 파스칼케이스로 구분했지만 이름이 같기때문에 생략 가능

        이름이 다르면 생략 불가능
      */
      LottoBall,
    }
    data() {
      return {
        winNumbers: getWinNumbers(),
        winBalls: [],
        bonus: null,
        redo: false,
      };
    },
    computed: { // 데이터 계산같은거 할 때 성능적인 면에서 효과적임
    },
    methods: {
    },
    mounted() { // 화면에 보여준 후
      console.log('mounted');
      this.changeHand();
    },
    
    beforeDestory() { // 사용한 라이프사이클 메모리 누수 위해 제거
      console.log('beforeDestoryed');
      clearInterval(interval);
    },

  };
</script>
<!--
  scoped는 vue의 컴포넌트에 유효한 css가 적용이 되고
  scoped가 없으면 기본적인 css
-->
<style scoped>

</style>
