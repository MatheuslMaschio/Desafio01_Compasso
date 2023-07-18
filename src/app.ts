import { comment, publications } from './data';

function getRenderPublication() {
  const lerDados = document.getElementById('card-container');

  if (lerDados) {
    lerDados.innerHTML = '';
    publications.map((publication) => {
      const publicationItem = document.createElement('div');
      publicationItem.className = 'card';
      publicationItem.innerHTML = `
        <a href="/pages/pageCard.html?id=${publication.id_Publication}" class="link">
          <img src="${publication.image}" alt="imagem Post" class="post_image">
          <div class="post_content">
            <h2> ${publication.title} </h2>
            <p>
              ${publication.body}
            </p>
            <a  href="/pages/pageCard.html?id=${publication.id_Publication}" class="expand">Expand...</a>
          </div>
        </a>
      `;
      lerDados.appendChild(publicationItem);
    });
  }
}

getRenderPublication();
