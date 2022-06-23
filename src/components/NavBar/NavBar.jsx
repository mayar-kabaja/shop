import React from 'react';
import {
  Col, Row, Space, Input,
} from 'antd';
import './NavBar.css';
import { ShoppingCartOutlined, LoginOutlined } from '@ant-design/icons';
import Logo from '../UI/Logo/Logo';

const { Search } = Input;

function NavBar() {
  return (
    <Row>
      <Col span={6} align="start">
        <Logo />
      </Col>
      <Col span={10} style={{ display: 'flex', alignItems: 'center' }}>
        <Search placeholder="Search" allowClear />
      </Col>
      <Col align="end" span={8}>
        <Space size="middle">
          <ShoppingCartOutlined style={{ fontSize: '30px', cursor: 'pointer' }} />
          <LoginOutlined style={{ fontSize: '25px', cursor: 'pointer' }} />
        </Space>
      </Col>
    </Row>
  );
}

export default NavBar;
