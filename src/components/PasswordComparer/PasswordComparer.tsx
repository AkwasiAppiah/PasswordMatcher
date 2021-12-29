import { Center, Heading, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import PasswordInputer from './PasswordInputer';
import PasswordSetter from './PasswordSetter';

const PasswordComparer = (): JSX.Element => {
    const [password, setPassword] = useState("");
    const [input, setInput] = useState("");
    const [userPassword, setUserPassword] = useState("");

    console.log({password});
    console.log({userPassword});
    console.log(userPassword === password)
    console.log(input);

    return(
        <Center>
            <VStack>
                <PasswordSetter
                    password = {password}
                    setPassword = {setPassword}
                    input = {input}
                    setInput = {setInput}
                    userPassword = {userPassword}
                    setUserPassword = {setUserPassword}
                    />
                <PasswordInputer 
                    password = {password}
                    setPassword = {setPassword}
                    input = {input}
                    setInput = {setInput}
                    userPassword = {userPassword}
                    setUserPassword = {setUserPassword}
                />{ password === input && input !== "" && 
                    <Heading>
                        TRUE it worked! 
                    </Heading>
                }
            </VStack>
        </Center>
    )
}

export default PasswordComparer