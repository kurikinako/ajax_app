const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="post">
      <div class="post-date">
      投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html;
};

function post (){
  const submit = document.getElementById("submit"); //リクエストを送信する処理
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const form = document.getElementById("form"); //取得したフォームの要素を変数へ格納
    const formData = new FormData(form);  //フォームの値を取得
    const XHR = new XMLHttpRequest();  //非同期通信を行うためのオブジェクト生成
    XHR.open("POST", "/posts", true);  //リクエストの内容を指定 第一引数HTTPメソッド第二引数パス第三引数非同期通信であるかtrue false
    XHR.responseType = "json";  //サーバーからのレスポンスの形式を指定
    XHR.send(formData);  //フォームに入力された内容をサーバー側へ送信
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      };
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      list.insertAdjacentHTML("afterend", buildHTML(html));
      formText.value = "";
    };
  });
};

window.addEventListener('load', post);