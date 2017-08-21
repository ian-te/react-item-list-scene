import React, { Component } from 'react';
import Item from './components/Item';
import { request as requestList } from '../../data/list/actions';
import { request as requestNaming } from 'data/naming/actions';
import { connect } from 'react-redux';

class List extends Component {
    componentDidMount() {
        this.props.requestList({});
        // this.props.requestNaming()
    }
    renderMessage(status) {
        if (status.error) return 'Error loading list';
        if (status.loading) return 'Loading...';
    }
    render() {
        const { list: { items, status }, search } = this.props;
        return (
            <div>
                {items && items.length > 0
                    ? items
                          .filter(item => item.name.indexOf(search) > -1)
                          .map(item => <Item key={item.id} item={item} />)
                    : null}
                {status.error || status.loading
                    ? <h1 className="error">
                          {this.renderMessage(status)}
                      </h1>
                    : null}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        list: state.ItemList.data.list,
        search: state.ItemList.data.search.name
    };
}

export default connect(mapStateToProps, { requestList, requestNaming })(List);
