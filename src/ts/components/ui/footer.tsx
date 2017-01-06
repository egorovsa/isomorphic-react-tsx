import * as React from 'react';

export interface Props {

}

export interface State {

}

export class FooterComponent extends React.Component<Props, State> {
    render() {
        return (
            <footer>
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
                </div>
            </footer>
        );
    }
}