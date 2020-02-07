import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';
import styled from 'styled-components';
import FilmRow from './FilmRow';
import Modal from './Modal';
import FilmHeader from './FilmHeader';
import FilmSelectors from './selectors';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
`;

class Films extends Component {
  state = { show: false, film: null };

  showModal = film => {
    this.setState({ show: true, film });
  };

  hideModal = () => {
    this.setState({ show: false, film: null });
  };

  render() {
    const { films } = this.props;
    const { film } = this.state;
    return (
      <Container>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          {film ? film.descriptions : ''}
        </Modal>
        <FilmHeader />
        {films.map((film, index) => (
          <FilmRow
            film={film}
            index={index + 1}
            showDiscription={this.showModal}
          />
        ))}
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  films: FilmSelectors.selectFilmsData,
});

export default connect(
  mapStateToProps,
  null,
)(Films);
