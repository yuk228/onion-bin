import { useRouter } from 'next/navigation'
import { CreateNotesDto, NotesResponse } from '@/entities/notes/notes'
import useSWRMutation from 'swr/mutation'
import { useFormik } from 'formik'

type FormValues = CreateNotesDto

interface UseAddNotes {
  data: NotesResponse | undefined
  formik: ReturnType<typeof useFormik<FormValues>>
  isLoading: boolean
}

export function useAddNotes(): UseAddNotes {
  async function createNotes(
    url: string,
    { arg }: { arg: FormValues }
  ): Promise<NotesResponse> {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(arg),
    })
    return response.json()
  }

  const { trigger, data, isMutating } = useSWRMutation(
    '/api/notes',
    createNotes
  )

  const formik = useFormik<FormValues>({
    initialValues: {
      body: '',
      hasPassword: false,
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        await trigger(values)
      } catch (error) {
        console.error(error)
      }
    },
  })

  return { formik, data, isLoading: isMutating }
}
