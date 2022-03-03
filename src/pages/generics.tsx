import * as React from 'react';
import {useState, useEffect} from 'react';
import {BookType, Media} from "../components/book.type";
import {ApiRequest} from "../components/api.request";
import Layout from "../components/layout";
import BookMediaContainer from "../components/bookMedia.container";

const GenericsPage = () => {
    const [bookArray, setBookArray] = useState<BookType<Media>[]>([]);
    useEffect(() => {
        ApiRequest.getBooks()
            .then(data => setBookArray([...data]))
    }, [])

    return (
        <Layout>
            <BookMediaContainer bookArray={bookArray} />
        </Layout>
    )
};

export default GenericsPage;