import Courses from "./Courses"

export const metadata = {
    title: 'Courses In My Library',
    description: 'Frontend 6B6 class 1 on React',
    keywords: 'React, Next, Javascript'
  }

export default function layout({children}) {
  return (
    <div>
        <Courses/>
        {children}
    </div>
  )
}