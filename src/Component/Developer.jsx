import React from 'react'

const Developer = ({propName, propJob, propWage}) => {
  return (
    <div>
      My name is {propName}, i'm a {propJob}. i currently earn {propWage} per month.
    </div>
  )
}

export default Developer
