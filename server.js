const Express = require('express');
const app = express();
const port = 3000;

app.post('/api/refresh', (req, res) => {

    res.status(200).json({
        message: 'Refresh endpoint hit successfully',
        timestamp: new Date().toISOString()
    });
});