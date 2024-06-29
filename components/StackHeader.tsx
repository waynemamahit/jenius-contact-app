import { getHeaderTitle } from '@react-navigation/elements';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { router } from 'expo-router';
import { Appbar, AppbarProps } from 'react-native-paper';

interface StackHeaderProps extends AppbarProps {
  navProps: NativeStackHeaderProps;
}

const StackHeader = (props: StackHeaderProps) => (
  <Appbar.Header {...props}>
    {props.navProps.back ? (
      <Appbar.BackAction onPress={props.navProps.navigation.goBack} />
    ) : null}

    <Appbar.Content
      title={getHeaderTitle(props.navProps.options, props.navProps.route.name)}
    />
    {props.navProps.route.name === 'index' ? (
      <Appbar.Action
        icon="plus"
        size={40}
        onPress={() => router.navigate('/new')}
      />
    ) : null}
  </Appbar.Header>
);

export default StackHeader;
