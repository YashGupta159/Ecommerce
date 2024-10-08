const mongoose = require('mongoose');

const Product = require('./models/Product');


const products = [
    {
        name: "iPhone 16 Pro",
        img: "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGlwaG9uZTE0cHJvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        price: 130000,
        desc: "The latest iPhone with advanced features, exceptional camera, and sleek design for the ultimate smartphone experience."
    },
    {
        name: "MacBook M3 Pro",
        img: "https://media.istockphoto.com/id/1441194641/photo/macbook-pro-16-keyboard.webp?b=1&s=170667a&w=0&k=20&c=vgawd7HFjNtU4H4596IZkU2SE9YRXtz-ROUgSvndAPQ=",
        price: 250000,
        desc: "Powerful performance with the M2 chip, making it perfect for professionals who demand the best in productivity and creativity."
    },
    {
        name: "Apple Watch Ultra",
        price: 51000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROzEBWSIT--95okkMi-UzyJcT0RpNufBUVCw&usqp=CAU",
        desc: "Stay connected and track your health with this feature-packed smartwatch, perfect for everyday use and fitness tracking."
    },
    {
        name: "iPad Pro",
        img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBhZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        price: 237900,
        desc: "A stunning display and powerful performance make this iPad perfect for professionals and creatives looking for a tablet that can do it all."
    },
    {
        name: "AirPods",
        img: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        price: 25000,
        desc: "Experience wireless freedom with high-quality sound and seamless connectivity, perfect for music lovers on the go."
    }
]


async function seedDB(){
    // await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("data seeded successfully");
}

module.exports = seedDB;


