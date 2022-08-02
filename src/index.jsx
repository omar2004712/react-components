import { faker } from '@faker-js/faker';
import React from 'react';
import ReactDOM from 'react-dom/client';
import CommentDetail from './CommentDetail';

function App() {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        text="This is a comment"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Tam"
        timeAgo="Today at 2:00AM"
        text="This is another comment"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Pam"
        timeAgo="Yesterday at 5:00PM"
        text="This is another another comment"
        avatar={faker.image.avatar()}
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />);
