import type { SimulationFormData } from '../data/Simulation'
import { parseCurrency } from './Currency'

export function calcMonthlySavings(data: SimulationFormData) {
  return (
    parseCurrency(data.income) -
    parseCurrency(data.expenses) -
    parseCurrency(data.debts)
  )
}