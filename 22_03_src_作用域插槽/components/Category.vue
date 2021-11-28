<template>
    <div class="category">
        <h3>{{title}}分类</h3>
<!--  Category组件里面的games怎么传给App组件
  这里把games传给插槽的使用者（往查出里面塞结构，比如：App组件）-->
        <slot :games="games" msg="hello"></slot>

    </div>

</template>

<script>
    export default {
        name:'Category',
        props:['title'],
        data(){
            return{
                games:['红色警戒','穿越火线','劲舞团','超级玛丽'],

            }
        }
    }

</script>

<style>
    .category{
        background-color: skyblue;
        width:200px;
        height: 300px;
    }

    /*文字居中*/

    h3{
        text-align: center;
        background-color: orange;
    }


</style>