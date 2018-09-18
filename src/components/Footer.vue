<template>
<div class="footer">
    <img src="../assets/img/购物车.svg" alt="">
    <div class="box" v-show="show">{{number}}</div>
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
            top:-5vw;
        } 
         span{
            margin-left: 25vw;
        } 
        .box{
            position:absolute;
            top:-6vw;
            left:10vw;
            background-color:red;
            width: 5vw;
            height: 5vw;
            border-radius:50%;
            line-height: 5vw;
            line-height: 5vw;
            text-align:center;
            color:#fff;
        }
    }
</style>


