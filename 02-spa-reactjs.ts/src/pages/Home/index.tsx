import { Play } from 'phosphor-react'
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
  const [task, setTask] = useState('')

  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="">I'm working on</label>
          <TaskInput
            id="text"
            list="task-suggestions"
            placeholder="Name of your project"
            onChange={(e) => setTask(e.target.value)}
            value={task}
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

        <StartCountdownButton disabled={!task} type="submit">
          <Play size={24} />
          Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
