// カレー一覧
let curry = [
    {
        "name":"元祖ももからカレー",
        "price":680,
        "id":0,
        "description":"カレー + 元祖ももからS"
    },
    {
        "name":"ビーフカレー",
        "price":460,
        "id":1,
        "description":"シンプルなカレー"
    },
    {
        "name":"コロッケカレー",
        "price":550,
        "id":2,
        "description":"カレー + コロッケ"
    },
    {
        "name":"フィッシュカレー",
        "price":580,
        "id":3,
        "description":"カレー + 白身フライ"
    },
    {
        "name":"エビカツカレー",
        "price":610,
        "id":4,
        "description":"カレー + エビカツ"
    },
    {
        "name":"メンチカツカレー",
        "price":560,
        "id":5,
        "description":"カレー + メンチカツ"
    },
    {
        "name":"フランクフルトカレー",
        "price":660,
        "id":6,
        "description":"カレー + フランクフルト"
    },
    {
        "name":"スタミナカレー",
        "price":710,
        "id":7,
        "description":"カレー + スタミナ唐揚げS"
    },
    {
        "name":"たこ焼きカレー",
        "price":730,
        "id":8,
        "description":"カレー + たこ焼き6個"
    },
    {
        "name":"エビフライカレー",
        "price":760,
        "id":9,
        "description":"カレー + エビフライ2本"

    },
    {
        "name":"チキンカツカレー",
        "price":640,
        "id":10,
        "description":"カレー + チキンカツ"
    },
    {
        "name":"豚ロースカツカレー",
        "price":850,
        "id":11,
        "description":"カレー + ロースカツ3枚"
    }
];
// おにぎり一覧 -登録済み
let onigiri = [
    {
        "name":"Aセット",
        "price":430,
        "description":"元祖S(100g)・おにぎり1個"
    },
    {
        "name":"Bセット",
        "price":480,
        "description":"元祖M(130g)・おにぎり1個"
    },
    {
        "name":"Cセット",
        "price":610,
        "description":"元祖M(130g)・おにぎり2個"
    },
    {
        "name":"Dセット",
        "price":700,
        "description":"元祖L(180g)・おにぎり2個"
    }
];

// const fs = require('fs');

let classification = localStorage.getItem("classification"); //種別
let file_path = localStorage.getItem("file_path"); //フォルダへのパス


// データを選別
if (classification=="カレー"){
    var data = curry;
}else if (classification=="おにぎり"){
    var data = onigiri;
}

// 画像を追加
var Img = "<img src='https://lukiw928.github.io/momokara/img/cooking/"+file_path+"/0.png'>";

// 商品をリスト化
var res = "<ul class='item_list'>";

// 種別によって戻る画面を変更
for (var i=0; i<data.length; i++){
    res += "<li class='item' id=" + i + " onclick='clicked(this.id)';>";
    if (classification=="おにぎり"){
        res += "<a href='../details'></a>"
    }else{
        res += "<a href='../decision'></a>"
    }
    res += "<div class='item_title'>";
    res += "<h2>"+data[i]["name"]+"</h2>";
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
    for (var i=0; i<data.length; i++){
        if (data[i].name == menu){
            localStorage.setItem("item_data",JSON.stringify(data[i]));
            localStorage.setItem("total",data[i]["price"])
            localStorage.setItem("menu_name","具を選択")
            break;
        }
    }
}

// debug
console.log(data)