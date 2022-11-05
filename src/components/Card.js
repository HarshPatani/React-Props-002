import React from "react";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

export const Card = ({ props }) => {
  return (
    <div className="card" style={{ backgroundImage: `url(${props.bg_image})` }}>
      <div className="info">
        <div className="upper-section">
          <img alt="poster" className="poster" src={props.poster} />
          <div className="upper-right-section">
            <h1>{props.title}</h1>
            <h4>{props.year}</h4>
            <div className="time-genre">
              <span className="duration">{props.duration}</span>
              <p className="genre">{props.genre}</p>
            </div>
          </div>
        </div>
        <p className="description">{props.description}</p>
        <div className="social-icons">
          <ul>
            <li>
              <ShareIcon />
            </li>
            <li>
              <FavoriteIcon />
            </li>
            <li>
              <ChatBubbleIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
