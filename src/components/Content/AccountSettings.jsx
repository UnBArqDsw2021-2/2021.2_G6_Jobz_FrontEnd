import { FormControl, FormLabel, Grid, Input } from '@chakra-ui/react'

function AccountSettings() {
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={6}
    >
      <FormControl id="firstName">
        <FormLabel>Nome</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" placeholder="Tim" />
      </FormControl>
      <FormControl id="phoneNumber">
        <FormLabel>Telefone</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="tel"
          placeholder="(408) 996–1010"
        />
      </FormControl>
      <FormControl id="emailAddress">
        <FormLabel>Email</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="email"
          placeholder="tcook@apple.com"
        />
      </FormControl>
      <br></br>
      <FormControl id="description">
        <FormLabel>Descrição</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="description"
          placeholder=""
        />
      </FormControl>
    </Grid>

  )
}

export default AccountSettings
