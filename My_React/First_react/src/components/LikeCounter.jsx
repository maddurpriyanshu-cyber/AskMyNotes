
import React, { useState } from "react";

function LikeCounter() {
  // State is set
  const [likes, setLikes] = useState(0);

  function handleLike() {
    // Update State
    setLikes(likes + 1);
  }

  /*function handleUnlike() {
    if (likes > 0) {
      setLikes(likes - 1);
    }
  }
*/
  function handleReset() {
    setLikes(0);
  }

  return (
    <div className="like-counter">
      <h1>Like Button Application</h1>

      <h2>Likes: {likes}</h2>

      <button onClick={handleLike}>Like</button>
      {/* <button onClick={handleUnlike}>Unlike</button> */}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default LikeCounter;
