import React, { Component } from 'react';
import Input from 'components/Input';

const StyledInput = Input.extend`
    &:focus {
        box-shadow: 0 0 0px 0.1em #188cc3;
    }
`;
class SearchInput extends Component {
    render() {
        return (
            <StyledInput
                {...this.props}
                onChange={e=> this.props.onChange(e.target.value)}
            />
        );
    }
}

export default SearchInput;