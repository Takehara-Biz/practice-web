import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
import { WebSocketServer, WebSocket } from 'ws';

const PORT = 3000;

// HTTPサーバーを作成
const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  const method = req.method || 'GET';

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

  // サーバーから2秒ごとにメッセージを送信
  let count = 1;
  const serverIntervalId = setInterval(() => {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(`サーバーからの定期メッセージ (${count++}回目)`);
    }
  }, 2000);

  // クライアントからのメッセージを受信してコンソールに出力
  ws.on('message', (message: Buffer) => {
    console.log(`クライアントから受信: ${message.toString()}`);
  });

  // 切断時の処理
  ws.on('close', () => {
    console.log('クライアントが切断したため、タイマーを停止します');
    clearInterval(serverIntervalId);
  });
});

// サーバー起動
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});