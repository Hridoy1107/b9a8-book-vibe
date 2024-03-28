import Banner from "../banner/Banner";
import Books from "../books/Books";
import { useEffect, useState } from "react";

const Home = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])
    return (
        <>
            <Banner></Banner>
            <div className="my-10">
                <h1 className="font-semibold text-5xl text-center text-black">Books</h1>
            </div>
            <div className="grid grid-cols-3 gap-6">
                {
                    books.map(book => <Books key={book.bookId} book={book} ></Books>)
                }
            </div>
        </>
    );
};

export default Home;