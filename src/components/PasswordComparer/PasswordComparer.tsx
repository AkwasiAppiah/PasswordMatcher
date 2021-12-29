import { Center, VStack } from '@chakra-ui/react';
import PasswordInputer from './PasswordInputer';
import PasswordSetter from './PasswordSetter';

const PasswordComparer = (): JSX.Element => {

    return(
        <Center>
            <VStack>
                <PasswordSetter/>
                <PasswordInputer/>
            </VStack>
        </Center>
    )
}

export default PasswordComparer