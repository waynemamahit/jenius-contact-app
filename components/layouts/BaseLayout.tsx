import React, { ReactNode } from 'react';
import { SafeAreaView, View } from 'react-native';
import { ProgressBar, useTheme } from 'react-native-paper';

export default function BaseLayout({
  children,
  loading = false,
}: {
  children: ReactNode;
  loading?: boolean;
}) {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {loading ? (
        <ProgressBar indeterminate color={colors.primary} />
      ) : (
        <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 6 }}>
          {children}
        </View>
      )}
    </SafeAreaView>
  );
}
