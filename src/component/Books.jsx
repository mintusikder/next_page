// import React from 'react';

import { useLoaderData, useNavigate } from "react-router-dom";
import Book from "./Book";
import LoadingSpinner from "./LoadingSpinner";

const Books = () => {
  
  const navigation = useNavigate()
  if(navigation.state === 'loading'){
      return <LoadingSpinner></LoadingSpinner>
  }

  const { books } = useLoaderData();
  console.log(books);
  return (
    <div className="my-container">
      <div className="grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2">
        {books.map((book) => (
            <Book key={book.id} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
