import React, { Component } from 'react';
import SelectedUsers from '../SelectedUsers/SelectedUsers';
import UserList from '../UserList';
  
const userDB = [
  {
    id: 1,
    fullName: 'Арнольд Шварцнегер',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Arnold_Schwarzenegger_by_Gage_Skidmore_3.jpg/250px-Arnold_Schwarzenegger_by_Gage_Skidmore_3.jpg',
    married: false
  },
  {
    id: 2,
    fullName: 'Илон Маск',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/274px-Elon_Musk_Royal_Society_%28crop2%29.jpg',
    married: true
  },
  {
    id: 3,
    fullName: 'Сильвестер Сталлоне',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Rambo_meets_with_Strategic_Soldier_group_%284%29_%28cropped3%29.jpg/220px-Rambo_meets_with_Strategic_Soldier_group_%284%29_%28cropped3%29.jpg',
    married: true
  },
  {
    id: 4,
    fullName: 'Дольф Лундгрен',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Dolph_Lundgren_by_Gage_Skidmore.jpg/684px-Dolph_Lundgren_by_Gage_Skidmore.jpg',
    married: false
  }
]

class UserSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: userDB.map(user => ({ ...user, isSelected: false }))
      // users: userDB.map(user => (JSON.parse(JSON.stringify({ ...user, isSelected: false }))))
    }
  }
  selectUser = (id) => {
    const { users } = this.state;
    //1 -
    // const selectedUser = users.find(user => user.id === id);
    // selectedUser.isSelected = !selectedUser.isSelected;
    // this.setState({ users: [...users] });

    //2 +
    const newUsers = users.map(user => ({
      ...user,
      isSelected: user.id === id ? !user.isSelected : user.isSelected
    }));
    this.setState({ users: newUsers })
  }

  render() {
    const { users } = this.state;

    return (
      <>
        <UserList users={users} selectUser={this.selectUser} />
        <SelectedUsers users={users} selectUser={this.selectUser}/>
      </>
    );
  }
}

export default UserSection;
