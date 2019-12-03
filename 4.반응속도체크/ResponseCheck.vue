<template>
  <div>
    <div id="screen" :class="state" @click="onClickScreen"> <!-- 'v-bind:'' -> ':'으로 생략 가능 -->
      {{message}}
    </div>
    <div v-show="result.length">
      <div>
        평균 시간: {{average}}ms <!-- 배열의 값 더하고 나누기 / 평균구하기  | 기본값 0 -->
      </div>
    <button @click="onReset">리셋</button> <!-- 'v-on:' -> '@' -->
    </div>
  </div>
</template>

<script>
  let startTime = 0;
  let endTime = 0;
  let timeout = null;
  export default {
    data() {
      return {
        result: [],
        state: 'waiting',
        message: '클릭해서 시작하세요.',
      }
    },
    computed: { // 데이터를 계산같은거 할 때 성능적인 면에서 효과적임
      average() {
        return this.result.reduce((a,c) => a+c, 0) / this.result.length || 0;
      }
    },
    methods: {
      onReset() {
        this.result = [];
      },
      onClickScreen() {
        if(this.state === 'waiting') {
          this.state = 'ready';
          this.message = '초록색이 되면 클릭하세요';
          timeout = setTimeout(() => {
            this.state = 'now';
            this.message = '지금 클릭!';
            startTime = new Date();
          }, Math.floor(Math.random() * 1000) + 2000); // 2~3초
        } else if(this.state === 'ready') {
          this.state = 'now';
          this.message = '너무 성급하시네요! 초록색이 된 후에 클릭하세요';
        } else if(this.state === 'now') {
          endTime = new Date();
          this.state = 'waiting';
          this.message = '클릭해서 시작하세요';
          this.result.push(endTime - startTime);
        }
      }
    },
  };
</script>
<!--
  scoped는 vue의 컴포넌트에 유효한 css가 적용이 되고
  scoped가 없으면 기본적인 css
-->
<style scoped>
  #screen {
    width: 300px;
    height: 200px;
    text-align: center;
    user-select: none;
  }
  #screen.waiting {
    background-color: aqua;
  }
  #screen.ready {
    background-color: red;
    color: white;
  }
  #screen.now {
    background-color: greenyellow;
  }
</style>
