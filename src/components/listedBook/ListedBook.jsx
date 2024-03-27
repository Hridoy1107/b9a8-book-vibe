import PropTypes from 'prop-types';
import { FaLocationDot } from "react-icons/fa6";
import { BsPerson } from "react-icons/bs";
import { MdOutlineFindInPage } from "react-icons/md";
import { NavLink } from "react-router-dom";

const ListedBook = ({ book }) => {
    const { image, author, bookName, tags, yearOfPublishing, publisher, totalPages, category, rating, bookId } = book;
    return (
        <>
            <div className="w-[1170px] h-[240px] mt-9 bg-slate-300">
                <div className="flex ml-16">
                    <img className="h-[180px] w-[120px] mt-6" src={image} alt="" />
                    <div>
                        <div className="ml-4 w-[300px] h-[60px] mt-3">
                            <h2 className="card-title">
                                {bookName}
                            </h2>
                            <h2 className="card-title font-normal">
                                By: {author}
                            </h2>
                        </div>
                        <div className="flex gap-3 mt-2 ml-4 w-[600px] h-[40px]">
                            <div className="flex gap-3 mt-1">
                                <div className="badge badge-accent "> {tags[0]}</div>
                                <div className="badge badge-accent ">{tags[1]}</div>
                            </div>
                            <div className="flex w-[240px] h-[20px] gap-1"> <div className="mt-1 "><FaLocationDot /></div> <h1>Year of publishing: {yearOfPublishing}</h1></div>
                        </div>
                        <div className="flex">
                            <div className="flex w-[220px] gap-1 ml-4"> <div className="mt-1 "><BsPerson /></div> <h1>Publisher: {publisher}</h1></div>
                            <div className="flex w-[240px] gap-1"> <div className="mt-1 "><MdOutlineFindInPage /></div> <h1>Page {totalPages}</h1></div>
                        </div>
                        <hr className="mt-2 ml-4" />
                        <div className="mt-2 gap-5">
                            <div className="badge badge-secondary h-[48px] w-[170px] mr-6 text-black font-semibold">Category: {category}</div>
                            <div className="badge badge-primary h-[48px] w-[170px] mr-6 text-black font-semibold">Rating: {rating}</div>
                            <NavLink to={`/details/${bookId}`} className="btn w-[170px] rounded-full h-[48px] mr-4 bg-[#23BE0A] hover:bg-[#23BE0A] text-[#FFFFFF]">Details</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
ListedBook.propTypes = {
    book: PropTypes.array.isRequired
};
export default ListedBook;