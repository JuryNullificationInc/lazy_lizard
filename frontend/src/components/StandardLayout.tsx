import { Layout, Space } from 'antd';
import React, { useState } from 'react';
import { Logo } from './Logo.tsx';
import { StandardNavbar } from './StandardNavbar.tsx';
import { Home } from './Home.tsx';
import { Store } from './Store.tsx';
import Cart from './Cart.tsx';
import Contact from './Contact.tsx';
import Account from './Account.tsx';
import Forums from './Forums.tsx';
import { BrandText } from './BrandText.tsx';
import LogoReversed from './LogoReversed.tsx';

const { Header, Footer, Sider, Content } = Layout;

function ContentPaneSetter(menuChoice: string) {
    switch (menuChoice) {
        case 'home':
            return <Home />;
        case 'products':
            return <Store />;
        case 'cart':
            return <Cart />;
        case 'contact':
            return <Contact />;
        case 'account':
            return <Account />;
        case 'forums':
            return <Forums />;
    }
}

export default function StandardLayout() : JSX.Element {

    const [menuChoice, setMenuChoice] = useState('home');
    const [collapsed, setCollapsed] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    
    function toggleCollapsed() : void {
        setCollapsed(!collapsed);
    }

    return (
        <Space style={{overflowY: 'hidden', overflowX: 'hidden'}}>
        <Layout style={{ minHeight: '97vh', margin: '7px' , width: '99vw'}}>
            <Header style={{ background: '#fff', padding: '5px', margin: '5px', display: 'flex', justifyContent: 'center' }}>
                    <Space direction="horizontal" size="large" style={{display: 'flex', margin: '5px', padding: '5px'}}>
                        <LogoReversed isDarkMode={darkMode}/>
                        <BrandText isDarkMode={darkMode}/>
                        <Logo isDarkMode={darkMode} />
                    </Space>
                </Header>
            <Layout>
                <Sider width={200} style={{ background: '#fff' }} collapsible collapsed={collapsed} onCollapse={toggleCollapsed}>
                    <StandardNavbar menuChoice={menuChoice} menuChoiceSetter={setMenuChoice} />
                </Sider>
                <Content style={{ margin: '0 16px' }}>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        {ContentPaneSetter(menuChoice)}
                    </div>
                </Content>
            </Layout>
            <Footer style={{ textAlign: 'center' }}>
                Lazy Lizard Labs © 2023 - 2024
            </Footer>
        </Layout>
        </Space>
    );
}