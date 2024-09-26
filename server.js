const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();
const port = 3000;

// プロキシ設定
app.use('/proxy', createProxyMiddleware({
  target: 'http://example.com', // ここにプロキシ先のURLを入力
  changeOrigin: true,
}));

// 静的ファイルの提供
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
