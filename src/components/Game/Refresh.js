import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { RefreshWrapper } from './styles/refresh-styles';

const Refresh = props => {
  const { action, progress, isDisabledRefresh } = props;

  return (
    <RefreshWrapper disabled={isDisabledRefresh} onPress={action}>
      <Icon
        name={progress === 10 ? 'ios-stats' : 'ios-skip-forward'}
        size={45}
        style={styles.icon}
      />
    </RefreshWrapper>
  );
};

const styles = {
  icon: {
    color: '#fff',
    marginTop: 7,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};

export default Refresh;
