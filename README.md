# 聲鵬國際有限公司 官方網站

一個現代化、響應式的企業網站，展示聲鵬國際的專業服務與企業形象。

## 🌟 功能特點

- ✨ 現代化設計風格
- 📱 完全響應式設計（支援桌面、平板、手機）
- 🎨 美觀的漸變色彩與動畫效果
- 🚀 快速載入與流暢的使用者體驗
- 📝 完整的聯絡表單
- 🔝 返回頂部按鈕
- 💫 滾動動畫效果

## 📂 檔案結構

```
ShengPeng/
├── index.html      # 主要HTML檔案
├── styles.css      # 樣式表
├── script.js       # JavaScript互動功能
└── README.md       # 說明文件
```

## 🌐 線上瀏覽

本網站已部署到 GitHub Pages，您可以直接透過以下網址瀏覽：

**🔗 https://ifittw01-ai.github.io/ShengPeng/**

## 🚀 快速開始

### 方法一：直接開啟
1. 下載所有檔案到同一個資料夾
2. 雙擊 `index.html` 即可在瀏覽器中開啟

### 方法二：使用本地伺服器（推薦）
使用 Python 啟動本地伺服器：

```bash
# Python 3
python -m http.server 8000

# 或使用 Python 2
python -m SimpleHTTPServer 8000
```

然後在瀏覽器中開啟 `http://localhost:8000`

### 方法三：使用 VS Code Live Server
1. 安裝 VS Code 的 Live Server 擴充套件
2. 右鍵點擊 `index.html`
3. 選擇 "Open with Live Server"

## 📦 部署到 GitHub Pages

本專案已設定 GitHub Pages 自動部署。每次推送到 `main` 分支時，網站會自動更新。

### 設定步驟（已完成）
1. ✅ 代碼已推送到 GitHub
2. ✅ 在 GitHub 倉庫設定中啟用 Pages
3. ✅ 選擇 `main` 分支作為來源
4. ✅ 網站自動發布

## 📋 網站結構

### 主要區塊

1. **導航欄** - 固定在頂部，包含主要連結
2. **英雄區** - 吸睛的首頁橫幅
3. **核心服務** - 四大核心服務介紹
4. **專業服務** - 六大專業領域詳細說明
5. **統計數據** - 用數字展示公司實力
6. **詳細服務**
   - 管理顧問服務
   - 食品與化粧品批發
   - 國際貿易服務
   - 食品顧問專業服務
7. **關於我們** - 公司歷史與核心價值
8. **聯絡表單** - 客戶諮詢表單
9. **頁腳** - 版權資訊

## 🎨 設計特點

### 色彩方案
- **主色調**: 藍色 (#2563eb)
- **次要色**: 綠色 (#10b981)
- **強調色**: 琥珀色 (#f59e0b)
- **漸變背景**: 紫色漸變 (667eea → 764ba2)

### 動畫效果
- 淡入淡出效果
- 懸停放大效果
- 滾動觸發動畫
- 數字滾動動畫
- 平滑滾動

## 📱 響應式斷點

- **桌面**: > 768px
- **平板**: 481px - 768px
- **手機**: ≤ 480px

## 🔧 自訂設定

### 修改顏色
在 `styles.css` 的 `:root` 區塊修改 CSS 變數：

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #10b981;
    --accent-color: #f59e0b;
    /* ... 其他顏色 */
}
```

### 修改內容
直接編輯 `index.html` 中的文字內容即可。

### 修改動畫速度
在 `styles.css` 中搜尋 `transition` 或 `animation` 屬性進行調整。

## 📧 聯絡表單

表單目前設定為前端驗證，提交後會顯示成功訊息。

### 整合後端
要將表單資料傳送到伺服器，請在 `script.js` 中的表單處理程式取消註解並修改 API 端點：

```javascript
fetch('/api/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
})
```

## 🌐 瀏覽器支援

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)
- Opera (最新版)

## 📝 授權

此專案為聲鵬國際有限公司所有。

## 🤝 聯絡資訊

**聲鵬國際有限公司**
- 統一編號: 52657935
- 地址: 基隆市信義區正信路6之16號
- 網站: [https://shengpeng-guwen-kktasgq.gamma.site/](https://shengpeng-guwen-kktasgq.gamma.site/)

## 📈 效能優化建議

1. **圖片優化**: 建議加入實際圖片時使用 WebP 格式
2. **程式碼壓縮**: 部署前壓縮 CSS 和 JavaScript
3. **CDN**: 考慮使用 CDN 加速字體載入
4. **快取策略**: 設定適當的瀏覽器快取
5. **懶載入**: 對圖片實施懶載入

## 🔮 未來改進

- [ ] 加入實際的產品圖片
- [ ] 整合後端 API
- [ ] 加入多語言支援
- [ ] SEO 優化
- [ ] 加入 Google Analytics
- [ ] 加入社群媒體連結
- [ ] 加入客戶案例展示
- [ ] 加入部落格功能

## 💡 技術支援

如有任何問題或需要技術支援，請透過網站聯絡表單與我們聯繫。

---

**版本**: 1.0.0  
**最後更新**: 2025年10月24日

