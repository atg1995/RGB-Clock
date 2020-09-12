 const hour = document.querySelector('.hour');
 const min = document.querySelector('.min');
 const sec = document.querySelector('.sec')
 const body = document.querySelector('body');
 const colorCodeR = document.querySelector(".colorCodeR")
 const colorCodeG = document.querySelector(".colorCodeG")
 const colorCodeB = document.querySelector(".colorCodeB")
 var firstHex = "";
 var secondHEx = "";
 var thirdHex = "";
 let root = document.documentElement;
 var div_a = 5;
 var div_b = 20;
 var div_c = 50;
 var count_a = 50;
 var count_b = 50;
 var count_c = 50;



 function clock() {
     const time = new Date();
     const seconds = time.getSeconds();
     const minutes = time.getMinutes();
     const hours = (time.getHours() % 12);

     if (hours < 10) {
         hour.innerHTML = "0" + hours;
     } else {
         hour.innerHTML = hours;
     }

     if (minutes < 10) {
         min.innerHTML = "0" + minutes;
     } else {
         min.innerHTML = minutes;
     }

     if (seconds < 10) {
         sec.innerHTML = "0" + seconds;
     } else {
         sec.innerHTML = seconds;
     }

     if (count_a > 200 || count_a < 50) {
         div_a = -div_a;
         if (count_b > 200 || count_b < 50) {
             div_b = -div_b;
             count_c += div_c;
             if (count_c > 200 || count_c < 50) {
                 div_c = -div_c;
             }
         }
         count_b += div_b;
     }
     count_a += div_a;

     root.style.setProperty('--a', count_a);
     root.style.setProperty('--b', count_b);
     root.style.setProperty('--c', count_c);
     colorCodeR.innerHTML = count_a;
     colorCodeG.innerHTML = count_b;
     colorCodeB.innerHTML = count_c;


 }

 setInterval(clock, 100);
