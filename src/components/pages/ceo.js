import React, { Component } from 'react'
import './facilities.css'
import image56 from "../../tt1.jpg"
import image57 from "../../tt2.jpg"
import image58 from "../../tt3.jpg"
export default class ceo extends Component {
    render() {
        return (
            <div>
                 <div className="Layout1">
                     <h3 className="alileft">Final Year Exam Schedule - August 2020</h3>
                     <div className="line1"> </div>
                     <img className="pic1" width='80%'  alt='ceopic'style={{display:'block',marginLeft:'auto',marginRight:'auto'}}src={image56}/>
                     <img className="pic1" width='80%'  alt='ceopic'style={{display:'block',marginLeft:'auto',marginRight:'auto'}}src={image57}/>
                     <img className="pic1" width='80%' alt='ceopic' style={{display:'block',marginLeft:'auto',marginRight:'auto'}}src={image58}/>



              </div>  
            </div>
        )
    }
}
