import React from "react";
import AppUrl from "../../../Api/AppUrl";

export default function PictureBox(props) {
  const { images } = props;
  const imageView = images.map((image, key) => {
    if (key === 0)
      return (
        <div className="item active">
          <a href="#sư">
            <img
              src={AppUrl.ImageUrl + image.attributes.url}
              alt="#su"
              style={{ width: "100%" }}
            />
          </a>
        </div>
      );
    else
      return (
        <div className="item">
          <a href="#sư">
            <img
              src={AppUrl.ImageUrl + image.attributes.url}
              alt="#su"
              style={{ width: "100%" }}
            />
          </a>
        </div>
      );
  });
  return (
    <div id="myCarousel" className="carousel slide cntr">
      <div className="carousel-inner">{imageView}</div>
      <a className="left carousel-control" href="#myCarousel" data-slide="prev">
        ‹
      </a>
      <a
        className="right carousel-control"
        href="#myCarousel"
        data-slide="next"
      >
        ›
      </a>
    </div>
  );
}
