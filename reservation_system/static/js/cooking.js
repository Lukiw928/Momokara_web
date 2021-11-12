let classification = localStorage.getItem("classification").trim() //種別
let file_path = localStorage.getItem("file_path") //フォルダへのパス

// 表示するリストの基を作成
var res = "<ul class='item_list'>";

//使うデータの判別
var itemData = []
if (classification=="弁当"){
    $.ajax({type: "GET", url: "https://lukiw928.github.io/momokara/menus/bento.json",async: false, success: function(data){
        itemData = data.menu;
        }
    });
}else if (classification=="丼"){
    $.ajax({type: "GET", url: "https://lukiw928.github.io/momokara/menus/don.json",async: false, success: function(data){
        itemData = data.menu;
        }
    });
}else if (classification=="単品唐揚げ"){
    $.ajax({type: "GET", url: "https://lukiw928.github.io/momokara/menus/t_karaage.json",async: false, success: function(data){
        itemData = data.menu;
        }
    });
}else if (classification=="単品揚げ物"){
    $.ajax({type: "GET", url: "https://lukiw928.github.io/momokara/menus/t_agemono.json",async: false, success: function(data){
        itemData = data.menu;
        }
    });
}else if (classification=="その他単品"){
    $.ajax({type: "GET", url: "https://lukiw928.github.io/momokara/menus/other.json",async: false, success: function(data){
        itemData = data.menu;
        }
    });
}else if (classification=="お飲み物"){
    $.ajax({type: "GET", url: "https://lukiw928.github.io/momokara/menus/drink.json",async: false, success: function(data){
        itemData = data.menu;
        }
    });
}

// リストを作成
for (var i=0; i < itemData.length; i++){
    res += "<li class='item' id=" + i + " onclick='clicked(this.id)';>";

    // 種別によって遷移するページを変更
    if (classification=="単品揚げ物" || classification=="お飲み物" || classification=="その他単品"){
        if (itemData[i].name=="たこ焼き" || itemData[i].name=="フライドポテト" || itemData[i].name=="ご飯" || itemData[i].name== "おにぎり"){
            res += "<a href='details.html'></a>";
        }else{
            res += "<a href='decision.html'></a>";
        }
    }else{
        res += "<a href='details.html'></a>";
    }

    // 写真と商品名を書き込む
    res += "<div class='item_img'>";
    res += "<img src='img/cooking/"+file_path+"/"+itemData[i]["image_index"]+".png'>";
    res += "</div>";
    res += "<div class='item_title'>";
    res += "<h2>"+itemData[i]["name"]+"</h2>";
    res += "</div>";
    res += "</li>";
}
res += "</ul>"
// console.log(res)

//ヘッダーに種別を表示する
$(document).ready(function(){
    $("header h1").html(classification);
    $("#menus").html(res);
})

//クリックした次のページで商品名を表示できるようにする
function clicked(getId) {
    var menu = document.getElementById(getId).textContent.trim(); //商品名を取得

    // 単品揚げ物,お飲み物,その他単品の場合、商品名をローカルストレージに登録
    if (classification=="単品揚げ物" || classification== "お飲み物" || classification=="その他単品"){
        var transmit = [menu]
        localStorage.setItem("summary",JSON.stringify(transmit))
    }
    localStorage.setItem("menu_name",menu);

    // 取得した商品名のデータをまるまる登録...Pythonの辞書型のようにO(1)で求めたかったのですが、難航。改善の余地あり
    for (var i=0; i<itemData.length; i++){
        if (itemData[i].name == menu){
            localStorage.setItem("item_data",JSON.stringify(itemData[i]));
            if (classification=="単品揚げ物" || classification=="お飲み物" || classification=="その他単品"){
                localStorage.setItem("total",itemData[i]["price"])
                localStorage.setItem("menu_name",itemData[i]["name"]);
            }
            break;
        }
    }
    
};

//debug

// console.log(classification)
// // console.log(res)
// // console.log(tes)
console.log(itemData)
