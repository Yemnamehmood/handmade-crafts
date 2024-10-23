'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}


const productList: Product[] = [
  { id: 1, name: 'Handmade Necklace', price: 29.99,     description: 'A beautiful handmade necklace crafted from high-quality materials.',
    image: '/aashish-chandra-c2ycQftGmAs-unsplash.jpg' },
  { id: 2, name: 'Ceramic Mug', price: 15.99,     description: 'A stylish ceramic mug, perfect for your morning coffee.',
    image: '/il_fullxfull.5976789660_b03i.avif' },
  { id: 3, name: 'Woven Basket', price: 24.99,      description: 'A versatile woven basket, perfect for storage or as a decorative piece.',
    image: '/il_570xN.1462336063_qnvn.webp' },
  { id: 4, name: 'Handmade Bag', price: 39.99,     description: 'An elegant handmade bag, designed for style and functionality.',
    image: '/Embroidered-Hand-Bags-from-Gilgit-Baltistan-scaled.jpg' },
  { id: 5, name: 'Wall Art', price: 49.99,     description: 'Unique wall art that adds a touch of creativity and color to your space.',
    image: '/WhatsAppImage2024-05-28at16.57.31.webp' },
  { id: 6, name: 'Handmade Candle', price: 19.99,     description: 'A beautifully crafted candle with a soothing scent, perfect for relaxation.',
    image: '/snj-candles-8-QfW9w15x0-unsplash.jpg' },
  { id: 7, name: 'Bracelet', price: 15.99,     description: 'A stylish bracelet that complements any outfit with its charm and elegance.',
    image: '/e9fefa05-2b9d-476a-992d-d7b5eb16397c.13aac4add85f4ac4c156ef6efc86fed9.webp' },
  { id: 8, name: 'Pottery Vase', price: 29.99,     description: 'A handcrafted wooden vase, ideal for minimalist home décor.',
    image: '/383242009_1296569794323205_109100422970904049_n-min.webp' },
  { id: 9, name: 'Handmade Quilt', price: 89.99,     description: 'A cozy handmade quilt that adds warmth and style to any bedroom.',
    image: '/Log-Cabin-in-the-Round-Permannet.jpg' },
  { id: 10, name: 'Ceramic Plate', price: 24.99,     description: 'A beautifully designed ceramic plate, ideal for serving or display.',
    image: '/Ceramic-Plate-islamic-patterns.jpg' },
];

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openModal = (product: any) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  useEffect(() => {
    const closeModalOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    document.addEventListener('keydown', closeModalOnEscape);
    return () => {
      document.removeEventListener('keydown', closeModalOnEscape);
    };
  }, []);

  return (
    <div>
      {/* Header Section */}
      <nav>
        <div className="logo">
          <h1 className='text-3xl'>Handmade Crafts</h1>
        </div>
        <ul className="menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About us</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#contact">Contact us</a></li>
        </ul>
        <div className="search-container">
          <input type="text" placeholder="Search here..." />
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="home">
        <video autoPlay loop muted className="background-video">
          <source src="/4443773-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        <div className="content">
          <h1>Welcome to Handmade Crafts</h1>
          <p>Discover unique handmade products crafted with love.</p>
          <Link href="#shop" className="shop-now">Shop Now</Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2 className='text-white'>About Us</h2>
        <br/>
        <p className='text-white text-base md:text-lg'>We specialize in handmade crafts from local artisans around the world. Our mission is to bring you the finest handmade products, crafted with love and care.</p>
      </section>

      {/* Shop Section */}
      <section id="shop" className="shop">
        <h2 className="section-title">Our Products</h2>
        <div className="product-listing">
          {productList.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
                onClick={() => openModal(product)}
              />
              <div className="product-details">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <button className="add-to-cart text-sm px-3 py-2">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Modal */}
      {modalOpen && selectedProduct && (
        <div className="modal">
          <div className="modal-content">
            <button className="close" onClick={closeModal}>&times;</button>
            <Image
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="modal-image"
              width={300}
              height={300}
            />
            <h2 className='text-2xl font-semibold'>{selectedProduct.name}</h2>
            <p>${selectedProduct.price.toFixed(2)}</p>
            <p>{selectedProduct.description}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      )}

      {/* Contact Us Section */}
      <section id="contact" className="contact">
        <h2 className='text-3xl  text-white'>Contact Us</h2>
        <br/>
        <p className='text-base  text-white'>Email: abc@handmadecrafts.com</p>
        <p className='text-base  text-white'>Phone: +9233400890</p>
        <div className="social-links">
          <a  className='text-white' href="https://facebook.com" target="_blank">Facebook</a>
          <a className='text-white' href="https://linkedin.com" target="_blank">LinkedIn</a>
          <a className='text-white' href="https://instagram.com" target="_blank">Instagram</a>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <p className='text-base'>&copy; 2024 Yemna Mehmood. All rights reserved.</p>
      </footer>
    </div>
  );
}
