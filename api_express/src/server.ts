// expressを使用するためにインポート
import express from 'express';
import mysql from "mysql";
// const mysql = require('mysql');
// const express = require('express');

// 初期化＆jsonを利用の設定
const app = express();
app.use(express.json());

const port = 8080;
// DB接続情報
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "api_test",
});


// getでリクエストが来た時
app.get(
    // URL
  '/api/working_place',
    // 引数の受け取り(tsで型定義している)
  (req: express.Request, res: express.Response): void => {
    // パラメーターを取得
    console.log(req.query);
    // レスポンスを記載(今回はjsonで返す)
    res.json({
      message: 'Hello, world! GET',
    });
    
  }
);

// postでgetと同じことをする
app.post(
  '/api/working_place',
  (req: express.Request, res: express.Response): void => {
    // リクエストボディーを取得
    console.log(req.body);

    const working_place = req.body.workingPlace;
    console.log('Adding working_place:::::', working_place);
    connection.query('INSERT INTO working_place SET ?' ,
    {working_place: working_place}, function(err, result){
        if (err) throw err;
        console.log(result)
      });
  }
);

// その他(上記二つ以外)の場合全部
app.all(
  '*',
  (_req: express.Request, res: express.Response): void => {
    res.status(404).json({});
  }
);

// 指定のportを番号で実行
// expressのapp.listen()はNodeのhttpモジュールのhttp.Server.listen()
app.listen(port, () => {
  console.log(`Server listening on the port:::${port}`);
});


