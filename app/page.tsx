import { Textarea } from '@/components/ui/textarea'

export default function Page() {
  return (
    <main className="mt-20 w-full px-5">
      <Textarea
        placeholder="Enter text here"
        className="min-h-[400px] w-full"
      />
    </main>
  )
}
