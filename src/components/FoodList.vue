<template>
    <div class="food-list" ref="wrapper">
        <div v-show="goods.length">
        <div class="goods-tab" v-for="(good,ind) in goods" :key="good.id" :ref='`foodTab${ind}`'>
            <h3>{{good.name}}</h3>
          <div class='food' v-for="food in good.foods" :key="food.id">
          <img class='icon' :src="food.icon" alt="">
          <div class='food-info'>
            <h4>{{food.name}}</h4>
            <p class="p1">{{food.info}}</p>
            <p>
              <span>月售{{food.sellCount}}</span>
              <span>好评率{{food.rating}}%</span>
            </p>
            <span class="price">￥{{food.price}}</span>
          </div>
          <img class="add-img" src="../assets/img/jia.svg" alt="">
        </div>
    </div>
    </div>
    </div>
</template>
<script>
import Bscroll from'better-scroll'
export default {
    name:'FoodList',
    props:['changeActiveTabIndex'],
    computed: {
    goods() {
      return this.$store.state.goods.goods
    }
    },
    offsetTopList() {
      let offsetTopList = []
      const tabs = document.querySelectorAll('.food-tab')
      for (let i = 0; i < tabs.length; i++) {
        offsetTopList.push(tabs[i].offsetTop - tabs[0].offsetTop)
      }
      return offsetTopList
    },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.wrapper, { probeType: 3 })
      this.scroll.on('scroll', pos => {
        this.changeActiveTabIndex(this.currentIndex(-pos.y))
      })
    })
  },
  offsetTopList() {
      let offsetTopList = []
      console.log(offsetTopList.length);
      const tabs = document.querySelectorAll('.food-tab')
      for (let i = 0; i < tabs.length; i++) {
        offsetTopList.push(tabs[i].offsetTop - tabs[0].offsetTop)
      }
      return offsetTopList
    },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.wrapper, { probeType: 3 })
      this.scroll.on('scroll', pos => {
        this.changeActiveTabIndex(this.currentIndex(-pos.y))
      })
    })
  },
    methods: {
    currentIndex(y) {
      for (let i = 0; i < this.offsetTopList.length; i++) {
        const offsetTop1 = this.offsetTopList[i]
        const offsetTop2 = this.offsetTopList[i + 1]
        if (!offsetTop2 || (y > offsetTop1 && y < offsetTop2)) {
          return i
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
    .food-list {
        height: 400px;
        flex-grow: 1;
        overflow: auto;
    >div {
     display: flex;
     flex-grow: 1;
     flex-direction: column;
     >div > div {
        display: flex;
        height: 40vw;
        font-size: 8px;
        img{
            width:114px;
            height: 114px;
        }
     }
    }
    h3{
        margin: 0;
    }
    h4{
        margin: 0;
    }
    p{
        margin: 0;
    }
    .p1{
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .add-img{
        widows: 20vw;
    }
 }
</style>