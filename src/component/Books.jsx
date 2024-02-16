// import React from 'react';

import { useLoaderData } from "react-router-dom";

const Books = () => {
  const { books } = useLoaderData();
  console.log(books);
  return (
    <div className="my-container">
      <div className="grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2">
        {books.map((book) => (
          <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2">
            {" "}
            <img
              src={book.image}
              alt="book cover"
              className="object-cover w-full h-56 md:h-64 xl:h-80"
            />
            <div className="bg-black px-6 py-4 text-gray-300 bg-opacity-75 absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-200 flex flex-col">
              <p>{book.title}</p>
              <br />
              <p>{book.subtitle.substring(0, 45)}</p>
              <br />
              <p>Price: {book.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
