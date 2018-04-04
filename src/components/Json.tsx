import * as React from "react";

const test = require("./test.json")


export default class Hello extends React.Component {
    render() {
        return <div>{JSON.stringify(test)}</div>
    }
}