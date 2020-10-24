import React, {useState, useEffect, useCallback} from 'react';
import {View, Image, TouchableOpacity, FlatList} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';

import LazyImage from '../../components/LazyImage';
import {
  Post,
  Header,
  Info,
  Avatar,
  Name,
  TouchIcons,
  Description,
  Loading,
} from './styles';

import comment from './../../assets/comment.png';
import like from './../../assets/like.png';
import options from './../../assets/options.png';
import save from './../../assets/save.png';
import send from './../../assets/send.png';

const Feed = () => {
  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [viewable, setViewable] = useState([]);

  async function loadPage(pageNumber = page, shouldRefresh = false) {
    const limitItems = 5;

    if (total && pageNumber > total) {
      return;
    }

    setLoading(true);

    const response = await fetch(
      `http://localhost:3000/feed?_expand=author&_limit=${limitItems}&_page=${pageNumber}`,
    );

    const data = await response.json();
    const totalItems = response.headers.get('x-Total-Count');

    setTotal(Math.floor(totalItems / limitItems));
    setFeed(shouldRefresh ? data : [...feed, ...data]);
    setPage(pageNumber + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadPage();
  }, []);

  async function refreshList() {
    setRefreshing(true);

    await loadPage(1, true);

    setRefreshing(false);
  }

  const handleViewableChanged = useCallback(({changed}) => {
    setViewable(changed.map(({item}) => item.id));
  }, []);

  return (
    <View>
      <FlatList
        contentContainerStyle={{paddingBottom: getBottomSpace()}}
        data={feed}
        keyExtractor={(post) => String(post.id)}
        onEndReached={() => loadPage()}
        onEndReachedThreshold={0.1}
        onRefresh={refreshList}
        refreshing={refreshing}
        onViewableItemsChanged={handleViewableChanged}
        viewabilityConfig={{viewAreaCoveragePercentThreshold: 20}}
        ListFooterComponent={loading && <Loading />}
        renderItem={({item}) => (
          <Post>
            <Header>
              <Info>
                <Avatar source={{uri: item.author.avatar}} />
                <Name>{item.author.name}</Name>
              </Info>
              <Image source={options} />
            </Header>
            <LazyImage
              shouldLoad={viewable.includes(item.id)}
              smallSource={{uri: item.small}}
              source={{uri: item.image}}
              aspectRatio={item.aspectRatio}
            />
            <TouchIcons>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{marginRight: 15}}>
                  <Image source={like} />
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight: 15}}>
                  <Image source={comment} />
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight: 15}}>
                  <Image source={send} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <Image source={save} />
              </TouchableOpacity>
            </TouchIcons>
            <Description>
              <Name>{item.author.name}</Name> {item.description}
            </Description>
          </Post>
        )}
      />
    </View>
  );
};

export default Feed;
