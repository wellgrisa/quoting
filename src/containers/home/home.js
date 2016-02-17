import React, { Component, PropTypes } from 'react';
import Quote from '../../components/quote';
import { add, next, getAll, getQuotes, adding } from '../../actions/quote';
import { connect } from 'react-redux';

const mapStateToProps = (state) =>
{
  return {
    quote : state.quote
  }
};

class Home extends Component {
  componentWillMount (){
    this.props.dispatch(getQuotes());
  }
  onAddClick(quote){
    this.props.dispatch(add(quote));
  }
  render () {

    const { selected, isEditing } = this.props.quote;

    return (
      <div className='container'>
        <Quote quote={selected} isEditing={isEditing} onAdding={() => this.props.dispatch(adding())} onAddClick={::this.onAddClick} onRefreshClick={() => {}}/>      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
