document.addEventListener('DOMContentLoaded', () => {
    // 獲取頁面上的元素
    const showWorkButton = document.getElementById('show-work');
    const showPersonalButton = document.getElementById('show-personal');
    const workApplets = document.getElementById('work-applets');
    const personalApplets = document.getElementById('personal-applets');

    // 當點擊「工作小程式」卡片時
    showWorkButton.addEventListener('click', () => {
        workApplets.classList.remove('hidden'); // 顯示工作列表
        personalApplets.classList.add('hidden'); // 隱藏平時列表
    });

    // 當點擊「平時小程式」卡片時
    showPersonalButton.addEventListener('click', () => {
        personalApplets.classList.remove('hidden'); // 顯示平時列表
        workApplets.classList.add('hidden'); // 隱藏工作列表
    });
});
