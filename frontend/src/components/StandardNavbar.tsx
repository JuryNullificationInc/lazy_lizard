import { Menu, MenuProps, Space } from 'antd';

import {
    HomeOutlined, 
    ShoppingCartOutlined, 
    ExperimentOutlined, 
    SendOutlined,
    HeartOutlined,
    FireOutlined,
    UserOutlined
    } from '@ant-design/icons';
import React from 'react';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }

const items: MenuItem[] = [
    getItem('Home', 'home', <HomeOutlined/>),
    getItem('Products', 'products', <ExperimentOutlined />),
    getItem('Cart', 'cart', <ShoppingCartOutlined />),
    getItem('Account', 'account', <UserOutlined />),
    getItem('Contact', 'contact', <SendOutlined />)
]

interface StandardNavbarProps {
    menuChoice: string;
    menuChoiceSetter: (menuChoice: string) => void;
}

export function StandardNavbar({ menuChoice, menuChoiceSetter } : StandardNavbarProps ) {


    return (
        <Space direction='vertical' style={{width: '100%' }}>
            <Menu mode="inline" selectedKeys={[menuChoice]} items={items} onClick={(x) => menuChoiceSetter(x.key)}/>
        </Space>
    );
}