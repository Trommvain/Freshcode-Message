import { Component } from "react";
import './styles.css';

class Message extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isRead: false,
        };
    
      }
    
      handleClick = () => {
        this.setState({
          isRead: true,
        });
        console.log(this.state);
      };
    
      render() {
        const { name, messageText } = this.props;
        const { isRead } = this.state;
    
        return (
          <>
            <span className="user-name">{name}: </span>
            <p className="message-text">{messageText}</p>
            <p className="message-read">{isRead && 'Message read'}</p>
            <button id="btn" disabled={isRead} onClick={this.handleClick}>
              Read message
            </button>
          </>
        );
      }
}

export default Message;