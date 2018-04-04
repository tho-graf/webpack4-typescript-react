import * as React from "react";

const logo: string = require("../assets/img.svg")


export default class Hello extends React.Component {
    render() {
        return <img width="200px" src={logo} className="App-logo" alt="logo" />
    }
}