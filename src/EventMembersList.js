import React, { Component } from 'react';
import { MemberAvatar } from './MemberAvatar';

class EventMembersList extends Component {

  _renderAvatarsList() {
    return [...Array(15).keys()].map(key => <MemberAvatar uuid={key}/>);
  }

  render() {
    return (
      <div style={{display: 'flex', 'flex-flow': 'row wrap', justifyContent: 'space-around'}}>
        {this._renderAvatarsList()}
      </div>
    );
  }
}

export { EventMembersList };
