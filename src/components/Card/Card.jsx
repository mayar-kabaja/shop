import React from 'react';
import PropTypes from 'prop-types';
import {
  Card as CardAnt, Rate, Typography, Space,
} from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const { Meta } = CardAnt;
const { Title } = Typography;

function Card({
  title, rating, price, image, id, loading,
}) {
  return (
    <CardAnt
      hoverable
      loading={loading}
      style={{
        width: 240,
        marginBottom: 30,
      }}
      cover={<img alt="example" src={image} style={{ width: '95%', height: '250px' }} />}
    >
      <Title level={5}>
        {price}
        <span>$</span>
      </Title>
      <Meta title={title} key={id} />
      <Space align="center" size="large">
        <Rate allowHalf defaultValue={rating} />
        <ShoppingCartOutlined style={{ fontSize: '25px', cursor: 'pointer', display: 'block' }} />
      </Space>
    </CardAnt>
  );
}
export default Card;
Card.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
};
