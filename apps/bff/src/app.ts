import express from 'express';

const port = process.env.PORT || 3001;
const app = express();

app.listen(port, () => {
  console.info(`bff running on ${port}`);
});
