/**
 * Created by 前端-张瑞康 on 2017/12/29.
 */

//上面轮播
//1. 找对象

(function () {
//   var slide = document.getElementsByClassName("right")[0];
//   var imgUl = document.getElementsByClassName("imgUl")[0];
//   var imgLis = imgUl.children;
//   var arrLeft = document.getElementsByClassName("btn_left1")[0];
//   var arrRight = document.getElementsByClassName("btn_right1")[0];
//   var imgWidth = imgLis[0].offsetWidth;
//   // parent.insertBefore(newChild,parent.firstChild);
//   imgUl.insertBefore(imgLis[imgLis.length - 1].cloneNode(true), imgLis[0]);
//   imgUl.appendChild(imgLis[1].cloneNode(true));
//   imgUl.appendChild(imgLis[2].cloneNode(true));
//   imgUl.appendChild(imgLis[3].cloneNode(true));
//   imgUl.appendChild(imgLis[4].cloneNode(true));
//   imgUl.appendChild(imgLis[5].cloneNode(true));
//   imgUl.appendChild(imgLis[6].cloneNode(true));
//   imgUl.appendChild(imgLis[7].cloneNode(true));
//   imgUl.appendChild(imgLis[8].cloneNode(true));
//
//   console.log(imgUl);
//
//   var count = 0;
// //2. 左右焦点功能
//   var flag = true;
//   arrRight.onclick = function () {
//     if (flag) {
//       flag = false;
//       setTimeout(function () {
//         flag = true;
//         if (count <= 1) {
//           count = imgLis.length - 8;
//           imgUl.style.left = -count * imgWidth + "px";
//         }
//         count--;
//         var target = -count * imgWidth;
//         animate(imgUl, target, 5);
//       }, 500)
//     }
//   };
//
//
//   arrLeft.onclick = function () {
//     if (flag) {
//       flag = false;
//       setTimeout(function () {
//         flag = true;
//         if (count >= imgLis.length - 8) {
//           count = 1;
//           imgUl.style.left = -count * imgWidth + "px";
//         }
//         count++;
//         var target = -count * imgWidth;
//         animate(imgUl, target, 5);
//       }, 500)
//     }
//   };
//
  
  //下面轮播
  var slide1 = document.getElementsByClassName("bx_box")[0];
  var imgUl1 = document.getElementsByClassName("imgUl1")[0];
  var imgLis1 = imgUl1.children;
  var arrLeft1 = document.getElementsByClassName("btn_left")[0];
  var arrRight1 = document.getElementsByClassName("btn_right")[0];
  var imgWidth1 = imgLis1[0].offsetWidth + 12;
  
  imgUl1.insertBefore(imgLis1[imgLis1.length - 1].cloneNode(true), imgLis1[0]);
  imgUl1.appendChild(imgLis1[1].cloneNode(true));
  imgUl1.appendChild(imgLis1[2].cloneNode(true));
  imgUl1.appendChild(imgLis1[3].cloneNode(true));
  console.log(imgUl1);
  var count1 = 0;
  var flag1 = true;
//2. 左右焦点功能
  arrRight1.onclick = function () {
    if (flag1) {
      flag1 = false;
      setTimeout(function () {
        flag1 = true;
        if (count1 <= 1) {
          flag1 = true;
          count1 = imgLis1.length - 3;
          imgUl1.style.left = -count1 * imgWidth1 + "px";
        }
        count1--;
        var target1 = -count1 * imgWidth1;
        animate(imgUl1, target1, 10);
      }, 500)
    }
  };
  
  
  arrLeft1.onclick = function () {
    if (flag1) {
      flag1 = false;
      setTimeout(function () {
        flag1 = true;
        if (count1 >= imgLis1.length - 3) {
          count1 = 1;
          imgUl1.style.left = -count1 * imgWidth1 + "px";
        }
        count1++;
        var target1 = -count1 * imgWidth1;
        animate(imgUl1, target1, 10);
      }, 500)
    }
  };
  
  
  window.onload = function () {
    // imgUl.style.left = -imgWidth + "px";
    imgUl1.style.left = -imgWidth1 + "px"
  }
  
  
  var timer1 = null;
  // 自动轮播功能
  timer1 = setInterval(function () {
    arrLeft1.onclick();
  }, 3000);
  
  slide1.onmouseover=function () {
    clearInterval(timer1);
  }
  
  slide1.onmouseout = function () {
    clearInterval(timer1);
    timer1 = setInterval(function () {
      arrLeft1.onclick();
    }, 3000);
  }
  
  
  window.onfocus = function () {
    // 自动轮播功能
    timer1 = setInterval(function () {
      arrLeft1.onclick();
    }, 3000);
  
  
    slide1.onmouseover=function () {
      clearInterval(timer1);
    }
    
    slide1.onmouseout = function () {
      clearInterval(timer1);
      timer1 = setInterval(function () {
        arrLeft1.onclick();
      }, 3000);
    }
   
  }
  window.onblur = function () {
    clearInterval(timer1);
  }
})()




  



