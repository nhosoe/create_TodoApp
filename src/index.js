import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  const deleteTarget = target.parentNode;
  document.getElementById("incomplete-list").removeChild(deleteTarget);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // p タグ生成
  const p = document.createElement("p");

  // li生成
  const div = document.createElement("div");
  div.className = "list-row";
  p.innerText = text;
  div.appendChild(p);

  // li タグ生成
  const li = document.createElement("li");

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // TODOの内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // pタグ生成
    const p = document.createElement("p");
    p.innerText = text;

    //buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグ(li)を完了リストから削除
      const deleteTarget = backButton.parentNode;
      const deleteTarget2 = deleteTarget.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget2);

      //テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    //liタグ生成
    const li = document.createElement("li");

    //divタグの子要素に各要素を設定
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);
    li.appendChild(addTarget);

    // 完了のリストに追加
    document.getElementById("complete-list").appendChild(li);
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });
  // liタグの子要素に各要素を設定
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);
  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
