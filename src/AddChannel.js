import React from 'react';
import { gql, graphql } from 'react-apollo';



const addChannelMutation = gql`
    mutation addChannel($name:String!){
        addChannel(name:$name){
            id
            name
        }
    }


`;

const channelsListQuery = gql`
    query ChannelsListQuery {
      channels {
          id
          name
      }
    }
  `;

const AddChannel = ({mutate}) => {
    const handleInput = (e) =>{
        if(e.keyCode === 13){
            e.persist();

            mutate({
                variables : {name:e.target.value},
                optimisticResponse: {
                    addChannel: {
                        name: e.target.value,
                        id: Math.round(Math.random() * -100000),
                        __typename: 'Channel'
                    }
                },
                
                update : (store, {data: { addChannel } } ) => {
                    const data = store.readQuery({query: channelsListQuery});
                    data.channels.push(addChannel);
                    store.writeQuery({query : channelsListQuery, data });
                }
            }).then(()=>e.target.value='');    
        } 
        
    }

    return (
        <div>
            <input type="text" name="channelName" onKeyDown={handleInput} />
        </div>
    );
};

const AddChannelWithMutation = graphql(addChannelMutation)(AddChannel);
export default AddChannelWithMutation;