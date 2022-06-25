import React, { useEffect, useState } from 'react';
import {
  Radio, Space, Typography, Slider, Col,
} from 'antd';
import './Filters.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterProducts } from '../features/Products';

const { Title } = Typography;

function Filters() {
  const dispatch = useDispatch();
  const formatter = (value) => `${value}$`;
  const [category, setCategory] = useState('all');
  const [price, setPrice] = useState([10, 600]);
  const { filters } = useSelector((store) => store.products);
  const onAfterChange = (value) => {
    setPrice(value);
    dispatch(filterProducts({ category, price: value }));
  };
  const changeCategory = (e) => {
    setCategory(e.target.value);
  };
  useEffect(() => {
    dispatch(filterProducts({ ...filters, category, price }));
  }, [price, category]);
  return (
    <Space wrap direction="vertical" size="middle" style={{ position: 'fixed' }}>
      <Col span={24}>
        <Title level={4}>Categories</Title>
        <Radio.Group onChange={changeCategory} value={category} className="radio">
          <Space direction="vertical">
            <Radio value="all" checked>
              All
            </Radio>
            <Radio value="Clothes">Clothes</Radio>
            <Radio value="Electronics">Electronics</Radio>
            <Radio value="Furniture">Furniture</Radio>
            <Radio value="Shoes">Shoes</Radio>
            <Radio value="Others">Others</Radio>
          </Space>
        </Radio.Group>
      </Col>
      <Col span={24}>
        <Title level={4}>Price</Title>
        <Slider
          range
          tipFormatter={formatter}
          max={900}
          min={5}
          defaultValue={price}
          onAfterChange={onAfterChange}
        />
      </Col>
    </Space>
  );
}

export default Filters;
