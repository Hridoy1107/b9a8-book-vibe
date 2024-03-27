import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { NavLink } from "react-router-dom";
import WishedBook from "../wishedBook/WishedBook";
import { getStoredList } from "../../utility/localStorage2";

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

    const [wishAbleBook, setWishAbleBook] = useState([]);
    console.log(wishAbleBook);
    useEffect(() => {
        const storedBookIds = getStoredList();
        if (books.length > 0) {
            const wishAbleBooks = [];
            for (const bookId of storedBookIds) {
                const book = books.find(book => book.bookId == bookId)
                if (book) {
                    wishAbleBooks.push(book)
                }
            }
            setWishAbleBook(wishAbleBooks)
        }
    }, [books])
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
                    wishAbleBook.map(book => <WishedBook key={book.bookId} book={book}></WishedBook>)
                }
            </div>
        </>
    );
};

export default ListedBooks;