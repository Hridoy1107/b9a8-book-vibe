import { useEffect, useState } from "react";


const Books = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])

    return (
        <>
            <div className="mt-10">
                <h1 className="font-semibold text-5xl text-center text-black">Books {books.length}</h1>
            </div>
            <div>
                
            </div>
        </>
    );
};

export default Books;