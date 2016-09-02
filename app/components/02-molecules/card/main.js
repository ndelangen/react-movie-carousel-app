import React, { Component } from 'react';
import { Link } from 'react-router';
import Image from '../../01-atoms/image/main';

import styles from './main.css';


class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: 'hsl(0, 0%, 18%)',
      textColor: 'hsl(0, 0%, 80%)'
    };

    this.imagePromise = new Promise((resolve, reject) => {
      this.imageLoaded = (event) => {
        const image = event.currentTarget;
        image.crossOrigin = 'Anonymous';
        resolve(image);
      };
    }).then((existingImage) => {
      return new Promise((resolve, reject) => {
        const image = document.createElement('img');
        image.onload = () => {
          resolve(image);
        };
        image.onerror = () => {
          reject(image);
        };
        image.crossOrigin = 'Anonymous';
        image.src = existingImage.src;
      });
    });
  }
  componentDidMount() {
    const instance = this;

    const colorThiefLoad = System.import('../../00-utilities/color/color-thief.js');
    const colorConverterLoad = System.import('../../00-utilities/color/color-converter.js');

    const imgLoad = instance.imagePromise;

    Promise.all([imgLoad, colorThiefLoad, colorConverterLoad]).then((result) => {
      const [image, colorThiefModule, colorConverterModule] = result;
      const colorThiefInstance = new colorThiefModule.ColorThief();
      const color = colorConverterModule.rgbToHsl(...colorThiefInstance.getColor(image));

      instance.setState({
        backgroundColor: `hsl(${color.h * 360}, ${color.s * 100}%, ${color.l * 100}%)`,
        textColor: color.l < 0.4 ? `hsl(${color.h * 360}, ${color.s * 100}%, ${(color.l * 100) + 40}%)` : `hsl(${color.h * 360}, ${color.s * 100}%, ${(color.l * 100) - 40}%)`
      });
    });
  }
  render() {
    const { state } = this;
    const { item } = this.props;
    return (
      <article className={styles.root}>
        <div className={styles.content} style={{color: state.textColor}}>
          <h1 className={styles.title}>{item.title}</h1>
          <div className={styles.genre}>{item.genre}</div>
          <div className={styles.rating}>IMDB score: {item.imdb}</div>
          <div className={styles.group}>{item.group}</div>
        </div>
        <div className={styles.media}>
          <Image src={item.img} ratio={`31/45`} onLoad={this.imageLoaded} />
        </div>
        <div className={styles.background} style={{backgroundColor: state.backgroundColor}}></div>
      </article>
    );
  }
}

export default Card;
