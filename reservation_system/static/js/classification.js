// フォルダへのパス一覧
let path = {
    "弁当":"bento",
    "丼":"don",
    "カレー":"curry",
    "おにぎり":"onigiri",
    "単品唐揚げ":"t_karaage",
    "単品揚げ物":"t_agemono",
    "その他単品":"other",
    "お飲み物":"drink"
}

// 項目がクリックされた時、種別とフォルダへのパスを取得
function clicked(getId) {
    var classification = document.getElementById(getId).textContent.trim();
    localStorage.setItem("classification",classification)
    localStorage.setItem("file_path",path[classification])
}

