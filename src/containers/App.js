import React, {Component} from 'react';
import { connect } from 'react-redux';
import PresList from '../components/PresList';
import SearchPerson from '../components/SearchPerson';
import SearchItem from '../components/SearchItem';
import Scroll from '../components/Scroll';
import ErrorBound from '../components/ErrorBound';
import {stuff} from '../stuff';
import './App.css';

import {setSearchItem, setSearchPerson} from '../actions'

const mapStateToProps = state => {
  return {
   searchItem: state.searchItem,
   searchPerson: state.searchPerson
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
   onNewSearchPers: (event) => dispatch(setSearchPerson(event.target.value)),
   onNewSearchItem: (event) => dispatch(setSearchItem(event.target.value))
  }
}

class App extends Component {
    constructor () {
        super()
        this.state = {
            stuff: stuff,
            // searchperson: '',
            // searchitem: ''
        }
    }

// onNewSearchPers = (event) => {
//     this.setState({searchperson: event.target.value})
//     }

// onNewSearchItem = (event) => {
//     this.setState({searchitem: event.target.value})
//     }

render() {
    // console.log(this.props.store.getState())
    //filter by two categories
        const {stuff} = this.state;
        const { searchItem, searchPerson, onNewSearchItem, onNewSearchPers} = this.props;
        const filteredstuff = stuff.filter(stuff => {
            return stuff.person.toLowerCase().includes(searchPerson.toLowerCase()) && stuff.item.toLowerCase().includes(searchItem.toLowerCase());
    })
    return (
        <div className='tc'>
            <h1 className='brand'>Xmas Party Organizer</h1>
            <SearchItem newSearchItem={onNewSearchItem}/>
            <SearchPerson newSearchPers={onNewSearchPers}/>
            <Scroll>
              <ErrorBound>
                <PresList stuff={filteredstuff}/>
              </ErrorBound>
            </Scroll>
        </div>
    );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
// connect(mapStateToProps, mapDispatchToProps)(App);
