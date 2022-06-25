/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Layout, Row, Col, Typography,
} from 'antd';
import { Card, Filters, NavBar } from '../../components';
import './Home.css';
import { getProducts } from '../../components/features/Products';

const { Title } = Typography;

const { Header, Sider, Content } = Layout;
function Home() {
  const dispatch = useDispatch();
  const { filterProducts, loading } = useSelector((store) => store.products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <Layout>
      <Header className="header">
        <NavBar />
      </Header>
      <Layout>
        <Sider>
          <Filters />
        </Sider>
        <Content>
          <Row justify="space-around" wrap>
            {!loading
              ? (filterProducts.length ? filterProducts.map(({
                title, description, price, images, id,
              }) => (
                <Col>
                  <Card
                    title={title}
                    description={description}
                    id={id}
                    price={price}
                    image={images[0]}
                    loading={false}
                  />
                </Col>
              )) : <Col span={12} style={{ height: '500px' }}><Title level={4}>NO RESULTS</Title></Col>)
              : Array.from({
                length: 12,
              }).map(() => (
                <Col>
                  <Card loading />
                </Col>
              ))}
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Home;
