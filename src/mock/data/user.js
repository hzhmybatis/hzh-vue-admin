import Mock from 'mockjs';
const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    avatar: 'http://hbimg.huabanimg.com/442db83f0eb840514649eb4db20ed89e4b6e220e11a91-baBOmX_fw658',
    name: '黄子涵'
  }
];

const Users = [];

for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
}

export { LoginUsers, Users };
