import { useContext, useRef } from "react";
import "./share.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const Share = () => {
  const { user } = useContext(AuthContext);
  const desc = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {}
  };
  return (
    <div className="share">
      <div className="sharewrapper">
        <form className="shareTop" onSubmit={submitHandler}>
          <input
            placeholder={"What's on your mind " + user.username + "?"}
            className="shareInput"
            ref={desc}
          />
          <button className="shareBtn" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
};

export default Share;
