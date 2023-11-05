import React from "react";
import { Link } from "react-router-dom";

const Pagination = (props) => {
  const totalPage = props.totalPage;
  const currentPage = props.currentPage;
  const basePath = props.basePath;
  console.log("asdasd", basePath - 1, totalPage);
  const allLi = [];
  if (currentPage !== 1)
    allLi.push(
      <li>
        <Link to={basePath + 1}>First</Link>
      </li>
    );
  if (currentPage > 1)
    allLi.push(
      <li>
        <Link to={basePath + (Number(currentPage) - 1)}>Previous</Link>
      </li>
    );
  for (let i = currentPage - 5; i <= currentPage - 1; i++)
    if (i >= 1)
      allLi.push(
        <li>
          <Link to={basePath + i}>{i}</Link>
        </li>
      );
  allLi.push(
    <li>
      <Link style={{ color: "red" }} to={basePath + currentPage}>
        {currentPage}
      </Link>
    </li>
  );
  for (let i = 1 + currentPage; i <= 5 + currentPage; i++)
    if (i <= totalPage)
      allLi.push(
        <li>
          <Link to={basePath + i}>{i}</Link>
        </li>
      );
  if (currentPage < totalPage)
    allLi.push(
      <li>
        <Link to={basePath + (Number(currentPage) + 1)}>Next</Link>
      </li>
    );
  if (currentPage !== totalPage)
    allLi.push(
      <li>
        <Link to={basePath + totalPage}>Last</Link>
      </li>
    );
  return (
    <div class="pagination">
      <ul>{allLi}</ul>
    </div>
  );
};

export default Pagination;
