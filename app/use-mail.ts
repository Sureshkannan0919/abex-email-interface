import { atom, useAtom } from "jotai"
import { mails } from "@/app/data"

export type Mail = {
  id: string,
  account_id: string,
      created: Date,
      date: Date,
      from: string,
      from_name: string,
      message_id: string,
      snippet: string,
      subject: string,
      updated: Date,
}

type Config = {
  selected: Mail["id"] | null
}

const configAtom = atom<Config>({
  selected: mails[0].id,
})

export function useMail() {
  return useAtom(configAtom)
}
