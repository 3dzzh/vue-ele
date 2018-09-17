<template>
<div class="head-bg">
    <div class="top"></div>
    <img src="//fuss10.elemecdn.com/1/d1/bb3710401a3d2ff0dc8d7f3c523cejpeg.jpeg?imageMogr/format/webp/thumbnail/150x/" alt="">    
    <h1 @click="click">云龙凤姐大盘鸡水煮鱼</h1>
    <p @click="click">
        <span>评价4.7</span>
        <span class="spanm">月售1543单</span>
        <span>蜂鸟专送约22分钟</span>
    </p>
    <Wrap />
</div>
</template>
<script>
import Wrap from'./Wrap'
export default {
    name:'Header',
    components:{
        Wrap
    },
    data:()=>{
        return{
          ok:false  
        }
    },
    methods:{
        click(){
            this.ok=!this.ok
        }
    }
}
</script>
<style lang="scss" scoped>
    .head-bg{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .top{
        width: 100%;
        height: 30vw;
        background-color:rgba(0,0,0,0.3);
    }
    h1{
        margin-top: 8vw;
        font-size: 20px;
        text-align:center;
        margin-bottom: 0;
    }
    p{
        display: flex;
        justify-content: center;
    }
    span{
        font-size: 14px;
    }
    .spanm{
        margin-left: 10px;
        margin-right: 10px;
    }
    img{
        position:absolute;
        top:15vw;
        left: 40%;
        width: 20%;
        margin: 0 auto;
    }
</style>


