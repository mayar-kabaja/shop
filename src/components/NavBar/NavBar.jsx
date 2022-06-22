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
    <div className="nav-bar">
      <Row align="middle">
        <Col span={6}>
          <Logo />
        </Col>
        <Col align="middle" span={12}>
          <Search
            placeholder="Search"
            allowClear
          />
        </Col>
        <Col align="end" span={6}>
          <Space size="middle">
            <ShoppingCartOutlined style={{ fontSize: '30px', cursor: 'pointer' }} />
            <LoginOutlined style={{ fontSize: '25px', cursor: 'pointer' }} />
          </Space>
        </Col>
      </Row>
    </div>
  );
}

export default NavBar;
