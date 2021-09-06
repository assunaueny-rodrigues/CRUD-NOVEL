import * as React from "react";
import {act} from 'react-dom/test-utils';
import * as ReactDOM from "react-dom";
import Input from "./index";

describe('Input', function () {
    it('Checking receipt of input label', function () {
        let container = document.createElement('div');
        document.body.appendChild(container);
        act(() => {
            ReactDOM.render(<Input labelInput="Teste" />, container);
        })
        const data = container.querySelector('div');
        expect(container.querySelector("div")?.querySelector("label")?.textContent).toBe("Teste");
    });
});