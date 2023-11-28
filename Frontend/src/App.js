import logo from './download.jpg'
import './App.css';
import { ProductAddForm } from './components/component_product_add';
import { ProductList } from './components/component_product_list';
import { Route, Routes } from 'react-router';
import { AdminLayout } from './components/component_admin';
import { ProductEdit } from './components/component_product_edit';

function App(){
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<AdminLayout/>}>
                    <Route path='products' element={<ProductList/>}/>
                    <Route path='products/new' element={<ProductAddForm/>}/>
                    <Route path='products/edit/:id' element={<ProductEdit/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;