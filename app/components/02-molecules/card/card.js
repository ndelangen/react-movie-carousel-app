import React from 'react';
import cards from 'reactcards';
import Component from './main';

const demo = cards('molecules/card');

class Wrapper extends React.Component {
  render() {
    const { props } = this;

    return (
      <div style={{
        width: '400px',
        height: '500px',
        position: 'relative'
      }}>
        <Component { ...props }></Component>
      </div>
    );
  }
}

demo.markdown(
  `# This is the "card" card.

  I think it's pretty.`
);

demo.card(
  <Wrapper item={{
    id: 1,
    title: 'Hello',
    genre: 'TEST',
    imdb: '4',
    img: 'http://placehold.it/200x500/000000/ffffff',
    group: 'vierkant',
  }}/>
);

demo.card(
  <Wrapper item={{
    id: 2,
    title: 'World',
    genre: 'FOO',
    imdb: '4',
    img: 'http://placehold.it/200x500/ffffff/000000',
    group: 'vierkant',
  }}/>
);
