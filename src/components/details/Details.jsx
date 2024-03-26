import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const bookIdInt = parseInt(bookId);
    const book = books.find(book => book.bookId === bookIdInt);
    console.log(book);
    return (
        <>
            <div className="w-[1170px] h-[720px] mt-10 bg-[#1313130D]">
                <div className="flex">
                    <div>
                        <img className="ml-20 my-20 absolute h-[560px] w-[400px]" src={book.image} alt="" />
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
                            <div className="absolute ml-20 mt-4">
                                <div className="badge badge-accent mr-5">{book.tags[0]}</div>
                                <div className="badge badge-accent ">{book.tags[1]}</div>
                            </div>
                        </div>
                        <hr />
                        <div className="h-[240px]">
                            <div className="overflow-x-auto">
                                <table className="table">
                                    <tbody className="ml-1">
                                        <tr>
                                            <th>Number of Pages:</th>
                                            <td>{book.totalPages}</td>
                                        </tr>

                                        <tr>
                                            <th>Publisher:</th>
                                            <td>{book.publisher}</td>
                                        </tr>
                                        <tr>
                                            <th>Year of Publishing:</th>
                                            <td>{book.yearOfPublishing}</td>
                                        </tr>
                                        <tr>
                                            <th>Rating:</th>
                                            <td>{book.rating}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
};

export default Details;