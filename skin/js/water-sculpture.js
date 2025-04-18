document.addEventListener("DOMContentLoaded", function () {
    const logo = document.getElementById("logo");
    const waterSculpture = document.getElementById("water-sculpture");

    logo.addEventListener("click", function () {
        // 显示水流雕刻动画
        waterSculpture.style.display = "flex";

        // 动画播放 0.8 秒后跳转到首页
        setTimeout(() => {
            window.location.href = "home.html";
        }, 800); // 提前跳转，减少等待时间
    });
});