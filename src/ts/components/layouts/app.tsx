import * as React from 'react';
import {HeaderComponent} from "../ui/header";
import {FooterComponent} from "../ui/footer";
import {SideNavComponent} from "../ui/sidenav";
import {Header1Component} from "../ui/header1";

export interface Props {

}

export interface State {

}

export class AppComponent extends React.Component<Props, State> {
    render() {
        return (
            <div>
				<Header1Component/>
				<h1>MainLayout</h1>
                {/*<SideNavComponent/>*/}
                {/*<HeaderComponent/>*/}
                {this.props.children}
                {/*<FooterComponent/>*/}
            </div>
        );
    }
}