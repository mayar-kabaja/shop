import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Col, Row, Space, Input,
} from 'antd';
import './NavBar.css';
import { ShoppingCartOutlined, LoginOutlined } from '@ant-design/icons';
import Logo from '../UI/Logo/Logo';
import { filterProducts } from '../features/Products';

const { Search } = Input;

function NavBar() {
  const dispatch = useDispatch();
  const { filters } = useSelector((store) => store.products);
  const [word, setWord] = useState('');
  useEffect(() => {
    dispatch(filterProducts({ ...filters, word }));
  }, [word]);
  return (
    <Row>
      <Col span={6} align="start">
        <Logo />
      </Col>
      <Col span={10} style={{ display: 'flex', alignItems: 'center' }}>
        <Search placeholder="Search" allowClear onSearch={(data) => setWord(data)} />
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
