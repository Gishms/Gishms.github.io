// 侧边栏模块
const sidebar = document.getElementById("sidebar");
const openButton = document.getElementById("open-button");

openButton.addEventListener("click", () => {
  if (sidebar.style.left === "0px") {
    sidebar.style.left = "-250px";
  } else {
    sidebar.style.left = "0px";
  }
});

// 搜索模块
function searchPage() {
  var input = document.getElementById("searchInput").value;

  if (input === "地图") {
    window.location.href = "../小胡空间2.0/map.html";
  } else if (input === "学习资料") {
    window.location.href = "../小胡空间2.0/study.html";
  } else if (input === "卫星云遥") {
    window.location.href = "../小胡空间2.0/study.html";
  } else if (input === "图片") {
    window.location.href = "../小胡空间2.0/picture.html";
  } else {
    alert("没有找到您需要的内容");
  }
}


// 时间模块
function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  const timeString = `时间：${hours}:${minutes}:${seconds}`;

  document.getElementById('clock').textContent = timeString;
}

// 每隔一秒更新一次时间
setInterval(updateClock, 1000);

// 页面加载时立即显示时间
updateClock();
