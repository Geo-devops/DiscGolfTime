//may want to delete 'App' folder in '../main-component'
import React from 'react';
// ', {fragment}' above?
import ChatBox from '../../components/ChatBox';
import MessageList from '../../components/MessageList';
import Navbar from '../../components/Navbar';
import Search from '../../components/Search';
import Wrapper from '../../components/Wrapper';

const Homepage =() => {
    return(
        <Fragment>

            <Navbar />
            <Wrapper />
            <Search />
            
            <MessageList />
            <ChatBox />
        </Fragment>
    )
};

//populate SOMEHAW BETWEEN 'SEARCH' AND 'MESSAGELIST'
export default Homepage;
