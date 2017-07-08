import * as React from "react";

export interface HeaderProps {
}

export class Header extends React.Component<HeaderProps, undefined> {
    render() {
        return (
            <nav>
                <a href="/home">Home</a>
                <a href="/othernav">Other Nav</a>
            </nav>
        );
    }
}
