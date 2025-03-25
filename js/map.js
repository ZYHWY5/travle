var map = new BMapGL.Map("container");// 创建地图实例 
        map.centerAndZoom(new BMapGL.Point(106.61432, 28.96039), 20); // 初始化地图,设置中心点坐标和地图级别
        map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
        var scaleCtrl = new BMapGL.ScaleControl();  // 添加比例尺控件
        map.addControl(scaleCtrl);
        var zoomCtrl = new BMapGL.ZoomControl();  // 添加缩放控件
        map.addControl(zoomCtrl);
        var navi3DCtrl = new BMapGL.NavigationControl3D();  // 添加3D控件
        map.addControl(navi3DCtrl);
         // 创建定位控件
         var locationControl = new BMapGL.LocationControl({
            // 控件的停靠位置（可选，默认左上角）
            anchor: BMAP_ANCHOR_TOP_RIGHT,
            // 控件基于停靠位置的偏移量（可选）
            offset: new BMapGL.Size(20, 20)
        });
        // 将控件添加到地图上
        map.addControl(locationControl);

        // 添加定位事件
        locationControl.addEventListener("locationSuccess", function(e){
            var address = '';
            address += e.addressComponent.province;
            address += e.addressComponent.city;
            address += e.addressComponent.district;
            address += e.addressComponent.street;
            address += e.addressComponent.streetNumber;
            alert("当前定位地址为：" + address);
        });
        locationControl.addEventListener("locationError",function(e){
            alert(e.message);
        });








/*hover动画*/
$(document).ready(function(){
    //trapezium-hover动画
    //page-4-trapezium-1
    $('.page-4-trapezium-0').hover(function () {
            // over
            $('.page-4-trapezium-0-hover').css({
                'left':'0'
            })
            $('.page-4-trapezium-0-arrow').css({
                'left':'70%'
            })
            $('.page-4-trapezium-0-words').css({
                'left':'50%'
            })
        }, function () {
            // out
            $('.page-4-trapezium-0-hover').css({
                'left':'-100%'
            })
            $('.page-4-trapezium-0-arrow').css({
                'left':'5%'
            })
            $('.page-4-trapezium-0-words').css({
                'left':'5%'
            })
        }
    );
    //page-4-trapezium-2
    $('.page-4-trapezium-2').hover(function () {
            // over
            $('.page-4-trapezium-2-hover').css({
                'left':'0'
            })
            $('.page-4-trapezium-2-arrow').css({
                'left':'70%'
            })
            $('.page-4-trapezium-2-words').css({
                'left':'50%'
            })
        }, function () {
            // out
            $('.page-4-trapezium-2-hover').css({
                'left':'-100%'
            })
            $('.page-4-trapezium-2-arrow').css({
                'left':'5%'
            })
            $('.page-4-trapezium-2-words').css({
                'left':'5%'
            })
        }
    );
    //page-4-trapezium-3
    $('.page-4-trapezium-3').hover(function () {
            // over
            $('.page-4-trapezium-3-hover').css({
                'left':'0'
            })
            $('.page-4-trapezium-3-arrow').css({
                'left':'70%'
            })
            $('.page-4-trapezium-3-words').css({
                'left':'50%'
            })
        }, function () {
            // out
            $('.page-4-trapezium-3-hover').css({
                'left':'-100%'
            })
            $('.page-4-trapezium-3-arrow').css({
                'left':'5%'
            })
            $('.page-4-trapezium-3-words').css({
                'left':'5%'
            })
        }
    );


    //change-hover
    //left
    $('.page-4-change-left-0').hover(function () {
            // over
            $('.page-4-change-left-2').css({
                'transition':'all,0.2s',
                'top':'0'
            })
        }, function () {
            // out
            $('.page-4-change-left-3').css({
                'transition':'all,0.2s',
                'top':'0'
            })
            setTimeout(function(){
                $('.page-4-change-left-2').css({
                    'transition':'none',
                    'top':'-100%'
                    })
                $('.page-4-change-left-3').css({
                    'transition':'none',
                    'top':'-200%'
                })
            }, 200)
            
        }
    );
    //right
    $('.page-4-change-right').hover(function () {
            // over
            $('.page-4-change-right-2').css({
                'transition':'all,0.2s',
                'top':'0'
            })
        }, function () {
            // out
            $('.page-4-change-right-3').css({
                'transition':'all,0.2s',
                'top':'0'
            })
            setTimeout(function(){
                $('.page-4-change-right-2').css({
                    'transition':'none',
                    'top':'-100%'
                    })
                $('.page-4-change-right-3').css({
                    'transition':'none',
                    'top':'-200%'
                })
            }, 200)
            
        }
    );

    //点击变更地图类型
    $('.page-4-change-left-2').click(function(){
        map.setMapType(BMAP_NORMAL_MAP);
        //改变边框定位
        $('.page-4-blueline-0').css({
            'transition':'all,0.2s',
            'left':'-1%',
            'top':'-1%'
        })
        $('.page-4-blueline-2').css({
            'transition':'all,0.2s',
            'left':'-1%',
            'top':'-2%'
        })
        $('.page-4-blueline-3').css({
            'transition':'all,0.2s',
            'left':'100%',
            'top':'75.5%'
        })
        $('.page-4-blueline-4').css({
            'transition':'all,0.2s',
            'left':'88%',
            'top':'100%'
        })
    })
    $('.page-4-change-right-2').click(function(){
        map.setMapType(BMAP_EARTH_MAP);
        //改变边框定位
        $('.page-4-blueline-0').css({
            'transition':'all,0.4s',
            'left':'-1%',
            'top':'76%'
        })
        $('.page-4-blueline-2').css({
            'transition':'all,0.4s',
            'left':'88%',
            'top':'-2%'
        })
        $('.page-4-blueline-3').css({
            'transition':'all,0.4s',
            'left':'100%',
            'top':'0%'
        })
        $('.page-4-blueline-4').css({
            'transition':'all,0.4s',
            'left':'0%',
            'top':'100%'
        })
    })

    //点击更改地图定位
    //106.75974, 29.00639(ls)
    //106.61432, 28.96039(gj)
    //106.66887, 28.76270(dx)
    $('.page-4-trapezium-0').click(function(){
        map.centerAndZoom(new BMapGL.Point(106.61432, 28.96039), 20); // 初始化地图,设置中心点坐标和地图级别
    })
    $('.page-4-trapezium-2').click(function(){
        map.centerAndZoom(new BMapGL.Point(106.75974, 29.00639), 20); // 初始化地图,设置中心点坐标和地图级别
    })
    $('.page-4-trapezium-3').click(function(){
        map.centerAndZoom(new BMapGL.Point(106.66887, 28.76270), 20); // 初始化地图,设置中心点坐标和地图级别
    })
})