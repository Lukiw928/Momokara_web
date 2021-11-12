// 弁当のデータ 本番環境ではJSONに。
let bento = [
    {
        "name":"王道三種盛弁当",
        "price":{
            "M":650,
            "L":780,
            "LL":890,
            "3L":1090
        },
        "id":0,
        "image_index":0
    },
    {
        "name":"甘辛チキンマヨ弁当",
        "price":{
            "M":570,
            "L":670,
            "LL":970,
            "3L":""
        },
        "id":1,
        "image_index":1
    },
    {
        "name":"元祖ももから弁当",
        "price":{
            "M":460,
            "L":550,
            "LL":810,
            "3L":""
        },
        "id":2,
        "image_index":2
    },
    {
        "name":"スタミナ唐揚げ弁当",
        "price":{
            "M":510,
            "L":620,
            "LL":840,
            "3L":""
        },
        "id":3,
        "image_index":3
    },{
        "name":"ハーフ＆ハーフ弁当",
        "price":{
            "M":520,
            "L":650,
            "LL":760,
            "3L":960
        },
        "id":4,
        "image_index":4
    },
    {
        "name":"とり天弁当",
        "price":{
            "6個付き":510,
            "9個付き":660
        },
        "id":5,
        "image_index":5
    },
    {
        "name":"甘ピリハーフ弁当",
        "price":{
            "M":670,
            "L":770,
            "LL":920,
            "3L":1110
        },
        "id":6,
        "image_index":6
    },
    {
        "name":"手羽盛り弁当",
        "price":{
            "3本付き":600,
            "5本付き":860
        },
        "id":7,
        "image_index":7
    },
    {
        "name":"スタミナDX弁当",
        "price":{
            "M":560,
            "L":670,
            "LL":920
        },
        "id":8,
        "image_index":8
    },
    {
        "name":"ピリ辛一味弁当",
        "price":{
            "M":550,
            "L":640,
            "LL":930
        },
        "id":9,
        "image_index":9
    },
    {
        "name":"ピリ辛一味マヨ弁当",
        "price":{
            "M":570,
            "L":660,
            "LL":950
        },
        "id":10,
        "image_index":10
    },
    {
        "name":"南蛮弁当",
        "price":{
            "M":530,
            "L":620,
            "LL":910
        },
        "id":11,
        "image_index":11
    },
    {
        "name":"明太マヨ弁当",
        "price":{
            "M":550,
            "L":640,
            "LL":930
        },
        "id":12,
        "image_index":12
    },
    {
        "name":"チリマヨ弁当",
        "price":{
            "M":560,
            "L":650,
            "LL":940
        },
        "id":13,
        "image_index":13
    },
    {
        "name":"三色弁当",
        "price":{
            "M":880,
            "L":1060
        },
        "id":14,
        "image_index":14
    },
    {
        "name":"白身魚フライ弁当",
        "price":{
            "S":540,
            "M":590,
            "L":680,
            "LL":940
        },
        "id":15,
        "image_index":15
    },
    {
        "name":"アジフライ弁当",
        "price":{
            "S":560,
            "M":610,
            "L":700,
            "LL":960
        },
        "id":16,
        "image_index":16
    },
    {
        "name":"エビカツ弁当",
        "price":{
            "S":570,
            "M":620,
            "L":710,
            "LL":970
        },
        "id":17,
        "image_index":17
    },
    {
        "name":"エビフライ弁当",
        "price":{
            "S":720,
            "M":770,
            "L":860,
            "LL":1120
        },
        "id":18,
        "image_index":18
    },
    {
        "name":"チキンカツ弁当",
        "price":{
            "2枚入り":560,
            "1枚+元祖S":550,
            "1枚+スタミナS":550
        },
        "id":19,
        "image_index":19
    },
    {
        "name":"カツ盛り弁当",
        "price":{
            "通常":730,
            "元祖":720
        },
        "id":20,
        "image_index":20
    },
    {
        "name":"豚ロースカツ弁当",
        "price":{
            "3枚付き":590,
            "5枚付き":850
        },
        "id":21,
        "image_index":21
    },
    {
        "name":"メンチカツ弁当",
        "price":{
            "S":620,
            "M":670,
            "L":760,
            "LL":1020
        },
        "id":22,
        "image_index":22
    },
    {
        "name":"ハムカツ弁当",
        "price":{
            "S":700,
            "M":750,
            "L":840,
            "LL":1100
        },
        "id":23,
        "image_index":23
    },
    {
        "name":"ハム・メンチカツ弁当",
        "price":{
            "S":660,
            "M":710,
            "L":800,
            "LL":1060
        },
        "id":24,
        "image_index":24
    },
    {
        "name":"焼き鳥弁当",
        "price":{
            "2本付き":500,
            "3本付き":650
        },
        "id":25,
        "image_index":25
    },
    {
        "name":"コロッケ弁当",
        "price":{
            "S":510,
            "M":560,
            "L":650,
            "LL":910
        },
        "id":26,
        "image_index":26
    }

];
// 丼のデータ
let don = [
    {
        "name":"甘辛チキンマヨ丼",
        "price":{
            "M":560,
            "L":660
        },
        "id":0,
        "image_index":0
    },
    {
        "name":"ピリ辛一味丼",
        "price":{
            "M":540,
            "L":630
        },
        "id":1,
        "image_index":1
    },
    {
        "name":"チリマヨ丼",
        "price":{
            "M":550,
            "L":640
        },
        "id":2,
        "image_index":2
    },
    {
        "name":"焼き鳥丼",
        "price":{
            "M":500,
            "L":590
        },
        "id":3,
        "image_index":3
    },
    {
        "name":"南蛮丼",
        "price":{
            "M":520,
            "L":610
        },
        "id":4,
        "image_index":4
    },
    {
        "name":"明太マヨ丼",
        "price":{
            "M":550,
            "L":640
        },
        "id":5,
        "image_index":5
    },
    {
        "name":"エビフライソース丼",
        "price":{
            "3本付き":640,
            "5本付き":940
        },
        "id":6,
        "image_index":6
    }
];
// 単品唐揚げのデータ
let t_karaage = [
    {
        "name":"元祖ももから",
        "price":{
            "S":220,
            "M":270,
            "L":360,
            "LL":620
        },
        "id":0,
        "image_index":0
    },
    {
        "name":"スタミナ唐揚げ",
        "price":{
            "S":250,
            "M":310,
            "L":420,
            "LL":640
        },
        "id":1,
        "image_index":1
    },
    {
        "name":"スタミナDX",
        "price":{
            "M":360,
            "L":470,
            "LL":720
        },
        "id":2,
        "image_index":2
    },
    {
        "name":"とり天",
        "price":{
            "6個":340,
            "9個":490
        },
        "id":3,
        "image_index":3
    },
    {
        "name":"甘辛チキン",
        "price":{
            "S":270,
            "M":350,
            "L":450,
            "LL":750
        },
        "id":4,
        "image_index":4
    },
    {
        "name":"ピリ辛一味",
        "price":{
            "M":350,
            "L":440,
            "LL":730
        },
        "id":5,
        "image_index":5
    },
    {
        "name":"チキン南蛮",
        "price":{
            "M":330,
            "L":420,
            "LL":710
        },
        "id":6,
        "image_index":6
    },
    {
        "name":"明太マヨ",
        "price":{
            "M":350,
            "L":440,
            "LL":730
        },
        "id":7,
        "image_index":7
    },
    {
        "name":"スウィートチリマヨ",
        "price":{
            "M":360,
            "L":450,
            "LL":740
        },
        "id":8,
        "image_index":8
    }
];
// 単品揚げ物のデータ
let t_agemono = [
    {
        "name":"手羽先",
        "price":130,
        "id":0,
        "image_index":0
    },
    {
        "name":"ちくわ",
        "price":170,
        "id":1,
        "image_index":1
    },
    {
        "name":"玉ねぎ唐揚げ",
        "price":50,
        "id":2,
        "image_index":2
    },
    {
        "name":"コロッケ",
        "price":90,
        "id":3,
        "image_index":3
    },
    {
        "name":"クリームコロッケ",
        "price":120,
        "id":4,
        "image_index":4
    },
    {
        "name":"メンチカツ",
        "price":100,
        "id":5,
        "image_index":5
    },
    {
        "name":"エビカツ",
        "price":150,
        "id":6,
        "image_index":6
    },
    {
        "name":"春巻き",
        "price":100,
        "id":7,
        "image_index":7
    },
    {
        "name":"チキンカツ",
        "price":180,
        "id":8,
        "image_index":8
    },
    {
        "name":"アジフライ",
        "price":140,
        "id":9,
        "image_index":9
    },
    {
        "name":"白身魚フライ",
        "price":120,
        "id":10,
        "image_index":10
    },
    {
        "name":"エビフライ",
        "price":150,
        "id":11,
        "image_index":11
    },
    {
        "name":"ハムカツ",
        "price":140,
        "id":12,
        "image_index":12
    },
    {
        "name":"ロースカツ(3枚入り)",
        "price":390,
        "id":13,
        "image_index":13
    }
];
// その他単品のデータ
let other = [
    {
        "name":"たい焼き",
        "price":80,
        "image_index":0
    },
    {
        "name":"焼き鳥",
        "price":150,
        "image_index":1
    },
    {
        "name":"フランクフルト",
        "price":200,
        "image_index":2
    },
    {
        "name":"グリーンサラダ",
        "price":100,
        "image_index":3
    },
    {
        "name":"コーンサラダ",
        "price":130,
        "image_index":4
    },
    {
        "name":"マカロニサラダ",
        "price":100,
        "image_index":5
    },
    {
        "name":"中華サラダ",
        "price":100,
        "image_index":6
    },
    {
        "name":"枝豆",
        "price":150,
        "image_index":7
    },
    {
        "name":"たこ焼き",
        "price":{
            "6個":270,
            "10個":430
        },
        "image_index":8
    },
    {
        "name":"フライドポテト",
        "price":{
            "M":150,
            "L":280
        },
        "image_index":9
    },
    {
        "name":"ご飯",
        "price":{
            "小150g":100,
            "中230g":150,
            "大310g":200,
            "特大390g":250
        },
        "image_index":10
    },
    {
        "name":"おにぎり",
        "price":130,
        "image_index":11
    }
];
// お飲み物のデータ
let drink = [
    {
        "name":"緑茶",
        "price":100,
        "image_index":0
    },
    {
        "name":"烏龍茶",
        "price":100,
        "image_index":1
    },
    {
        "name":"瓶コーラ",
        "price":160,
        "image_index":2
    },
    {
        "name":"ラムネ",
        "price":130,
        "image_index":3
    },
    {
        "name":"瓶ビール",
        "price":520,
        "image_index":4
    }
];

let classification = localStorage.getItem("classification").trim() //種別
let file_path = localStorage.getItem("file_path") //フォルダへのパス
console.log(file_path)

// 表示するリストの基を作成
var res = "<ul class='item_list'>";

//使うデータの判別
var data = []
if (classification=="弁当"){
    data = bento
}else if (classification=="丼"){
    data = don
}else if (classification=="単品唐揚げ"){
    data = t_karaage
}else if (classification=="単品揚げ物"){
    data = t_agemono
}else if (classification=="その他単品"){
    data = other
}else if (classification=="お飲み物"){
    data = drink
}

// リストを作成
for (var i=0; i < data.length; i++){
    res += "<li class='item' id=" + i + " onclick='clicked(this.id)';>";

    // 種別によって遷移するページを変更
    if (classification=="単品揚げ物" || classification=="お飲み物" || classification=="その他単品"){
        if (data[i].name=="たこ焼き" || data[i].name=="フライドポテト" || data[i].name=="ご飯" || data[i].name=="おにぎり"){
            res += "<a href='../details'></a>";
        }else{
            res += "<a href='../decision'></a>";
        }
    }else{
        res += "<a href='../details'></a>";
    }

    // 写真と商品名を書き込む
    res += "<div class='item_img'>";
    // res += "<img src=" + '"{% static ' + "'img/cooking/" + file_path + "/" + i + ".png'" + ' %}">';
    res += "<img src='/static/img/cooking/" + file_path + "/" + i + ".png'>";
    // res += "<img src='https://lukiw928.github.io/momokara/img/cooking/" + file_path + "/" + i + ".png'>";

    res += "</div>";
    res += "<div class='item_title'>";
    res += "<h2>"+data[i]["name"]+"</h2>";
    res += "</div>";
    res += "</li>";
}
res += "</ul>"
console.log(res)

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
    for (var i=0; i<data.length; i++){
        if (data[i].name == menu){
            localStorage.setItem("item_data",JSON.stringify(data[i]));
            if (classification=="単品揚げ物" || classification=="お飲み物" || classification=="その他単品"){
                localStorage.setItem("total",data[i]["price"])
                localStorage.setItem("menu_name",data[i]["name"]);
            }
            break;
        }
    }
    
};

//debug

// console.log(classification)
// // console.log(res)
// // console.log(tes)
// console.log(data)