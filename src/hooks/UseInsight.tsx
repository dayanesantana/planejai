import { useCallback, useEffect, useState } from 'react'

import { buildAIPrompt } from '@/data/IaPrompt'
import { useSimulationStorage } from '@/hooks/UseSimulationStorage'
import { getInsight, type InsightData } from '@/service/Service'

export const useInsight = (id: string) => {
  const [insight, setInsight] = useState<InsightData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { getFormData } = useSimulationStorage()

  // useCallback é necessário pois essa função entra no array de dependências do useEffect
  const fetchInsight = useCallback(
    async (simulationId: string) => {
      const simulation = getFormData(simulationId)

      if (!simulation) {
        setError('Simulação não encontrada.')
        return
      }

      setIsLoading(true)
      setError(null)

      try {
        const prompt = buildAIPrompt(simulation)
        const data = await getInsight(prompt)
        setInsight(data)
        return data
      } catch {
        setError('Erro ao gerar o diagnóstico. Tente novamente.')
      } finally {
        setIsLoading(false)
      }
    },
    [getFormData],
  )

  useEffect(() => {
    if (insight || isLoading || error) {
      return
    }

    queueMicrotask(() => {
    fetchInsight(id)
  })
}, [id, insight, isLoading, error])

  return { insight, isLoading, error, fetchInsight }
}