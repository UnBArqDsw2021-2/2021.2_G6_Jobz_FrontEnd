import { FormControl, FormLabel, Grid, Input } from '@chakra-ui/react'

function LoginSegurance() {
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={6}
    >
      <FormControl id="firstName">
        <FormLabel>Nome</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" placeholder="Tim" />
      </FormControl>
      <FormControl id="email">
        <FormLabel>Email</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" placeholder="email@unb.br" />
      </FormControl>
      <FormControl id="senha">
        <FormLabel>Senha</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" placeholder="********" />
      </FormControl>

    </Grid>

  )
}

export default LoginSegurance
