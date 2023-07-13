const app = document.getElementById('app') as HTMLDivElement;

interface Post {
  id: number;
  title: string;
  imageUrl: string;
  body: string;
}

interface Comments {
  id: number;
  postId: number;
  email: string;
  body: string;
}

const Post: Post[] = [
  {
    id: 1,
    title: "Lorem Ipsum",
    imageUrl: "https://example.com/image1.jpg",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 2,
    title: "Sed Efficitur",
    imageUrl: "https://example.com/image2.jpg",
    body: "Sed efficitur libero nec ipsum eleifend, id bibendum enim tristique."
  },
  {
    id: 3,
    title: "Aenean Mollis",
    imageUrl: "https://example.com/image3.jpg",
    body: "Aenean mollis lorem a fringilla vulputate. Nulla ultrices orci et felis tincidunt."
  },
  {
    id: 4,
    title: "Pellentesque Eu",
    imageUrl: "https://example.com/image4.jpg",
    body: "Pellentesque eu quam vel mauris consectetur ultrices."
  },
  {
    id: 5,
    title: "Nullam Varius",
    imageUrl: "https://example.com/image5.jpg",
    body: "Nullam varius enim eu aliquam pharetra."
  },
  {
    id: 6,
    title: "Fusce Feugiat",
    imageUrl: "https://example.com/image6.jpg",
    body: "Fusce feugiat metus a ligula tristique, at finibus dui hendrerit."
  },
  {
    id: 7,
    title: "Vestibulum Ante",
    imageUrl: "https://example.com/image7.jpg",
    body: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
  },
  {
    id: 8,
    title: "Curabitur Rhoncus",
    imageUrl: "https://example.com/image8.jpg",
    body: "Curabitur rhoncus lorem a risus consequat, ut tincidunt diam fringilla."
  },
  {
    id: 9,
    title: "Mauris Tempor",
    imageUrl: "https://example.com/image9.jpg",
    body: "Mauris tempor nisi in nunc placerat, vitae venenatis leo ultrices."
  },
  {
    id: 10,
    title: "Phasellus Eget",
    imageUrl: "https://example.com/image10.jpg",
    body: "Phasellus eget sapien malesuada, pellentesque ligula id, gravida risus."
  }
];

Post.forEach((item) => {
  const divElement = document.createElement('div');
  divElement.textContent = `Nome: ${item.title}`;
  app.appendChild(divElement);
});

const Comments: Comments[] = [
  {
    id: 1,
    postId: 1,
    email: "john@example.com",
    body: "Lorem ipsum dolor sit amet."
  },
  {
    id: 2,
    postId: 1,
    email: "jane@example.com",
    body: "Consectetur adipiscing elit."
  },
  {
    id: 3,
    postId: 1,
    email: "mark@example.com",
    body: "Nulla ultrices orci et felis tincidunt."
  },
  {
    id: 4,
    postId: 2,
    email: "john@example.com",
    body: "Lorem ipsum dolor sit amet."
  },
  {
    id: 5,
    postId: 2,
    email: "jane@example.com",
    body: "Consectetur adipiscing elit."
  },
  {
    id: 6,
    postId: 2,
    email: "mark@example.com",
    body: "Nulla ultrices orci et felis tincidunt."
  },
  {
    id: 7,
    postId: 3,
    email: "john@example.com",
    body: "Lorem ipsum dolor sit amet."
  },
  {
    id: 8,
    postId: 3,
    email: "jane@example.com",
    body: "Consectetur adipiscing elit."
  },
  {
    id: 9,
    postId: 3,
    email: "mark@example.com",
    body: "Nulla ultrices orci et felis tincidunt."
  },
]

let comments01 = Comments.filter(Comments => Comments.postId == 1);

comments01.forEach((item) => {
  const divElement = document.createElement('div');
  divElement.textContent = `Nome: ${item.email, item.body}`;
  app.appendChild(divElement);
});
