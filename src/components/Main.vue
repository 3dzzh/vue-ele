<template>
    <div class="wrap">
        <nav>
        <ul>
            <li>
                <router-link to='/' active-class="active" exact>点餐</router-link>
            </li>
            <li>
                <router-link to='/evaluate' active-class="active">评价</router-link>
            </li>
            <li>
                <router-link to='/seller' active-class="active">商家</router-link>
            </li>
        </ul>
        </nav>
        <router-view></router-view>
        <div class="main">
        </div>
    </div>
</template>
<script>

export default {
    name:'Main'
}
</script>
<style lang="scss" scoped>
    nav{
        .active{
            color:red;
            border-bottom:2px solid #333;
        }
        ul{
            display: flex;
            padding: 0;
            margin: 0;
            margin-bottom: 1vw;
            justify-content: space-around;
            list-style:none;
        }
        
    }
    .main{
            display: flex;
        }
</style>


