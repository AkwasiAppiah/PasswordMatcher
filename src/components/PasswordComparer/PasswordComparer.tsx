import React from 'react';
import PasswordInputer from './PasswordInputer';
import PasswordSetter from './PasswordSetter';

const PasswordComparer = (): JSX.Element => {

    return(
        <div>
            <PasswordInputer/>
            <PasswordSetter/>
        </div>

    )
}

export default PasswordComparer