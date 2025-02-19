"use client";


export const mails = [
  {
    "id":"1232141322321",
    "account_id": "acc456",
    "created": "2024-03-08 12:00:00.000Z",
    "date": "2024-03-08 11:55:00.000Z",
    "from": "hr1@company.com",
    "from_name": "HR Department",
    "message_id": "hr_msg1",
    "snippet": "Hello, we've received your application for the Software Engineer role.",
    "subject": "Software Engineer Application",
    "updated": "2024-03-08 12:00:00.000Z"
  }
]

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

export const accounts = [
  {
    label: "Alicia Koch",
    email: "alicia@example.com",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      </svg>
    ),
  },
  {
    label: "Alicia Koch",
    email: "alicia@gmail.com",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      </svg>
    ),
  },
  {
    label: "Alicia Koch",
    email: "alicia@me.com",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      </svg>
    ),
  },
]

export type Account = (typeof accounts)[number]

export const contacts = [
  {
    name: "Emma Johnson",
    email: "emma.johnson@example.com",
  },

]

export type Contact = (typeof contacts)[number]
