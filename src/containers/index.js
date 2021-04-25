import React from 'react';
import IndexDescription from "../components/js/index/description"
import GoToProducts from "../components/js/index/PaginationButton"

function Index() {
    return (

        <React.Fragment>
            <IndexDescription />
            <GoToProducts/>
        </React.Fragment>
    )
}


export default Index