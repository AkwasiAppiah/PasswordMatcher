import { Input } from '@chakra-ui/react';
import React from 'react';
import { PasswordComparerProps } from '../../utils/Interface';

const PasswordInputer = ({input, setInput}:PasswordComparerProps): JSX.Element => {

    return(
        <Input 
        placeholder='Try your password' 
        size='md' 
        w = {[300,400,500]}
        value = {input}
        onChange = {(event) => setInput(event.target.value)}
        />
    )
}

export default PasswordInputer