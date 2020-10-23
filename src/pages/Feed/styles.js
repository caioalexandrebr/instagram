import styled from 'styled-components/native';

export const Post = styled.View`
  margin-top: 10px;
`;

export const Header = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 15px;
`;

export const Avatar = styled.Image`
  border-radius: 16px;
  height: 32px;
  margin-right: 10px;
  width: 32px;
`;

export const Name = styled.Text`
  color: #333;
  font-weight: bold;
`;

export const PostImage = styled.Image`
  aspect-ratio: ${(props) => props.ratio};
  width: 100%;
`;

export const Description = styled.Text`
  line-height: 18px;
  padding: 15px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#999',
})`
  margin: 30px 0;
`;
