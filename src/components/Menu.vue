<template>
    <div class="menu">
        <ul>
           <li v-for="(name,ind) in goodsNameList" :key="ind" :class="{active:activeTabIndex=== ind}" @click="changeActiveTabIndex(ind);changeScroll(`foodTab${ind}`);">{{name}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'Menu',
    props:['changeScroll', 'activeTabIndex', 'changeActiveTabIndex'],
    computed: { 
    goodsNameList() {
      return this.$store.getters.goodsNameList
    }
  }
}
</script>
<style lang="scss" scoped>
    ul{
        width: 20vw;
        text-align:center;
        line-height: 10vw;
        margin: 0;
        padding: 0;
        list-style:none;
    }
    .active{
        color:red;
        background-color: #fff;
    }
</style>

   