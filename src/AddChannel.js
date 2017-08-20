import React from 'react';
import { gql, graphql } from 'react-apollo';



const addChannelMutation = gql`

`;

const AddChannel = () => {
    const handleInput = (e) =>{
        if(e.keyCode ===13){
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

export default AddChannel;