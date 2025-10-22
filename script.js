document.addEventListener('DOMContentLoaded', () => {
    // 獲取頁面上的元素
    const showWorkButton = document.getElementById('show-work');
    const showPersonalButton = document.getElementById('show-personal');
    const showColorButton = document.getElementById('show-color'); // <-- 新增的
    
    const workApplets = document.getElementById('work-applets');
    const personalApplets = document.getElementById('personal-applets');
    const colorApplets = document.getElementById('color-applets'); // <-- 新增的

    // 當點擊「工作小程式」卡片時
    showWorkButton.addEventListener('click', () => {
        workApplets.classList.remove('hidden'); // 顯示工作列表
        personalApplets.classList.add('hidden'); // 隱藏平時列表
        colorApplets.classList.add('hidden'); // <-- 新增的 (隱藏色粉列表)
    });

    // 當點擊「平時小程式」卡片時
    showPersonalButton.addEventListener('click', () => {
        personalApplets.classList.remove('hidden'); // 顯示平時列表
        workApplets.classList.add('hidden'); // 隱藏工作列表
        colorApplets.classList.add('hidden'); // <-- 新增的 (隱藏色粉列表)
    });
	
    // --- 以下是為「色粉小程式」新增的區塊 ---
    showColorButton.addEventListener('click', () => {
        colorApplets.classList.remove('hidden'); // 顯示色粉列表
        workApplets.classList.add('hidden'); // 隱藏工作列表
        personalApplets.classList.add('hidden'); // 隱藏平時列表
    });
  
});
