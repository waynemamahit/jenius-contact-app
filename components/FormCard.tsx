import { ContactForm } from '@/models/Contact';
import { OnSubmitType } from '@/types/Base';
import { router } from 'expo-router';
import React, { ReactNode, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Card, Icon, useTheme } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import { MD3Colors } from 'react-native-paper/lib/typescript/types';
import { StyleProps } from 'react-native-reanimated';
import TextField from './TextField';

const submitIcon = (colors: MD3Colors) => {
  const result: IconSource | undefined = (props) => (
    <Icon source="send" size={props.size} color={colors.primary} />
  );
  return result;
};

export default function FormCard({
  children,
  mode,
  style,
  loading = false,
  form = new ContactForm(),
  onPress,
  onSubmit,
}: {
  children?: ReactNode;
  mode: 'outlined' | 'contained';
  style?: StyleProps;
  loading?: boolean;
  form: ContactForm;
  onPress?: () => void;
  onSubmit?: OnSubmitType;
}) {
  const { colors } = useTheme();
  const { control, setValue, handleSubmit } = useForm<ContactForm>();

  useEffect(() => {
    setValue('firstName', form.firstName);
    setValue('lastName', form.lastName);
    setValue('age', form.age.toString());
    setValue('photo', form.photo);
  }, [form, setValue]);

  return (
    <Card mode={mode} style={style} onPress={onPress}>
      {children}

      {mode === 'contained' ? (
        <>
          <Card.Content>
            <TextField label="First Name" name="firstName" control={control} />
            <TextField label="Last Name" name="lastName" control={control} />
            <TextField label="Age" name="age" control={control} />
            <TextField label="Photo" name="photo" control={control} />
          </Card.Content>
          <Card.Actions style={{ margin: 'auto' }}>
            <Button
              icon={submitIcon(colors)}
              onPress={handleSubmit(onSubmit as OnSubmitType)}
              loading={loading}
            >
              Submit
            </Button>
            <Button
              style={{ backgroundColor: colors.secondary }}
              onPress={() => router.navigate('')}
            >
              Cancel
            </Button>
          </Card.Actions>
        </>
      ) : null}
    </Card>
  );
}
