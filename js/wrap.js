//防止浏览器刷新后停留在当前位置
if(history.scrollRestoration){
    history.scrollRestoration = 'manual'
}


//index为每个板块的索引
let index = 0

//滚动开关
let isScorlling = true

//阻止默认行为
window.addEventListener("wheel",function(e){
        let evt = e || window.event;
        evt.preventDefault();
    },{ passive: false });




$(document).ready(function () {

    //鼠标滚动事件
    $(document).on("mousewheel", function (e, delta) {
        
        var wheel = e.originalEvent.wheelDelta || -e.originalEvent.detail;
        var delta = Math.max(-1, Math.min(1, wheel));
        if(isScorlling){
            if (delta < 0) {
                //向下滚动
                if(index >= 4){
                    index = 4
                }
                else{
                    index++
                }
                $('.PC').css({
                    'top':`-${index * 100}vh`
                })
                //限制多次滑动
                isScorlling = false
                setTimeout(function(){
                    isScorlling = true
                },600)
                navControl()
                aniControl()
            } 
            else{
                //向上滚动
                if(index <= 0){
                    index = 0
                }
                else{
                    index--
                }
                $('.PC').css({
                    'top':`-${index * 100}vh`
                })
                isScorlling = false
                setTimeout(function(){
                    isScorlling = true
                },600)
                navControl()
                aniControl()
            }
            //index为0时导航消失
            if(index == 0){
                $('.nav').css({
                    'display':'none'
                })
            }
            //index不为0时导航出现
            else{
                $('.nav').css({
                    'display':'block'
                })
            }
        }
        
    },)

    //导航点击事件
    $('.0').on('click', () => {
        index = 0
        $('.PC').css({
            'top':'0'
        })
        $('.nav').css({
            'display':'none'
        })
        navControl()
        aniControl()
    })
    $('.1').on('click', () => {
        index = 1
        $('.PC').css({
            'top':'-100vh'
        })
        $('.nav').css({
            'display':'block'
        })
        navControl()
        aniControl()
    })
    $('.2').on('click', () => {
        index = 2
        $('.PC').css({
            'top':'-200vh'
        })
        $('.nav').css({
            'display':'block'
        })
        navControl()
        aniControl()
    })
    $('.3').on('click', () => {
        index = 3
        $('.PC').css({
            'top':'-300vh'
        })
        $('.nav').css({
            'display':'block'
        })
        navControl()
        aniControl()
    })
    $('.4').on('click', () => {
        index = 4
        $('.PC').css({
            'top':'-400vh'
        })
        $('.nav').css({
            'display':'block'
        })
        navControl()
        aniControl()
    })

    //鼠标图标点击事件
    $('.mouse-page1').on('click', () => {
        index++
        $('.PC').css({
            'top':`-${index * 100}vh`
        })
        $('.nav').css({
            'display':'block'
        })
        navControl()
        aniControl()
    })
    $('.black-line').on('click', () => {
        index++
        $('.PC').css({
            'top':`-${index * 100}vh`
        })
        $('.nav').css({
            'display':'block'
        })
        navControl()
        aniControl()
    })

    //动态为导航添加control类
    function navControl(){
        $(`.${index}`).addClass('control')
        $(`.${index}`).siblings().removeClass('control')
    }

    //添加动画函数
    function aniControl(){
        switch(index){
            case 4 : {
                //p5
                $('.page-5-scheduled').addClass('ani-Y')
                //p4
                $('.page-4-trapezium-1').removeClass('ani-x')
                $('.map').removeClass('ani-Y')
                $('.page-4-change-left').removeClass('ani-Y')
                $('.page-4-change-left-line').removeClass('ani-Y')
                //p3
                $('.page-3-left').removeClass('ani-x')
                $('.page-3-right').removeClass('ani-x')
                $('.page-3-more').removeClass('ani-Y')
                //p1
                $('.p-1-words').removeClass('ani-Y')
                break
            }
            case 3 : {
                //p4
                $('.page-4-trapezium-1').addClass('ani-x')
                $('.map').addClass('ani-Y')
                $('.page-4-change-left').addClass('ani-Y')
                $('.page-4-change-left-line').addClass('ani-Y')
                //p5
                $('.page-5-scheduled').removeClass('ani-Y')
                //p3
                $('.page-3-left').removeClass('ani-x')
                $('.page-3-right').removeClass('ani-x')
                $('.page-3-more').removeClass('ani-Y')
                //p1
                $('.p-1-words').removeClass('ani-Y')
                break
            }
            case 2 : {
                //p3
                $('.page-3-left').addClass('ani-x')
                $('.page-3-right').addClass('ani-x')
                $('.page-3-more').addClass('ani-Y')
                //p4
                $('.page-4-trapezium-1').removeClass('ani-x')
                $('.map').removeClass('ani-Y')
                $('.page-4-change-left').removeClass('ani-Y')
                $('.page-4-change-left-line').removeClass('ani-Y')
                //p5
                $('.page-5-scheduled').removeClass('ani-Y')
                //p1
                $('.p-1-words').removeClass('ani-Y')
                break
            }
            case 1 : {
                //p5
                $('.page-5-scheduled').removeClass('ani-Y')
                //p4
                $('.page-4-trapezium-1').removeClass('ani-x')
                $('.map').removeClass('ani-Y')
                $('.page-4-change-left').removeClass('ani-Y')
                $('.page-4-change-left-line').removeClass('ani-Y')
                //p3
                $('.page-3-left').removeClass('ani-x')
                $('.page-3-right').removeClass('ani-x')
                $('.page-3-more').removeClass('ani-Y')
                //p1
                $('.p-1-words').removeClass('ani-Y')
                break
            }
            case 0 : {
                //p1
                $('.p-1-words').addClass('ani-Y')
                //p5
                $('.page-5-scheduled').removeClass('ani-Y')
                //p4
                $('.page-4-trapezium-1').removeClass('ani-x')
                $('.map').removeClass('ani-Y')
                $('.page-4-change-left').removeClass('ani-Y')
                $('.page-4-change-left-line').removeClass('ani-Y')
                //p3
                $('.page-3-left').removeClass('ani-x')
                $('.page-3-right').removeClass('ani-x')
                $('.page-3-more').removeClass('ani-Y')
                break
            }
        }
    }

    //设置计时器
    let myInterVal = setInterval(p2, 5000)

    //计时器的全局索引
    let p = 1

    //轮播函数
    function p2(){


        //类名数组
        let list_photo = new Array('.page-2-gj-photo', '.page-2-ls-photo', '.page-2-dx-photo')
        let list_head = new Array('.page-2-words-head-gj', '.page-2-words-head-ls', '.page-2-words-head-dx')
        let list_en = new Array('.page-2-words-en-gj-box', '.page-2-words-en-ls-box', '.page-2-words-en-dx-box')
        let list_words = new Array('.page-2-gj-int', '.page-2-ls-int', '.page-2-dx-int')
        let list_btn = new Array('.page-2-btn-gj', '.page-2-btn-ls', '.page-2-btn-dx')
        //添加类名
        $(`${list_photo[p]}`).addClass('ani-x')
        $(`${list_head[p]}`).addClass('ani-x')
        $(`${list_en[p]}`).addClass('ani-x')
        $(`${list_words[p]}`).addClass('ani-x')
        $(`${list_btn[p]}`).addClass('ani-btn')
        //获取当前索引的上一个
        let x = befor(p)
        //删除上一个类名
        $(`${list_photo[x]}`).removeClass('ani-x')
        $(`${list_head[x]}`).removeClass('ani-x')
        $(`${list_en[x]}`).removeClass('ani-x')
        $(`${list_words[x]}`).removeClass('ani-x')
        $(`${list_btn[x]}`).removeClass('ani-btn')    
        //索引自增
        p++
        //超出上限重置索引
        if(p >= 3){
            p = 0
        }


        
    }

    //寻找当前索引的上一个索引函数 参数为当前索引
    function befor(p){
        let x
        switch(p){
            case 0 : {
                x = 2
                break
            }
            case 1 : {
                x = 0
                break
            }
            case 2 : {
                x = 1
                break
            }
        }
        return x
    }
});