import "./App.css";
import React from "react";

class ReviewHeader extends React.Component {
  render() {
    return (
      <div className="review-header">
        <h3 className="community-review-header">Community Reviews</h3>

        <div className="header-stats">
          <div className="community-rating-stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <p className="avg-rating">Avg rating: 4.5</p>
          <p className="rating-count">1,042 ratings</p>
          <p className="review-count">502 reviews</p>
        </div>
      </div>
    );
  }
}

class CurrentUserReview extends React.Component {
  render() {
    return (
      <div className="current-user-rating">
        <div className="current-user-rating-stars">
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
        </div>

        <button className="btn" id="write-review-btn">
          Write a review
        </button>
      </div>
    );
  }
}

class UserReview extends React.Component {
  render() {
    return (
      <div className="review">
        <div className="user-review-header">
          <div className="user-rating">
            <img
              className="user-avatar"
              src="https://i.pravatar.cc/75?img=32"
              alt=""
            />
            <div className="user-rating-header">
              <p>
                <a href="">Angela M</a> rated it
              </p>
              <div className="user-rating-stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
          </div>
          <div className="review-date">
            <p>Nov 25, 2020</p>
          </div>
        </div>
        <div className="review-content">
          <p>
            Our expectations for elected officials aren’t always very realistic,
            and none more than for those elected to the highest office in our
            country. We’ve never had a perfect President and never will, but
            there are certain qualities that I believe are essential.
            Intelligence, a respect for the office and more importantly a
            reverence for our democracy, a strong sense of responsibility for
            protecting our nation and its citizens, leadership skills that bring
            together qualified people in the government, a recognition that we
            have a role to play as citizens of the world, to name a few.
          </p>
        </div>
      </div>
    );
  }
}

class ReviewComponent extends React.Component {
  render() {
    return (
      <div className="review-component">
        <ReviewHeader />
        <CurrentUserReview />
        <UserReview />
        <UserReview />
      </div>
    );
  }
}

export { ReviewComponent };
