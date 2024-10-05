import React from 'react'
import Tags from './Tags'
function BadgeLine() {
  return (
    <div className='flex overflow-hidden'>
      <Tags title='All' selected={true}></Tags>
      <Tags title='JavaScript'></Tags>
      <Tags title='IELTS'></Tags>
      <Tags title='Productivity'></Tags>
      <Tags title='Music'></Tags>
      <Tags title='Skills'></Tags>
      <Tags title='Vocabulary'></Tags>
      <Tags title='Live'></Tags>
      <Tags title='Podcast'></Tags>
      <Tags title='User interface design'></Tags>
      <Tags title='Mixes'></Tags>
      <Tags title='Ideas'></Tags>
      <Tags title='Gaming'></Tags>
      <Tags title='Arabic music'></Tags>
      <Tags title='Podcast'></Tags>
    </div>
  )
}
export default BadgeLine
