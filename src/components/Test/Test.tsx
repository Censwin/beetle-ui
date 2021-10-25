import React from 'react'

type testtype = 'bbb' | 'aaa' | 'ccc'
interface ITestProps {
  /**
   * test试图圣诞节吧ghastly
   */
  type?: testtype
}

const Test: React.FC<ITestProps> = ({ type = 'aaa' }) => {
  return <span>{type}</span>
}
export default Test
