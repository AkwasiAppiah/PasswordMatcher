import { Input } from '@chakra-ui/react';
import React from 'react';

const PasswordInputer = (): JSX.Element => {

    return(
        <Input placeholder='Try your password' size='md' w = {[300,400,500]}/>
    )
}

export default PasswordInputer