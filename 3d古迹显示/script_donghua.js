document.addEventListener('DOMContentLoaded', function() {
  const animationButton = document.querySelector('.animation-button');
  const videoContainer = document.getElementById('videoContainer');
  const myVideo = document.getElementById('myVideo');

  animationButton.addEventListener('click', function() {
    // 添加缩放效果
    animationButton.classList.add('active');
    
    // 200ms后移除缩放效果
    setTimeout(() => {
      animationButton.classList.remove('active');
    }, 200);
    
    // 显示视频容器并设置为全屏
    videoContainer.style.display = 'block';
    videoContainer.style.position = 'fixed';
    videoContainer.style.top = '0';
    videoContainer.style.left = '0';
    videoContainer.style.width = '100%';
    videoContainer.style.height = '100%';
    videoContainer.style.zIndex = '9999';
    
    // 设置视频为全屏
    myVideo.style.width = '100%';
    myVideo.style.height = '100%';
    myVideo.style.objectFit = 'cover';
    
    // 播放视频
    myVideo.play();
    
    // 添加关闭按钮
    const closeButton = document.createElement('button');
    closeButton.className = 'close-button';
    closeButton.innerHTML = '关闭';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.zIndex = '10000';
    closeButton.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    closeButton.style.color = 'white';
    closeButton.style.padding = '5px 10px';
    closeButton.style.borderRadius = '5px';
    closeButton.style.cursor = 'pointer';
    videoContainer.appendChild(closeButton);

    // 关闭按钮点击事件
    closeButton.addEventListener('click', function() {
      videoContainer.style.display = 'none';
      myVideo.pause();
      myVideo.currentTime = 0; // 重置视频到开头
      videoContainer.removeChild(closeButton); // 移除关闭按钮
    });

    console.log('播放动画按钮被点击');
  });
});