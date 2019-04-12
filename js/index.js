


	// 顶部下拉列表
  $(function () {
    $(".right-b").toggle(
        function () {
            $("#right-sdf").css({"display":"block"})
            $(".right-b").css({"background":"#f5f5fa"})
        },
        function () {
            $("#right-sdf").css({"display":"none"})
            $(".right-b").css({"background":"#fff"})
        },
    )
});
  

    $(function () {
    $(".right-as").toggle(
        function () {
            $("#right-sd").css({"display":"block"})
            $(".right-as").css({"background":"#f5f5fa"})
        },
        function () {
            $("#right-sd").css({"display":"none"})
            $(".right-as").css({"background":"#fff"})
        },
    )
});



        // 左边导航栏

$(function(){
    $(".btns").click(function(event){
        if (event.currentTarget==this) {
            $(".btns").css({"background":"","border":"none"})

            $(event.currentTarget).css({"background":"#252c35","border-left":"5px solid #00AAFF"})
        }
    })
})

    $(".header-left-a").toggle(
        function () {
            $(".section-left").animate({ 
            width: "0%",
            },300 );
            $(".aside").css({"width":"100%"});

            $(this).find("i").removeClass("icon-yq-jt-l")
            $(this).find("i").addClass("icon-jiantou")
            $(".icon-jiantou").css({"color":"blue"})
    },

        function () {
       $(".section-left").animate({ 
            width: "260",
            }, 300 ); 
        $(".aside").css({"width":"calc(100% - 260px)"});

         $(this).find("i").removeClass("icon-jiantou")
         $(this).find("i").addClass("icon-yq-jt-l")
         $(".icon-yq-jt-l").css({"color":"black"})
   }
)
   

           // 点击错号
   $(function(){
        $(".icon-cuohao").toggle(
            function () {
                $(this).parents('.panel').css({"display":"none"})
            },

            function () {
                $(this).parents('.panel').css({"display":"none"})
            },
        )
   })



            // 点击下三角
    $(function(){
        $(".right i").eq(0) .toggle(
            function () {
                $(this).parents('.panel').find('.panel-body').slideUp();
                $(this).removeClass("icon-sanjiaojiantoutriangular-copy")
                $(this).addClass("icon-arrow-down")
            },

             function () {
                  $(this).parents('.panel').find('.panel-body').slideDown();
                  $(this).removeClass("icon-arrow-down")
                  $(this).addClass("icon-sanjiaojiantoutriangular-copy")
            },
         )
   })



    
           // 数据图

$(function (){
	var myChart = echarts.init(document.getElementById('main'));
	option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
};
myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
});




$(function (){
	var myChart = echarts.init(document.getElementById('mains'));
	option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
    }]
};
myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
});
	



$(function (){
    var myChart = echarts.init(document.getElementById('maina'));
option = {
    angleAxis: {
    },
    radiusAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四'],
        z: 10
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: [1, 2, 3, 4],
        coordinateSystem: 'polar',
        name: 'A',
        stack: 'a'
    }, {
        type: 'bar',
        data: [2, 4, 6, 8],
        coordinateSystem: 'polar',
        name: 'B',
        stack: 'a'
    }, {
        type: 'bar',
        data: [1, 2, 3, 4],
        coordinateSystem: 'polar',
        name: 'C',
        stack: 'a'
    }],
    legend: {
        show: true,
        data: ['A', 'B', 'C']
    }
};
myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
});



$(function (){
    var myChart = echarts.init(document.getElementById('mainz'));
    var option = {
    dataset: {
        source: [
            ['score', 'amount', 'product'],
            [89.3, 58212, 'Matcha Latte'],
            [57.1, 78254, 'Milk Tea'],
            [74.4, 41032, 'Cheese Cocoa'],
            [50.1, 12755, 'Cheese Brownie'],
            [89.7, 20145, 'Matcha Cocoa'],
            [68.1, 79146, 'Tea'],
            [19.6, 91852, 'Orange Juice'],
            [10.6, 101852, 'Lemon Juice'],
            [32.7, 20112, 'Walnut Brownie']
        ]
    },
    grid: {containLabel: true},
    xAxis: {name: 'amount'},
    yAxis: {type: 'category'},
    visualMap: {
        orient: 'horizontal',
        left: 'center',
        min: 10,
        max: 100,
        text: ['High Score', 'Low Score'],
        // Map the score column to color
        dimension: 0,
        inRange: {
            color: ['#D7DA8B', '#E15457']
        }
    },
    series: [
        {
            type: 'bar',
            encode: {
                // Map the "amount" column to X axis.
                x: 'amount',
                // Map the "product" column to Y axis
                y: 'product'
            }
        }
    ]
};
myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
});



$(function (){
    var myChart = echarts.init(document.getElementById('mainx'));
  option = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
            data:[10, 52, 200, 334, 390, 330, 220]
        }
    ]
};
myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
});

    

     