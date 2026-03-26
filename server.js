const express = require('express');
const path = require('path');

// Khoi tao ung dung Express
const app = express();
const PORT = process.env.PORT || 3000;

// Cau hinh serve static files tu thu muc public
app.use(express.static(path.join(__dirname, 'public')));

// Route chinh chuyen huong den index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Khoi dong server
app.listen(PORT, () => {
    console.log(`Server dang chay tai http://localhost:${PORT}`);
    console.log('Trang web Gom Su Nam Viet da san sang!');
});