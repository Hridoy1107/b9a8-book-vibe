import Books2 from "../books2/Books2";
import { useEffect, useState } from "react";


const Writer = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);

    return (
        <>
        <div className="my-10">
                <h1 className="font-semibold text-5xl text-center text-black">Writers</h1>
            </div>
            <div className="grid grid-cols-3 gap-6">
                {
                    books.map(book => <Books2 key={book.bookId} book={book} ></Books2>)
                }
            </div>
        </>
    );
};

export default Writer;