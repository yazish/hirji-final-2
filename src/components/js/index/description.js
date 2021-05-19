import React from 'react';
import classes from "../../css/index/description.module.css"
import image from "../../../assets/Sheroadin Delights.png"


function IndexDescription() {
    return (
        <React.Fragment>
            <div className={classes.mainDiv}>
                <img src={image} alt="..." className={classes.image} />
            </div>
        </React.Fragment>
    )
}

export default IndexDescription

{/* <div className={classes.mainDiv}>
            <div className={`${classes.childDiv} childDiv1`} >
                <p className={classes.para}>hello to all of you we are Sheroadin delights vadodras one of the most secure sites and retailers</p>
                <img src={process.env.PUBLIC_URL + "/assets/index/indexPicture1.png"} alt="..." className={classes.image} />
            </div>
            <div className={`${classes.childDiv} childDiv2 `}  >
                <p className={classes.para}>We deal with respect and fiuri nioviuuev nnf fje jinvsoj most way of tpoosible and good for you is the best wway possible </p>
                <img  src={process.env.PUBLIC_URL + "/assets/index/Hirji.png"} alt="..." className={classes.image} />
            </div>
            <div className={`${classes.childDiv} childDiv3 `} >
                <p className={classes.para}>we try to limit the bets wb by the way ewew aere tyring ti do ian ad and good for you</p>
                <img src={process.env.PUBLIC_URL + "/assets/index/indexPicture3.jpg"} alt="..." className={classes.image} />
            </div>
        </div> */}