$("#button1").css("background-color", "lightblue");
$("#button2 , #button3, #button4, #button5").css("background-color", "white");
$("#secondpage, #thirdpage, #fourthpage, #fifthpage").hide();
var pageno = 1;

$("#firstpage").show();
const func = (pageno) => {
  fetch("https://picsum.photos/v2/list?page=" + pageno + "&limit=20")
    .then((data) => {
      return data.json();
    })
    .then((getData) => {
      let data1 = "";
      getData.map((values) => {
        data1 += `
                     <div class="items">
                     <div class="items-image" ><img src=${values.download_url}> </div>
                     <div class="items-info">
                     <h3>  ${values.id}</h3>
                     <p>${values.author}</p>
                     </div>
                     </div>`;
      });
      document.getElementById("firstpage").innerHTML = data1;
    });
};
func(1);
$("#button1").click(function () {
  $("#firstpage").show();
  $("#button1").css("background-color", "lightblue");
  $("#button2, #button3, #button4, #button5").css("background-color", "white");
  pageno = 1;
  func(1);
});

$("#button2").click(function () {
  $("#firstpage").show();
  $("#button2").css("background-color", "lightblue");
  $("#button1 , #button3, #button4, #button5").css("background-color", "white");
  pageno = 2;
  func(2);
});

$("#button3").click(function () {
  $("#firstpage").show();
  $("#button3").css("background-color", "lightblue");
  $("#button1 , #button2, #button4, #button5").css("background-color", "white");
  pageno = 3;
  func(3);
});

$("#button4").click(function () {
  $("#firstpage").show();
  $("#button4").css("background-color", "lightblue");
  $("#button1 , #button3, #button2, #button5").css("background-color", "white");
  pageno = 4;
  func(4);
});

$("#button5").click(function () {
  $("#firstpage").show();
  $("#button5").css("background-color", "lightblue");
  $("#button1 , #button3, #button4, #button2").css("background-color", "white");
  pageno = 5;
  func(5);
});

$("#prev").click(function () {
  if (pageno > 1) {
    $("#firstpage").show();
    pageno = pageno - 1;
    $("#button" + pageno).css("background-color", "lightblue");
    $("#button" + (pageno + 1)).css("background-color", "white");
    func(pageno);
  }
});
$("#next").click(function () {
  if (pageno < 5) {
    $("#firstpage").show();
    pageno = pageno + 1;
    $("#button" + pageno).css("background-color", "lightblue");
    $("#button" + (pageno - 1)).css("background-color", "white");
    func(pageno);
  }
});
