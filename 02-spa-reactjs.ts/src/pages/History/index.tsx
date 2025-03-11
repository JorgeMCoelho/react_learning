import { useContext } from 'react'
import { HistoryContainer, HistoryList, Status } from './styles'
import { CyclesContext } from '../../contexts/CyclesContext'

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>History</h1>

      <pre>
        {JSON.stringify(cycles, null, 2)}
      </pre>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Started</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Task 1</td>
              <td>20 mins</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="green">Finished</Status>
              </td>
            </tr>
            <tr>
              <td>Task 2</td>
              <td>20 mins</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="yellow">In progress</Status>
              </td>
            </tr>
            <tr>
              <td>Task 3</td>
              <td>20 mins</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="red">Cancelled</Status>
              </td>
            </tr>
          </tbody>
        </table>

      </HistoryList>
    </HistoryContainer>
  )
}
