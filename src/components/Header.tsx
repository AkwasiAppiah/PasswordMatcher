import { Stack } from '@chakra-ui/react';
import React from 'react';

const Header = (): JSX.Element => {
    return(
        <Stack>
            <h1 style = {{fontSize : '80px'}}>
                Password Matcher
            </h1>
        </Stack>
        
    )
}

export default Header