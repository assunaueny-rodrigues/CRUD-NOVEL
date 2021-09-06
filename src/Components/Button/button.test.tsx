import * as React from "react";
import {act} from 'react-dom/test-utils';
import * as ReactDOM from "react-dom";
import Button from "./index";

describe('Button', function () {
   it('Check label receipt', function () {
       let container = document.createElement('div');
       document.body.appendChild(container);
       act(() => {
           ReactDOM.render(<Button label="Teste"/>, container);
       })
       const data = container.querySelector('label');
       expect(data?.textContent).toBe("Teste")
   });
});