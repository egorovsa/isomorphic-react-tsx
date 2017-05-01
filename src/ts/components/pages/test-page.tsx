import * as React from 'react';
import {AddressesBlockComponent} from "../ui/adresses-block";

export interface Props {
	params?: any
}

export interface State {

}

export class PagesComponent extends React.Component<Props, State> {
	public render() {
		return (
			<div>
				THE TEST PAGE {this.props.params.slug}
			</div>
		);
	}
}