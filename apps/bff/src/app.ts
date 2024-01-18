import express from 'express';

import { routes } from './routes/index.js';

const port = process.env.PORT || 3001;
const app = express();

app.use(routes);

app.listen(port, () => {
  console.info(`bff running on ${port}`);
});
