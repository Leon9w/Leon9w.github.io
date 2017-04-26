$(document).ready(function(){


      //换背景图
      huantu();
      function huantu() {
         var num, num1;
         do {
            num = Math.floor(Math.random() * 9);
         } while (num == 9)
         $("body").get(0).style.backgroundImage = "url(./image/" + num + ".jpg)"
      }


      var wht, wht2, mydata1, mydata2, mydata3, mydata4, flag1 = true, flag2 = true, flag3 = true;
      var nowtime = new Date;
      var hours = nowtime.getHours();
      var date1 = nowtime.getDate();
      var year1 = nowtime.getFullYear();
      var mouth = nowtime.getUTCMonth() + 1;
      console.log(hours)
      switch (mouth) {
         case 1:
      }
      if (mouth < 10) {
         mouth = "0" + mouth;
      }
      var nowtime = year1 + "-" + mouth + "-" + date1;

      //ajax 请求部分
      $.ajax({
         type: 'get',
         async: false,
         url: 'http://api.k780.com:88/?app=weather.future&weaid=xian&appkey=24662&sign=34d9d6abe71b980fdfc6540d35f11811&format=json&jsoncallback=data',
         dataType: 'jsonp',
         jsonp: 'callback',
         jsonpCallback: 'data',
         success: function (data) {
            if (data.success != '1') {
               alert(data.msgid + ' ' + data.msg);
               exit;
            }
            //遍历
//                    var description = "";
//                    for(var i in data.result){
//                        var property=data.result[i];
//                        description+=i+" = "+property+"\n";
//                    }
            mydata1 = data.result
            console.log(mydata1);
         },
         error: function () {
            alert('fail');
         }
      });
//
//
//

      $.ajax({
         type: 'get',
         async: false,
         url: 'http://api.k780.com:88/?app=weather.pm25&weaid=xian&appkey=24662&sign=34d9d6abe71b980fdfc6540d35f11811&format=json&jsoncallback=data2',
         dataType: 'jsonp',
         jsonp: 'callback',
         jsonpCallback: 'data2',
         success: function (data2) {
            if (data2.success != '1') {
               alert(data2.msgid + ' ' + data2.msg);
               exit;
            }
            // //遍历
            // var description = "";
            // for(var i in data.result){
            //    var property=data.result[i];
            //    description+=i+" = "+property+"\n";
            // }
            // alert(description);
            mydata2 = data2.result;
            console.log(mydata2)
         },
         error: function () {
            alert('fail');
         }
      });


      $.ajax({
         type: 'get',
         async: false,
         url: 'http://api.k780.com:88/?app=weather.today&weaid=xian&appkey=24662&sign=34d9d6abe71b980fdfc6540d35f11811&format=json&jsoncallback=data3',
         dataType: 'jsonp',
         jsonp: 'callback',
         jsonpCallback: 'data3',
         success: function (data3) {
            if (data3.success != '1') {
               alert(data3.msgid + ' ' + data3.msg);
               exit;
            }
            //遍历
            mydata3 = data3.result;
            console.log(data3.result)
            // var description = "";
            // for(var i in data.result){
            //    var property=data.result[i];
            //    description+=i+" = "+property+"\n";
            // }
            // alert(description);
         },
         error: function () {
            alert('fail');
         }
      });


      $.ajax({
         type: 'get',
         async: false,
         url: 'http://api.k780.com:88/?app=weather.lifeindex&weaid=xian&appkey=24662&sign=34d9d6abe71b980fdfc6540d35f11811&format=json&jsoncallback=data4',
         dataType: 'jsonp',
         jsonp: 'callback',
         jsonpCallback: 'data4',
         success: function (data4) {
            if (data4.success != '1') {
               alert(data4.msgid + ' ' + data4.msg);
               exit;
            }
            //遍历
            mydata4 = data4.result;
            console.log(mydata4)
            // var description = "";
            // for(var i in data.result){
            //    var property=data.result[i];
            //    description+=i+" = "+property+"\n";
            // }
            // alert(description);
         },
         error: function () {
            alert('fail');
         }
      });


//   按钮旋转
      $(".part2bottom").get(0).addEventListener("touchend", function () {
         if (flag3) {
            $(".part2btn").get(0).style.transformOrigin = "center center"
            $(".part2btn").get(0).style.transform = "rotate(180deg)"
            $(".p2mbig").slideDown(500)
         } else {
            $(".part2btn").get(0).style.transformOrigin = "center center"
            $(".part2btn").get(0).style.transform = "rotate(360deg)"
            $(".p2mbig").slideUp(500)
         }
         flag3 = !flag3;
      })


//第二部分 日期星期切换 开始
      function changeWay() {
         if (flag2) {
            $(".p2riqi").toggleClass("p2change");
            $(".p2xingqi").toggleClass("p2change")
         } else {
            $(".p2riqi").toggleClass("p2change");
            $(".p2xingqi").toggleClass("p2change")
         }
         flag2 = !flag2;
         fn();
      }

      //第二部分 日期星期切换 结束


//星期日期切换
      $(".part2mon").on("click", function () {
         changeWay();
      })

//   模块滑动js
      var sx = 0, nx = 0, kx = 0, timestart = 0,
          overwidth = $(".part2mbigbox").width() - $(".part2middle").width();


      $(".part2mbigbox").get(0).addEventListener("touchstart", fntouchs);
      $(".part2mbigbox").get(0).addEventListener("touchmove", fntouchm);
      $(".part2mbigbox").get(0).addEventListener("touchend", fntouche);

      function fntouchs(e) {
         $(".part2mbigbox").css({
            transition: "none",
         })
         timestart = e.timeStamp;
         sx = e.changedTouches[0].clientX;
      }

      function fntouchm(e) {
         nx = e.changedTouches[0].clientX;
         $(".part2mbigbox").css({
            transform: `translateX(${nx - sx + kx}px)`
         })
      }

      function fntouche(e) {
         var nowtime = e.timeStamp - timestart;
         $(".part2mbigbox").css({
            transition: "all 0.4s"
         })
         if (nx == 0) {
            return;
         }
         if (nx - sx + kx < -overwidth || (nowtime < 200 && nx - sx < 0)) {
            $(".part2mbigbox").css({
               transform: `translateX(${-overwidth}px)`
            })
            kx = -overwidth;
            nx = 0;
            return;
         } else if (nx - sx + kx > 0 || (nowtime < 200 && nx - sx > 0)) {
            $(".part2mbigbox").css({
               transform: `translateX(${0}px)`
            })
            kx = 0;
            nx = 0;
            return
         }
         kx = nx - sx + kx;
         nx = 0;
      }


//ajax接收后运行的 js
      function fn() {
         if (mydata2.aqi_levnm == "优") {
            $(".conshuzhi22").css({
               background: "#25FD02"
            })
         } else if (mydata2.aqi_levnm == "良") {
            $(".conshuzhi22").css({
               background: "#3cae29"
            })
         } else if (mydata2.aqi_levnm == "轻度污染") {
            $(".conshuzhi22").css({
               background: "#E5B806"
            })
         } else if (mydata2.aqi_levnm == "中度污染") {
            $(".conshuzhi22").css({
               background: "#ff0000"
            })
         } else if (mydata2.aqi_levnm == "重度污染") {
            $(".conshuzhi22").css({
               background: "#c36e02"
            })
         } else if (mydata2.aqi_levnm == "严重污染") {
            $(".conshuzhi22").css({
               background: "#522f02"
            })
         }


         //画布部分
         var canvas1 = document.querySelector(".canvas1")
         var avk = document.documentElement.clientWidth;
         var awidth = avk / 750 * 1120
         var bheight = avk / 750 * 400
         var usewidth = awidth / 7;
         var npx = avk / 750 * 200 / 50;
         canvas1.setAttribute('width', awidth + 'px');
         canvas1.setAttribute('height', bheight + 'px');
         var ava = canvas1.getContext("2d")
         ava.translate(0, avk / 750 * 200)
         var y0 = mydata1[0].temp_high,
             y1 = mydata1[1].temp_high,
             y2 = mydata1[2].temp_high,
             y3 = mydata1[3].temp_high,
             y4 = mydata1[4].temp_high,
             y5 = mydata1[5].temp_high,
             y6 = mydata1[6].temp_high,

             yy0 = mydata1[0].temp_low,
             yy1 = mydata1[1].temp_low,
             yy2 = mydata1[2].temp_low,
             yy3 = mydata1[3].temp_low,
             yy4 = mydata1[4].temp_low,
             yy5 = mydata1[5].temp_low,
             yy6 = mydata1[6].temp_low;


         ava.strokeStyle = "#FFF"
         ava.lineWidth = 1;
         // ava.beginPath();
         // ava.moveTo(0,0);
         // ava.lineTo(awidth,0)
         // ava.stroke();
         ava.beginPath();
         ava.moveTo(usewidth / 2, -y0 * npx);
         ava.lineTo(usewidth + usewidth / 2, -y1 * npx);
         ava.lineTo(2 * usewidth + usewidth / 2, -y2 * npx);
         ava.lineTo(3 * usewidth + usewidth / 2, -y3 * npx);
         ava.lineTo(4 * usewidth + usewidth / 2, -y4 * npx);
         ava.lineTo(5 * usewidth + usewidth / 2, -y5 * npx);
         ava.lineTo(6 * usewidth + usewidth / 2, -y6 * npx);
         ava.stroke();

         ava.textAlign = "center"
         ava.fillStyle = "#FFF"
         ava.textBaseline = "top"

         ava.beginPath();
         ava.fillText(y0, usewidth / 2, -y0 * npx)
         ava.arc(usewidth / 2, -y0 * npx, npx, 0 * Math.PI / 180, 360 * Math.PI / 180)
         ava.fill()

         ava.beginPath();
         ava.fillText(y1, usewidth + usewidth / 2, -y1 * npx)
         ava.arc(usewidth + usewidth / 2, -y1 * npx, npx, 0 * Math.PI / 180, 360 * Math.PI / 180)
         ava.fill()

         ava.beginPath();
         ava.fillText(y2, 2 * usewidth + usewidth / 2, -y2 * npx)
         ava.arc(2 * usewidth + usewidth / 2, -y2 * npx, npx, 0 * Math.PI / 180, 360 * Math.PI / 180)
         ava.fill()

         ava.beginPath();
         ava.fillText(y3, 3 * usewidth + usewidth / 2, -y3 * npx)
         ava.arc(3 * usewidth + usewidth / 2, -y3 * npx, npx, 0 * Math.PI / 180, 360 * Math.PI / 180)
         ava.fill()

         ava.beginPath();
         ava.fillText(y4, 4 * usewidth + usewidth / 2, -y4 * npx)
         ava.arc(4 * usewidth + usewidth / 2, -y4 * npx, npx, 0 * Math.PI / 180, 360 * Math.PI / 180)
         ava.fill()

         ava.beginPath();
         ava.fillText(y5, 5 * usewidth + usewidth / 2, -y5 * npx)
         ava.arc(5 * usewidth + usewidth / 2, -y5 * npx, npx, 0 * Math.PI / 180, 360 * Math.PI / 180)
         ava.fill()

         ava.beginPath();
         ava.fillText(y6, 6 * usewidth + usewidth / 2, -y6 * npx)
         ava.arc(6 * usewidth + usewidth / 2, -y5 * npx, npx, 0 * Math.PI / 180, 360 * Math.PI / 180)
         ava.fill()


         ava.translate(0, avk / 750 * 200)
         // ava.strokeStyle="#FFF"
         // ava.lineWidth=1;
         // ava.beginPath();
         // ava.moveTo(0,-10);
         // ava.lineTo(awidth,0)
         // ava.stroke();
         ava.beginPath();
         console.log(-yy0 * npx)
         ava.moveTo(usewidth / 2, -yy0 * npx);
         ava.lineTo(usewidth + usewidth / 2, -yy1 * npx);
         ava.lineTo(2 * usewidth + usewidth / 2, -yy2 * npx);
         ava.lineTo(3 * usewidth + usewidth / 2, -yy3 * npx);
         ava.lineTo(4 * usewidth + usewidth / 2, -yy4 * npx);
         ava.lineTo(5 * usewidth + usewidth / 2, -yy5 * npx);
         ava.lineTo(6 * usewidth + usewidth / 2, -yy6 * npx);
         ava.stroke();


         ava.textAlign = "center"
         ava.fillStyle = "#FFF"
         ava.textBaseline = "bottom"

         ava.beginPath();
         ava.fillText(yy0, usewidth / 2, -yy0 * npx)
         ava.arc(usewidth / 2, -yy0 * npx, npx, 0 * Math.PI / 180, 360 * Math.PI / 180)
         ava.fill()

         ava.beginPath();
         ava.fillText(yy1, usewidth + usewidth / 2, -yy1 * npx)
         ava.arc(usewidth + usewidth / 2, -yy1 * npx, npx, 0 * Math.PI / 180, 360 * Math.PI / 180)
         ava.fill()

         ava.beginPath();
         ava.fillText(yy2, 2 * usewidth + usewidth / 2, -yy2 * npx)
         ava.arc(2 * usewidth + usewidth / 2, -yy2 * npx, npx, 0 * Math.PI / 180, 360 * Math.PI / 180)
         ava.fill()

         ava.beginPath();
         ava.fillText(yy3, 3 * usewidth + usewidth / 2, -yy3 * npx)
         ava.arc(3 * usewidth + usewidth / 2, -yy3 * npx, npx, 0 * Math.PI / 180, 360 * Math.PI / 180)
         ava.fill()

         ava.beginPath();
         ava.fillText(yy4, 4 * usewidth + usewidth / 2, -yy4 * npx)
         ava.arc(4 * usewidth + usewidth / 2, -yy4 * npx, npx, 0 * Math.PI / 180, 360 * Math.PI / 180)
         ava.fill()

         ava.beginPath();
         ava.fillText(yy5, 5 * usewidth + usewidth / 2, -yy5 * npx)
         ava.arc(5 * usewidth + usewidth / 2, -yy5 * npx, npx, 0 * Math.PI / 180, 360 * Math.PI / 180)
         ava.fill()

         ava.beginPath();
         ava.fillText(yy6, 6 * usewidth + usewidth / 2, -yy6 * npx)
         ava.arc(6 * usewidth + usewidth / 2, -yy6 * npx, npx, 0 * Math.PI / 180, 360 * Math.PI / 180)
         ava.fill()


         //最高 最低温度部分
         $(".p2htemits").each(function (i) {
            $(".p2htemits").eq(i).text(function () {
               return mydata1[i].temp_high
            })
         })
         $(".p2ltemits").each(function (i) {
            $(".p2ltemits").eq(i).text(function () {
               return mydata1[i].temp_low
            })
         })


         //天气图标变化
         if (hours < 18) {
            wht = "ddd";
            wht2 = "weatid";
         } else {
            wht = "nnn";
            wht2 = "weatid1";
         }
         var allimgs = document.querySelectorAll(".imgs");
         Array.from(allimgs).forEach(function (v, i) {
            allimgs[i].style.backgroundImage = "url(./image/wea/" + wht + "/" + mydata1[i][wht2] + ".png)"
         })


         //星期日期切换 开始
         if (flag2) {
            $(".p2mtopits").each(function (i) {
               $(this).text(function () {
                  return mydata1[i + 1].days.slice(5, 10).replace("-", " / ")
               })
            })
         } else {
            $(".p2mtopits").each(function (i) {
               $(this).text(function () {
                  return mydata1[i + 1].week
               })
            })
         }
         //星期日期切换 结束


         //第四部分生活指数 开始
         $(".p4content:eq(0)").text(function () {
            return mydata4[nowtime].lifeindex_xc_attr;
         })
         $(".p4content:eq(1)").text(function () {
            return mydata4[nowtime].lifeindex_uv_attr;
         })
         $(".p4content:eq(2)").text(function () {
            return mydata4[nowtime].lifeindex_ct_attr;
         })
         $(".p4content:eq(3)").text(function () {
            return mydata4[nowtime].lifeindex_gm_attr;
         })
         $(".p4content:eq(4)").text(function () {
            return mydata4[nowtime].lifeindex_yd_attr;
         })

         // 建议
         $(".p4items").each(function (i) {
            var touchbe = $(".p4items").get(i);

            touchbe.addEventListener("touchstart", function () {
               if (flag1) {
                  flag1 = false;
                  if ($(".p4items").eq(i).hasClass("p4itemsnew")) {
                     $(".p4l").eq(i).animate({height: 0}, 400);
                     var fn1 = function () {
                        $(".p4items").eq(i).removeClass("p4itemsnew")
                     }
                     setTimeout(fn1, 400);
                     setTimeout(function () {
                        flag1 = true;
                     }, 400)
                     return;
                  }
                  $(".p4items").each(function () {
                     $(this).removeClass("p4itemsnew")
                  })
                  $(".p4items").eq(i).addClass("p4itemsnew")
                  $(".p4l").each(function (i) {
                     $(".p4l").css({
                        height: 0
                     })
                  });
                  $(".p4l").eq(i).animate({height: 40}, 400);
                  setTimeout(function () {
                     flag1 = true;
                  }, 400)
               }
            })


         })

         $(".p4l").eq(0).text(function () {
            return mydata4[nowtime].lifeindex_xc_dese;
         })

         $(".p4l").eq(1).text(function () {
            return mydata4[nowtime].lifeindex_uv_dese;
         })

         $(".p4l").eq(2).text(function () {
            return mydata4[nowtime].lifeindex_ct_dese;
         })

         $(".p4l").eq(3).text(function () {
            return mydata4[nowtime].lifeindex_gm_dese;
         })

         $(".p4l").eq(4).text(function () {
            return mydata4[nowtime].lifeindex_yd_dese;
         })
         //第四部分生活指数 结束


         $(".H_temN").text(function () {
            return mydata3.temp_curr
         })
         $(".H_qingk").text(function () {
            return mydata3.weather_curr
         })
         $(".conshuzhi22").text(function () {
            return mydata2.aqi_levnm
         })
         $(".part3").text(function () {
            return "预计今日最高气温" + mydata3.temp_high + "度，最低气温" + mydata3.temp_low + "度，当前PM2.5值为" + mydata2.aqi + "," + mydata2.aqi_remark + "。"
         })
         $(".conshuzhi:first").text(function () {
            return mydata3.humidity
         })
         $(".conshuzhi:eq(1)").text(function () {
            return mydata3.winp
         })
         $(".conwen1:eq(1)").text(function () {
            return mydata3.wind
         })
      }

      setTimeout(fn, 1000)


   







   








//    结尾结尾结尾结尾结尾结尾结尾结尾结尾结尾结尾结尾结尾结尾
})