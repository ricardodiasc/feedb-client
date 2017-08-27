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
        if(e.keyCode ===13){
            e.persist();

            mutate({
                variables:{name:e.target.value},
                refetchQueries: [{ query: channelsListQuery}]
            }).then(res=>e.target.value=''); 

            console.log(e.target.value);
            e.target.value = '';
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