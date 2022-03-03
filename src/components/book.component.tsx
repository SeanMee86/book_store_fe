import * as React from 'react';
import {BookType, Categories} from "./book.type";

type DataProps = {
    book: BookType<Categories>
}

const BookComponent: React.FC<DataProps> = ({book: {bkTitle, excerpt, rating, author, relations}}) => {
    return (
        <div>
            <h2>{bkTitle}</h2>
            <h4>{author}</h4>
            <p>{excerpt}</p>
            <code>{rating}</code>
            <ul>
                {relations && relations.map(relation => {
                    return (
                        <li>{relation}</li>
                    )
                })}
            </ul>
        </div>
    );
};

export default BookComponent;