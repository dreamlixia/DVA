import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';

const ProductList = ({ onDelete, products }) => {
  const columns = [{
    title: 'Name',
    dataIndex: 'name',
  }, {
    title: 'Actions',
    render: (text, record) => {
      return (
        <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
          <Button type="danger">Delete</Button>
        </Popconfirm>
      );
    },
  }];
  return (
    <React.Fragment>
      <Table
        dataSource={products}
        columns={columns}
      />
      <Link to="/"><Button type="primary">返回主页</Button></Link>
    </React.Fragment>
  );
};

ProductList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default ProductList;