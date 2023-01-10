import React from "react";

function NewsListItem({ desc, name, category, onDelete }) {
  let elementClassName;

  switch (category) {
    case "hot":
      elementClassName = "bg-danger bg-gradient";
      break;
    case "world":
      elementClassName = "bg-success bg-gradient";
      break;
    case "sport":
      elementClassName = "bg-info bg-gradient";
      break;
    default:
      elementClassName = "bg-secondary bg-gradient";
  }

  return (
    <li>
      <div className="card mb-2">
        <div className={`card-header ${elementClassName}`}>{name}
        <span onClick={onDelete} className="btn-delete"><i className="bi bi-trash3"></i></span>
        </div>
        <div className="card-body d-flex justify-content-between">
          <blockquote className="blockquote mb-0">
            <div className="list-item mb-3">
            <img className="news-img mx-2" src="https://cardsandgiftwrap.co.uk/wp-content/uploads/2019/09/69866469_932886310378139_5481735122879250432_o.jpg" alt="" />
            <span style={{"fontSize": "1rem"}} className="my-0">{desc}</span>
            </div>
            <footer className="blockquote-footer">
              <span>{new Date().getFullYear()}, </span> <span title="Source Title">Category : {category}</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </li>
  );
}

export default NewsListItem;
