import React, { createContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface Props {
  children?: React.ReactNode
}
interface LinkObject {
  originalLink: string
  shortedLink: string
  uuid: string
}
export interface LinksContext {
  linkList: LinkObject[]
  addLink: (originalLink: string, shortedLink: string) => void
}

const MAX_LINKS = 5
const Context = createContext<LinksContext | null>(null)

const Provider = ({ children }: Props) => {
  const [linkList, setlinkList] = useState([] as LinkObject[])

  useEffect(() => {
    const storedLinks = JSON.parse(localStorage.getItem('linkList') || '[]')
    if (storedLinks.length > 0) {
      setlinkList(storedLinks)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('linkList', JSON.stringify(linkList))
  }, [linkList])

  const addLink = (originalLink: string, shortedLink: string) => {
    const uuid = uuidv4()
    const newObject = { originalLink, shortedLink, uuid }
    const newList = [...linkList]

    newList.unshift(newObject)
    if (newList.length > MAX_LINKS) {
      newList.pop()
    }

    setlinkList(newList)
  }

  return (
    <Context.Provider value={{ linkList, addLink }}>
      {children}
    </Context.Provider>
  )
}
export { Context, Provider }
