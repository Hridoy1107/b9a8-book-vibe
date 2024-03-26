const Banner = () => {
    return (
        <>
            <div className="mt-10 h-[560px] w-[1170px] bg-[#1313130D] rounded-2xl">
                <div className="flex justify-left">
                    <div className="absolute my-[136px] ml-[180px]">
                        <h1 className="font-bold h-[140px] w-[526px] text-5xl text-left text-black">Books to freshen up your bookshelf</h1>
                        <button className=" absolute left-0 rounded-xl btn w-[180px] h-[64px] hover:bg-[#23BE0A] bg-[#23BE0A] text-white text-[16px] border-none">View The List</button>
                    </div>
                    <div className="my-[80px] ml-[730px]">
                        <img className="w-[318px] h-[394px]" src="https://i.ibb.co/cDW1nQX/432729584-762719352475848-2951641746662635549-n.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;