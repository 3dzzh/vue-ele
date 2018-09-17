<template>
<div class="footer">
    <img src="../assets/img/购物车.svg" alt="">
    <span>未选购商品</span>
    <span>￥20起送</span>
</div>
</template>
<script>
export default {
    name:'Footer'
}
</script>
<style lang="scss" scoped>
    .footer{
        display: flex;
        align-items: center;
        background-color: rgba(0,0,0,0.4);
        position:relative;
        height: 10vw;
        img{
            width: 10vw;
            position:absolute;
            left:5vw;
            top:-3vw;
        } 
         span{
             margin-left: 25vw;
        } 
    }
</style>


