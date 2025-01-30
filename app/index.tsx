import { View, Text } from 'react-native'
import Counter from '@/components/Counter'
import useTestQuery from '@/queries/test'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'

export default function Home() {
  const query = useTestQuery()

  return (
    <View className="px-4 pt-20">
      <Text className="font-bold text-5xl mb-4">Jettison</Text>
      {query.isLoading && (
        <Animated.Text exiting={FadeOut} className="animate-pulse">
          Loading...
        </Animated.Text>
      )}
      {query.isSuccess &&
        query.data.map((test) => (
          <Animated.Text entering={FadeIn} className="text-lg" key={test.name}>
            {test.name}
          </Animated.Text>
        ))}
      <Counter />
    </View>
  )
}
