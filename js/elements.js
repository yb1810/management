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
            },30 );
            $(".content").css({"width":"100%"});

            $(this).find("i").removeClass("icon-yq-jt-l")
            $(this).find("i").addClass("icon-jiantou")
            $(".icon-jiantou").css({"color":"blue"})
    },

        function () {
       $(".section-left").animate({ 
            width: "260",
            },30 ); 
        $(".content").css({"width":"calc(100% - 260px)"});

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


  $(function(){
        $(".close").click(
              function(){
                $(this).parents('.alert').css({"display":"none"})
              }
          )
  })