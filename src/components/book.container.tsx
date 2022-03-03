import * as React from 'react';
import {BookType, Categories} from "./book.type";
import BookComponent from "./book.component";

type DataProps = {
    bookArray: BookType<Categories>[]
}

const BookContainer: React.FC<DataProps> = ({bookArray}) => {
    return (
        <div>
            {bookArray.map(book => {
                book.relations = ['horror', 'scifi']
                return <BookComponent book={book} />
            })}
        </div>
    );
};

export default BookContainer;