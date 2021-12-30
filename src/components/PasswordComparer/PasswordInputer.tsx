import { Input } from '@chakra-ui/react';
import { PasswordComparerProps } from '../../utils/Interface';
//import { MatchContext } from './PasswordComparer';

const PasswordInputer = ({input, setInput, match}:PasswordComparerProps): JSX.Element => {
    //const match = useContext(MatchContext)
    return(
        <Input 
        placeholder='Try your password' 
        size= 'md'
        //{            match ? 'md' : 'sm' }
        w = {[300,400,500]}
        value = {input}
        onChange = {(event) => setInput(event.target.value)}
        focusBorderColor={match ? 'pink.400' : 'lime'}
        />
    )
}

export default PasswordInputer