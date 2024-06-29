import { getHeaderTitle } from '@react-navigation/elements';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { router } from 'expo-router';
import { Appbar, AppbarProps, FAB } from 'react-native-paper';

const Fab = FAB;

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
    <Appbar.Header>
      <Fab
        icon="plus"
        mode="flat"
        onPress={() => router.navigate('/new')}
      />
    </Appbar.Header>
  </Appbar.Header>
);

export default StackHeader;
