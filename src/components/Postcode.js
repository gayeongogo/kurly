import React, { Component } from 'react';
import DaumPostcode from "react-daum-postcode";

class Postcode extends Component {
    onCompletePost = (data) => {
        //console.log(data)
        this.props.onChangeAddress1(data.address)
    }
    render() {
        const postStyle = {
            position: 'fixed',
            top: '50%',
            left: '50%',
            zIndex: '100',
            width: '500px',
            height: '500px',
            background: '#fff',
            border: '1px solid #ccc',
            marginLeft: '-200px',
            marginTop: '-250px',
        }
        return (
            <div>
                <DaumPostcode style={postStyle} autoClose onComplete={this.onCompletePost}/>
            </div>
        );
    }
}

export default Postcode;