import React from 'react'

const FundraiserTemplate = ({ pageContext }) => {
  const { title } = pageContext

  return (
    <div>
      <div>
        <div>
          <h2>{title ?? ''}</h2>
        </div>
      </div>
    </div>
  )
}

export default FundraiserTemplate
