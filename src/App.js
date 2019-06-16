import React from 'react';
// eslint-disable-next-line
import list from './lista.png';
import { EventMembersList } from './EventMembersList';

import { HeaderText } from './HeaderText';
import { SubHeaderText } from './SubHeaderText';
import { ClickableText } from './ClickableText';
import { MemberAvatar } from './MemberAvatar';

function App() {
  return (
    <div style={styles.container}>
      <div style={styles.contentContainer}>
        {/* <img
          alt='list-of-members'
          src={list}
        /> */}
        <div style={styles.listContainer}>
          <div style={{marginLeft: '1%'}}>
            <HeaderText text='Organizer' />
          </div>
          <div style={styles.organizerDetails}>
            <MemberAvatar />
            <div style={styles.organizerInfo}>
              <SubHeaderText text='Rolando Velez' />
              <ClickableText text='Message' />
            </div>
          </div>
          <div style={styles.membersInfo}>
            <SubHeaderText text='Members (15)' />
            <ClickableText text='See all' />
          </div>
          <div>
            <EventMembersList />
          </div>
        </div>
        <div style={{flex: 1}} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#000',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  listContainer: {
    flex: 1,
    backgroundColor: '#f6f7f8',
    paddingLeft: '2%',
    paddingRight: '2%',
  },
  organizerDetails: {
    display: 'flex',
    flexDirection: 'row',
  },
  organizerInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  membersInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '2%'
  },
}

export default App;
