import dva from 'dva';
import './index.css';

// 1. Initialize
// const app = dva();
const app = dva({
        initialState: {
            products: [
                { name: 'dva', id: 1, key: '1'},
                { name: 'antd', id: 2, key: '2' },
                { name: 'me', id: 3, key: '3' },
            ]
        },
    });

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/products').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
