'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useAddNotes } from '@/services/notes/notes-add-hooks'

export default function Page() {
  const { formik, password, setPassword, isLoading } = useAddNotes()

  return (
    <main className="mt-20 w-full px-5">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4 flex gap-2">
          <Input
            type="password"
            placeholder="Password (optional)"
            name="password"
            value={password || ''}
            onChange={(event) => setPassword(event.target.value)}
            className="flex-1"
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Creating...' : 'Create'}
          </Button>
        </div>
        <Textarea
          placeholder="Enter text here"
          name="body"
          value={formik.values.body}
          onChange={formik.handleChange}
          className="min-h-[700px] w-full"
        />
      </form>
      <div className="mt-8 flex gap-8">
        <div className="flex-1"></div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-3">OnionBin</h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            OnionBin is an open-source text-sharing service with end-to-end
            encryption. It encrypts and decrypts messages on the client side,
            providing strong confidentiality through a combination of Argon2 and
            cascade ciphers.
          </p>
        </div>
      </div>
    </main>
  )
}
