require('dotenv').config();

const next = require('next');
const express = require('express');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3010;

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  const COOKIE_SECRET = process.env.COOKIE_SECRET;

  server.use('/', express.static('/public'));
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use(cookieParser(COOKIE_SECRET));
  server.use(
    expressSession({
      name: process.env.SESSION_NAME,
      resave: false,
      saveUninitialized: false,
      secret: COOKIE_SECRET,
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
