/*
 * GET users listing.
 */
import express = require('express');
const router = express.Router();

var map = {a:1,b:2,c:3};

router.get('/', (req: express.Request, res: express.Response) => {
    res.send(map);
});

export default router;