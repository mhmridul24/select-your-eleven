import React from 'react';

const PlayerCard = () => {
    return (
        <div className="card bg-base-100  shadow-sm p-4  ">
        <figure>
          <img
            src={player.player_image}
            alt="Player Image"
            className="w-full h-[300px] object-cover"
          />
        </figure>
        <div className="mt-4">
            <div className="flex" >
                <img className="" src={UserImg} alt="" />
          <h2 className="card-title ml-2">{player.player_name}</h2>
            </div>

            <div className="flex justify-between mt-3 border-b-1 border-gray-200 pb-2" >
                <div className="flex items-center gap-2" >
                    <img className="w-[20px] h-[20px]" src={flagImg} alt="" />
                    <span>{player.player_country}</span>
                </div>
                <button className="btn"> {player.playing_role} </button>
            </div>

            <div className="flex justify-between mt-3 font-bold">
                <span className="">Rating</span>
                <span> {player.rating} </span>
            </div>

            <div className="flex justify-between items-center mt-3 ">
                <span className="font-bold">{player.batting_style} </span>
                <span>{player.bowling_style} </span>
            </div>
          
          <div className="card-actions flex justify-between items-center  mt-4">
            <p className="font-bold">Price: $<span>{player.price} </span></p>
            <button className="btn ">Choose Player</button>
          </div>
        </div>
      </div>
    );
};

export default PlayerCard;