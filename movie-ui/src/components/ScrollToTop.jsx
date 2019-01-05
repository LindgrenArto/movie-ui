import React from "react";
import ScrollUpButton from "react-scroll-up-button";
 
export default class Index extends React.Component {
    render() {
        return (
            <div>
                <ScrollUpButton style={{width: 40, height: 40, borderRadius: 4, backgroundColor: "#3079c1", color: "#ffffff" }}/>
            </div>
        );
    }
}