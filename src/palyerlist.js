import React from "react";
import palyeres from "./palyeres";
import palyer from "./palyer";


const palyerlist = () => {
    return(
        <div className="players-list">
            {palyer.map((player) => (
                <player key = {player.name} {...player}/>
                ))}
        </div>
    );
};
export default palyerlist
