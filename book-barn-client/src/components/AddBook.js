import React, { useState } from "react";

function AddBook() {
  const [book, setBook] = useState({});
  // const[email, setEmail] = useState("")
  // const[password, setPassword] = useState("")

  function handleAddBook(e) {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  }

  function handleAddBookPost() {
    console.log(book);
    fetch("http://localhost:3001/add-book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.message);
      });
  }

  return (
    <div>
      <input
        type="text"
        placeholder="imageURL"
        name="imageURLTextBox"
        onChange={handleAddBook}
      ></input>
      <input
        type="text"
        placeholder="Title"
        name="titleTextBox"
        onChange={handleAddBook}
      ></input>
      <input
        type="text"
        placeholder="Genre"
        name="genreTextBox"
        onChange={handleAddBook}
      ></input>
      <input
        type="text"
        placeholder="Publisher"
        name="publisherTextBox"
        onChange={handleAddBook}
      ></input>
      <input
        type="text"
        placeholder="Year"
        name="yearTextBox"
        onChange={handleAddBook}
      ></input>
      <button onClick={handleAddBookPost}>Add Book</button>
    </div>
  );
}

export default AddBook;
