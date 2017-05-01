import * as React from 'react';
import {Link} from "react-router";

export interface Props {

}

export interface State {

}

export class HeaderComponent extends React.Component<Props, State> {
	render() {
		return (
			<header className="header">
				<div className="container main-page-header">
					<div className="main-head">
						<div className="logo">
							<img src="./../img/logo.png"/>
						</div>

						<div className="name">
                <span>
                    ЖД-СПЛАВ
                </span>
						</div>

						<div className="title">
                    <span>
                        Прием, демонтаж и вывоз металлолома в Москве и области
                    </span>
						</div>

						<div className="phones">
							<span>+7 (495) 456 43 46</span>
						</div>
					</div>

					<div className="main-menu">
						<div className="items">
                <span className="desktop-menu">
					<Link to="/" className="active">Главная</Link>
                    <Link to="/test">Оптовикам</Link>
                    <Link to="/test">Услуги</Link>
                    <Link to="/test">Контакты</Link>
                </span>

							<span className="mobile-menu">
                    <a href="javascript:;" id="openMobileMenu">МЕНЮ</a>
                </span>
						</div>

						<div className="times">
                <span>
                    <span> ПН-ПТ 8.00 - 20.00</span>
                    <span> СБ-ВС 9.00 - 18.00</span>
                </span>

						</div>

						<div className="info">
							<a href="#"><span>Адреса пунктов</span><span> приема</span></a>
						</div>
					</div>

					<div className="main-price">
						<div className="price-header">
							<div className="left slide-button">&nbsp;</div>
							<div className="right slide-button">&nbsp;</div>
							<div className="heading">
								Актуальные цены на лом металлов
								<span>03.12.2016</span>
							</div>
						</div>

						<div className="prices">
							<div className="block-container">
								<div className="block active">
									<div className="name">МЕДЬ</div>
									<div className="price">
										300
										<span className="cur">руб/кг</span>
									</div>
								</div>
							</div>

							<div className="block-container">
								<div className="block">
									<div className="name">ЛАТУНЬ</div>
									<div className="price">
										300
										<span className="cur">руб/кг</span>
									</div>
								</div>
							</div>

							<div className="block-container">
								<div className="block">
									<div className="name">АЛЮМИНИЙ</div>
									<div className="price">
										300
										<span className="cur">руб/кг</span>
									</div>
								</div>
							</div>

							<div className="block-container">
								<div className="block">
									<div className="name">НЕРЖАВЕЙКА</div>
									<div className="price">
										300
										<span className="cur">руб/кг</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
}