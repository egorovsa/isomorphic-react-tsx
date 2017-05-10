import * as React from 'react';
import {HeaderComponent} from "../../components/ui/header";
import {FooterComponent} from "../../components/ui/footer";
import {SideNavComponent} from "../../components/ui/sidenav";
import {Header1Component} from "../../components/ui/header1";

export interface Props {

}

export interface State {

}

export class PageNotFoundComponent extends React.Component<Props, State> {
	render() {
		return (
			<div>
				404
			</div>
		);
	}
}