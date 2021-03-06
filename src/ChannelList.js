import React from 'react';
import PropTypes from 'prop-types';
import { gql, graphql } from 'react-apollo';


const channelsListQuery = gql`
  query ChannelsListQuery {
    channels {
        id
        name
    }
  }
`;

const ChannelsList = ({data:{loading, error,channels}}) => {
    if(loading){
      return <p>Loading...</p>;
    }
    if(error){
      return <div>Error : {error.message}</div>
    }
    return (
      <ul>
        {
          channels.map(ch => <li key={ ch.id } className={'channel '+ (ch.id < 0 ? 'optimistic' : '')}>{ ch.name }</li>)
        }
      </ul>);
  }

ChannelsList.propTypes = {
  data : PropTypes.element
}

const ChannelsListWithData = graphql(channelsListQuery)(ChannelsList);



export default ChannelsListWithData;