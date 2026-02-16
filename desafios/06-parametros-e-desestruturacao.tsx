//Descrição: https://efficient-sloth-d85.notion.site/Desafio-Par-metros-e-Desestrutura-o-e7b4ac605bf9467da7b032573bc8adb9

function updateUserRoute({
  body = { name: "", email: "", password: "" },
  params = { id: -1 },
}) {
  const { name, email, password } = body;
  const { id } = params;

  updateUserController({
    data: {
      name,
      email,
      password,
    },
    params: {
      id,
    },
  });
}

function updateUserController({ data, params }) {
  const { name, email, password } = data;
  const { id } = params;

  userRepository.update({
    data: {
      name,
      email,
      password,
    },
    params: {
      id,
    },
  });
}

const userRepository = {
  update: ({ data, params }) => {
    console.log(data, params);
  },
};

updateUserRoute({
  body: {
    name: "Raí",
    email: "mail@mail.com",
    password: "admin",
  },
  params: {
    id: 1,
  },
});

updateUserRoute({
  params: {
    id: 1,
  },
});

updateUserRoute({
  body: {
    name: "Raí",
    email: "mail@mail.com",
    password: "admin",
  },
});
