import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"


function Pagination(props) {

    let previousPageButton = null
    let nextPageButton = null
    const pageNo = props.pageNo
    const dataLength = props.dataLength



    if (Number((pageNo + 1) * 10) > Number(dataLength)) {
        nextPageButton = <a className="page-link" href={`products?brand=${props.brandId}&page=${pageNo}`} aria-label="Next">
        <span aria-hidden="true">»</span>
        <span className="sr-only">Next</span>
    </a>
    } else {
        nextPageButton = <a className="page-link" href={`products?brand=${props.brandId}&page=${props.nextPageNo}`} aria-label="Next">
        <span aria-hidden="true">»</span>
        <span className="sr-only">Next</span>
    </a>
    }

    if (props.previousPageNo === 0) {
        previousPageButton = <li className="page-item">
            <a className="page-link " href={`products?brand=${props.brandId}&page=1`} aria-label="Previous">
                <span aria-hidden="true">«</span>
                <span className="sr-only">Previous</span>
            </a>
        </li>
    } else {
        previousPageButton = <li className="page-item">
            <a className="page-link " href={`products?brand=${props.brandId}&page=${props.previousPageNo}`} aria-label="Previous">
                <span aria-hidden="true">«</span>
                <span className="sr-only">Previous</span>
            </a>
        </li>
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center m-5">
                {previousPageButton}
                {nextPageButton}
            </ul>
        </nav>
    )

}

export default Pagination