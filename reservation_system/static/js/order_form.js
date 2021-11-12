var data = JSON.parse(localStorage.getItem("order_form")); // 商品一覧
var value = 0; //合計


// 商品一覧画面を生成
var res = "<table class='table'><tr><th>商品名</th><th>数量</th><th>料金</th></tr>";

if (data != null){

    // 商品名を列挙
    for (var i=0; i < data.length; i++){
        tl = Number(data[i]["price"])*Number(data[i]["cnt"]);
        value += tl
        var menu_name = "";
        res += "<tr>";
        for (var j=0; data[i]["name"].length>j; j++){
            menu_name += data[i]["name"][j]+"<br>";
        }
        res += "<td>"+menu_name+"</td>";
        res += "<td>"+data[i]["cnt"]+"</td>";
        res += "<td>"+tl+"</td></tr>";
    }
}else{
    res += "<tr><td></td><td></td><td></td></tr>";
}

res += "</table>";
res += "<h2>合計 "+value+" 円</h2>";

// 注文表を指定したメールアドレスに送る
function shopping(){
    if (!data){
        alert("何か1つ以上選択してください")
    }else{
        alert("ご予約ありがとうございます")
        document.getElementById("order").value = JSON.stringify(data);
        console.log(data)
    }
    localStorage.setItem("order_form",null)
}

function pleaseLogin(){
    alert("この機能を使うにはログインしてください")
}



$(document).ready(function(){
    $("#table").html(res)
})

//debug

console.log(data)