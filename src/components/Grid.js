import React from "react";
import "../shared/App.sass";
import "../shared/App.css";

const Grid = (props) => {
  return (
    <div className="columns">
      <div className="column">
        <a className="card" href="/detail">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src="https://wallpaperaccess.com/full/2586809.jpg"
                alt="sample"
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-item">
                <div className="title is-4" size={4}>
                  John Smith
                </div>
                <div className="subtitle is-6" subtitle size={6}>
                  @johnsmith
                </div>
              </div>
            </div>
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
              <br />
              <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </a>
      </div>
      <div className="column">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src="https://wallpaperaccess.com/full/2586809.jpg"
                alt="sample"
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-item">
                <div className="title is-4" size={4}>
                  John Smith
                </div>
                <div className="subtitle is-6" subtitle size={6}>
                  @johnsmith
                </div>
              </div>
            </div>
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
              <br />
              <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src="https://wallpaperaccess.com/full/2586809.jpg"
                alt="sample"
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-item">
                <div className="title is-4" size={4}>
                  John Smith
                </div>
                <div className="subtitle is-6" subtitle size={6}>
                  @johnsmith
                </div>
              </div>
            </div>
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
              <br />
              <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src="https://wallpaperaccess.com/full/2586809.jpg"
                alt="sample"
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-item">
                <div className="title is-4" size={4}>
                  John Smith
                </div>
                <div className="subtitle is-6" subtitle size={6}>
                  @johnsmith
                </div>
              </div>
            </div>
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
              <br />
              <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
