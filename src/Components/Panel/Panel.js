import React, { useEffect, useState } from "react";
import './Panel.Module.css'

import Star from '../../assets/images/icon-star.svg'
import Thx from '../../assets/images/illustration-thank-you.svg'

function Panel() {
    const [selectedRating, setSelectedRating] = useState();
    const [isSubmmited, setIsSubmmited] = useState(false);


    function HandleRatingSelected(rating) {
        setSelectedRating(rating);
    }

    function HandleFormSubmitted(e) {
        e.preventDefault();
        setIsSubmmited(true);
    }

    return isSubmmited ? (
        <div className="Container">
            <div className="ThankYouPanel">
                <img className="thx" src={Thx}></img>
                <p className="selected">You Selected {selectedRating} out of 5 </p>
                <h1 className="Title">THANK YOU!</h1>
                <p className="Description-thx">We appreciate you taking the time to give a rating. if you ever
                    need more support, don't hesitate to get in touch!
                </p>
            </div>
        </div>
    ) : (

        <div className="Container">


            <form onSubmit={HandleFormSubmitted} className="Panel">
                <img className="Star" src={Star}></img>
                <h1 className="Title">How did we do?</h1>
                <p className="Description">Please let us know how we did with your support request.
                    All feedback is appreciated to help us  improve our offering!
                </p>



                <div className="ButtonGroup">
                    {[1, 2, 3, 4, 5].map((rating) =>
                        <button type="button" onClick={() => HandleRatingSelected(rating)} className="Rating">
                            {rating}
                        </button>
                    )}

                </div>

                <button disabled={selectedRating === undefined} className="Submit">Submit</button>
            </form>
        </div>
    )
}

export default Panel