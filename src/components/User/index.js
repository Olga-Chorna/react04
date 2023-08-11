import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    }
  }

  handlerClick = () => {
    this.setState({ isVisible: !this.state.isVisible })
  }

  render() {
    const { user: { id, fullName, avatar, married, isSelected }, selectUser } = this.props;
    const { isVisible } = this.state;
    const smile = married ? ':-)' : ':-(';
    const styles = { border: isSelected ? "solid green 5px" : undefined };
    return (
      <article style={styles}>
        <button onClick={this.handlerClick}>visible</button>
        <button onClick={() => selectUser(id)}>select</button>
        <h3>{fullName}</h3>
        <h4>{isVisible && smile}</h4>
        <img src={avatar} alt='portrait'/>
      </article>
    )
  }
}
export default User;