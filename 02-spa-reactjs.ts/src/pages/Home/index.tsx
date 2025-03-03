import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  TaskInput,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
} from './styles'
import { useState } from 'react'

export function Home() {
  const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Write your task'),
    minutesAmount: zod.number()
      .min(5, 'Min time is 5 minutes')
      .max(60, 'Max time is 60 minutes'),
  })

  /*
  interface NewCycleFormData {
    task: string;
    minutesAmount: number
  }
  */

  interface Cycle {
    id: string;
    task: string;
    minutesAmount: number
  }

  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

  function handleCreateNewCycle(data:NewCycleFormData) {
    const id = String(new Date().getTime()),

    const newCyle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
    }

    setCycles((state) => [...state, newCyle])
    setActiveCycleId(id)

    reset()
  }

  const task = watch('task') // keeps an eye on the form similiar to onChange
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="">I'm working on</label>
          <TaskInput
            id="text"
            list="task-suggestions"
            placeholder="Name of your project"
            {...register('task')}

          />

          <datalist id="task-suggestions">
            <option value="Project 1" />
            <option value="Project 2" />
            <option value="Project 3" />
          </datalist>

          <label htmlFor="">during</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutes.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
