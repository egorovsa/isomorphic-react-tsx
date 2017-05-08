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
                <SideNavComponent/>
				<Header1Component/>
				{/*<HeaderComponent/>*/}
                {this.props.children}
                {/*<FooterComponent/>*/}
            </div>
        );
    }
}