import { getHeaderTitle } from '@react-navigation/elements';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { router } from 'expo-router';
import { Appbar, AppbarProps } from 'react-native-paper';

interface StackHeaderProps extends AppbarProps {
  navProps: NativeStackHeaderProps;
  canBack?: boolean;
}

const StackHeader = (props: StackHeaderProps) => {
  const { navProps, canBack = true } = props;

  return (
    <Appbar.Header {...props}>
      {navProps.back && canBack ? (
        <Appbar.BackAction onPress={navProps.navigation.goBack} />
      ) : null}

      <Appbar.Content
        title={getHeaderTitle(navProps.options, navProps.route.name)}
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
};

export default StackHeader;
