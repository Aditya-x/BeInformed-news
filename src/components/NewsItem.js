import React from "react";

const NewsItem =(props)=> {
 
    let { title, description, imageUrl, newsUrl, author, time, source } = props;

    const timestamp = time;
    const date = new Date(timestamp);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const month = monthNames[monthIndex];
    const formattedDate = `${day}-${month}`;

    return (
      <div>
        <div className="card">
        <div style= {{display:'flex', justifyContent:'flex-end', position: 'absolute', right:'0'}}>
        <span className=" badge rounded-pill bg-danger">{source.name}</span></div>

         <div>
          <img src={imageUrl} className="card-img-top" alt="..." />

          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on {formattedDate}
              </small>
            </p>
            <a href={newsUrl} className="btn btn-dark">
              Read More
            </a>
          </div>
          </div>
        </div>
      </div>
    );
  }

export default NewsItem;
