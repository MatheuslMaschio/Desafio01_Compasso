import { comment, publications } from './data';

function renderPostDetails() {
  const urlParams = new URLSearchParams(window.location.search);

  const id = urlParams.get('id') as string;
  console.log(id);

  const filterPostById = publications.find(
    (publication) => publication.id_Publication === parseInt(id, 10)
  );

  const RenderDetails = document.querySelector('#card');

  const renderComments = document.querySelector('.list_comment');

  const FilterComments = comment.find(
    (publication) => publication.postId === filterPostById?.id_Publication
  );

  console.log({ FilterComments });
  console.log({ renderComments });

  if (filterPostById && RenderDetails) {
    RenderDetails.innerHTML = `

            <img src="../images/postPageCard.png" alt="POST" class="post_image">
    
            <div class="post_content">
                <h2>${filterPostById.title}</h2>
    
                <p>${filterPostById.body}</p>

            </div>

            `;
  }

  if (renderComments) {
    FilterComments?.comments.map((comment) => {
      const listComment = document.createElement('li');
      const hr = document.createElement('hr');

      console.log(comment);

      listComment.innerHTML = `
            <span class="title">${comment.name}: ${comment.email}</span> <i> ${comment.body}</i> 
        `;

      renderComments?.appendChild(listComment);
      renderComments?.appendChild(hr);
    });
  }
}

renderPostDetails();
