import { Button, HStack, Input, InputGroup, } from '@chakra-ui/react';
import React from 'react';
import { PasswordComparerProps } from '../../utils/Interface';

const PasswordSetter = ({password, setPassword, userPassword, setUserPassword}:PasswordComparerProps): JSX.Element => {
    const [show, setShow] = React.useState(false)
    const [disabled, setDisabled] = React.useState(false)

    const handleShowClick = () => setShow(!show); 
    const handleDisabledClick = () => handleMultiple();
    function handleMultiple(){
      setDisabled(!disabled);
      if (userPassword !== ""){
        setPassword(userPassword)
      }
    }
    const lockOpen = <i className="fas fa-lock-open"></i>
    const lockClosed =  <i className="fas fa-lock"></i>

    return (

      <HStack pb = "10%" >
        <Button h='1.75rem' size='sm' onClick={handleDisabledClick}>
          {disabled ? lockOpen : lockClosed}
        </Button>
        <InputGroup w = {[300,400,500]}>
          <Input
            pr='4.5rem'
            type={show ? 'text' : 'password'}
            placeholder='Enter password'
            size = 'lg'
            fontSize={"2xl"}
            disabled = {disabled}
            value = {userPassword}
            onChange = {(event) => setUserPassword(event.target.value)}
          />
        </InputGroup>
        <Button h='1.75rem' size='sm' 
            onClick={handleShowClick}>
            {show ? 'Hide' : 'Show'}
        </Button>
      </HStack>
    )
    }
export default PasswordSetter