const express = require('express');
const app = express();
const PORT = 3000;

app.use('/clarity-demo', express.static('docs'));
app.get('/', (req, res) => {
  res.redirect(302, '/clarity-demo/index.html');
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));