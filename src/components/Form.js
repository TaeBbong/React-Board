import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div>
        <div className="field">
          <label className="label">제목</label>
          <div className="control">
            <input className="input is-hovered" type="text" />
          </div>
        </div>

        <div className="field">
          <label className="label">카테고리</label>
          <div className="control">
            <div className="select">
              <select>
                <option>웹 프론트엔드</option>
                <option>웹 백엔드</option>
                <option>iOS 앱</option>
                <option>안드로이드 앱</option>
                <option>하이브리드 앱</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">본문</label>
          <div className="control">
            <textarea className="textarea is-hovered" rows="10"></textarea>
          </div>
        </div>

        <div className="field">
          <label className="label">배경사진</label>
          <div className="control">
            <div class="file has-name">
              <label class="file-label">
                <input class="file-input" type="file" name="resume" />
                <span class="file-cta">
                  <span class="file-label">Choose a file…</span>
                </span>
                <span class="file-name">
                  Screen Shot 2017-07-29 at 15.54.25.png
                </span>
              </label>
            </div>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-primary">완료</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
