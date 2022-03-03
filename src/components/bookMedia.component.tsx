import * as React from 'react';
import {BookType, Media} from "./book.type";

type DataProps = {
    book: BookType<Media>
}

const BookMediaComponent: React.FC<DataProps> = ({book: {bkTitle, relations, author, rating, excerpt}}) => {
    return (
        <div>
            <h2>{bkTitle}</h2>
            <h4>{author}</h4>
            <p>{excerpt}</p>
            <code>{rating}</code>
            <ul>
                {relations && relations.map(({name, electronic}) => {
                    return (
                        <li>{`${bkTitle} is available on the ${name} and is ${electronic ? "" : "not "}electronic`}</li>
                    )
                })}
            </ul>
        </div>
    );
};

export default BookMediaComponent;