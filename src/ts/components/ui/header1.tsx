import * as React from 'react';
import {Link} from "react-router";

export interface Props {

}

export interface State {

}

export class Header1Component extends React.Component<Props, State> {
	render() {
		return (
			<header className="header ">
				<div className="container main-page-header small">
					<div className="main-head">
						<div className="logo">

						</div>

						<div className="name">
							<span>Hello world</span>
						</div>

						<div className="title">
                    <span>

                    </span>
						</div>

						<div className="phones">
							<span>Phones</span>
						</div>
					</div>

					<div className="main-menu">
						<div className="items">
                <span className="desktop-menu">
					<Link to="/" className="active">Главная</Link>
                    <Link to="/services">Страница 1</Link>
                    <Link to="/pages/page">Страница 2</Link>
                    <Link to="/pages/page1">Страница 3</Link>
                </span>

							<span className="mobile-menu">
                    <a href="javascript:;" id="openMobileMenu">МЕНЮ</a>
                </span>
						</div>


						<div className="info">
							<a href="#"></a>
						</div>
					</div>

				</div>
			</header>
		);
	}
}