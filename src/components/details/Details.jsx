import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveReadList} from "../../utility/localStorage";
import { saveWishList } from "../../utility/localStorage2";

const Details = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const bookIdInt = parseInt(bookId);
    const book = books.find(book => book.bookId === bookIdInt);
    console.log(book);
    const [clickCountRead, setClickCountRead] = useState(0);
    const [clickCount, setClickCount] = useState(0);

    const handleAddRead = () =>{
        saveReadList(bookIdInt);
        setClickCountRead(clickCountRead + 1);
        if (clickCountRead === 0){
        toast('Books added to Read List')
    }
    else if (clickCountRead > 1){
        toast.error('You have already read the book')
    }
    }
    const handleAddWishlist = () =>{
        saveWishList(bookIdInt);
        setClickCount(clickCount + 1);
        if (clickCount === 0){
        toast('Books added to Wishlist')
    }
    else if (clickCount > 1){
        toast.error('You have already added to Wishlist')
    }
    }
    return (
        <>
            <div className="w-[1170px] h-[790px] mt-10 bg-[#1313130D]">
                <div className="flex">
                    <div>
                        <img className="ml-20 my-28 absolute h-[560px] w-[400px]" src={book.image} alt="" />
                    </div>
                    <div className="ml-[540px] mt-4">
                        <div className="w-[550px] h-[120px]">
                            <h2 className="card-title text-5xl">
                                {book.bookName}
                            </h2>
                            <h2 className="card-title font-normal text-2xl">
                                By: {book.author}
                            </h2>
                        </div>
                        <hr className="mt-1" />
                        <div className="w-[550px] h-[40px]">
                            <h2 className="card-title font-normal text-2xl mt-4">
                                {book.category}
                            </h2>
                        </div>
                        <hr className="mt-2" />
                        <div className="w-[550px] h-[190px]">
                            <h2 className="mt-5 card-title font-bold text-2xl h-[160px] w-[540px]">
                                Review: <span className="text-left font-normal">{book.review}</span>
                            </h2>
                        </div>
                        <div className="flex">
                            <h2 className="card-title font-bold text-2xl h-[60px] w-[540px]">
                                Tag
                            </h2>
                            <div className="absolute ml-20 mt-5">
                                <div className="badge badge-accent mr-5">{book.tags[0]}</div>
                                <div className="badge badge-accent ">{book.tags[1]}</div>
                            </div>
                        </div>
                        <hr />
                        <div className="h-[200px]">
                            <div className="overflow-x-auto">
                                <table className="table">
                                    <tbody className="ml-1">
                                        <tr>
                                            <td>Number of Pages:</td>
                                            <th>{book.totalPages}</th>
                                        </tr>

                                        <tr>
                                            <td>Publisher:</td>
                                            <th>{book.publisher}</th>
                                        </tr>
                                        <tr>
                                            <td>Year of Publishing:</td>
                                            <th>{book.yearOfPublishing}</th>
                                        </tr>
                                        <tr>
                                            <td>Rating:</td>
                                            <th>{book.rating}</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="absolute">
                            <a onClick={handleAddRead} className="btn w-[128px] h-[60px] mr-4 text-black bg-white hover:bg-[#23BE0A] ">Read</a>
                            <a onClick={handleAddWishlist} className="btn w-[128px] h-[60px] bg-[#59C6D2] text-black">Wishlist</a>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    );
};

export default Details;