import React from 'react';
import Header from './components/Header'
interface LayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<LayoutProps> = ({children})=> {
    return (
        <>
         <Header/>
        <div>{children}</div>
        </>
    )
} 

export default MainLayout;