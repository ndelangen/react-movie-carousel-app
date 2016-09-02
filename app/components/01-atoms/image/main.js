import React, { Component } from 'react';

import styles from './main.css';

class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: 'about:blank',
      loaded: false
    };
  }
  loadHandler(event) {
    this.setState({
      loaded: true
    });
    if (this.props.onLoad) {
      this.props.onLoad(event);
    }
  }
  componentDidMount() {
    const { props, root } = this;
    console.log('componentDidMount');
    window.requestAnimationFrame(() => {
      // const width = root.clientWidth;
      // const mediaType = width < 400 ? 'mobile' : 'desktop';

      // this.setState({
      //   imageUrl: `${props.src}?type=${mediaType}`
      // });

      // debugger;
      console.log('requestAnimationFrame');
      this.setState({
        imageUrl: `${props.src}`
      });
    });
  }
  render() {
    const { props, state } = this;
    const [ width, height ] = props.ratio.split('/');

    return (
      <div ref={e => {
        this.root = e;
      }} className={state.loaded ? styles['is-loaded'] : styles['is-loading']}>
        <img
          className={styles.placeholder}
          src={`data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 ${width} ${height}'%2F%3E`}
          width={width}
          height={height}
        />

        <img
          src={state.imageUrl}
          className={styles.image}
          crossOrigin="anonymous"
          onLoad={event => this.loadHandler(event)}
          style={{width: '100%'}}
        />
        <span className={styles.loader}>loading</span>

        <div className={styles.fallback} dangerouslySetInnerHTML={{__html: `
          <noscript>
            <img src="${props.src}" class="${styles.image}" />
          </noscript>
        `}}></div>
      </div>
    );
  }
};

export default Image;
