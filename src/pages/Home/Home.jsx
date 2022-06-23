import React, { useEffect, useState } from 'react';
import { Layout, Row, Col } from 'antd';
import {
  Card, Filters, NavBar,
} from '../../components';
import './Home.css';

const { Header, Sider, Content } = Layout;

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setData(json));
  });
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
          <Row wrap justify="space-around">
            {data.map(({
              title, rating, description, price, image, id,
            }) => (
              <Col>
                <Card
                  title={title}
                  rating={rating.rate}
                  description={description}
                  id={id}
                  price={price}
                  image={image}
                  loading={false}
                />
              </Col>
            ))}
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Home;
