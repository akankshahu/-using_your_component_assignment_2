import React, {useState} from 'react';
function LikeButton({isLiked}){
    const [liked,setLiked]=useState(isLiked);
    const toggleLike=()=>{
        setLiked(!liked);

    }
    return(
        <button onClick={toggleLike} className={liked?'liked':''}>
            {liked ? 'unlike':'like'}

        </button>
    )
}
export default LikeButton;