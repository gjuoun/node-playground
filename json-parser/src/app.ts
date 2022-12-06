import express from 'express';
import fs from 'fs';

const app = express();

const filePath = './src/09_20_Annotated_CMS_EDI_Mapping.json';
const json = fs.readFileSync(filePath, 'utf-8');

app.get('/', (req, res) => {
  res.json(JSON.parse(json));
})

app.listen(3000, () => {
  console.log('Server started on port 3000');
})