
const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors')
const path = require('path')

// Create Express app
const app = express();

app.use(cors())


app.use(bodyParser.json());
app.use(express.static('public'));


const products = [
    {
        id: 1,
        title: "The Brown Metro Movers",
        price: 8999,
        discount: 50,
        image: "https://www.nuaah.com/cdn/shop/products/Ik9hWOeSDw_92.jpg?v=1647281228"
    },
    {
        id: 2,
        title: "The Brown Metro Movers",
        price: 8999,
        discount: 50,
        image: "https://tann.gumlet.io/media/gen/image/SIPR04031_01_rnZiBfp.JPG"
    },
    {
        id: 3,
        title: "The Brown Metro Movers",
        price: 8999,
        discount: 50,
        image:"https://www.tanntrim.com/_next/image?url=https%3A%2F%2Ftann.gumlet.io%2Fmedia%2Fgen%2Fimage%2FSIPR04085_01_ECHj4hc.JPG&w=640&q=75"
    },
    {
        id: 4,
        title: "The Brown Metro Movers",
        price: 8999,
        discount: 50,
        image: "https://www.tanntrim.com/_next/image?url=https%3A%2F%2Ftann.gumlet.io%2Fmedia%2Fgen%2Fimage%2FSIPR04086_01_uLS8MMH.JPG&w=384&q=75"
    },
    {
        id: 5,
        title: "The Brown Metro Movers",
        price: 8999,
        discount: 50,
        image: "https://www.nuaah.com/cdn/shop/products/Ik9hWOeSDw_92.jpg?v=1647281228"
    },
    {
        id: 6,
        title: "The Brown Metro Movers",
        price: 8999,
        discount: 50,
        image: "https://tann.gumlet.io/media/gen/image/SIPR04031_01_rnZiBfp.JPG"
    },
    {
        id: 7,
        title: "The Brown Metro Movers",
        price: 8999,
        discount: 50,
        image:"https://www.tanntrim.com/_next/image?url=https%3A%2F%2Ftann.gumlet.io%2Fmedia%2Fgen%2Fimage%2FSIPR04085_01_ECHj4hc.JPG&w=640&q=75"
    },
    {
        id: 8,
        title: "The Brown Metro Movers",
        price: 8999,
        discount: 50,
        image: "https://www.tanntrim.com/_next/image?url=https%3A%2F%2Ftann.gumlet.io%2Fmedia%2Fgen%2Fimage%2FSIPR04086_01_uLS8MMH.JPG&w=384&q=75"
    },
    
];


// Get all products
app.get('/api/products', (req, res) => {
    res.json(products);
});


// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
