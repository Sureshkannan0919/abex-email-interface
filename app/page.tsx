"use client"
import { Mail } from "@/component/mail"
import { accounts, mails } from "@/app/data"
import { MailList } from "@/component/mail-list"
import { id, i, init, InstaQLEntity } from "@instantdb/react";

const APP_ID = "f775a7c3-3916-45c3-be96-a4b2db01e243"

const schema = i.schema({
  entities: {
    emails: i.entity({
      account_id: i.string(),
      created: i.date(),
      date: i.date(),
      from: i.string(),
      from_name: i.string(),
      message_id: i.string(),
      snippet: i.string(),
      subject: i.string(),
      updated: i.date(),
    }),
  },
});
type Email = InstaQLEntity<typeof schema, "emails">;

const db = init({ appId: APP_ID, schema });
  

export default function MailPage() {
  
  const { isLoading, error, data } = db.useQuery({ emails: {} });

  if (isLoading) {
    return <div className="p-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 p-4">Error: {error.message}</div>;
  }
  
  const emails = data?.emails || [];

  return (
    <>

    <div className="md:hidden">
        
      </div>
      <div className="hidden flex-col md:flex">
        <Mail
          accounts={accounts}
          mails={emails}
          navCollapsedSize={4}
          defaultLayout={[20, 32, 48]}
        />
      </div>
      </>
  )
}
