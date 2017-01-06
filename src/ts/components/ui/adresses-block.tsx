import * as React from 'react';

export interface Props {

}

export interface State {

}

export class AddressesBlockComponent extends React.Component<Props, State> {
    render() {
        return (
            <div className="addresses">
                <span className="title">Мы верно определили Вашу станцию метро?</span>
                <div className="metro-selector">
                    <select name="" id="">
                        <option value="1">Кантемировская</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="addresses-phones">
                    <div>
                        <div className="address">
                            <div className="item">ул. Промышленная, д 3 А (Заезд с ул Деловой)</div>
                        </div>
                        <div className="phones">
                            <div className="item">8 (903) 514 30 42</div>
                        </div>
                    </div>
                    <div>
                        <div className="address">
                            <div className="item">ул. Промышленная, д 3 А (Заезд с ул Деловой)</div>
                        </div>
                        <div className="phones">
                            <div className="item">8 (903) 514 30 42</div>
                        </div>
                    </div>
                    <div>
                        <div className="address">
                            <div className="item">ул. Промышленная, д 3 А (Заезд с ул Деловой)</div>
                        </div>
                        <div className="phones">
                            <div className="item">8 (903) 514 30 42</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}