import React from 'react';
import { Card as CardAnt, Rate, Typography, Space } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const { Meta } = CardAnt;
const { Title } = Typography;

function Card({ title, rating, description, price, image, id, loading }) {
  return (
    <CardAnt
      hoverable
      loading={loading}
      style={{
        width: 240,
      }}
      cover={<img alt="example" src={image} style={{ width: '95%' }} />}
    >
      <Title level={5}>
        {price}
        <span>$</span>
      </Title>
      <Meta title={title} description={description} key={id} />
      <Space align="center" size="large">
        <Rate allowHalf defaultValue={rating} />
        <ShoppingCartOutlined style={{ fontSize: '25px', cursor: 'pointer', display: 'block' }} />
      </Space>
    </CardAnt>
  );
}
export default Card;
