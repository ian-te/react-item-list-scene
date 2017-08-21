import React from 'react';
import styled from 'styled-components';
import Naming from 'components/Naming';

const BaseItem = ({ item, className }) =>
    <div className={className}>
        <div>
            {item.name}
        </div>
        <div>
            {item.naming.map(naming => <Naming id={naming} />)}
        </div>
    </div>;

const Item = styled(BaseItem)`
    text-align: left;
    border-bottom: 1px solid #EEE;
    max-width: 900px;
    padding: 8px 10px;
    margin: 0 auto;
    color: #555;
`;

export default Item;
