import * as React from 'react';
import {HeaderComponent} from "../ui/header";
import {FooterComponent} from "../ui/footer";
import {SideNavComponent} from "../ui/sidenav";

export interface Props {

}

export interface State {

}

export class App1Component extends React.Component<Props, State> {
    render() {
        return (
            <div>
				<h1>MainLayout123</h1>
                {/*<SideNavComponent/>*/}
                {/*<HeaderComponent/>*/}
                {this.props.children}
                {/*<FooterComponent/>*/}
            </div>
        );
    }
}