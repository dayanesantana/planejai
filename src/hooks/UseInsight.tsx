import { useCallback, useEffect, useRef, useState } from 'react'

import { buildAIPrompt } from '@/data/IaPrompt'
import { useSimulationStorage } from '@/hooks/UseSimulationStorage'
import { getInsight, type InsightData } from '@/service/Service'
import type { SimulationRecord } from '@/data/Simulation'

export const useInsight = (id: string) => {
  const isRequestPending = useRef(false)
  const { getFormData, updateSimulation } = useSimulationStorage()
  const [insight, setInsight] = useState<InsightData | null>(() => {
  const simulation = getFormData(id)

  if (simulation?.insight) {
    return simulation.insight
  }

  return null
})
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)


  // useCallback é necessário pois essa função entra no array de dependências do useEffect
  const fetchInsight = useCallback(
    async (simulationId: string) => {
      const simulation = getFormData(simulationId)

      if (!simulation) {
        setError('Simulação não encontrada.')
        return
      }

      isRequestPending.current = true
      setIsLoading(true)
      setError(null)

      try {
        const prompt = buildAIPrompt(simulation)
        const data = await getInsight(prompt)
        setInsight(data)

        updateSimulation(simulationId, {
          ...simulation,
          insight: data,
        } as SimulationRecord)
        return data
      } catch {
        setError('Erro ao gerar o diagnóstico. Tente novamente.')
      } finally {
        isRequestPending.current = false
        setIsLoading(false)
      }
    },
    [getFormData, updateSimulation],
  )

  useEffect(() => {
    if (insight || isLoading || isRequestPending.current ||  error) {
      return
    }

    queueMicrotask(() => {
    fetchInsight(id)
  })
}, [id, insight, isLoading, error])

  return { insight, isLoading, error, fetchInsight }
}