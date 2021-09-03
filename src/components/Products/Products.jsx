import React, { useState } from 'react'
import { DatePicker } from 'antd'
import 'antd/dist/antd.css';
import './Products.scss'

const PRODUCTS_DATA = [
    {
    orderStage: 'new',
    orderName: 'order 1',
    orderId: 1,
    orderDate: '2020-11-17'
    },
    {
    orderStage: 'processing',
    orderName: 'order 2',
    orderId: 2,
    orderDate: '2021-01-10'
    },
    {
    orderStage: 'processing',
    orderName: 'order 3',
    orderId: 3,
    orderDate: '2020-10-17'
    },
    {
    orderStage: 'finished',
    orderName: 'order 4',
    orderId: 4,
    orderDate: '2020-11-17'
    },
    {
    orderStage: 'new',
    orderName: 'order 5',
    orderId: 5,
    orderDate: '2021-01-10'
    },
    
    {
    orderStage: 'new',
    orderName: 'order 6',
    orderId: 6,
    orderDate: '2020-11-16'
    },
    {
    orderStage: 'finished',
    orderName: 'order 7',
    orderId: 7,
    orderDate: '2021-01-5'
    },
    {
    orderStage: 'processing',
    orderName: 'order 8',
    orderId: 8,
    orderDate: '2021-01-5'
    },
    {
    orderStage: 'finished',
    orderName: 'order 9',
    orderId: 9,
    orderDate: '2020-11-15'
    },
]

const Products = () => {
    const [products,setProducts] = useState(PRODUCTS_DATA)
    const [filterQuery,setFilterQuery] = useState('all')

    const filterNew = () => {
        const filtered = [...PRODUCTS_DATA].filter(product => product.orderStage === 'new')
        setProducts(filtered)
        setFilterQuery('new')
    }

    const filterProcessing = () => {
        const filtered = [...PRODUCTS_DATA].filter(product => product.orderStage === 'processing')
        setProducts(filtered)
        setFilterQuery('processing')
    }

    const filterFinished = () => {
        const filtered = [...PRODUCTS_DATA].filter(product => product.orderStage === 'finished')
        setProducts(filtered)
        setFilterQuery('finished')
    }

    const filterAll = () => {
        setFilterQuery('all')
        setProducts(PRODUCTS_DATA)
    }

    const handleDateChange = (f,dateString) => {
        const filtered = [...PRODUCTS_DATA].filter(product => product.orderDate === dateString)
        setProducts(filtered)
        if(dateString === '') {
            setProducts(PRODUCTS_DATA)
        }
    }
    
    return(
        <div className='products'>
           <header className="products__header">
            <h3 className="products__heading">
                <span className="products__heading--primary">Checkout Our </span>
                <span className="products__heading--secondary">Products</span>
            </h3>
            <DatePicker id='date' onChange={handleDateChange} />
            <div className="products__btn-box">
                <button onClick={filterAll} className={`products__btn ${filterQuery === 'all' && 'products__btn--active'}`}>All</button>
                <button onClick={filterNew} className={`products__btn ${filterQuery === 'new' && 'products__btn--active'}`}>New</button>
                <button onClick={filterProcessing} className={`products__btn ${filterQuery === 'processing' && 'products__btn--active'}`}>Processing</button>
                <button onClick={filterFinished} className={`products__btn ${filterQuery === 'finished' && 'products__btn--active'}`}>Finished</button>
            </div>
           </header>
           <p>current date : </p>
           <div className="items">
               {products.map(data => (
                <div className="item item--1">
                   <p className='item__name'>Order Stage : <span className='item__value'>{data.orderStage}</span></p>
                   <p className='item__name'>Order Name : <span className='item__value'>{data.orderName}</span></p>
                   <p className='item__name'>Order Id : <span className='item__value'>{data.orderId}</span></p>
                   <p className='item__name'>Order Date : <span className='item__value'>{data.orderDate}</span></p>
               </div>
               ))}
           </div>
        </div>
    )
}

export default Products