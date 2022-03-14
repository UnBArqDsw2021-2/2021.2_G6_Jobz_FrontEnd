import { FormControl, FormLabel, Switch } from '@chakra-ui/react'

function Notifications() {
  return (
    <FormControl
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <FormLabel
        htmlFor="notificationEmails"
        mb={0}
        cursor="pointer"
        userSelect="none"
      >
        Receber notificações no email
      </FormLabel>
      <Switch id="notificationEmails" />
    </FormControl>
  )
}

export default Notifications
