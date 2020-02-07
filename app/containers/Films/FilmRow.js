/*
 * FilmRow Component
 *
 */

import React, { Component } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MdEdit, MdBackspace, MdSave, MdWarning } from 'react-icons/md';
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

const Descriptions = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 300px;
  margin-right: 10px;
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

const Button = styled.div`
  width: 25px;
  &:hover {
    cursor: pointer;
  }
`;

const ActionContainer = styled.div`
  display: flex;
  padding: 10px;
  margin: 8px;
  width: 100px;
`;

class FilmRow extends Component {
  state = { edit: false, form: {} };

  handleChange = (key, event) => {
    const { form } = this.state;
    const newFormValue = {
      ...form,
      [key]: event.target.value,
    };
    this.setState({
      form: newFormValue,
    });
  };

  handleSaveData = () => {
    const { form } = this.state;
    const { film, actions } = this.props;
    const newFilm = {
      descriptions: form.descriptions || film.descriptions,
      genre: form.genre || film.genre,
      title: form.title || film.title,
      views: form.views || film.views,
      id: film.id,
    };
    actions.saveFilmsData(newFilm);
    this.onToggleAction();
  };

  onToggleAction = () => {
    const { edit } = this.state;
    this.setState({
      edit: !edit,
      form: {},
    });
  };

  render() {
    const { film, index, showDiscription } = this.props;
    const { edit, form } = this.state;
    if (edit) {
      return (
        <Container>
          <Sno>{index}</Sno>
          <Title>
            <InputField
              type="text"
              value={form.title || ''}
              onChange={value => this.handleChange('title', value)}
            />
          </Title>
          <Views>
            <InputField
              type="text"
              value={form.views || ''}
              onChange={value => this.handleChange('views', value)}
            />
          </Views>
          <Genre>
            <InputField
              type="text"
              value={form.genre || ''}
              onChange={value => this.handleChange('genre', value)}
            />
          </Genre>
          <DescriptionContainer>
            <InputField
              type="text"
              value={form.descriptions || ''}
              onChange={value => this.handleChange('descriptions', value)}
            />
          </DescriptionContainer>
          <ActionContainer>
            <Button onClick={this.handleSaveData}>
              <MdSave />
            </Button>
            <Button onClick={this.onToggleAction}>
              <MdBackspace />
            </Button>
          </ActionContainer>
        </Container>
      );
    }

    return (
      <Container>
        <Sno>{index}</Sno>
        <Title>{film.title}</Title>
        <Views>{film.views}</Views>
        <Genre>{film.genre}</Genre>
        <DescriptionContainer>
          <Descriptions>{film.descriptions}</Descriptions>
          <Button onClick={() => showDiscription(film)}>
            <MdWarning />
          </Button>
        </DescriptionContainer>
        <ActionContainer>
          <Button onClick={this.onToggleAction}>
            <MdEdit />
          </Button>
        </ActionContainer>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      saveFilmsData: FilmActions.saveFilmsData,
    },
    dispatch,
  ),
});

export default connect(
  null,
  mapDispatchToProps,
)(FilmRow);
