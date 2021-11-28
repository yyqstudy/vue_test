<template>
        <div class="container">

            <Category title="游戏" >
                <template scope="scopeData">
                    <ul >
                        <li v-for ="(g,index) in scopeData.games" :key="index">{{g}}</li>
                    </ul>
                 </template>
            </Category>

            <Category title="游戏" >
                <template scope="scopeData">
                    <ol >
                        <li v-for ="(g,index) in scopeData.games" :key="index">{{g}}</li>
                    </ol>
                    <h4>{{scopeData.msg}}</h4>
                </template>
            </Category>

            <Category title="游戏" >
                <template scope="{games}">
                    <h4 v-for ="(g,index) in games" :key="index">{{g}}</h4>
                </template>

            </Category>


        </div>
</template>

<script>

    //引入组件
    import Category from "./components/Category";
    export default {
        name:'App',
        components: {Category},

    }
</script>

<style lang="css" scoped>
    /*横向排列，有间隔*/
    .container,.foot{
        display: flex;
        justify-content: space-around;
    }

    video{
        width:100%
    }

    img{
        width:100%
    }
    h4{
        text-align: center;
    }


</style>



