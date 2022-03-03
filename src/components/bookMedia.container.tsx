import * as React from 'react';
import {BookType, Media} from "./book.type";
import BookMediaComponent from "./bookMedia.component";

type DataProps = {
    bookArray: BookType<Media>[]
}

const BookMediaContainer: React.FC<DataProps> = ({bookArray}) => {
    return (
        <div>
            {bookArray.map(book => {
                book.relations = [
                    {name: 'iPad', electronic: true},
                    {name: 'Spoken Word', electronic: false}
                ]
                return <BookMediaComponent book={book} />
            })}
        </div>
    );
};

export default BookMediaContainer;