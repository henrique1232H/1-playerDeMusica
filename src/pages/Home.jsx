
import { styled } from "styled-components"

const Body = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  `

const Div = styled.div`
  height: 80vh;
  width: 70%;
  display: flex;
  gap: 2rem;

  @media (max-width: 50rem) {
    flex-direction: column;
  }

`

const Card = styled.div`
  background: linear-gradient(#4e3887, #5d4597);
  height: 100vh;
  display: flex;
  justify-content: center;
  border-radius: 3rem;
`

const Principal = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  background: linear-gradient(#4e3887, #5d4597);
  padding: 3.8rem;
  border-radius: 3rem;
`

const H1 = styled.h1`
  font-size: 4rem;
`

const Flex = styled.div`
  display:flex;
  flex-direction: column;
  width: 100%;
  row-gap: 2rem;

`

export default function Home() {




  return (
    <Body>

        <Div>
          <Principal>
            <H1>aa</H1>
          </Principal>

          <Flex>

          <Card>
            <H1>tt</H1>
          </Card>

          <Card>
            <H1>asd</H1>
          </Card>
          </Flex>
        </Div>

    </Body>
  )
}
