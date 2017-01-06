import * as React from 'react';
import {HeaderComponent} from "./ui/header";
import {FooterComponent} from "./ui/footer";
import {SideNavComponent} from "./ui/sidenav";

export interface Props {

}

export interface State {

}

export class AppComponent extends React.Component<Props, State> {
    render() {
        return (
            <div>
                <SideNavComponent/>
                <HeaderComponent/>
                {this.props.children}
                <FooterComponent/>
            </div>
        );
    }
}