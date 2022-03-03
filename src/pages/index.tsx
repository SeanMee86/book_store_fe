import * as React from "react"
import {useEffect, useState} from 'react';
import Layout from "../components/layout"
import {BookType, Categories} from "../components/book.type";
import {ApiRequest} from "../components/api.request";
import BookContainer from "../components/book.container";

const IndexPage = () => {
    const [bookArray, setBookArray] = useState<BookType<Categories>[]>([]);
    useEffect(() => {
        ApiRequest.getBooks()
            .then(data => setBookArray([...data]))
    }, [])

  return (
      <Layout>
          <BookContainer bookArray={bookArray} />
      </Layout>
  )
}

export default IndexPage
