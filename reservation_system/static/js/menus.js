let classification = localStorage.getItem("classification"); //種別
let file_path = localStorage.getItem("file_path"); //フォルダへのパス
var itemData = ""

// データを選別
if (classification=="カレー"){
    $.ajax({type: "GET", url: "https://lukiw928.github.io/momokara/menus/curry.json",async: false, success: function(data){
        itemData = data.menu;
        }
    });
}else if (classification=="おにぎり"){
    $.ajax({type: "GET", url: "https://lukiw928.github.io/momokara/menus/onigiri.json",async: false, success: function(data){
        itemData = data.menu;
        }
    });
}

// 画像を追加
var Img = "<img src='img/cooking/"+file_path+"/0.png'>";

// 商品をリスト化
var res = "<ul class='item_list'>";

// 種別によって戻る画面を変更
for (var i=0; i<itemData.length; i++){
    res += "<li class='item' id=" + i + " onclick='clicked(this.id)';>";
    if (classification=="おにぎり"){
        res += "<a href='details.html'></a>"
    }else{
        res += "<a href='decision.html'></a>"
    }
    res += "<div class='item_title'>";
    res += "<h2>"+itemData[i]["name"]+"</h2>";
    res += "</div>";
    res += "</li>";
}
res += "</ul>"

// HTMLを生成
$(document).ready(function(){
    $("header h1").html(classification);
    $(".item_image").html(Img)
    $("#wrapper").html(res)
})


// 選択された商品のデータを保存
function clicked(getId){
    var menu = document.getElementById(getId).textContent.trim();
    transmit = []
    transmit.push(menu)
    localStorage.setItem("summary",JSON.stringify(transmit))
    for (var i=0; i<itemData.length; i++){
        if (itemData[i].name == menu){
            localStorage.setItem("item_data",JSON.stringify(itemData[i]));
            localStorage.setItem("total",itemData[i]["price"])
            localStorage.setItem("menu_name","具を選択")
            break;
        }
    }
}

// debug
console.log(itemData)
