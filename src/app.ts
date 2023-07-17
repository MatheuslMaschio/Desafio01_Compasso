import { Post, Comments } from './data';

const app = document.getElementById('app') as HTMLDivElement;



let comments01 = Comments.filter(Comments => Comments.postId == 1);

comments01.forEach((item) => {
  const divElement = document.createElement('div');
  divElement.textContent = `Nome: ${item.email, item.body}`;
  app.appendChild(divElement);
});
