import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Bio,
  Name,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
  Loading,
} from './styles';

export default function User({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [stars, setStars] = useState([]);
  const user = navigation.getParam('user');

  const loadData = async (pageParam = 1) => {
    const response = await api.get(`/users/${user.login}/starred`, {
      params: { page: pageParam },
    });

    setLoading(false);
    setRefreshing(false);
    setPage(pageParam);
    setStars(pageParam >= 2 ? [...stars, ...response.data] : response.data);
  };

  const loadMore = () => {
    const nextPage = page + 1;
    loadData(nextPage);
  };

  const refreshList = () => {
    setRefreshing(true);
    setStars([]);
    loadData();
  };

  const handleNavigate = repository => {
    navigation.navigate('Repository', { repository });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <Header>
        <Avatar source={{ uri: user.avatar }} />
        <Name>{user.name}</Name>
        <Bio>{user.bio}</Bio>
      </Header>
      {loading ? (
        <Loading />
      ) : (
        <Stars
          data={stars}
          onRefresh={refreshList}
          refreshing={refreshing}
          onEndReachedThreshold={0.2}
          onEndReached={loadMore}
          keyExtractor={star => String(star.id)}
          renderItem={({ item }) => (
            <Starred onPress={() => handleNavigate(item)}>
              <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
              <Info>
                <Title>{item.name}</Title>
                <Author>{item.owner.login}</Author>
              </Info>
            </Starred>
          )}
        />
      )}
    </Container>
  );
}

// ---

User.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('user').name,
});

User.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

User.navigationOptions = {
  title: 'Usuários',
};
