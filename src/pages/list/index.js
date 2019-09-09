import React from 'react';
import { connect, routerRedux } from 'dva';
import { Button } from 'antd-mobile';
import { Hello } from '../../components/hello';

function List(props) {
  const back = () => props.dispatch(routerRedux.goBack());
  return (
    <div>
      <div>111</div>
      <Button type="primary" onClick={back}>
        primary
      </Button>
      <Hello compiler="1111" framework="1111" />
    </div>
  );
}
const mapStateToProps = (state) => {
  return state.list;
};

export default connect(mapStateToProps)(List);
