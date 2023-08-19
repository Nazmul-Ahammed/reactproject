import React, { useState, useEffect } from 'react';

const Books = () => {
  const [products, setProducts] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [newBookData, setNewBookData] = useState({
    BookName: '',
    BookCondition: '',
    Category: '',
    Book_details: '',
    Author_Name: '',
    SellerID: 0,
  });

  const fetchData = async () => {
    try {
      const productsResponse = await fetch('https://localhost:44379/api/products');
      const productsData = await productsResponse.json();
      setProducts(productsData);

      const sellersResponse = await fetch('https://localhost:44379/api/users');
      const sellersData = await sellersResponse.json();
      setSellers(sellersData);

      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddBook = async () => {
    try {
      const response = await fetch('https://localhost:44379/api/products/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBookData),
      });

      if (response.ok) {
        console.log('Book added successfully');
        fetchData();
        setNewBookData({
          BookName: '',
          BookCondition: '',
          Category: '',
          Book_details: '',
          Author_Name: '',
          SellerID: 0,
        });
      } else {
        console.error('Error adding book');
      }
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      const response = await fetch(`https://localhost:44379/api/products/add/${id}`, {
        method: 'POST',
      });

      if (response.ok) {
        console.log('Book deleted successfully');
        fetchData();
      } else {
        console.error('Error deleting book');
      }
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const filteredProducts = products.filter(product =>
    product.BookName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-4">
      <h1 className="text-2xl font-semibold mb-4">Books</h1>
      <div className="mb-4 w-full md:w-1/2 lg:w-1/4">
        <input
          type="text"
          placeholder="Search by Book Name"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="border px-2 py-1 rounded-md w-full"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          filteredProducts.map(product => (
            <div key={product.Id} className="bg-white p-4 rounded-md shadow-md">
              <h2 className="text-lg font-semibold mb-2">{product.BookName}</h2>
              <p className="text-gray-600">Condition: {product.BookCondition}</p>
              <p className="text-gray-600">Category: {product.Category}</p>
              <p className="text-gray-600 mb-2">{product.Book_details}</p>
              <p className="text-gray-600">Author: {product.Author_Name}</p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-gray-600">Seller ID: {product.SellerID}</p>
                <p className="text-gray-600">
                  Seller: {sellers.find(seller => seller.Id === product.SellerID)?.uname}
                </p>
                <button
                  onClick={() => handleDeleteBook(product.Id)}
                  className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Add New Book</h2>
        <input
          type="text"
          name="BookName"
          value={newBookData.BookName}
          onChange={e => setNewBookData({ ...newBookData, BookName: e.target.value })}
          placeholder="Book Name"
          className="w-full mb-2 p-2 border rounded"
          required
        />
        <input
          type="text"
          name="BookCondition"
          value={newBookData.BookCondition}
          onChange={e => setNewBookData({ ...newBookData, BookCondition: e.target.value })}
          placeholder="Book Condition"
          className="w-full mb-2 p-2 border rounded"
          required
        />
        <input
          type="text"
          name="Category"
          value={newBookData.Category}
          onChange={e => setNewBookData({ ...newBookData, Category: e.target.value })}
          placeholder="Category"
          className="w-full mb-2 p-2 border rounded"
          required
        />
        <input
          type="text"
          name="Book_details"
          value={newBookData.Book_details}
          onChange={e => setNewBookData({ ...newBookData, Book_details: e.target.value })}
          placeholder="Book Details"
          className="w-full mb-2 p-2 border rounded"
          required
        />
        <input
          type="text"
          name="Author_Name"
          value={newBookData.Author_Name}
          onChange={e => setNewBookData({ ...newBookData, Author_Name: e.target.value })}
          placeholder="Author Name"
          className="w-full mb-2 p-2 border rounded"
          required
        />
               <input
          type="number"
          name="SellerID"
          value={newBookData.SellerID}
          onChange={e => setNewBookData({ ...newBookData, SellerID: parseInt(e.target.value) })}
          placeholder="Seller ID"
          className="w-full mb-2 p-2 border rounded"
          required
        />
        <button
          onClick={handleAddBook}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Add Book
        </button>
      </div>
    </div>
  );
};

export default Books;
