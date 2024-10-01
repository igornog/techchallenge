import axios from 'axios';

const getResponse = [
  {
    id: 1,
    title: 'Post 1',
    author: 'Author 1',
    content:
      'Lorem ipsum odor amet, consectetuer adipiscing elit. Ullamcorper quis ultrices pharetra congue montes auctor lacinia amet aenean. Elit finibus consequat vehicula vel mattis. Platea porta accumsan vel commodo libero. Leo inceptos vel facilisis tristique primis suspendisse tempor sagittis. Leo finibus eros cubilia condimentum praesent viverra. Ac vivamus ultricies rhoncus condimentum penatibus; lorem curabitur magnis. Volutpat dolor dignissim porttitor curae enim congue finibus feugiat. Curae libero proin donec scelerisque varius egestas. In nunc accumsan aliquam a eu lacinia. Elementum pharetra integer molestie nibh, commodo porta curabitur. Faucibus natoque turpis nunc torquent placerat curae rutrum. Bibendum conubia sociosqu massa commodo vestibulum rutrum. Cubilia interdum consectetur velit sollicitudin orci. Lacus nibh magnis; vel efficitur in magnis? Vitae tempus non aptent platea porta semper urna. Pharetra a cubilia ex consequat, amet viverra consequat. Curabitur rutrum curae phasellus integer nam pharetra. Feugiat lacinia diam turpis potenti tristique egestas nullam varius. Tortor augue nisi integer; phasellus sociosqu lectus. Torquent hendrerit sociosqu tincidunt montes luctus sit cubilia? Ligula ut accumsan lobortis congue parturient. Ex convallis diam netus dapibus posuere, mollis justo mus. Dapibus taciti quisque condimentum massa molestie malesuada. Magna a nostra dui natoque dis dolor rhoncus. Montes facilisi nascetur varius elit lobortis nullam. Enim conubia dui quisque elementum nullam feugiat. Ullamcorper odio ullamcorper vel quisque class neque euismod lacinia ligula. Sit neque erat proin dignissim volutpat duis felis. Nisi posuere dui hendrerit ex mus neque justo massa. Massa natoque justo senectus per vel litora metus phasellus. Facilisi porta risus imperdiet ut augue dictum vestibulum dui. Dui nulla sapien tincidunt pulvinar aliquet elit. Eu ex efficitur auctor egestas amet efficitur eleifend?',
  },
  {
    id: 2,
    title: 'Post 2',
    author: 'Author 2',
    content:
      'Lorem ipsum odor amet, consectetuer adipiscing elit. Ullamcorper quis ultrices pharetra congue montes auctor lacinia amet aenean. Elit finibus consequat vehicula vel mattis. Platea porta accumsan vel commodo libero. Leo inceptos vel facilisis tristique primis suspendisse tempor sagittis. Leo finibus eros cubilia condimentum praesent viverra. Ac vivamus ultricies rhoncus condimentum penatibus; lorem curabitur magnis. Volutpat dolor dignissim porttitor curae enim congue finibus feugiat. Curae libero proin donec scelerisque varius egestas. In nunc accumsan aliquam a eu lacinia. Elementum pharetra integer molestie nibh, commodo porta curabitur. Faucibus natoque turpis nunc torquent placerat curae rutrum. Bibendum conubia sociosqu massa commodo vestibulum rutrum. Cubilia interdum consectetur velit sollicitudin orci. Lacus nibh magnis; vel efficitur in magnis? Vitae tempus non aptent platea porta semper urna. Pharetra a cubilia ex consequat, amet viverra consequat. Curabitur rutrum curae phasellus integer nam pharetra. Feugiat lacinia diam turpis potenti tristique egestas nullam varius. Tortor augue nisi integer; phasellus sociosqu lectus. Torquent hendrerit sociosqu tincidunt montes luctus sit cubilia? Ligula ut accumsan lobortis congue parturient. Ex convallis diam netus dapibus posuere, mollis justo mus. Dapibus taciti quisque condimentum massa molestie malesuada. Magna a nostra dui natoque dis dolor rhoncus. Montes facilisi nascetur varius elit lobortis nullam. Enim conubia dui quisque elementum nullam feugiat. Ullamcorper odio ullamcorper vel quisque class neque euismod lacinia ligula. Sit neque erat proin dignissim volutpat duis felis. Nisi posuere dui hendrerit ex mus neque justo massa. Massa natoque justo senectus per vel litora metus phasellus. Facilisi porta risus imperdiet ut augue dictum vestibulum dui. Dui nulla sapien tincidunt pulvinar aliquet elit. Eu ex efficitur auctor egestas amet efficitur eleifend?',
  },
  {
    id: 3,
    title: 'Post 3',
    author: 'Author 3',
    content:
      'Lorem ipsum odor amet, consectetuer adipiscing elit. Ullamcorper quis ultrices pharetra congue montes auctor lacinia amet aenean. Elit finibus consequat vehicula vel mattis. Platea porta accumsan vel commodo libero. Leo inceptos vel facilisis tristique primis suspendisse tempor sagittis. Leo finibus eros cubilia condimentum praesent viverra. Ac vivamus ultricies rhoncus condimentum penatibus; lorem curabitur magnis. Volutpat dolor dignissim porttitor curae enim congue finibus feugiat. Curae libero proin donec scelerisque varius egestas. In nunc accumsan aliquam a eu lacinia. Elementum pharetra integer molestie nibh, commodo porta curabitur. Faucibus natoque turpis nunc torquent placerat curae rutrum. Bibendum conubia sociosqu massa commodo vestibulum rutrum. Cubilia interdum consectetur velit sollicitudin orci. Lacus nibh magnis; vel efficitur in magnis? Vitae tempus non aptent platea porta semper urna. Pharetra a cubilia ex consequat, amet viverra consequat. Curabitur rutrum curae phasellus integer nam pharetra. Feugiat lacinia diam turpis potenti tristique egestas nullam varius. Tortor augue nisi integer; phasellus sociosqu lectus. Torquent hendrerit sociosqu tincidunt montes luctus sit cubilia? Ligula ut accumsan lobortis congue parturient. Ex convallis diam netus dapibus posuere, mollis justo mus. Dapibus taciti quisque condimentum massa molestie malesuada. Magna a nostra dui natoque dis dolor rhoncus. Montes facilisi nascetur varius elit lobortis nullam. Enim conubia dui quisque elementum nullam feugiat. Ullamcorper odio ullamcorper vel quisque class neque euismod lacinia ligula. Sit neque erat proin dignissim volutpat duis felis. Nisi posuere dui hendrerit ex mus neque justo massa. Massa natoque justo senectus per vel litora metus phasellus. Facilisi porta risus imperdiet ut augue dictum vestibulum dui. Dui nulla sapien tincidunt pulvinar aliquet elit. Eu ex efficitur auctor egestas amet efficitur eleifend?',
  },
  {
    id: 4,
    title: 'Post 4',
    author: 'Author 4',
    content:
      'Lorem ipsum odor amet, consectetuer adipiscing elit. Ullamcorper quis ultrices pharetra congue montes auctor lacinia amet aenean. Elit finibus consequat vehicula vel mattis. Platea porta accumsan vel commodo libero. Leo inceptos vel facilisis tristique primis suspendisse tempor sagittis. Leo finibus eros cubilia condimentum praesent viverra. Ac vivamus ultricies rhoncus condimentum penatibus; lorem curabitur magnis. Volutpat dolor dignissim porttitor curae enim congue finibus feugiat. Curae libero proin donec scelerisque varius egestas. In nunc accumsan aliquam a eu lacinia. Elementum pharetra integer molestie nibh, commodo porta curabitur. Faucibus natoque turpis nunc torquent placerat curae rutrum. Bibendum conubia sociosqu massa commodo vestibulum rutrum. Cubilia interdum consectetur velit sollicitudin orci. Lacus nibh magnis; vel efficitur in magnis? Vitae tempus non aptent platea porta semper urna. Pharetra a cubilia ex consequat, amet viverra consequat. Curabitur rutrum curae phasellus integer nam pharetra. Feugiat lacinia diam turpis potenti tristique egestas nullam varius. Tortor augue nisi integer; phasellus sociosqu lectus. Torquent hendrerit sociosqu tincidunt montes luctus sit cubilia? Ligula ut accumsan lobortis congue parturient. Ex convallis diam netus dapibus posuere, mollis justo mus. Dapibus taciti quisque condimentum massa molestie malesuada. Magna a nostra dui natoque dis dolor rhoncus. Montes facilisi nascetur varius elit lobortis nullam. Enim conubia dui quisque elementum nullam feugiat. Ullamcorper odio ullamcorper vel quisque class neque euismod lacinia ligula. Sit neque erat proin dignissim volutpat duis felis. Nisi posuere dui hendrerit ex mus neque justo massa. Massa natoque justo senectus per vel litora metus phasellus. Facilisi porta risus imperdiet ut augue dictum vestibulum dui. Dui nulla sapien tincidunt pulvinar aliquet elit. Eu ex efficitur auctor egestas amet efficitur eleifend?',
  },
];

export const getPosts = () =>
  axios
    .get(`/posts/`)
    .then(({ data }) => {
      return getResponse;
    })
    .catch((err) => {
      return getResponse;
    });

export const createPost = ({ title, author, content }) =>
  axios
    .post(`/posts/`, { title, author, content })
    .then(({ data }) =>
      console.log(`post created! ${(title, author, content)}`)
    )
    .catch((err) => console.log(`post created! ${(title, author, content)}`));

export const editPost = ({ id, title, author, content }) =>
  axios
    .patch(`/posts/${id}`, { title, author, content })
    .then(({ data }) => console.log(`edited post ${id}!`))
    .catch((err) => console.log(`edited post ${id}!`));

export const deletePost = (id) =>
  axios
    .delete(`/posts/${id}`)
    .then(({ data }) => console.log(`deleted post ${id}!`))
    .catch((err) => console.log(`deleted post ${id}!`));
