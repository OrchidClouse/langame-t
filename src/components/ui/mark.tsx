import React from 'react'
import SuccessIcon from '../shared/assets/svg/success'
import FailedIcon from '../shared/assets/svg/failed'

export default function Mark({success}: {success: boolean | null}) {
  return (
	<div>
		{success ? <SuccessIcon /> : <FailedIcon />}
	</div>
  )
}
