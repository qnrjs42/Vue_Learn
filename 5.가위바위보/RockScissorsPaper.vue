<template>
  <div> <!-- vue-css 태그는 카밀코드로 작성 예) backgroundImage yes background-image no -->
    <div id="computer" :style="computedStyleObject"></div>
    <div>
      <button @click="onClickButton('바위')">바위</button>
      <button @click="onClickButton('가위')">가위</button>
      <button @click="onClickButton('보')">보</button>

    </div>
    <div>{{result}}</div>
    <div>현재 {{score}}점</div>
    <lifecycle-example v-if="true" />
  </div>
</template>

<script>
const rspCoords = {
  바위: '0',
  가위: '-142px',
  보 : '-284px',
};

const scores = {
  가위: 1,
  바위: 0,
  보: -1,
};

const computerChoice = (imgCoord) => {
  return Object.entries(rspCoords).find((v) => {
    return v[1] === imgCoord;
  })[0];
};

  let interval = null;
  export default {
    data() {
      return {
        imgCoord: rspCoords.바위,
        result: '',
        score: 0,
      };
    },
    computed: { // 데이터 계산같은거 할 때 성능적인 면에서 효과적임
      computedStyleObject() {
        return {
          background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0`,
        };
      },
    },
    methods: {
      changeHand() { // 이미지 계속 바뀜 0.1초마다
        interval = setInterval(() => {
          if(this.imgCoord === rspCoords.바위) {
            this.imgCoord = rspCoords.가위;
          } else if(this.imgCoord === rspCoords.가위) {
            this.imgCoord = rspCoords.보;
          } else if(this.imgCoord === rspCoords.보) {
            this.imgCoord = rspCoords.바위;
          }
        }, 100);
      },
      onClickButton(choice) { // 바위, 가위, 보 버튼 클릭했을 때
        clearInterval(interval); // 바뀌는 이미지 멈추기 위해
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(this.imgCoord)];
        const diff = myScore - cpuScore;
        if(diff === 0) {
          this.result = '비겼습니다.';
        } else if([-1,2].includes(diff)) {
          this.result = '이겼습니다.';
          this.score += 1;
        } else {
          this.result = '졌습니다.';
          this.score -= 1;
        }
        setTimeout(() => {
          this.changeHand();
        })
      },
    },
    beforeCreated() {
      console.log('beforeCreated');
    },
    created() { // 화면에 보여주기 전
      console.log('created');
    },
    beforeMounted() {
      console.log('beforeMounted');
    },
    mounted() { // 화면에 보여준 후
      console.log('mounted');
      this.changeHand();
    },
    beforeUpdate() {
      console.log('beforeUpdated');
    },
    updated() { // 화면에 바뀔 때
      console.log('updated');
    },
    beforeDestory() { // 사용한 라이프사이클 메모리 누수 위해 제거
      console.log('beforeDestoryed');
      clearInterval(interval);
    },
    destoryed() { // 화면에서 사라질 때
      console.log('destoryed');
    }
  };
</script>
<!--
  scoped는 vue의 컴포넌트에 유효한 css가 적용이 되고
  scoped가 없으면 기본적인 css
-->
<style scoped>
  #computer {
    width: 142px;
    height: 200px;
    background-position: 0 0;
  }
</style>
