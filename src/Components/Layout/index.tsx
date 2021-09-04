import React from 'react';
import colors from '../../GlobalStyles';
import Header from '../Header';
import { ContainerMain } from './styles';

const Layout = ({children}: HTMLElement) => {
    return(
        <ContainerMain style={{ background: colors.background }}>
            <Header />
            {children}
        </ContainerMain>
    )
}

export default Layout;