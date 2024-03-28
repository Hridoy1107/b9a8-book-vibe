import PropTypes from 'prop-types';
import { CiStar } from "react-icons/ci";
import { NavLink } from 'react-router-dom';

const Books = ({ book }) => {
    const {bookId, bookName, tags, image, author, category, rating } = book
    return (
        <>
        <NavLink to={`/details/${bookId}`}>
            <div className=" hover:transform hover:translate-x-2 hover:translate-y-2 card h-[810px] w-[384px] bg-base-100 shadow-2xl hover:shadow-2xl">
                <img className="w-[320px] h-[550px]" src={image} alt="Shoes" />
                <div className="card-body w-[320px] h-[156px]">
                    <div className="flex gap-3">
                        <div className="badge badge-accent ">{tags[0]}</div>
                        <div className="badge badge-accent ">{tags[1]}</div>
                    </div>
                    <h2 className="card-title">
                        {bookName}
                    </h2>
                    <h2 className="card-title font-normal">
                        By: {author}
                    </h2>
                </div>
                <hr />
                <div className="card-body w-[320px] h-[92px]">
                    <div className="flex justify-between">
                        <h2 className="card-title font-medium text-xl">
                            {category}
                        </h2>
                        <h2 className="card-title font-normal text-xl">
                            {rating} <CiStar />
                        </h2>
                    </div>
                </div>
            </div>
            </NavLink>
        </>
    );
};

Books.propTypes = {
    book: PropTypes.array.isRequired
};
export default Books;