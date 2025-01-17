import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import store from './EX4/store'

createRoot(document.getElementById('root')).render(
<Provider store={store}>
    <App />
</Provider>,
)
