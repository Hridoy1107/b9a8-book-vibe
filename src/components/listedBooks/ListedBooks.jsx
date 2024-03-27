import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredList } from "../../utility/localStorage";
import ListedBook from "../listedBook/ListedBook";
import { NavLink } from "react-router-dom";

const ListedBooks = () => {

    const links = <>
        <li ><NavLink to="/lbs" style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : "grey",
            };
        }} className=" btn w-[160px] h-[48px]"><span className=" text-lg ">Read Books</span> </NavLink></li>

        <li ><NavLink to="/wl" style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : "grey",
            };
        }} className=" btn w-[160px] h-[48px]"><span className=" text-lg ">Wishlist Books</span> </NavLink></li>
    </>
    const books = useLoaderData();

    const [readAbleBook, setReadAbleBook] = useState([]);
    console.log(readAbleBook);
    useEffect(() => {
        const storedBookIds = getStoredList();
        if (books.length > 0) {
            const readAbleBooks = [];
            for (const bookId of storedBookIds) {
                const book = books.find(book => book.bookId === bookId)
                if (book) {
                    readAbleBooks.push(book)
                }
            }
            setReadAbleBook(readAbleBooks)
        }
    }, [])
    return (
        <>
            <div className="w-[1170px] h-[100px] mt-10 bg-[#1313130D] rounded-2xl">
                <h1 className="font-semibold text-5xl text-center text-black py-6">Books</h1>
            </div>
            <div className="absolute ml-[480px]">
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <details>
                                <summary className="w-[190px] h-[56px] font-semibold text-3xl hover:bg-slate-300 bg-slate-300 text-[#23BE0A]">Sort By</summary>
                                <ul className="w-[190px]">
                                    <li><a>Rating</a></li>
                                    <li><a>Number of Pages</a></li>
                                    <li><a>Publish Year</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-56">
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-x-4">
                        {links}
                    </ul>
                </div>
            </div>
            <div>
                {
                    readAbleBook.map(book => <ListedBook key={book.bookId} book={book}></ListedBook>)
                }
            </div>
        </>
    );
};

export default ListedBooks;