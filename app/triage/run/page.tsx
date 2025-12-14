import { redirect } from 'next/navigation'
import { useTriage } from '../../../hooks/useTriage'

export default function TriageRunPage() {
  const { currentItem, decide, isFinished } = useTriage()

  if (isFinished) redirect('/labels')
  if (!currentItem) return null

  return (
    <div>
      <div>{currentItem.rawText}</div>

      <button onClick={() => decide('DO_NOW')}>今すぐやる</button>
      <button onClick={() => decide('SCHEDULE')}>日時を決める</button>
      <button onClick={() => decide('BREAKDOWN')}>分解が必要</button>
      <button onClick={() => decide('THINK')}>考え事</button>
      <button onClick={() => decide('DROP')}>不要</button>
    </div>
  )
}
