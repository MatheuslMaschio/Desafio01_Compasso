interface Publication {
    id_Publication: number;
    title: string;
    image: string;
    body: string;
}

interface Comments {
    postId: number;
    comments: {
        commentId: number,
        name: string, 
        email:string, 
        body: string
    }[];
} 

export const publications: Publication[] = [
    {
        id_Publication: 1,
        title: "Post 1",
        image: "/images/postImage.png",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum nulla nec luctus sagittis. Fusce nec tellus euismod, ultrices velit eu, posuere justo. Duis laoreet turpis a arcu congue auctor. Suspendisse at pharetra purus, nec luctus sapien. Proin sit amet aliquam ligula. Nullam varius sem vel elit sagittis dignissim. Donec sit amet turpis sit amet quam blandit lacinia eu id sapien."
    },
    {
        id_Publication: 2,
        title: "Post 2",
        image: "/images/postImage.png",
        body: "Sed et velit in urna euismod euismod. Quisque quis mi non enim consequat interdum nec eu orci. Nullam eu massa non felis volutpat sagittis. Vivamus eget nunc est. Nullam lobortis dui quam, ut dignissim lorem eleifend nec. Quisque laoreet urna vel enim maximus, ut aliquet magna vehicula. Nulla facilisi. Fusce id ex vel elit fermentum fermentum ac eu sapien. Fusce feugiat nisl id metus semper, eu dignissim ipsum rhoncus. Nullam malesuada est purus, eu laoreet libero faucibus eu. Cras vulputate dapibus neque vel tempus. Aenean sit amet arcu ut odio luctus tincidunt vel a elit."
    },
    {
        id_Publication: 3,
        title: "Post 3",
        image: "/images/postImage.png",
        body: "In id ex nec ipsum tincidunt lacinia nec non urna. Nullam sollicitudin, mauris eget tincidunt vestibulum, lacus felis bibendum lectus, a dictum lacus velit quis odio. Ut ut turpis mauris. Nulla ut sem vel purus semper fermentum et quis sapien. Nulla eget mauris eget massa luctus elementum. In blandit, orci at vehicula tincidunt, lectus eros cursus mi, non ultricies odio eros ac tellus. Nulla tincidunt egestas neque, et vulputate orci blandit vitae. Praesent interdum aliquet lacus, ac scelerisque sapien varius eu."
    },
    {
        id_Publication: 4,
        title: "Post 4",
        image: "/images/postImage.png",
        body: "Etiam sit amet risus nec nulla sodales condimentum. Etiam quis felis arcu. Nunc dictum, ligula eu consequat tincidunt, purus nulla tincidunt lacus, at feugiat magna ex quis justo. Nam eget iaculis metus. Praesent convallis, purus a interdum viverra, odio quam vestibulum enim, eget dignissim neque turpis id odio. Curabitur vel elit nisi. Integer a interdum eros. Praesent dictum hendrerit interdum. Proin facilisis, nisi et tempus sodales, nisl purus pharetra sapien, at congue velit ex nec mauris."
    },
    {
        id_Publication: 5,
        title: "Post 5",
        image: "/images/postImage.png",
        body: "Sed posuere metus velit, et maximus nunc vehicula at. Suspendisse et ex tincidunt, bibendum metus vel, euismod justo. Vivamus congue interdum lorem, in luctus risus suscipit nec. Nullam lacinia ipsum eu elit hendrerit facilisis. Curabitur vitae ligula non est venenatis eleifend. Praesent auctor velit neque, at luctus purus dapibus ut. Etiam consectetur velit id augue mollis, a ullamcorper elit bibendum. Nulla rhoncus nunc eu egestas egestas. Nullam interdum risus sit amet luctus gravida. Donec pretium, felis eu malesuada congue, metus elit elementum lacus, at pharetra odio felis nec sapien. Suspendisse ultricies justo in urna feugiat, vel fermentum mi vestibulum. Nam eu nulla purus."
    },
    {
        id_Publication: 6,
        title: "Post 6",
        image: "/images/postImage.png",
        body: "Maecenas eu sapien sed turpis luctus scelerisque non id urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut lacinia leo vel purus varius, ac dignissim lorem faucibus. Integer varius mi vitae mi cursus posuere. Nullam nec lectus vel erat aliquam laoreet. Fusce venenatis neque et massa finibus, ac blandit mi scelerisque. Cras facilisis mi nec sapien elementum, vitae eleifend arcu facilisis. Etiam dignissim, odio vel elementum eleifend, elit nulla suscipit felis, a scelerisque ligula massa eget nulla."
    },
    {
        id_Publication: 7,
        title: "Post 7",
        image: "/images/postImage.png",
        body: "Suspendisse varius ipsum in purus posuere, sit amet consectetur nisl tincidunt. Suspendisse faucibus mi purus, et sollicitudin mauris semper a. Cras suscipit elementum enim, vel euismod erat fermentum vitae. Donec fringilla euismod mauris in dictum. Pellentesque ac tincidunt enim. Pellentesque in nisi eu purus elementum auctor ac et odio. Fusce a tincidunt eros, eu scelerisque turpis. Cras ac hendrerit nisi. Sed gravida facilisis purus at fringilla. Fusce eu nisi et erat vulputate malesuada. Nulla facilisi. Ut dapibus ut quam eu viverra. Vivamus id ipsum nec nisi pellentesque bibendum nec eget felis. Suspendisse bibendum lacinia libero vel varius. Nullam tempor turpis in vestibulum consequat."
    },
    {
        id_Publication: 8,
        title: "Post 8",
        image: "/images/postImage.png",
        body: "Donec in convallis nunc, eu accumsan ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam ut cursus arcu, id blandit justo. Nunc semper quam vitae nulla tempus tincidunt. Vivamus bibendum sem quis metus cursus volutpat. Cras a odio venenatis, vehicula felis nec, facilisis odio. Nulla sit amet interdum orci. Proin ultricies facilisis malesuada. Etiam sit amet purus eget quam pharetra consectetur. Integer non tellus libero."
    },
    {
        id_Publication: 9,
        title: "Post 9",
        image: "/images/postImage.png",
        body: "Curabitur ullamcorper quam eget eros gravida, nec rhoncus sapien scelerisque. Fusce eget lorem suscipit, eleifend elit ut, suscipit justo. Pellentesque suscipit nisi in diam bibendum luctus. Sed vitae elit massa. Pellentesque eget justo eget lectus rhoncus gravida nec ac mauris. Proin consectetur rhoncus odio. Nullam non augue ac elit efficitur ultrices. Sed id sapien arcu. Integer eu tellus sit amet tortor ultrices consequat eget sit amet dui. In feugiat euismod libero, a consectetur turpis tincidunt vitae."
    },
    {
        id_Publication: 10,
        title: "Post 10",
        image: "/images/postImage.png",
        body: "Pellentesque eleifend, sem in cursus fringilla, nisi mi feugiat mauris, vitae eleifend erat velit at libero. Duis scelerisque, dolor in tincidunt scelerisque, lectus ligula iaculis enim, sit amet convallis nulla sapien vel risus. Nulla facilisi. Nunc eu congue sem, eget consequat lectus. Nulla ac erat aliquam, semper quam at, euismod ex. Vivamus rhoncus ligula mi, at facilisis sapien tincidunt quis. Ut vel mauris iaculis, egestas justo id, suscipit odio. Cras laoreet neque vel metus fringilla, et tincidunt erat cursus. Maecenas cursus volutpat ipsum, nec pellentesque dui aliquam eu. Etiam tristique justo ut auctor tempus."
    }
];

export const comment: Comments[] = [
    {
        postId: 1,
        comments: 
        [
            {
                commentId: 3,
                name: "John Doe",
                email: "john.doe@example.com",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
            {
                commentId: 4,
                name: "Jane Smith",
                email: "jane.smith@example.com",
                body: "Sed efficitur libero nec ipsum eleifend, id bibendum enim tristique."
            },
            {
                commentId: 5,
                name: "Alice Johnson",
                email: "alice.johnson@example.com", 
                body: "Aenean mollis lorem a fringilla vulputate. Nulla ultrices orci et felis tincidunt."
            },
            {
                commentId: 6,
                name: "Bob Anderson",
                email: "bob.anderson@example.com",
                body: "Pellentesque eu quam vel mauris consectetur ultrices."
            },
        ],
    },
    
    {
        postId: 2,
        comments: 
        [
            {
                commentId: 3,
                name: "Sarah Williams",
                email: "sarah.williams@example.com",
                body: "Nullam varius enim eu aliquam pharetra."
            },
            {
                commentId: 4,
                name: "Michael Brown",
                email: "michael.brown@example.com",
                body: "Fusce feugiat metus a ligula tristique, at finibus dui hendrerit."
            },
            {
                commentId: 5,
                name: "Emily Martinez",
                email: "emily.martinez@example.com",
                body: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
            },
        ],
    },

    {
        postId: 3,
        comments: 
        [
            {
                commentId: 3,
                name: "David Taylor",
                email: "david.taylor@example.com",
                body: "Curabitur rhoncus lorem a risus consequat, ut tincidunt diam fringilla."
            },
            {
                commentId: 4,
                name: "Olivia Garcia",
                email: "olivia.garcia@example.com",
                body: "Mauris tempor nisi in nunc placerat, vitae venenatis leo ultrices."
            },
            {
                commentId: 5,
                name: "James Rodriguez",
                email: "james.rodriguez@example.com",
                body: "Phasellus eget sapien malesuada, pellentesque ligula id, gravida risus."
            },
        ],
    },

    {
        postId: 4,
        comments: 
        [
            {
                commentId: 3,
                name: "William Lee",
                email: "william.lee@example.com",
                body: "Maecenas consectetur enim a consectetur vehicula."
            },
            {
                commentId: 4,
                name: "Olivia Garcia",
                email: "olivia.garcia@example.com",
                body: "Mauris tempor nisi in nunc placerat, vitae venenatis leo ultrices."
            },
            {
                commentId: 5,
                name: "Sophia White",
                email: "sophia.white@example.com",
                body: "Vivamus et orci vel turpis egestas euismod."
            },

            {
                commentId: 6,
                name: "Oliver Lewis",
                email: "oliver.lewis@example.com",
                body: "Suspendisse vel enim a neque fringilla cursus."
            },
        ],
    },

    {
        postId: 5,
        comments: 
        [
            {
                commentId: 3,
                name: "David Taylor",
                email: "david.taylor@example.com",
                body: "Curabitur rhoncus lorem a risus consequat, ut tincidunt diam fringilla."
            },
            {
                commentId: 4,
                name: "Olivia Garcia",
                email: "olivia.garcia@example.com",
                body: "Mauris tempor nisi in nunc placerat, vitae venenatis leo ultrices."
            },
            {
                commentId: 5,
                name: "James Rodriguez",
                email: "james.rodriguez@example.com",
                body: "Phasellus eget sapien malesuada, pellentesque ligula id, gravida risus."
            },
        ],
    },

    {
        postId: 6,
        comments: 
        [
            {
                commentId: 3,
                name: "John Doe",
                email: "john.doe@example.com",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
            {
                commentId: 4,
                name: "Jane Smith",
                email: "jane.smith@example.com",
                body: "Sed efficitur libero nec ipsum eleifend, id bibendum enim tristique."
            },
            {
                commentId: 5,
                name: "Alice Johnson",
                email: "alice.johnson@example.com", 
                body: "Aenean mollis lorem a fringilla vulputate. Nulla ultrices orci et felis tincidunt."
            },
            {
                commentId: 6,
                name: "Bob Anderson",
                email: "bob.anderson@example.com",
                body: "Pellentesque eu quam vel mauris consectetur ultrices."
            },
        ],
    },
    {
        postId: 7,
        comments: 
        [
            {
                commentId: 3,
                name: "Sarah Williams",
                email: "sarah.williams@example.com",
                body: "Nullam varius enim eu aliquam pharetra."
            },
            {
                commentId: 4,
                name: "Michael Brown",
                email: "michael.brown@example.com",
                body: "Fusce feugiat metus a ligula tristique, at finibus dui hendrerit."
            },
            {
                commentId: 5,
                name: "Emily Martinez",
                email: "emily.martinez@example.com",
                body: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
            }
        ]
    },

    {
        postId:8,
        comments: 
        [
            {
                commentId: 3,
                name: "William Lee",
                email: "william.lee@example.com",
                body: "Maecenas consectetur enim a consectetur vehicula."
            },
            {
                commentId: 4,
                name: "Olivia Garcia",
                email: "olivia.garcia@example.com",
                body: "Mauris tempor nisi in nunc placerat, vitae venenatis leo ultrices."
            },
            {
                commentId: 5,
                name: "Sophia White",
                email: "sophia.white@example.com",
                body: "Vivamus et orci vel turpis egestas euismod."
            },

            {
                commentId: 6,
                name: "Oliver Lewis",
                email: "oliver.lewis@example.com",
                body: "Suspendisse vel enim a neque fringilla cursus."
            },
        ]
    },

    {
        postId:9,
        comments: [
            {
                commentId: 3,
                name: "David Taylor",
                email: "david.taylor@example.com",
                body: "Curabitur rhoncus lorem a risus consequat, ut tincidunt diam fringilla."
            },
            {
                commentId: 4,
                name: "Olivia Garcia",
                email: "olivia.garcia@example.com",
                body: "Mauris tempor nisi in nunc placerat, vitae venenatis leo ultrices."
            },
            {
                commentId: 5,
                name: "James Rodriguez",
                email: "james.rodriguez@example.com",
                body: "Phasellus eget sapien malesuada, pellentesque ligula id, gravida risus."
            },
        ]
    },

    {
        postId:10,
        comments: [
            {
                commentId: 3,
                name: "John Doe",
                email: "john.doe@example.com",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
            {
                commentId: 4,
                name: "Jane Smith",
                email: "jane.smith@example.com",
                body: "Sed efficitur libero nec ipsum eleifend, id bibendum enim tristique."
            },
            {
                commentId: 5,
                name: "Alice Johnson",
                email: "alice.johnson@example.com", 
                body: "Aenean mollis lorem a fringilla vulputate. Nulla ultrices orci et felis tincidunt."
            },
            {
                commentId: 6,
                name: "Bob Anderson",
                email: "bob.anderson@example.com",
                body: "Pellentesque eu quam vel mauris consectetur ultrices."
            },
        ]
    }

];    