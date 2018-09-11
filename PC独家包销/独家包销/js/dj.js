/**
 * Created by 前端-张瑞康 on 2017/12/29.
 */
$(function () {
  // 上面轮播改成点击
  var $ul = $(".top .right ul");
  var clone = $(".top .right ul li")[0].cloneNode(true);
  var clone1 = $(".top .right ul li")[1].cloneNode(true);
  var clone2 = $(".top .right ul li")[2].cloneNode(true);
  var clone3 = $(".top .right ul li")[3].cloneNode(true);
  var clone4 = $(".top .right ul li")[4].cloneNode(true);
  var clone5 = $(".top .right ul li")[5].cloneNode(true);
  var clone6 = $(".top .right ul li")[6].cloneNode(true);
  var clone7 = $(".top .right ul li")[7].cloneNode(true);
  var clone8 = $(".top .right ul li")[8].cloneNode(true);
  var cloneLast = $(".top .right ul li")[$(".top .right ul li").length - 1].cloneNode(true);
  $ul.append(clone);
  $ul.append(clone1);
  $ul.append(clone2);
  $ul.append(clone3);
  $ul.append(clone4);
  $ul.append(clone5);
  $ul.append(clone6);
  $ul.append(clone7);
  $ul.append(clone8);
  $ul.prepend(cloneLast)
  console.log($(".top .right ul li"));
  

  var index = 0
  function move() {
    index++;
    $ul.css("transition", "transform 0.5s");
    $ul.css("transform", "translateX(" + (-index * $(".top .right ul li")[0].offsetWidth) + "px)");
  
    $ul.on("transitionend", function () {
      if (index >= $(".top .right ul li").length - 8) {
        index = 1;
        $ul.css("transition", "none");
        $ul.css("transform", "translateX(" + (-2 * $(".top .right ul li")[0].offsetWidth) + "px)");
      }
    })
  }
  
  move()
  
  var flag1 = true;
  $(".bx .top .right .btn_left1").click(function () {
    if (flag1) {
      flag1 = false;
      setTimeout(function () {
        flag1 = true;
        index++;
        $ul.css("transition", "transform 0.5s");
        $ul.css("transform", "translateX(" + (-index * $(".top .right ul li")[0].offsetWidth) + "px)");
  
        $ul.on("transitionend", function () {
          if (index >= $(".top .right ul li").length - 8) {
            index = 1;
            $ul.css("transition", "none");
            $ul.css("transform", "translateX(" + (-2 * $(".top .right ul li")[0].offsetWidth) + "px)");
          }
        })
      },500)
    }
  })
  
  
  
  $(".bx .top .right .btn_right1").click(function () {
    if (flag1) {
      flag1 = false;
      setTimeout(function () {
        flag1 = true;
        index--;
        $ul.css("transition", "transform .5s");
        $ul.css("transform", "translateX(" + (-index * $(".top .right ul li")[0].offsetWidth) + "px)");
  
        $ul.on("transitionend", function () {
          if (index <= 0) {
            index = $(".top .right ul li").length - 9;
            $ul.css("transition", "none");
            $ul.css("transform", "translateX(" + (-(index - 1) * $(".top .right ul li")[0].offsetWidth) + "px)");
          }
        })
        },500)
      }
  })
  
  
  
  
  // 下面轮播
  var node = $(".imgs ul li")[0].cloneNode(true);
  var node1 = $(".imgs ul li")[1].cloneNode(true);
  var node2 = $(".imgs ul li")[2].cloneNode(true);
  var nodeLast = $(".imgs ul li")[$(".imgs ul li").length - 1].cloneNode(true);
  
  $(".imgs ul").append(node);
  $(".imgs ul").append(node1);
  $(".imgs ul").append(node2);
  $(".imgs ul").prepend(nodeLast);
  console.log($(".imgs ul li"));
  
  
  var index1 = 0;
  move1();
  function move1() {
    index1++;
    $(".imgs ul").css("transition", "transform .5s");
    $(".imgs ul").css("transform", "translateX(" + (-index1 * ($(".imgs ul li")[0].offsetWidth + 12)) + "px)");
    
    $(".imgs ul").on("transitionend", function () {
      if (index1 >= $(".imgs ul li").length - 3) {
        index1 = 1;
        $(".imgs ul").css("transition", "none");
        $(".imgs ul").css("transform", "translateX(" + (-1 * ($(".imgs ul li")[0].offsetWidth + 12)) + "px)");
      }
    })
  }
  
  var timer1 = null;
  timer1 = setInterval(move1, 2000);
  $(".bx_box").mouseover(function () {
    clearInterval(timer1);
  })
  
  var flag = true;
  $(".bx_box .btn_left").click(function () {
    if (flag) {
      flag = false;
      setTimeout(function () {
        flag = true;
        index1++;
        $(".imgs ul").css("transition", "transform .3s");
        $(".imgs ul").css("transform", "translateX(" + (-index1 * ($(".imgs ul li")[0].offsetWidth + 12)) + "px)");
        
        $(".imgs ul").on("transitionend", function () {
          if (index1 >= $(".imgs ul li").length - 3) {
            index1 = 1;
            $(".imgs ul").css("transition", "none");
            $(".imgs ul").css("transform", "translateX(" + (-index1 * ($(".imgs ul li")[0].offsetWidth + 12)) + "px)");
          }
        })
      }, 500)
    }
  })
  
  
  $(".bx_box .btn_right").click(function () {
    if (flag) {
      flag = false;
      setTimeout(function () {
        flag = true;
        index1--;
        $(".imgs ul").css("transition", "transform .3s");
        $(".imgs ul").css("transform", "translateX(" + (-index1 * ($(".imgs ul li")[0].offsetWidth + 12)) + "px)");
        
        $(".imgs ul").on("transitionend", function () {
          if (index1 <= 0) {
            index1 = $(".imgs ul li").length - 4;
            $(".imgs ul").css("transition", "none");
            $(".imgs ul").css("transform", "translateX(" + (-(index1) * ($(".imgs ul li")[0].offsetWidth + 12)) + "px)");
          }
        })
      }, 500)
    }
    
  })
  
  
  $(".bx_box").mouseout(function () {
    timer1 = setInterval(move1, 2000);
  })
  
  
})