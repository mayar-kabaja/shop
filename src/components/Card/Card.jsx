import React from 'react';
import PropTypes from 'prop-types';
import {
  Card as CardAnt, Rate, Typography, Space,
} from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const { Meta } = CardAnt;
const { Title } = Typography;

function Card({
  title, price, image, id, loading,
}) {
  return (
    <CardAnt
      hoverable
      loading={loading}
      style={{
        width: 240,
        marginBottom: 30,
      }}
      cover={<img alt="product" src={image} style={{ width: '95%', height: '250px' }} />}
    >
      <Title level={5}>
        {price}
        <span>$</span>
      </Title>
      <Meta title={title} key={id} />
      <Space align="center" size="large">
        <Rate allowHalf defaultValue={2.5} />
        <ShoppingCartOutlined style={{ fontSize: '25px', cursor: 'pointer', display: 'block' }} />
      </Space>
    </CardAnt>
  );
}
export default Card;
Card.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  id: PropTypes.number,
  loading: PropTypes.bool,
};
