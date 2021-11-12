// let takana = localStorage.getItem("takana"); //高菜トッピング,ありか否か
let data = JSON.parse(localStorage.getItem("item_data")); //商品のデータ
let classification = localStorage.getItem("classification").trim(); //種別
let summary = JSON.parse(localStorage.getItem("summary")); //商品Strings
let file_path = localStorage.getItem("file_path"); //フォルダへのパス
var total = Number(localStorage.getItem("total")); //商品価格
// ご飯のサイズ一覧
let rice = {
    "ご飯無し":-100,
    "半分":-50,
    "少なめ":0,
    "普通":0,
    "大盛":50,
    "特盛":100
}


var res = "";

// 種別によって戻る画面を変更
if (classification=="弁当" || classification == "丼" || classification=="単品唐揚げ" || classification=="その他単品" || classification=="おにぎり"){
    if ((data.name!="たこ焼き" && data.name!="フライドポテト" && data.name!="ご飯") && classification=="その他単品"){
        var back = "<a class='to_back_btn' href='../cooking'>戻る</a>";
    }else{
        var back = "<a class='to_back_btn' href='../details'>戻る</a>";
    }
}else if (classification=="単品揚げ物" || classification=="お飲み物"){
    var back = "<a class='to_back_btn' href='../cooking'>戻る</a>";
}else{
    var back = "<a class='to_back_btn' href='../menus'>戻る</a>";
}
back += "<h1>確認</h1>";


// 画像がない商品には説明を。ある場合は画像を置く。
if (classification=="カレー" || classification=="おにぎり" || classification=="飲み物"){
    res += "<div class='description'><h2>"+data["description"]+"</h2></div>";
}else{
    res += "<div class='item_image'><img src='https://lukiw928.github.io/momokara/img/cooking/"+file_path+"/"+data["image_index"]+".png'></div>";
}
res += "<ul>";


// 商品の中身をリストに
for (var i=0; i<summary.length; i++){
    res += "<li>"+summary[i]+"</li>";
}
res += "</ul>";


// 注文数を +1 する
function plus_btn(){
    cnt = parseInt(localStorage.getItem("cnt")) + 1;
    localStorage.setItem("cnt",cnt);
    howMuch.innerHTML = "¥" + total*cnt;
    count.innerHTML = cnt;
    // console.log(total,cnt+1)
}

// 注文数を -1 する
function minus_btn(){
    var cnt = parseInt(localStorage.getItem("cnt"));

    // 焼き鳥は最低2本からの注文
    if (data.name=="焼き鳥" && cnt==2){
        alert("焼き鳥は2つ以上選択してください");
        cnt = 2;
    }else{
        if (cnt <= 1){
            alert("1つ以上選択してください");
        }else{
            cnt -= 1;
        }
    }

    howMuch.innerHTML = "¥"+total*cnt;
    count.innerHTML = cnt;
    localStorage.setItem("cnt",cnt);
}

// 注文表に追加する
function add_cart(){
    var TorF = true
    var cart_data = JSON.parse(localStorage.getItem("order_form"));
    var cnt = localStorage.getItem("cnt")
    add_data = {"name":summary,"cnt":cnt,"price":total} //追加するデータ

    // すでにデータがあれば追加する。
    if (cart_data){
        for (var i=0; i<cart_data.length; i++){
            
            // 同じ商品があれば数を足す
            if (JSON.stringify(cart_data[i].name) == JSON.stringify(summary)){
                cart_data[i].cnt = Number(cart_data[i].cnt)+Number(cnt)
                // cart_data[i].price = total*Number(cart_data[i].cnt)
                TorF = false
                break;
            }
        }
        if (TorF){
            cart_data.push(add_data);
        }
    }else{
        cart_data = []
        cart_data.push(add_data);
    }

    localStorage.setItem("order_form",JSON.stringify(cart_data));
}

// 準備出来次第 HTML を生成
$(document).ready(function(){
    $("header").html(back);
    $("#wrapper").html(res);
    $("#howMuch").html("¥"+total);

    // 焼き鳥のみ初期値は2に設定
    if (data.name=="焼き鳥"){
        localStorage.setItem("cnt",2)
        $("#count").html(2)
    }else{
        localStorage.setItem("cnt",1)
        $("#count").html(1)
    }
})


// debug
// console.log(takana)
// console.log(data)
// console.log(total)
console.log(summary)