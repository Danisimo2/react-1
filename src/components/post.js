import React from "react";

import arrow from "./images/arrow.svg";
import comment from "./images/comment.svg";
import like from "./images/like.svg";
import repost from "./images/repost.svg";
import share from "./images/share.svg";
import verified from "./images/verified.svg";

const Post = ({ author, date, content, image }) => (
  <div className="container">
    <div className="post">
      <div className="user__info">
        <div>
          <img className="avatar" src={author.photo} alt="author" />
        </div>
        <div className="profile__info">
          <div className="name">
            <p>
              {author.name}
              <img src={verified} alt="verified icon" />
            </p>
          </div>
          <p className="nickname">{author.nickname}</p>
          <p className="date">{date}</p>
        </div>
        <img className="arrowDown" src={arrow} alt="arrow down" />
      </div>
      <div className="post__info">
        <p className="post_content">{content}</p>
        <div className="post_image">
          <img src={image} alt="content" />
        </div>
      </div>
      <div className="allIcons">
        <div className="comentIcon">
          <img src={comment} alt="comment" />
          <p>463</p>
        </div>
        <div className="likeIcon">
          <img src={like} alt="like" />
          <p>784</p>
        </div>
        <div className="repostIcon">
          <img src={repost} alt="repost" />
          <p>247</p>
        </div>
        <div className="shareIcon">
          <img src={share} alt="comment" />
          <p></p>
        </div>
      </div>
    </div>
  </div>
);

export default Post;