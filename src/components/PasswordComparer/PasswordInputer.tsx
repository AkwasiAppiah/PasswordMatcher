import { Input,Stack } from '@chakra-ui/react';
import { PasswordComparerProps } from '../../utils/Interface';
//import { MatchContext } from './PasswordComparer';

const PasswordInputer = ({input, setInput, match}:PasswordComparerProps): JSX.Element => {

    console.log(match)

    return(
        <Stack pos = "relative" right = "4" pl = "0.5rem">
            <Input 
            placeholder='Try your password' 
            w = {[300,400,500]}
            value = {input}
            onChange = {(event) => setInput(event.target.value)}
            focusBorderColor={match ? 'pink.400' : 'lime'}
            size = 'lg'
            fontSize={"2xl"}
            />
        </Stack>




    )
}

export default PasswordInputer