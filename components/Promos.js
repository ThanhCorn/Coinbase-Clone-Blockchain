import styled from 'styled-components'

const Promos = () => {
  return (
    <Wrapper>
        <OfferCard>
        <Title>Yield earned</Title>
        <Description>Earn up CO 2.84% APY on your crypto</Description>
        <Placeholder />
        <Additional style={{ fontSize: '1.5rem' }}>
          $0.000066 <span>2.84% APY</span>
        </Additional>
      </OfferCard>

      <OfferCard>
        <Title>Learn and Earn</Title>
        <Description>Earn up CO 2.84% APY on your crypto</Description>
        <Placeholder />
        <Additional style={{ color: '#3773f5' }}>Verify Identity</Additional>
      </OfferCard>
    </Wrapper>
  )
}

export default Promos
export const Wrapper = styled.div`
  margin-top: 2rem;
  padding-right: 1rem;
`;
export const OfferCard = styled.div`
  width: 21rem;
  height: 11rem;
  border: 1px solid #282b2f;
  margin-bottom: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 0.1rem;
`;

export const Description = styled.div`
  font-size: 1.1rem;
`;

export const Placeholder = styled.div`
  flex: 1;
`;

export const Additional = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > span {
    color: #8a919e !important;
    font-size: 1rem;
  }
`;