<template>
    <div>
    <div class="order">
        <Menu :changeScroll="changeScroll" :activeTabIndex="activeTabIndex" :changeActiveTabIndex="changeActiveTabIndex" />
        <FoodList ref="foodList" />
    </div>
    <Footer />
    </div>
</template>
<script>
import FoodList from'./FoodList'
import Menu from'./Menu'
import Footer from'./Footer'
export default {
    name:'Order',
    data:()=>({
        activeTabIndex:0,
    }),
    components:{
        Menu,
        FoodList,
        Footer
    },
    methods:{
        changeScroll(el){
            const {foodList} = this.$refs
            foodList.scroll.scrollToElement(foodList.$refs[el][0],1000)
        },
        changeActiveTabIndex(ind){
            this.activeTabIndex = ind
        }
    }
}
</script>
<style lang="scss" scoped>
    .order{
        display: flex;
    }
</style>


