const next = require('next');
const express = require('express');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3010;

const app = next({ dev });
const handle = app.getRequestHandler();
// require('dotenv').config();

app.prepare().then(() => {
  const server = express();

  server.use('/', express.static('/public'));
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use(cookieParser());
  server.use(
    expressSession({
      resave: false,
      saveUninitialized: false,
      secret: 'abcdefghijklmnopqrstuvwxyz9876543210',
      cookie: {
        httpOnly: true,
        secure: !dev,
      },
    })
  );

  server.all('*', async (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`Next, Express server running on port: ${port}!`);
  });
});
