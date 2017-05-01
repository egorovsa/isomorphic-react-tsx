import * as React from 'react';
import {AddressesBlockComponent} from "../ui/adresses-block";
import {Store, StoreComponent} from "react-stores";
import {CommonStore} from "../../stores/common";

export interface Props {

}

export interface State {

}

export interface StoresState {
	common: Store<CommonStore.State>
}

export class MainPageComponent extends StoreComponent<Props, State, StoresState> {
	constructor() {
		super({
			common: CommonStore.store
		});
	}


	private getTagLineBlock(): JSX.Element {
		return (
			<div className="tagline">
				Мы дорожим каждым клиентом
			</div>
		)
	}

	private getAdvantages(): JSX.Element {
		return (
			<div className={"advantages"}>
				<div className="container">
					<AddressesBlockComponent/>


					<div className="advant-block paid-now">
						<div className="left">
							<img src="./../img/money-3.png" alt=""/>
						</div>
						<div className="right">
							<div className="title">Оплата сразу</div>
							<div className="description">
								Вы получаете деньги сразу после того, как он был взвешен и документы на прием оформлены.
							</div>
						</div>
					</div>


					<div className="advant-block hi-cost">
						<div className="left">
							<img src="./../img/business-1.png" alt=""/>
						</div>
						<div className="right">
							<div className="title">Высокие цены</div>
							<div className="description">
								После точного взвешивания предлагаем честную и конкурентную цену на лом цветного и
								черного
								металла.
							</div>
						</div>
					</div>

					<div className="advant-block pickup">
						<div className="left">
							<img src="./../img/transport-2.png" alt=""/>
						</div>
						<div className="right">
							<div className="title">Самовывоз</div>

							<div className="description">
								Парк спецтехники позволяет быстро и в удобное время организовать вывоз цветного металл
								от 300 кг
								бесплатно.
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	};

	private getMapSelectorBlock(): JSX.Element {
		return (
			<div className="map-section">
				<div className="container">
					<div className="title">
						Адреса пунктов приема металлолома
					</div>
					<div className="map">
						<div>
							<script type="text/javascript" charSet="utf-8"
									src="//api-maps.yandex.ru/services/constructor/1.0/js/?sid=ZQJjDES6vyjOPmITIlaYHYyBtLR1qM_K&&height=430"/>
						</div>
					</div>
				</div>
			</div>
		)
	}


	public render() {
		return (
			<div>
				{this.getAdvantages()}
				{this.getTagLineBlock()}
				{this.getMapSelectorBlock()}
			</div>
		);
	}
}