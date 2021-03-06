import { Flex, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import PasswordInputer from './PasswordInputer';
import PasswordSetter from './PasswordSetter';

const PasswordComparer = (): JSX.Element => {
    const [password, setPassword] = useState("");
    const [input, setInput] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [match, setMatch] = useState(false);

    function checkMatch(password : string , input: string): void {
            setMatch(password === input)
        }

    useEffect(() => {
       checkMatch (password, input)
      }, [password, input]);

    return(
        <Flex width="full" align="center" justifyContent="center">
            <VStack>
                <PasswordSetter
                    password = {password}
                    setPassword = {setPassword}
                    input = {input}
                    setInput = {setInput}
                    userPassword = {userPassword}
                    setUserPassword = {setUserPassword}
                    match = {match}
                    setMatch = {setMatch}
                    />
                <PasswordInputer 
                    password = {password}
                    setPassword = {setPassword}
                    input = {input}
                    setInput = {setInput}
                    userPassword = {userPassword}
                    setUserPassword = {setUserPassword}
                    match = {match}
                    setMatch = {setMatch}
                />
            </VStack>
        </Flex>
    )
}

export default PasswordComparer