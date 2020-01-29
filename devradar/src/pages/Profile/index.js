import React from 'react';
import PropTypes from 'prop-types';
import { WebView } from 'react-native-webview';
import { Container } from '~/components/Container';

export default function Profile({ navigation }) {
  const gitHubUsername = navigation.getParam('github_username');
  return (
    <Container>
      <WebView
        style={{ flex: 1 }}
        source={{ uri: `https://github.com/${gitHubUsername}` }}
      />
    </Container>
  );
}

Profile.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('github_username'),
});

Profile.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
