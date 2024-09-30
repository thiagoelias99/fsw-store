import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface FormErrorMessageProps {
  form: any
  field: any
}

export function FormErrorMessage({form, field} : FormErrorMessageProps) {

  if (!form.formState.errors[field.name]) {
    return null
  }

  return (
    <Text className='text-destructive'>
      {form.formState.errors[field.name]?.message}
    </Text>
  )
}