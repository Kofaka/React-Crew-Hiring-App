import React from "react";

const PersonnelCard = ({data, prevHandler, nextHandler}) => {
    let {name, picture: {thumbnail}} = data;
    let userName = `${name.first} ${name.last}`;
    return (
        <section>
            <figure>
                <img src={thumbnail} alt={userName}/>

                <figcaption>
                    {userName}
                </figcaption>
            </figure>

            {!!prevHandler && <button onClick={()=>prevHandler()}>Back</button>}
            {!!nextHandler && <button onClick={()=>nextHandler()}>Next</button>}
        </section>
    )
};

export default PersonnelCard;