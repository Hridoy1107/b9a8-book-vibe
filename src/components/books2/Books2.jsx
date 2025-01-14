import PropTypes from 'prop-types';
import { CiStar } from "react-icons/ci";
import { NavLink } from 'react-router-dom';

const Books2 = ({ book }) => {
    const {bookId, bookName, tags, image, author, category, rating, authorBio } = book
    return (
        <>
        <NavLink to={`/details/${bookId}`}>
            <div className=" hover:transform hover:translate-x-2 hover:translate-y-2 card h-[900px] w-[384px] bg-base-100 shadow-2xl hover:shadow-2xl">
                <img className="w-[320px] h-[420px]" src={image} alt="Shoes" />
                <div className="card-body w-[320px] h-auto">
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
                <hr className="mt-1" />
                <div className="my-2 w-[320px] h-auto">
                    <h1 className="text-left font-semibold">About writer</h1>
                    <h1 className="text-left mt-1">{authorBio}</h1>
                </div>
                <hr className="mt-2" />
                <div className="card-body w-[320px] h-[90px]">
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

Books2.propTypes = {
    book: PropTypes.array.isRequired
};
export default Books2;