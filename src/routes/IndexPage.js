import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd'
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
      <Link to='/products'><Button className={styles.antbtn}>跳转到表格</Button></Link>
      <Link to='/uploads'><Button className={styles.antbtn}>去上传</Button></Link>
      <Link to='/valueof'><Button className={styles.antbtn}>input传值</Button></Link>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
