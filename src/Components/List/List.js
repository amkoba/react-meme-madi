import React, { Component } from 'react';
import { getMemesAction, createMemeAction } from '../../Redux/Actions';
import { store } from '../../Redux/Store';
import { connect } from 'react-redux'


class List extends Component {
  constructor() {
    super();
    this.state = { width: -1 };
    getMemesAction();
    // createMemeAction();
    this.state = { memes: [], width: 0 }
  }
  getMemesSubscriber = () => {
    store.subscribe(() => {
      const temp = store.getState();
      if (temp.memes.success) {
        temp.memes.data.memes.forEach(element => {
          element['src'] = element['url'];
        });
        this.setState({ memes: temp.memes.data.memes })
      }
    })
  }
  getImage = (event, params) => {
    console.log(params);
    // store.dispatch({ type: 'FIRST_MEME', payload: params.photo })
  }
  render() {
    this.getMemesSubscriber();
    const width = this.state.width;
    const photos = [
      { src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 1, height: 1 },
      { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1 },
      { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 1, height: 1 },
      { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 1, height: 1 },
      { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 1, height: 1 },
      { src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 1, height: 1 },
      { src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 1, height: 1 },
      { src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 1, height: 1 },
      { src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 1, height: 1 }
    ];
    return (
    <div class="row equal-height">
    {this.state.memes.map(img =>
        <div class="col-xs-6 col-md-3">
            <div class="thumbnail">
                <img src={img.url} class="img-fullsize"  onClick={this.getImage(img)}/>
                <div class="caption">
                    <p class="flex-text">{img.name}</p>
                </div>
            </div>
        </div>
    )}
</div>
    )
  }
}
export default List