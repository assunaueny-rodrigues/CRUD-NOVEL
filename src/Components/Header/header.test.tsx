import * as React from "react";
import {act} from 'react-dom/test-utils';
import * as ReactDOM from "react-dom";
import Header from "./index";

describe('Header', function () {
    it('Checking information contained in the header', function () {
        let container = document.createElement('div');
        document.body.appendChild(container);
        act(() => {
            ReactDOM.render(<Header />, container);
        })
        const data = container.querySelector('div');
        expect(container.querySelector("div")?.querySelector("div")?.querySelector("label")?.textContent).toBe("Novel Consultoria");
    });
});