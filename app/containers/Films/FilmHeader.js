/*
 * FilmHeader Component
 *
 */

import React, { Component } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FilmActions from './actions';

const Container = styled.div`
  display: flex;
  margin: 2px;
  width: 1100px;
  background-color: #f8f8f8;
  border-radius: 10px;
  height: 70px;
`;

const Title = styled.div`
  width: 200px;
  padding: 10px;
  margin: 8px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 8px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Genre = styled.div`
  width: 200px;
  padding: 10px;
  margin: 8px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  width: 400px;
  padding: 10px;
  margin: 8px;
`;

const Sno = styled.div`
  width: 50px;
  padding: 10px;
  margin: 8px;
`;

const Views = styled.div`
  width: 70px;
  padding: 10px;
  margin: 8px;
`;

const ActionContainer = styled.div`
  display: flex;
  padding: 10px;
  margin: 8px;
  width: 100px;
`;

const FilmHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.div`
  width: 200px;
  padding: 10px;
  margin: 2px;
  background-color: #d5dbdb;
  border-radius: 10px;
  &:hover {
    background-color: #a6adad;
    cursor: pointer;
  }
`;

class FilmHeader extends Component {
  state = { filter: false, searchTerms: {} };

  handleChange = (key, event) => {
    const { searchTerms } = this.state;
    const { actions } = this.props;
    let newSearchTerms = {
      ...searchTerms,
    };
    if (event.target.value) {
      newSearchTerms = {
        ...searchTerms,
        [key]: event.target.value,
      };
    } else {
      delete newSearchTerms[key];
    }
    this.setState({
      searchTerms: newSearchTerms,
    });

    actions.searchFilmsData(newSearchTerms);
  };

  onToggleAction = () => {
    const { filter } = this.state;
    const { actions } = this.props;

    this.setState({
      filter: !filter,
      searchTerms: {},
    });
    actions.clearFilmsData();
  };

  render() {
    const { filter, searchTerms } = this.state;
    if (filter) {
      return (
        <FilmHeaderContainer>
          <Button onClick={this.onToggleAction}>Filter</Button>
          <Container>
            <Sno>SNo</Sno>
            <Title>
              <InputField
                type="text"
                value={searchTerms.title || ''}
                onChange={value => this.handleChange('title', value)}
              />
            </Title>
            <Views>Views</Views>
            <Genre>
              <InputField
                type="text"
                value={searchTerms.genre || ''}
                onChange={value => this.handleChange('genre', value)}
              />
            </Genre>
            <DescriptionContainer>Description</DescriptionContainer>
            <ActionContainer>Action</ActionContainer>
          </Container>
        </FilmHeaderContainer>
      );
    }

    return (
      <FilmHeaderContainer>
        <Button onClick={this.onToggleAction}>Filter</Button>
        <Container>
          <Sno>SNo</Sno>
          <Title>Title</Title>
          <Views>Views</Views>
          <Genre>Genre</Genre>
          <DescriptionContainer>Description</DescriptionContainer>
          <ActionContainer>Action</ActionContainer>
        </Container>
      </FilmHeaderContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      searchFilmsData: FilmActions.searchFilmsData,
      clearFilmsData: FilmActions.clearFilmsData,
    },
    dispatch,
  ),
});

function mapStateToProps(state) {
  const { films } = state;
  return { searchTerms: films.searchTerms };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilmHeader);
