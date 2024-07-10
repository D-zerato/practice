const express = require("express");

const app = express();
const router = express.Router();

app.use(express.static('src')); //src 폴더 사용을 선언함

app.listen(3001, function(){
    console.log("App is running on port 3001");
});

router.get('*', (req, res) => {
    res.sendFile('../src/index.html');
});