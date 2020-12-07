import React, { Component } from "react";
import {Card, CardDeck} from "react-bootstrap"

class Books extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:3001/books")
      .then((response) => response.json())
      .then((bookResults) => {
        console.log(bookResults);
        this.setState({
          books: bookResults,
        });
      });
  }
  render() {
    console.log(this.state.books);
    // let liItems = this.state.books.map((book) => <li>{book.title}</li>);
    return (
      <ul>
        {this.state.books.length > 0 ? (
          this.state.books.map((book) => {
            return (
              <CardDeck>
                <Card>
                  <Card.Img variant="top" src={book.imageURL} alt="image" />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                      Published: {book.publisher} - {book.year}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Genre: {book.genre}</small>
                  </Card.Footer>
                </Card>
              </CardDeck>
            );
          })
        ) : (
          <></>
        )}
      </ul>
    );
  }
}

export default Books;

// render() {
//   console.log(this.state.books);
//   // let liItems = this.state.books.map((book) => <li>{book.title}</li>);
//   return (
//     <ul>
//       {this.state.books.length > 0 ? (
//         this.state.books.map((book) => {
//           return (
//             <li key="{book.id}">
//               <img src={book.imageURL} alt="image" />
//               <br />
//               {book.title}
//             </li>
//           );
//         })
//       ) : (
//         <></>
//       )}
//     </ul>
//   );
// }
// }

  /* <>
  <CardDeck>
    <Card>
      <Card.Img variant="top" src={book.imageURL} alt="image" />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>
          Published: {book.publisher} - {book.year}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Genre: {book.genre}</small>
      </Card.Footer>
    </Card>
  </CardDeck>
</>; */



  /* <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This card has supporting text below as a natural lead-in to additional
          content.{" "}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This card has even longer content than the
          first to show that equal height action.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card> */


// import React, { useState, useEffect } from "react";

// function Books() {
//   const [book, setBook] = useState({});

//   function handleBook(e) {
//     setBook({
//       ...book,
//       [e.target.name]: e.target.value,
//     });
//   }

//   function handleBookGet() {
//     console.log(book);
//     fetch("http://localhost:3001/books")
//       .then((res) => res.json())
//       .then((response) => {
//         console.log(response);
//         this.setState({
//           books: response,
//         });
//       });
//   }

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="imageURL"
//         name="imageURLTextBox"
//         onChange={handleBook}
//       ></input>
//       <input
//         type="text"
//         placeholder="Title"
//         name="titleTextBox"
//         onChange={handleAddBook}
//       ></input>
//       <input
//         type="text"
//         placeholder="Genre"
//         name="genreTextBox"
//         onChange={handleAddBook}
//       ></input>
//       <input
//         type="text"
//         placeholder="Publisher"
//         name="publisherTextBox"
//         onChange={handleAddBook}
//       ></input>
//       <input
//         type="text"
//         placeholder="Year"
//         name="yearTextBox"
//         onChange={handleAddBook}
//       ></input>
//       <button onClick={handleAddBookPost}>Add Book</button>
//     </div>
//   );
// }

// export default Books;
