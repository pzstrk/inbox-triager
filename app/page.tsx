import { useState } from 'react'
import { useInbox } from '../hooks/useInbox'
import { useRouter } from 'next/navigation'

export default function InboxPage() {
  const [text, setText] = useState('')
  const { saveBulk } = useInbox()
  const router = useRouter()

  return (
    <div>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        saveBulk(text)
        setText('')
      }}>
        保存
      </button>

      <button onClick={() => router.push('/triage/run')}>
        トリアージへ
      </button>
    </div>
  )
}
