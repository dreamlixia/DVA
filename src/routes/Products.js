import React from 'react'
import {connect} from 'dva'
import ProductList from './../components/ProductList'
import style from './../../styles/products.less'

const Products = ({dispatch, products}) => {

    function handleDelete(id) {
        dispatch({
            type: 'products/delete',
            payload: id,
          })
    }

    return (
        // 但是有时候我希望这个less是全局的，而不是我每个控件都要应用一次。

        // 这时候就要禁用CSS Moudules

        // 打开根目录的.roadhogrc文件

        // 在根节点内加一个

        // "disableCSSModules": true,
        
        // 即可。此时就可以直接在路由根组件中直接引用less，所有子组件都可用到。
        <div className={style.page}>
            <h2>List of Products!</h2>
            <ProductList onDelete={handleDelete} products={products}/>
        </div>
    )
}

export default connect(({ products }) => ({
    products,
  }))(Products)