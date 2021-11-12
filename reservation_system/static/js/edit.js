var data = JSON.parse(localStorage.getItem("order_form")); //注文表のデータ
console.log(data)


// 注文表のリストを作成
var res = "<div class='items'><ul>";
for (var i=0; i<data.length; i++){
    res += "<li class='item'>";
    for (var j=0; j<data[i]["name"].length; j++){
        res += data[i]["name"][j] + "<br>"
    }
    res += "<div class='btn"+i+"'><div class='btn'><h2 onclick=minus_btn(this.id) id="+i+">-</h2><h2 id="+i+">"+data[i]["cnt"]+"</h2><h2 onclick=plus_btn(this.id) id="+i+">+</h2></div>";
    res += "</div>"
    res += "</li><hr>"
}
res += "</ul></div>"


// + ボタンが押された時の処理
function plus_btn(getId){
    console.log(getId)
    var cnt = parseInt(data[parseInt(getId)]["cnt"])
    data[getId]["cnt"] = cnt+1

    //焼き鳥のみ2本からなので調整
    if (data[getId]["name"]=="焼き鳥" && cnt==0){
        data[getId]["cnt"] = 2
    }
    $(".btn"+getId).html("<div class='btn'><h2 onclick=minus_btn(this.id) id="+getId+">-</h2><h2 id="+getId+">"+data[getId]["cnt"]+"</h2><h2 onclick=plus_btn(this.id) id="+getId+">+</h2></div>")
}

// - ボタンが押された時の処理
function minus_btn(getId){
    var cnt = parseInt(data[getId]["cnt"])

    //焼き鳥のみ2本からなので調整
    if (data[getId]["name"]=="焼き鳥" && cnt==2){
        data[getId]["cnt"] = 0
    }else{
        if (cnt <= 0){
            alert("負の数は選択できません")
        }else{
            data[getId]["cnt"] = cnt-1
        }
    }
    $(".btn"+getId).html("<div class='btn'><h2 onclick=minus_btn(this.id) id="+getId+">-</h2><h2 id="+getId+">"+data[getId]["cnt"]+"</h2><h2 onclick=plus_btn(this.id) id="+getId+">+</h2></div>")

}

// 保存ボタンが押された時の処理
function save(){
    var add_form = []
    
    for (var i=0; i<data.length; i++){
        if (data[i]["cnt"] != 0){
            add_form.push(data[i])
        }
    }
    localStorage.setItem("order_form",JSON.stringify(add_form))
}

$(document).ready(function(){
    $("#wrapper").html(res)
})