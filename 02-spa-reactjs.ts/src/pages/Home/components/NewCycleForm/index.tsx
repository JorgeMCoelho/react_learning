import { useForm } from 'react-hook-form'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export function NewCycleForm() {
  const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Write your task'),
    minutesAmount: zod.number()
      .min(5, 'Min time is 5 minutes')
      .max(60, 'Max time is 60 minutes'),
  })

  type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  return (
    <FormContainer>
      <label htmlFor="">I'm working on</label>
      <TaskInput
        id="text"
        list="task-suggestions"
        placeholder="Name of your project"
        disabled={!!activeCycle}
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
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutes.</span>
    </FormContainer>
  )
}
