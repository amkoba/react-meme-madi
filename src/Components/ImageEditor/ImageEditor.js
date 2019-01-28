import React, { Component } from 'react';
import './ImageEditor.css'
import domtoimage from 'dom-to-image';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ImageEditor extends Component {

    constructor(prop) {
        super(prop);
        this.state = { top_text: '', bottom_text: '' }
    }
    meme_image;
    handleTopTextChange(e) {
        this.setState({ top_text: e.target.value });
    }

    handleBottomTextChange(e) {
        this.setState({ bottom_text: e.target.value });
    }

    imageToMeme() {
        const imgg = document.getElementById('meme-image');

        domtoimage.toPng(imgg)
            .then(function (dataUrl) {
                let img = new Image();
                img.src = dataUrl;
                document.body.appendChild(img);
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });

            
    }

    render() {
      return (
            <div>
                    {this.props.meme.url ? <div className="main">
                        <div className="image" id="meme-image">
                            <h2 className="top-text"><span >{this.state.top_text}</span></h2><br />
                            <img src={this.props.meme.url} alt="" />
                            <h2 className="bottom-text"><span >{this.state.bottom_text}</span></h2><br />
                        </div>
                        <div className="add-text">
                            <input type="text"
                                value={this.state.top_text}
                                onChange={this.handleTopTextChange.bind(this)}
                                placeholder="TOP TEXT" />
                            <input type="text"
                                value={this.state.bottom_text}
                                onChange={this.handleBottomTextChange.bind(this)}
                                placeholder="BOTTOM TEXT" />
                        </div>

                        <button onClick={this.imageToMeme.bind(this)}>  Save </button>
                    </div> : undefined}
            </div>
      )
    }
}
const mapStateToProp = (state) => {
    console.log(state)
    return {
        meme: state.firstMeme
    }
}
export default connect(mapStateToProp)(ImageEditor);