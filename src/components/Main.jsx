import { Container } from '@chakra-ui/layout'
import Content from './Content/Content'
import Sidebar from './Sidebar/Sidebar'

export default function Main() {
  return (
    <Container display={{ base: 'flex', md: 'flex' }} maxW="container.x1">
      <Sidebar />
      <Content />
    </Container>
  )
}
