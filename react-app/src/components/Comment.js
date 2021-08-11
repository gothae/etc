import React, {Component} from 'react';

function formatDate(date){
    return date.toLocaleDateString();
}
class Comment extends Component{
    render(){
        return(
            <div className = "Comment">
                <div className = "UserInfo">
                    <img
                    className = "Avatar"
                    src = {this.props.author.avatarUrl}
                    alt = {this.props.author.name}
                    />
                </div>
                <div className = "UserInfo-name">
                    {this.props.author.name}
                </div>
                <div className = "Comment-text">
                    {this.props.text}
                </div>
                <div className = "Comment-date">
                    {formatDate(this.props.date)}
                </div>
            </div>
        );
    };
}

export default Comment;