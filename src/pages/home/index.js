import React from 'react';
import { connect, routerRedux } from 'dva';
import { ImagePicker, WingBlank, SegmentedControl } from 'antd-mobile';
import './index.less';

const data = [
  {
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    id: '2121'
  },
  {
    url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    id: '2122'
  }
];

class ImagePickerExample extends React.Component {
  state = {
    files: data,
    multiple: false
  };
  onChange = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      files
    });
  };
  onSegChange = (e) => {
    const index = e.nativeEvent.selectedSegmentIndex;
    this.setState({
      multiple: index === 1
    });
  };

  render() {
    const { files } = this.state;
    return (
      <WingBlank>
        <SegmentedControl
          values={['切换到单选', '切换到多选']}
          selectedIndex={this.state.multiple ? 1 : 0}
          onChange={this.onSegChange}
        />
        <ImagePicker
          files={files}
          onChange={this.onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 7}
          multiple={this.state.multiple}
        />
      </WingBlank>
    );
  }
}
function Home(props) {
  const handleClick = () => props.dispatch({ type: 'home/queryWithCondition', payload: 111 });
  const go = () =>
    props.dispatch(
      routerRedux.push({
        pathname: '/broadcast'
      })
    );

  return (
    <div className="homePage">
      <div onClick={handleClick} className="color">
        hom111e
      </div>
      <div onClick={go}>go bbb111</div>
      <ImagePickerExample />
    </div>
  );
}
const mapStateToProps = (state) => {
  return state.home;
};

export default connect(mapStateToProps)(Home);
