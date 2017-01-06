import * as React from 'react';

export interface Props {

}

export interface State {

}

export class SideNavComponent extends React.Component<Props, State> {
    render() {
        return (
            <div className="sidenav active" id="sideNav">
                <a href="javascript:void(0)" className="closebtn" id="sideNavClose">&times;</a>
                <a href="#">Главная</a>
                <a href="#">Оптовика</a>
                <a href="#">Услуги</a>
                <a href="#">Контакты</a>
                <div className="background"></div>
            </div>
        );
    }
}