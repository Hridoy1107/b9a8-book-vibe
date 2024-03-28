

const Query = () => {
    return (
        <>
            <div>
                <h1 className="font-semibold text-5xl text-center text-black py-6">Query</h1>
                <input className="h-[200px] w-[800px] border-2 rounded-2xl border-blue-700 outline-none text-2xl px-2 pb-28" type="text" name="" id="search-field" placeholder="Please write your complain" />
                <div className="mt-3">
                <a className="btn w-[160px] h-[60px] mr-4 bg-[#23BE0A] text-[#FFFFFF]">Submit</a>
                </div>
                <div className="mt-10 h-[500px]">
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" checked="checked" /> 
                    <div className="collapse-title text-xl font-medium">
                        How to Sign Up
                    </div>
                    <div className="collapse-content"> 
                      <p>You can Sign up with your Email</p>
                    </div>
                  </div>
                  <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" /> 
                    <div className="collapse-title text-xl font-medium">
                        How chart works
                    </div>
                    <div className="collapse-content"> 
                      <p>It works based on your chosen book</p>
                    </div>
                  </div>
                  <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" /> 
                    <div className="collapse-title text-xl font-medium">
                        How to see detail
                    </div>
                    <div className="collapse-content"> 
                      <p>By clicking on the Book Card</p>
                    </div>
                  </div>
                  <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" /> 
                    <div className="collapse-title text-xl font-medium">
                        How to add book to read list
                    </div>
                    <div className="collapse-content"> 
                      <p>By clicking Read list button in details</p>
                    </div>
                  </div>
                  <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" /> 
                    <div className="collapse-title text-xl font-medium">
                        How to add book to Wishlist
                    </div>
                    <div className="collapse-content"> 
                      <p>By clicking Wishlist button in details</p>
                    </div>
                  </div>
                  <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" /> 
                    <div className="collapse-title text-xl font-medium">
                        How can I know about writers
                    </div>
                    <div className="collapse-content"> 
                      <p>To writer part</p>
                    </div>
                  </div>
                </div>
            </div>
        </>
    );
};

export default Query;