import React, { Component } from 'react';
import User from '../User';

class UserList extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: this.props.users
    }
  }

  sortAlphabetically = () => {
    const { users } = this.state;
    console.log(users);
    const sortedUsers = users.sort(( a, b ) => {
      if (a.fullName > b.fullName) {
        return 1;
      }
      if (a.fullName < b.fullName) {
        return -1;
      }
      return 0;
    });
    console.log(sortedUsers);
    this.setState({users: sortedUsers});
  }

  sortAlphabeticallyReverse = () => {
    debugger;
    const { users } = this.state;
    console.log(users);
    const sortedUsers = users.sort(( a, b ) => {
      if (a.fullName > b.fullName) {
        return -1;
      }
      if (a.fullName < b.fullName) {
        return 1;
      }
      return 0;
    });
    this.setState({users: sortedUsers});
  }

  render() {
    const { selectUser } = this.props;
    const { users } = this.state;

    const renderButtons =  (
      <div>
        <button onClick={this.sortAlphabetically}>А-я</button>
        <button onClick={this.sortAlphabeticallyReverse}>Я-A</button>
       </div>
    );
   

    const renderUsers = users.map(user =>
      <User key={user.id} user={user} selectUser={selectUser} />
    )

    return (
      <section>
        {renderButtons}
        <h2>All Users:</h2>
        {renderUsers}
      </section>
    );
  }
}

export default UserList;
