//点击按钮播放有声音的视频
document.querySelector('.p-1-btn-hover').addEventListener('click', () => {
    document.querySelector('.p-1-mask-click').style.display = 'block'
    document.querySelector('.p-1-video-click').style.display = 'block'
    document.querySelector('.video-click-stop').style.display = 'block'
    document.querySelector('.p-1-video-click').play()
})

//点击按钮关闭视频
document.querySelector('.video-click-stop').addEventListener('click', () => {
    document.querySelector('.p-1-mask-click').style.display = 'none'
    document.querySelector('.p-1-video-click').style.display = 'none'
    document.querySelector('.video-click-stop').style.display = 'none'
    //暂停video
    document.querySelector('.p-1-video-click').pause()
    //把播放时间设置为从零开始
    document.querySelector('.p-1-video-click').currentTime = 0
})