"use client"

import * as React from "react"
import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  MessagesSquare,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react"

import { cn } from "@/lib/utils"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Separator } from "@/components/ui/separator"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { TooltipProvider } from "@/components/ui/tooltip"
import { AccountSwitcher } from "@/component/account-switcher"
import { MailDisplay } from "@/component/mail-display"
import { MailList } from "@/component/mail-list"
import { Nav } from "@/component/nav"
import { type Mail } from "@/app/data"
import { useMail } from "@/app/use-mail"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"


interface MailProps {
  accounts: {
    label: string
    email: string
    icon: React.ReactNode
  }[]
  mails: Mail[]
  defaultLayout: number[] | undefined
  defaultCollapsed?: boolean
  navCollapsedSize: number
}

export function Mail({
  accounts,
  mails,
  defaultLayout = [20, 32, 48],
  defaultCollapsed = false,
  navCollapsedSize,
}: MailProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed)
  const [mail] = useMail()
  const [filteredMails, setFilteredMails] = React.useState(mails)
  const handleSubjectChange = (value: string) => {
    if (!value || value === "None") {
      setFilteredMails(mails)
      return
    }
    
    const filtered = mails.filter(mail => mail.subject === value)
    setFilteredMails(filtered)
  }

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full max-h-[600px] items-stretch"
      >
        <ResizablePanel
          defaultSize={15}
          collapsedSize={4}
          collapsible={true}
          minSize={10}
          maxSize={20}
          className={cn(
            isCollapsed &&
              "min-w-[50px] transition-all duration-300 ease-in-out"
          )}
        >
          <div
            className={cn(
              "flex h-[52px] items-center justify-center",
              isCollapsed ? "h-[52px]" : "px-2"
            )}
          >
            <AccountSwitcher isCollapsed={isCollapsed} accounts={accounts} />
          </div>
          <Separator />
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: "Inbox",
                label: "128",
                icon: Inbox,
                variant: "default",
              },
              {
                title: "Drafts",
                label: "9",
                icon: File,
                variant: "ghost",
              },
              {
                title: "Sent",
                label: "",
                icon: Send,
                variant: "ghost",
              },
              {
                title: "Junk",
                label: "23",
                icon: ArchiveX,
                variant: "ghost",
              },
              {
                title: "Trash",
                label: "",
                icon: Trash2,
                variant: "ghost",
              },
              {
                title: "Archive",
                label: "",
                icon: Archive,
                variant: "ghost",
              },
            ]}
          />
          <Separator />
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: "Social",
                label: "972",
                icon: Users2,
                variant: "ghost",
              },
              {
                title: "Updates",
                label: "342",
                icon: AlertCircle,
                variant: "ghost",
              },
              {
                title: "Forums",
                label: "128",
                icon: MessagesSquare,
                variant: "ghost",
              },
              {
                title: "Shopping",
                label: "8",
                icon: ShoppingCart,
                variant: "ghost",
              },
              {
                title: "Promotions",
                label: "21",
                icon: Archive,
                variant: "ghost",
              },
            ]}
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[1]} minSize={35}>
          <Tabs defaultValue="all">
            <div className="flex items-center px-4 py-2">
              <h1 className="text-xl font-bold">Inbox</h1>
              <TabsList className="ml-auto">
                <TabsTrigger
                  value="all"
                  className="text-zinc-600 dark:text-zinc-200"
                >
                  All mail
                </TabsTrigger>
                <TabsTrigger
                  value="unread"
                  className="text-zinc-600 dark:text-zinc-200"
                >
                  Unread
                </TabsTrigger>
              </TabsList>
            </div>
            </Tabs>
            <Separator />
            <div className="bg-background/95  p-4 backdrop-blur supports-[backdrop-filter]
            :bg-background/60">
            <Select onValueChange={handleSubjectChange}>
              <SelectTrigger className="w-[240px]">
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="None">All Applications</SelectItem>
                <SelectItem value="Data Analyst Application">
                  Data analyst application
                </SelectItem>
                <SelectItem value="UX Designer Application">
                  UI/UX designer application
                </SelectItem>
                <SelectItem value="Software Engineer Application">
                  Software engineer application
                </SelectItem>
                <SelectItem value="Project Manager Application">
                  Project manager application
                </SelectItem>
                <SelectItem value="Marketing Manager Application">
                  Marketing manager application
                </SelectItem>
              </SelectContent>
            </Select>
            </div>
            <MailList items={filteredMails} />

        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel 
          defaultSize={50} 
          minSize={30}
          className="h-[calc(100vh-120px)] max-h-[800px] min-h-[400px]"
        >
          <MailDisplay
            mail={mails.find((item) => item.id === mail.selected) || null}
           
          />
        </ResizablePanel>
      </ResizablePanelGroup>

    </TooltipProvider>
  )
}
