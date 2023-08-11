import React, { Component } from 'react';

class SelectedUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false 
    }
  }

  render() {
    const { selectUser, users } = this.props;
    const { isVisible } = this.state;
    console.log(isVisible);
    const selectedUsers = users.filter(user => user.isSelected);
    let lenghtChek = (selectedUsers.length > 0);
    console.log(lenghtChek);
    //Чому вічний цикл????
    // this.setState({ isVisible: lenghtChek ? true : false});
   
    const renderButtons =  <div>
                              <button onClick={this.sortAlphabetically}>А-я</button>
                              <button>Я-а</button>
                            </div>
    const renderUser =  selectedUsers.map(user =>
                          <>
                          <li key={user.id}>{user.fullName}</li>
                          <button onClick={() => selectUser(user.id)}>x</button>
                          </> 
                        );

    return (
      <section>
        <h2>Selected Users:</h2>
        {isVisible && renderButtons}
        <ul>
          {renderUser}
        </ul>
      </section>
    );

  }
}

export default SelectedUsers;
