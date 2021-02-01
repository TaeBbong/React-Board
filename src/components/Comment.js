import React from "react";

const Comment = () => {
  return (
    <section>
      <div className="comment">
        <div className="field">
          <label className="label">댓글</label>
          <div className="control">
            <textarea
              className="textarea is-warning"
              placeholder="댓글을 입력하세요."
              rows="5"
            ></textarea>
          </div>
        </div>
        <button className="button is-primary">입력</button>
      </div>
    </section>
  );
};

export default Comment;
