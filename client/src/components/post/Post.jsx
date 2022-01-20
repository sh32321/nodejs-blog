import "./post.css";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";
import { ReactComponent as Like } from "../../assets/icons/thumbs-up.svg";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { AuthContext } from "../../context/AuthContext";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes.length);
  const [isliked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const { user: currentUser } = useContext(AuthContext);

  const likeHandler = () => {
    try {
      axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (err) {}
    setLike(isliked ? like - 1 : like + 1);
    setIsLiked(!isliked);
  };

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  return (
    <div className="post">
      <div className="postwrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <span className="postUser">{user.username}</span>
          </div>
          <div className="postTopRight">
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            {/* <Heart className="postIcons" /> */}
            <Like className="postIcons" onClick={likeHandler} />
            <span className="postLikeCount">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText"> {post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
