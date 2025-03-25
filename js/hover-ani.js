$(document).ready(function(){
    //left-hover-1
    $('.page-3-left-0').hover(function () {
            // over
            $('.left-hover-1').css({
                'transform':'translateX(0%)'
            })
            $('.left-blueline-1').css({
                'top':'20%'
            })
            $('.left-arrow-1').css({
                'opacity':'0'
            })
        }, function () {
            // out
            $('.left-hover-1').css({
                'transform':'translateX(-100%)'
            })
            $('.left-blueline-1').css({
                'top':'30%'
            })
            $('.left-arrow-1').css({
                'opacity':'1'
            })
        }
    );
    //left-hover-2
    $('.page-3-left-2').hover(function () {
            // over
            $('.left-hover-2').css({
                'transform':'translateX(0%)'
            })
            $('.left-blueline-2').css({
                'top':'20%'
            })
            $('.left-arrow-2').css({
                'opacity':'0'
            })
        }, function () {
            // out
            $('.left-hover-2').css({
                'transform':'translateX(-100%)'
            })
            $('.left-blueline-2').css({
                'top':'30%'
            })
            $('.left-arrow-2').css({
                'opacity':'1'
            })
        }
    );
    //left-hover-3
    $('.page-3-left-3').hover(function () {
            // over
            $('.left-hover-3').css({
                'transform':'translateX(0%)'
            })
            $('.left-blueline-3').css({
                'top':'20%'
            })
            $('.left-arrow-3').css({
                'opacity':'0'
            })
        }, function () {
            // out
            $('.left-hover-3').css({
                'transform':'translateX(-100%)'
            })
            $('.left-blueline-3').css({
                'top':'30%'
            })
            $('.left-arrow-3').css({
                'opacity':'1'
            })
        }
    );



    //right-hover-1
    $('.page-3-right-0').hover(function () {
            // over
            $('.right-hover-1').css({
                'transform':'translateX(0%)'
            })
            $('.right-blueline-1').css({
                'top':'20%'
            })
            $('.right-arrow-1').css({
                'opacity':'0'
            })
        }, function () {
            // out
            $('.right-hover-1').css({
                'transform':'translateX(-100%)'
            })
            $('.right-blueline-1').css({
                'top':'30%'
            })
            $('.right-arrow-1').css({
                'opacity':'1'
            })
        }
    );
    //right-hover-2
    $('.page-3-right-2').hover(function () {
            // over
            $('.right-hover-2').css({
                'transform':'translateX(0%)'
            })
            $('.right-blueline-2').css({
                'top':'20%'
            })
            $('.right-arrow-2').css({
                'opacity':'0'
            })
        }, function () {
            // out
            $('.right-hover-2').css({
                'transform':'translateX(-100%)'
            })
            $('.right-blueline-2').css({
                'top':'30%'
            })
            $('.right-arrow-2').css({
                'opacity':'1'
            })
        }
    );
    //right-hover-3
    $('.page-3-right-3').hover(function () {
            // over
            $('.right-hover-3').css({
                'transform':'translateX(0%)'
            })
            $('.right-blueline-3').css({
                'top':'20%'
            })
            $('.right-arrow-3').css({
                'opacity':'0'
            })
        }, function () {
            // out
            $('.right-hover-3').css({
                'transform':'translateX(-100%)'
            })
            $('.right-blueline-3').css({
                'top':'30%'
            })
            $('.right-arrow-3').css({
                'opacity':'1'
            })
        }
    );



    //page-3-more-hover
    $('.page-3-more').hover(function () {
        // over
        $('.page-3-more-line>img').css({
            'opacity':'1',
            'transition':'all,0.2s',
            'transform':'translateX(0%)'
        })
    }, function () {
        // out
        $('.page-3-more-line>img').css({
            'transform':'translateX(100%)'
        })
        setTimeout(function(){
            $('.page-3-more-line>img').css({
                'transition':'none',
                'opacity':'0',
                'transform':'translateX(-100%)',
            })
        }, 300)
    }
);
})