$(document).ready(function () {
    //trapezium-hover
    $('.page-5-scheduled-0-trapezium').hover(function () {
            // over
            $(this).find('.page-5-scheduled-0-trapezium-arrow').css({
                'left':'70%'
            })
            $(this).find('.page-5-scheduled-0-trapezium-words').css({
                'left':'40%'
            })
            $(this).find('.page-5-scheduled-0-trapezium-words-hover').css({
                'left':'0%'
            })
            $(this).parent().find('.page-5-scheduled-0-img').css({
                'width':'65%',
                'height':'55%',
                'left':'18%',
                'top':'18%'
            })
            $(this).parent().find('.page-5-scheduled-0-blueline-1').css({
                'transition':'all, 0.2s',
                'top':'75%'
            })
            $(this).parent().find('.page-5-scheduled-0-blueline-2').css({
                'transition':'all, 0.2s',
                'left':'70%'
            })
            $(this).parent().find('.page-5-scheduled-0-blueline-3').css({
                'transition':'all, 0.2s',
                'top':'0%'
            })
            $(this).parent().find('.page-5-scheduled-0-blueline-4').css({
                'transition':'all, 0.2s',
                'left':'-1%'
            })
        }, function () {
            // out
            $(this).find('.page-5-scheduled-0-trapezium-arrow').css({
                'left':'5%'
            })
            $(this).find('.page-5-scheduled-0-trapezium-words').css({
                'left':'5%'
            })
            $(this).find('.page-5-scheduled-0-trapezium-words-hover').css({
                'left':'-100%'
            })
            $(this).parent().find('.page-5-scheduled-0-img').css({
                'width':'60%',
                'height':'50%',
                'left':'20%',
                'top':'20%'
            })
            $(this).parent().find('.page-5-scheduled-0-blueline-1').css({
                'transition':'all, 0.2s',
                'top':'-1%'
            })
            $(this).parent().find('.page-5-scheduled-0-blueline-2').css({
                'transition':'all, 0.2s',
                'left':'-1%'
            })
            $(this).parent().find('.page-5-scheduled-0-blueline-3').css({
                'transition':'all, 0.2s',
                'top':'75.5%'
            })
            $(this).parent().find('.page-5-scheduled-0-blueline-4').css({
                'transition':'all, 0.2s',
                'left':'70%'
            })
        }
    );


    //img-hover
    $('.page-5-scheduled-0-img').hover(function () {
            // over
            $(this).css({
                'width':'65%',
                'height':'55%',
                'left':'18%',
                'top':'18%'
            })
            $(this).parent().find('.page-5-scheduled-0-trapezium').find('.page-5-scheduled-0-trapezium-arrow').css({
                'left':'70%'
            })
            $(this).parent().find('.page-5-scheduled-0-trapezium').find('.page-5-scheduled-0-trapezium-words').css({
                'left':'40%'
            })
            $(this).parent().find('.page-5-scheduled-0-trapezium').find('.page-5-scheduled-0-trapezium-words-hover').css({
                'left':'0%'
            })
            $(this).parent().find('.page-5-scheduled-0-blueline-1').css({
                'transition':'all, 0.2s',
                'top':'75%'
            })
            $(this).parent().find('.page-5-scheduled-0-blueline-2').css({
                'transition':'all, 0.2s',
                'left':'70%'
            })
            $(this).parent().find('.page-5-scheduled-0-blueline-3').css({
                'transition':'all, 0.2s',
                'top':'0%'
            })
            $(this).parent().find('.page-5-scheduled-0-blueline-4').css({
                'transition':'all, 0.2s',
                'left':'-1%'
            })
        }, function () {
            // out
            $(this).css({
                'width':'60%',
                'height':'50%',
                'left':'20%',
                'top':'20%'
            })
            $(this).parent().find('.page-5-scheduled-0-trapezium').find('.page-5-scheduled-0-trapezium-arrow').css({
                'left':'5%'
            })
            $(this).parent().find('.page-5-scheduled-0-trapezium').find('.page-5-scheduled-0-trapezium-words').css({
                'left':'5%'
            })
            $(this).parent().find('.page-5-scheduled-0-trapezium').find('.page-5-scheduled-0-trapezium-words-hover').css({
                'left':'-100%'
            })
            $(this).parent().find('.page-5-scheduled-0-blueline-1').css({
                'transition':'all, 0.2s',
                'top':'-1%'
            })
            $(this).parent().find('.page-5-scheduled-0-blueline-2').css({
                'transition':'all, 0.2s',
                'left':'-1%'
            })
            $(this).parent().find('.page-5-scheduled-0-blueline-3').css({
                'transition':'all, 0.2s',
                'top':'75.5%'
            })
            $(this).parent().find('.page-5-scheduled-0-blueline-4').css({
                'transition':'all, 0.2s',
                'left':'70%'
            })
        }
    );
});