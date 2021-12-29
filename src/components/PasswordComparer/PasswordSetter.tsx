import { Button, HStack, Input, InputGroup, } from '@chakra-ui/react';
import React from 'react';

const PasswordSetter = (): JSX.Element => {
    const [show, setShow] = React.useState(false)
    const [disabled, setDisabled] = React.useState(false)

    const handleShowClick = () => setShow(!show)
    const handleDisabledClick = () => setDisabled(!disabled)

    return (

      <HStack>
        <Button h='1.75rem' size='sm' onClick={handleDisabledClick}>

          {disabled ? <i className="fas fa-lock-open"></i> : <i className="fas fa-lock"></i>}
        </Button>
        <InputGroup w = {[300,400,500]}>
          <Input
            pr='4.5rem'
            type={show ? 'text' : 'password'}
            placeholder='Enter password'
            disabled = {disabled}
          />
        </InputGroup>
        <Button h='1.75rem' size='sm' onClick={handleShowClick}>
            {show ? 'Hide' : 'Show'}
        </Button>
      </HStack>
    )
    }
export default PasswordSetter