import React from 'react'
import ReactDOM from 'react-dom/client'
import Book from './Book'

import './index.css'

const divRoot = document.getElementById('root')
const root = ReactDOM.createRoot(divRoot)

const BookList = () => (
  <section className="booklist">
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
  </section>
)
root.render(<BookList />)
