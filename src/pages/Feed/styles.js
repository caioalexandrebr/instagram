import styled from 'styled-components/native';

export const Post = styled.View`
  margin-top: 10px;
`;

export const Header = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
`;

export const Info = styled.View`
  align-items: center;
  flex-direction: row;
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

export const TouchIcons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
`;

export const Icon = styled.Image`
  margin-left: 15px;
  margin-top: 15px;
`;

export const Description = styled.Text`
  line-height: 18px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#999',
})`
  margin: 30px 0;
`;
