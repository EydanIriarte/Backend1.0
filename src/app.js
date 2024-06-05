const express = require ('express');
const dotenv = require ('dotenv');
const cors = require ('cors');

dotenv.config();
const app = express();

const port = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send({ message: 'API de ventas' });
})

app.listen(port, () => {
    console.log("port ==>", port);
})
