import React, { PureComponent } from 'react';
import { NetInfo, Dimensions, StyleSheet } from 'react-native';
import {
  OfflineNoticeWrapper,
  OfflineNoticeText
} from './offline-notice-styles';

const { width } = Dimensions.get('window');

function MiniOfflineSign() {
  return (
    <OfflineNoticeWrapper
      animation='zoomIn'
      delay={1000}
      duration={300}
      style={styles.offlineContainer}
    >
      <OfflineNoticeText>No Internet Connection 😯</OfflineNoticeText>
    </OfflineNoticeWrapper>
  );
}

class OfflineNotice extends PureComponent {
  state = {
    isConnected: true
  };

  componentDidMount() {
    NetInfo.isConnected.addEventListener(
      'connectionChange',
      this.handleConnectivityChange
    );
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      'connectionChange',
      this.handleConnectivityChange
    );
  }

  handleConnectivityChange = isConnected => {
    if (isConnected) {
      this.setState({ isConnected });
    } else {
      this.setState({ isConnected });
    }
  };

  render() {
    if (!this.state.isConnected) {
      return <MiniOfflineSign />;
    }
    return null;
  }
}

const styles = StyleSheet.create({
  offlineContainer: {
    width: width - 40
  }
});

export default OfflineNotice;
