import React from 'react';
import Input from './components/Input';
import styled from 'styled-components';
import { update } from '../../data/search/actions';
import { connect } from 'react-redux';

class Search extends React.Component {
    render() {
        const { className, update, name, status } = this.props;
        return (
            <div className={className}>
                <Input
                    onChange={string => update({ name: string })}
                    value={name}
                    loading={status.loading}
                    placeholder="Enter your search value"
                />
            </div>
        );
    }
}
const StyledSearch = styled(Search)`
    padding: 6px;
    box-sizing: border-box;
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    display: inline-block;
    border-radius: 5px;
    background: linear-gradient(to bottom, #95ddff 0%, #01acfe 100%);
`;
export default connect(
    state => ({
        name: state.ItemList.data.search.name,
        status: state.ItemList.data.list.status
    }),
    { update }
)(StyledSearch);
