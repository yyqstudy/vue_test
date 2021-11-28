<template>
        <div class="container">
            <Category title="美食" >
                <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F27%2Fe8%2F06%2F27e806c993b312ae19ebc98946a9f16d.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639741880&t=718b8c2ba5491b88eee5b21e7136fc43" alt="">
            </Category>

            <Category title="游戏" >
                <ul>
                    <li v-for ="(g,index) in games" :key="index">{{g}}</li>
                </ul>
            </Category>

          <Category title="电影" >
              <video  controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
          </Category>
        </div>
</template>

<script>

    //引入组件
    import Category from "./components/Category";
    export default {
        name:'App',
        components: {Category},
        data(){
            return{
                foods:['火锅','烧烤','小龙虾','牛排'],
                games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
                films:['《教父》','《拆弹专家》','《你好，李焕英》','《盗墓笔记》']
            }
        }
    }
</script>

<style lang="css" scoped>
    /*横向排列，有间隔*/
    .container{
        display: flex;
        justify-content: space-around;
    }

    video{
        width:100%
    }

    img{
        width:100%
    }

</style>



