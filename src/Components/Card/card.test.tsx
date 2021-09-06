import * as React from "react";
import {act} from 'react-dom/test-utils';
import * as ReactDOM from "react-dom";
import Card from "./index";

describe('Card', function () {
    it('Check receipt of children containing TAG <p></p>', function () {
        let container = document.createElement('div');
        document.body.appendChild(container);
        act(() => {
            ReactDOM.render(<Card children={<p>Teste</p>}/>, container);
        })
        expect(container?.querySelector("p"))
    });
});