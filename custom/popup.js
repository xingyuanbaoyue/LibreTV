
// 创建弹窗HTML结构
const popup = document.createElement("div");
popup.id = "marshmallow-popup";
popup.innerHTML = `
  <p id="popup-text">Loading...</p>
  <a href="https://marshmallow-qa.com/f9nava8c2dh71k1" target="_blank" rel="noopener noreferrer" id="popup-link">...</a><br>
  <button id="popup-close">关闭</button>
`;
document.body.appendChild(popup);

// 多语言内容
const messages = {
  zh: {
    text: "抱月前辈欢迎你喵~<br>快来看看 Marshmallow 的特别内容吧~",
    linkText: "点击这里进入 Marshmallow 页面",
    closeText: "关闭"
  },
  ja: {
    text: "抱月前辈へようこそ〜<br>Marshmallowの特別コンテンツをチェックしてね〜",
    linkText: "こちらをクリックして Marshmallow ページへ",
    closeText: "閉じる"
  },
  en: {
    text: "Welcome! Check out special content on Marshmallow~",
    linkText: "Click here to visit Marshmallow page",
    closeText: "Close"
  }
};

const userLang = navigator.language.slice(0,2);
const content = messages[userLang] || messages.en;

// 设置内容
document.getElementById("popup-text").innerHTML = content.text;
document.getElementById("popup-link").textContent = content.linkText;
document.getElementById("popup-close").textContent = content.closeText;

// 显示弹窗
setTimeout(() => {
  document.getElementById("marshmallow-popup").style.display = "block";
}, 1000);

// 关闭按钮
document.getElementById("popup-close").onclick = () => {
  document.getElementById("marshmallow-popup").style.display = "none";
};
