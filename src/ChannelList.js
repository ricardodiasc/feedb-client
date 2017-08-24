import React from 'react';

const ChannelsList = ({data:{loading, error,channels}}) => {
    if(loading){
      return <p>Loading...</p>;
    }
    if(error){
      return <div>Error : {error.message}</div>
    }
    return (
      <ul>
        {channels.map(ch=><li key={ch.id}>{ch.name}</li>)}
      </ul>);
  }
  
  const ChannelsListWithData = graphql(channelsListQuery)(ChannelsList);