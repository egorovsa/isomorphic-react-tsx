import * as React from 'react';

export interface Props {

}

export interface State {

}

export class HeaderComponent extends React.Component<Props, State> {

	static defaultProps = {
		staticData: {
			company_name: ''
		}
	};


	render() {
		return (
			<header className="header">
				HEADER
			</header>
		);
	}
}