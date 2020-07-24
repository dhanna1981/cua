import React from 'react'
import styled from 'styled-components'
import './Search.css';

const Title = styled.h2`
  color: #fff;
  font-weight: 300;
`

const Description = styled.p`
  color: #fff;
  font-weight: 300;
`
const ActionButton = styled.button`
  margin: 0 5px;
  padding: 8px 14px;
  background: rgba(155, 155, 155, 0.2);
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
`

const Card = (props) => (
  <div className='entireCard'>
  <div style={{ color: '#fff' }} className='searchCard'>
    <Title>Choosing a Supplier has never been Easier!</Title>
    <Description>
      Let us help you make the right choice for your electric supply needs.  
      We work with multiple suppliers to get you the best rate available!
    </Description>
    <ActionButton className='cardButton'>Search by Zip Code</ActionButton>
    </div>
    </div>
    
)

export default Card