import { useQuery } from '@tanstack/react-query'

type TestResponse = { name: string }[]

async function getTests(): Promise<TestResponse> {
  return new Promise((resolve) => {
    setTimeout(() => resolve([
      { name: 'Hello 123' }, { name: 'Hello 456' }, { name: 'Hello 789' }
    ]), 1000)
  })
}

const useTestQuery = () => useQuery({ queryKey: ['test'], queryFn: getTests })

export default useTestQuery
