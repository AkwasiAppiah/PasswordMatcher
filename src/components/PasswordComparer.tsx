import React from 'react';
import { Input, Stack } from '@chakra-ui/react'

const PasswordComparer = (): JSX.Element => {

    return(
        <Stack spacing={3}>
            <Input placeholder='medium size' size='md' />
            <Input placeholder='medium size' size='md' />
        </Stack>
    )
}

export default PasswordComparer