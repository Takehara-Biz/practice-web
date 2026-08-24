import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
import { WebSocketServer, WebSocket } from 'ws';

// HTTPサーバーを作成
const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  const method = req.method || 'GET';

  // ブラウザからアクセスがあったら、HTMLファイルを返す
  if (method === 'GET') {
    const filePath = path.join(__dirname, 'index.html');

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('HTMLファイルの読み込みに失敗しました');
        return;
      }

      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 Not Found');
  }
});

// WebSocketサーバーを作成して統合
const wss = new WebSocketServer({ server });

wss.on('connection', (ws: WebSocket) => {
  console.log('クライアントがWebSocket接続しました');

  // 1秒ごとにメッセージを送信
  let count = 1;
  const intervalId = setInterval(() => {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(`サーバーからの定期メッセージ (${count++}回目)`);
    }
  }, 1000);

  // 切断時の処理
  ws.on('close', () => {
    console.log('クライアントが切断したため、タイマーを停止します');
    clearInterval(intervalId);
  });
});

// サーバー起動
server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000/ws-test`);
});