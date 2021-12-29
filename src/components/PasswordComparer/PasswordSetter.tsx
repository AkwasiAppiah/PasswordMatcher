import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React from 'react';

const PasswordSetter = (): JSX.Element => {
    const [show, setShow] = React.useState(false)
    const handleShowClick = () => setShow(!show)
  
    return (
      <InputGroup size='md'>
        <Input
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          placeholder='Enter password'
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleShowClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
    )
    }
export default PasswordSetter