import React, { useState } from 'react';
import {
  Radio, Space, Typography, Slider, Col,
} from 'antd';
import './Filters.css';

const { Title } = Typography;

function Filters() {
  const [category, setCategory] = useState('all');
  const formatter = (value) => `${value}$`;

  const onAfterChange = (value) => {
    console.log('onAfterChange: ', value);
  };
  return (
    <Space wrap direction="vertical" size="middle" style={{ background: '#F3F7F8' }}>
      <Col span={24}>
        <Title level={4}>Categories</Title>
        <Radio.Group onChange={(e) => setCategory(e.target.value)} value={category} className="radio">
          <Space direction="vertical">
            <Radio value="all" checked>All</Radio>
            <Radio value="electronics">Electronics</Radio>
            <Radio value="jewelery">Jewelery</Radio>
            <Radio value="man">men&apos;s clothing</Radio>
            <Radio value="women">women&apos;s clothing</Radio>
          </Space>
        </Radio.Group>
      </Col>
      <Col span={24}>
        <Title level={4}>Price</Title>
        <Slider
          range
          tipFormatter={formatter}
          max={170}
          min={5}
          defaultValue={[20, 50]}
          onAfterChange={onAfterChange}
        />
      </Col>
    </Space>
  );
}

export default Filters;
